import express from "express"
import { getentries, chartdata, newentry, weeklySummary, getprompt,  getexercise } from "../controllers/entry.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js"
import { voiceToText } from "../controllers/deepgram.controller.js"
import multer from "multer"
const entryrouter=express.Router()
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("audio/")) {
      cb(null, true);
    } else {
      cb(new Error("Only audio files are allowed"), false);
    }
  },
});
entryrouter.post("/newentry",protectRoute,newentry)
entryrouter.get("/getentries",protectRoute,getentries)
entryrouter.get("/chartdata",protectRoute,chartdata)
entryrouter.get("/weeklysummary",protectRoute,weeklySummary)
entryrouter.get("/getprompt",protectRoute,getprompt)

entryrouter.get("/getaiexercise",protectRoute,getexercise)
entryrouter.post("/audio",protectRoute,upload.single("audio"),voiceToText,newentry)

export default entryrouter