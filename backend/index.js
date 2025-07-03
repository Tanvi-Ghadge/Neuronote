import express from "express";
import dotenv from "dotenv";
import connectdb from "./lib/db.js";
import authrouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import entryrouter from "./routes/entry.route.js";
import router from "./routes/nudge.route.js";
import './lib/cron.js'
import cors from 'cors'
dotenv.config();


const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth",authrouter)
app.use("/api/entry",entryrouter)
app.use("/api",router)
app.get("/api/ping", (req, res) => {
  res.send("cron-js");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectdb();
});
