import cron from "node-cron"
import { sendDailyPrompt } from "../controllers/nudge.controller.js";

// Schedule: every day at 9 PM IST
cron.schedule("0 21 * * *", async () => {
  console.log("⏰ Sending daily prompts at 9 PM...");
  await sendDailyPrompt();
},{
  timezone: "Asia/Kolkata"
});
