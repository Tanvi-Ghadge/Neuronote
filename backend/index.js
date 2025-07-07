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
const allowedOrigins = [
  "https://neuronote-two.vercel.app",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed for origin: " + origin));
      }
    },
    credentials: true,
  })
);

app.options("*", cors());

app.use("/api/auth",authrouter)
app.use("/api/entry",entryrouter)
app.use("/api/nudge",router)
app.get("/api/ping", (req, res) => {
  res.send("cron-js");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectdb();
});
