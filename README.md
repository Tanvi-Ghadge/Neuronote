# NeuroNote

**NeuroNote** is a calming, AI-powered journaling platform designed to help users reflect, regulate emotions, and track their mental well-being through expressive writing, mood insights, and therapeutic exercises.

**Live App:** [https://neuronote-two.vercel.app](https://neuronote-two.vercel.app)

---

## Features

**Explore NeuroNote**  
- **Start Journaling** – Write or record daily thoughts  
- **My Journal Journey** – Revisit your personal entries  
- **Gentle Writing Prompt** – Receive AI-generated prompts to support reflection  
- **Mood Insights** – Track your emotional trends over time  
- **Weekly Reflection** – Summarized overview of your week’s emotional patterns  
- **Mindful Exercises** – Therapist-informed exercises to help you ground, reflect, and grow  

**Additional Capabilities**  
- **Audio Entry Support** – Voice-to-text transcription using Deepgram  
- **AI-Powered Prompts & Reflections** – Personalized with Cohere’s natural language capabilities tailored to user's past entries
- **Daily Journaling Reminder** – Email reminder sent at 9:00 PM IST via scheduled cron job

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Zustand  
- **Backend:** Node.js, Express, MongoDB  
- **APIs:**  
  - **Cohere API** – For AI-generated prompts, reflections, and exercises  
  - **Deepgram API** – For audio transcription  
- **Deployment:**  
  - Frontend: Vercel  
  - Backend: Render  
  - Monitoring & Cron: UptimeRobot and Node-Cron

---

## Getting Started (for Development)

```bash
git clone https://github.com/your-username/neuronote.git
cd neuronote
npm install
npm run dev
```

Create a `.env` file in your backend with:

```env
COHERE_API_KEY=your_cohere_key
DEEPGRAM_API_KEY=your_deepgram_key

```

---

## About

NeuroNote is designed as a safe space to help you slow down, tune into your emotions, and build emotional clarity — one entry at a time. Whether through writing or voice, it supports your mental wellness with thoughtful design and intelligent features.
