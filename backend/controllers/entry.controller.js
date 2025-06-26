
import Entry from "../models/entry.model.js";
import {
  generateprompts,
  generateresponse,
  generateweeklysummary,
  getexercises,
} from "../lib/cohere.js";


export const newentry = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ message: "Text field is required" });
    }

    // Call cohere to generate sentiment, score, and response message
    const aiResponse = await generateresponse(text);
    if (!aiResponse) {
      return res.status(500).json({ message: "Failed to generate AI response" });
    }
    let cleaned = aiResponse.trim();

// Remove ```json or ``` and trailing ```
if (cleaned.startsWith("```")) {
  cleaned = cleaned.replace(/^```json|^```/, "").replace(/```$/, "").trim();
}
    // Safely parse AI response JSON
    let parsed;
    try {
      parsed = JSON.parse(cleaned); // assumes the API returns a JSON string
    } catch (err) {
      console.error("Parsing error:", err);
      return res.status(500).json({ message: "AI response format invalid" });
    }

    const { score, sentiment, response } = parsed;

    // Create new journal entry
    const newentry = new Entry({
      userId: req.user._id,
      text,
      score,
      sentiment,
      airesponse: response
    });

    await newentry.save();

    return res.status(201).json({
      _id: newentry._id,
      text: newentry.text,
      score: newentry.score,
      sentiment: newentry.sentiment,
      message: newentry.airesponse,
      userId: newentry.userId
    });
  } catch (error) {
    console.error("Error in newentry:", error);
    return res.status(500).json({ message: "Something went wrong in newentry" });
  }
};

export const getentries = async (req, res) => {
  try {
    const entries = await Entry.find({ userId: req.user._id }).sort({
      createdAt: -1,
    });
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong in getentries" });
  }
};
export const chartdata = async (req, res) => {
  try {
    const entry = await Entry.find({ userId: req.user._id }).select(
      "sentiment score createdAt"
    );

    let pos = 0,
      neg = 0,
      neu = 0,
      total = 0
      // totalscore = 0;
    let createdAt = [];
    let score=[];
    for (let index = 0; index < entry.length; index++) {
      // totalscore = totalscore + entry[index].score;
      createdAt[index] = entry[index].createdAt;
      score[index] = entry[index].score;
      if (entry[index].sentiment == "Positive") {
        pos += 1;
      } else if (entry[index].sentiment == "Negative") {
        neg += 1;
      } else {
        neu += 1;
      }
    }
    total = pos + neg + neu;
    // let avgscore = totalscore / total;

    return res.status(200).json({
      pos,
      neg,
      neu,
      total,
      // totalscore,
      // avgscore,
      score,
      createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong in get summary" });
  }
};
export const weeklySummary = async (req, res) => {
  try {
    const entries = await Entry.find({ userId: req.user._id })
      .sort({ createdAt: -1 })
      .limit(7);

    const texts = entries.map((entry) => entry.text).join("\n");

    const summary = await generateweeklysummary(texts);

    return res.status(200).json({ summary });
  } catch (error) {
    console.log(error);
    console.error("weekly summary error:", error.message);
    res.status(500).json({ message: "Something went wrong." });
  }
};
export const getprompt = async (req, res) => {
  try {
    const entries = await Entry.find({ userId: req.user._id })
      .sort({ createdAt: -1 })
      .limit(4);

    const texts = entries.map((entry) => entry.text).join("\n");

    const prompt = await generateprompts(texts);
    if (!prompt) {
      return res
        .status(500)
        .json({ message: "failed to generate  response message" });
    }
    return res.status(200).json({ prompt });
  } catch (error) {
    console.log(error);
    console.error("weekly summary error:", error.message);
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const getexercise = async (req, res) => {
  try {
    const entries = await Entry.find({ userId: req.user._id })
      .sort({ createdAt: -1 })
      .limit(4);

    const texts = entries.map((entry) => entry.text).join("\n");

    const rawResponse = await getexercises(texts);

    if (!rawResponse) {
      return res
        .status(500)
        .json({ message: "Failed to generate exercise" });
    }

    // 🧠 Safely extract and parse the JSON part from cohere's response
    const jsonStart = rawResponse.indexOf("{");
    const jsonEnd = rawResponse.lastIndexOf("}") + 1;

    if (jsonStart === -1 || jsonEnd === -1) {
      return res.status(500).json({ message: "Malformed Cohere response" });
    }

    const jsonText = rawResponse.slice(jsonStart, jsonEnd);
    const parsed = JSON.parse(jsonText);

    return res.status(200).json(parsed); // 👈 Send parsed clean JSON
  } catch (error) {
    console.log("Error in exercise api:", error.message);
    return res.status(500).json({ message: "Error in exercise api" });
  }
};
