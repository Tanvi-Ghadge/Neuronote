// /controllers/deepgram.controller.js
import axios from "axios";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const voiceToText = async (req, res, next) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No audio file uploaded" });

    const filePath = req.file.path;
    const audio = fs.readFileSync(filePath);

    const response = await axios.post("https://api.deepgram.com/v1/listen", audio, {
      headers: {
        "Authorization": `Token ${process.env.DEEPGRAM_API_KEY}`,
        "Content-Type": "audio/mpeg" // or "audio/wav" based on your file
      }
    });

    const transcript = response.data.results.channels[0].alternatives[0].transcript;

    req.body.text = transcript;
    

    fs.unlink(filePath, () => {}); // delete audio file

    next(); // call newentry
  } catch (error) {
    console.error("Deepgram transcription error:", error.message);
    return res.status(500).json({ message: "Transcription failed" });
  }
};
