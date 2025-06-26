
import cohere from "cohere-ai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });


const co = new cohere.CohereClientV2(process.env.CO_API_KEY);

// Generate emotional response + sentiment + score
export async function generateresponse(text) {
  try {
    const prompt = `
You are an emotionally supportive AI journal companion.

Analyze the following journal entry and return a JSON with:
{
  "sentiment": "Positive" | "Neutral" | "Negative",
  "score": float between -1 and 1,
  "response": "A short, calm, caring message under 60 words."
}

Journal Entry:
"""${text}"""

Respond only in valid JSON:
`;

    const response = await co.chat({
      model: "command-r-plus",
      messages: [{ role: "user", content: prompt }],
    });

    return response.message.content[0].text.trim();
  } catch (error) {
    console.error("Cohere generateresponse error:", error);
    return null;
  }
}

// Generate weekly summary
export async function generateweeklysummary(texts) {
  try {
    const prompt = `
You are a caring journal assistant.

Summarize the emotional tone of the following journal entries into a soft, validating weekly reflection. No listing, just an empathetic summary in 3–4 sentences. Be calm and kind.

Entries:
"""${texts}"""

Now write the weekly emotional summary:
`;

    const response = await co.chat({
      model: "command-r-plus",
      messages: [{ role: "user", content: prompt }],
    });

    return response.message.content[0].text.trim();
  } catch (error) {
    console.error("Cohere weeklysummary error:", error);
    return null;
  }
}

// Generate personalized journaling prompt
export async function generateprompts(texts) {
  try {
    const prompt = `
You are a gentle journaling assistant.

Generate a single personalized reflective prompt based on the tone and themes in the following journal entries. The prompt must:
- Be empathetic
- Be kind and non-judgmental
- Ask just one thoughtful question
- Not reference the journal directly

Entries:
"""${texts}"""

Now write the prompt:
`;

    const response = await co.chat({
      model: "command-r-plus",
      messages: [{ role: "user", content: prompt }],
    });

    return response.message.content[0].text.trim();
  } catch (error) {
    console.error("Cohere generateprompts error:", error);
    return null;
  }
}

// Generate mindfulness exercise
export async function getexercises(texts) {
  try {
    const prompt = `
You are a mental wellness AI trained in mindfulness and CBT.

Based on the following journal entry, suggest a self-guided therapeutic exercise in this JSON format only:

{
  "title": "string",
  "type": "string",
  "description": "string",
  "instructions": [
    "step 1...",
    "step 2...",
    "step 3..."
  ],
  "prompt": "string"
}

Journal Entry:
"""${texts}"""

Return only raw JSON with no extra text.
`;

    const response = await co.chat({
      model: "command-r-plus",
      messages: [{ role: "user", content: prompt }],
    });

    return response.message.content[0].text.trim();
  } catch (error) {
    console.error("Cohere getexercises error:", error);
    return null;
  }
}
