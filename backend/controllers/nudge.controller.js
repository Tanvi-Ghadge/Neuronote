import User from "../models/user.model.js";
import Entry from "../models/entry.model.js";
import { sendMail } from "../lib/mailer.js";
import moment from 'moment'

export const sendDailyPrompt = async () => {
  try {
    const users = await User.find();

    const todayStart = moment().startOf('day').toDate();
    const todayEnd = moment().endOf('day').toDate();

    for (const user of users) {
      const entry = await Entry.findOne({
        user: user._id,
        createdAt: { $gte: todayStart, $lte: todayEnd },
      });

      if (!entry) {
        const prompt = '🪞 How was your day today? Reflect with NeuroNote.';
        const html = `
          <p>Hi ${user.name || 'there'},</p>
          <p>NeuroNote is here to guide your daily reflection.</p>
          <blockquote><b>${prompt}</b></blockquote>
          <p><a href="https://your-frontend-url.com">Write your thoughts now</a></p>
        `;

        await sendMail(user.email, 'Your Daily Reflection Reminder', html);
        console.log(`📧 Prompt sent to ${user.email}`);
      }
    }
  } catch (err) {
    console.error('❌ Error sending daily prompts:', err.message);
  }
};
