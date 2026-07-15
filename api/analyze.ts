export const config = { runtime: 'edge' };

export default async function handler(req: Request) {
  console.log('[analyze] handler invoked', { method: req.method });

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  try {
    const body = await req.json();
    const { fileData, mimeType } = body;
    console.log('[analyze] parsed request body', {
      mimeType,
      fileDataLength: fileData ? fileData.length : 0,
    });

    const apiKey = process.env.GEMINI_API_KEY;
    console.log('[analyze] apiKey present:', Boolean(apiKey));

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'GEMINI_API_KEY is not set in the environment' }),
        { status: 500 }
      );
    }

    const prompt = `You are a medical billing expert. Analyze this medical bill image/document and return ONLY a valid JSON object (no markdown, no backticks, no extra text) matching exactly this structure:
{
  "summary": "string - 2-3 sentence summary of the bill",
  "totalAmount": "string - e.g. $1234.56",
  "lineItems": [
    { "code": "string - CPT/ICD code or N/A", "description": "string", "amount": "string", "status": "verified" | "potential-error" | "review" }
  ],
  "recommendations": ["string", "string"],
  "potentialSavings": "string - e.g. $100 - $200"
}
If the file is blank or unreadable, return a summary explaining that clearly and an empty lineItems array.`;

    console.log('[analyze] calling Gemini API...');
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
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
          generationConfig: { responseMimeType: 'application/json' },
        }),
      }
    );

    console.log('[analyze] Gemini response status:', response.status);

    if (!response.ok) {
      const errText = await response.text();
      console.error('[analyze] Gemini API error body:', errText);
      return new Response(
        JSON.stringify({ error: 'Gemini API request failed', details: errText }),
        { status: 502 }
      );
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      console.error('[analyze] No text in Gemini response:', JSON.stringify(data));
      return new Response(JSON.stringify({ error: 'No response from AI' }), { status: 502 });
    }

    let result;
    try {
      result = JSON.parse(text);
    } catch (parseErr) {
      console.error('[analyze] Failed to parse Gemini text as JSON:', text);
      return new Response(
        JSON.stringify({ error: 'AI returned invalid JSON', details: String(parseErr) }),
        { status: 502 }
      );
    }

    console.log('[analyze] success');
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[analyze] Unhandled error:', err instanceof Error ? err.stack : err);
    return new Response(
      JSON.stringify({ error: 'Analysis failed', details: String(err) }),
      { status: 500 }
    );
  }
}
