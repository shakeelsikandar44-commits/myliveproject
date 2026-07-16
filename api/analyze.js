// Vercel Serverless Function (Node.js runtime): POST /api/analyze
//
// Note: this used to run on the Edge runtime. It's been switched to the
// standard Node.js runtime because the Edge version was failing instantly
// (~200ms, zero outgoing requests) with an opaque platform-level 502 and no
// console output to explain why. The Node.js runtime gives us reliable
// console.log/error output in Vercel's Function Logs and a simpler,
// well-tested request/response model, which makes this much easier to
// debug if something still goes wrong.
//
// REQUIRED SETUP (Vercel dashboard):
//   Project -> Settings -> Environment Variables -> GEMINI_API_KEY
//   must be enabled for the "Production" environment (not just Preview).
//   Redeploy after adding/changing it.

const GEMINI_MODEL = 'gemini-2.5-flash';

const ANALYSIS_SCHEMA = {
  type: 'object',
  properties: {
    summary: { type: 'string' },
    totalAmount: { type: 'string' },
    lineItems: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          code: { type: 'string' },
          description: { type: 'string' },
          amount: { type: 'string' },
          status: { type: 'string', enum: ['verified', 'potential-error', 'review'] },
        },
        required: ['code', 'description', 'amount', 'status'],
      },
    },
    recommendations: { type: 'array', items: { type: 'string' } },
    potentialSavings: { type: 'string' },
  },
  required: ['summary', 'totalAmount', 'lineItems', 'recommendations', 'potentialSavings'],
};

const SUPPORTED_IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);

const PROMPT = `You are a medical billing expert. Carefully read the attached medical bill image/document and extract ONLY the information that is actually visible and legible in it.

CRITICAL RULES:
- Do NOT invent, guess, or fabricate any hospital names, patient names, amounts, codes, or line items that are not clearly visible in the image.
- If the image is blank, too blurry, too low-resolution, or the text is not legible enough to extract real data, you MUST say so explicitly in the "summary" field (e.g. "The uploaded image is too unclear to read the bill details.") and return an empty "lineItems" array and "totalAmount": "Unknown".
- Every amount, code, and description in your response must come directly from what you can actually read in the image — never estimate or make up plausible-sounding numbers.
- Flag likely duplicate charges, unbundled charges that should be billed together, and amounts that look unusually high, but be conservative: only mark "potential-error" when there's a real reason to, otherwise use "review" or "verified".`;

export default async function handler(req, res) {
  console.log('[analyze] invoked, method =', req.method);

  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    console.log('[analyze] GEMINI_API_KEY present:', Boolean(apiKey), 'length:', apiKey ? apiKey.length : 0);

    if (!apiKey) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY is not set in the environment (check Vercel → Settings → Environment Variables → Production).',
      });
    }

    const { fileData, mimeType } = req.body || {};
    console.log('[analyze] mimeType:', mimeType, 'fileData length:', fileData ? fileData.length : 0);

    if (!fileData || !mimeType) {
      return res.status(400).json({ error: 'Missing file data or file type.' });
    }

    if (
      mimeType === 'application/msword' ||
      mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      return res.status(415).json({
        error:
          "Word documents aren't supported yet. Please export/print your bill as a PDF, or upload a photo/screenshot, and try again.",
      });
    }

    const isPdf = mimeType === 'application/pdf';
    const isImage = SUPPORTED_IMAGE_TYPES.has(mimeType);

    if (!isPdf && !isImage) {
      return res.status(415).json({ error: 'Unsupported file type. Please upload a PDF, JPG, PNG, or WEBP.' });
    }

    if (fileData.length > 15 * 1024 * 1024) {
      return res.status(413).json({
        error: 'That file is too large. Please upload a file under 10MB (try a lower-resolution photo or a smaller PDF).',
      });
    }

    console.log('[analyze] calling Gemini API with model', GEMINI_MODEL, '...');

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: PROMPT },
                { inline_data: { mime_type: mimeType, data: fileData } },
              ],
            },
          ],
          generationConfig: {
            responseMimeType: 'application/json',
            responseSchema: ANALYSIS_SCHEMA,
            temperature: 0,
          },
        }),
      }
    );

    console.log('[analyze] Gemini responded with status', geminiRes.status);

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error('[analyze] Gemini API error body:', errText);

      if (geminiRes.status === 429) {
        return res.status(429).json({ error: "We're getting a lot of requests right now. Please try again in a minute." });
      }

      return res.status(502).json({
        error: 'The analysis service had a problem reading your bill. Please try again.',
        details: errText.slice(0, 500),
      });
    }

    const data = await geminiRes.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      console.error('[analyze] No text in Gemini response:', JSON.stringify(data).slice(0, 1000));
      return res.status(502).json({ error: "Couldn't read that bill clearly. Please try a clearer photo or scan." });
    }

    let result;
    try {
      result = JSON.parse(text);
    } catch (parseErr) {
      console.error('[analyze] Failed to parse Gemini text as JSON:', text.slice(0, 1000));
      return res.status(502).json({ error: "Couldn't read that bill clearly. Please try a clearer photo or scan." });
    }

    console.log('[analyze] success');
    return res.status(200).json(result);
  } catch (err) {
    console.error('[analyze] UNHANDLED ERROR:', err instanceof Error ? err.stack : err);
    return res.status(500).json({
      error: 'Something went wrong while analyzing your bill. Please try again.',
      details: err instanceof Error ? err.message : String(err),
    });
  }
}
