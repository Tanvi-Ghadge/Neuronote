import express from 'express';
import { sendDailyPrompt } from '../controllers/nudge.controller.js';

const router = express.Router();


router.get('/testnudge', async (req, res) => {
  try {
    await sendDailyPrompt();
    res.status(200).json({ message: 'Nudge emails sent (test mode)' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
