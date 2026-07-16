export const config = { runtime: 'edge' };

// Uses gemini-2.5-flash — a stable, generally-available model with a free
// tier (no credit card needed). The previous version of this file pointed
// at "gemini-3.5-flash", which does not exist, so every request was
// failing with a 404 from Google's API.
const GEMINI_MODEL = 'gemini-2.5-flash';

// Guarantees the model's JSON response matches this exact shape instead of
// relying on the prompt alone (which can drift or get ignored).
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

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'GEMINI_API_KEY is not set in the environment' }),
      { status: 500 }
    );
  }

  let fileData: string | undefined;
  let mimeType: string | undefined;

  try {
    const body = await req.json();
    fileData = body?.fileData;
    mimeType = body?.mimeType;
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });
  }

  if (!fileData || !mimeType) {
    return new Response(JSON.stringify({ error: 'Missing file data or file type.' }), {
      status: 400,
    });
  }

  if (
    mimeType === 'application/msword' ||
    mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ) {
    return new Response(
      JSON.stringify({
        error:
          "Word documents aren't supported yet. Please export/print your bill as a PDF, or upload a photo/screenshot, and try again.",
      }),
      { status: 415 }
    );
  }

  const isPdf = mimeType === 'application/pdf';
  const isImage = SUPPORTED_IMAGE_TYPES.has(mimeType);

  if (!isPdf && !isImage) {
    return new Response(
      JSON.stringify({ error: 'Unsupported file type. Please upload a PDF, JPG, PNG, or WEBP.' }),
      { status: 415 }
    );
  }

  // ~15MB of base64 is roughly an 11MB original file — keep well under
  // Vercel's request body limit.
  if (fileData.length > 15 * 1024 * 1024) {
    return new Response(
      JSON.stringify({
        error:
          'That file is too large. Please upload a file under 10MB (try a lower-resolution photo or a smaller PDF).',
      }),
      { status: 413 }
    );
  }

  const prompt = `You are a medical billing expert. Carefully read the attached medical bill image/document and extract ONLY the information that is actually visible and legible in it.

CRITICAL RULES:
- Do NOT invent, guess, or fabricate any hospital names, patient names, amounts, codes, or line items that are not clearly visible in the image.
- If the image is blank, too blurry, too low-resolution, or the text is not legible enough to extract real data, you MUST say so explicitly in the "summary" field (e.g. "The uploaded image is too unclear to read the bill details.") and return an empty "lineItems" array and "totalAmount": "Unknown".
- Every amount, code, and description in your response must come directly from what you can actually read in the image — never estimate or make up plausible-sounding numbers.
- Flag likely duplicate charges, unbundled charges that should be billed together, and amounts that look unusually high, but be conservative: only mark "potential-error" when there's a real reason to, otherwise use "review" or "verified".`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: prompt },
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

    if (!response.ok) {
      const errText = await response.text();
      console.error('[analyze] Gemini API error body:', errText);

      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "We're getting a lot of requests right now. Please try again in a minute." }),
          { status: 429 }
        );
      }

      return new Response(
        JSON.stringify({ error: 'The analysis service had a problem reading your bill. Please try again.' }),
        { status: 502 }
      );
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      console.error('[analyze] No text in Gemini response:', JSON.stringify(data));
      return new Response(
        JSON.stringify({ error: "Couldn't read that bill clearly. Please try a clearer photo or scan." }),
        { status: 502 }
      );
    }

    let result;
    try {
      result = JSON.parse(text);
    } catch (parseErr) {
      console.error('[analyze] Failed to parse Gemini text as JSON:', text);
      return new Response(
        JSON.stringify({ error: "Couldn't read that bill clearly. Please try a clearer photo or scan." }),
        { status: 502 }
      );
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[analyze] Unhandled error:', err instanceof Error ? err.stack : err);
    return new Response(
      JSON.stringify({ error: 'Something went wrong while analyzing your bill. Please try again.' }),
      { status: 500 }
    );
  }
}
