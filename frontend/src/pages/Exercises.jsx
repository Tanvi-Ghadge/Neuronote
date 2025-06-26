// /pages/ExercisePage.jsx
import React from "react";
import { Loader2 } from "lucide-react";
import HamburgerMenu from "../components/Hamburger";
import { useJournalStore } from "../store/useentrystore";

const staticExercises = [
  {
    title: "Box Breathing",
    type: "Breathing",
    description: "A calming technique to reduce stress and anxiety.",
    instructions: "Inhale 4s → Hold 4s → Exhale 4s → Hold 4s. Repeat for 5 minutes.",
    prompt: "How do you feel after doing this breathing exercise?",
  },
  {
    title: "5-4-3-2-1 Grounding",
    type: "Mindfulness",
    description: "Helps ground yourself in the present moment.",
    instructions: "Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste.",
    prompt: "What senses felt most active? What changed in your thoughts?",
  },
  {
    title: "Loving-Kindness Meditation",
    type: "Meditation",
    description: "Cultivates compassion toward yourself and others.",
    instructions: "Silently repeat: 'May I be happy, may I be safe, may I be well', then direct this to others.",
    prompt: "How did this shift your feelings toward yourself and others?",
  },
  {
    title: "Body Scan Check-in",
    type: "Mindfulness",
    description: "A gentle scan from head to toe to release physical and mental tension.",
    instructions: "Sit quietly and bring awareness to each body part from head to toe, observing without judgment.",
    prompt: "Which area held the most tension? How did you feel after noticing it?",
  },
  {
    title: "Gratitude Pause",
    type: "Reflection",
    description: "Boosts mood by focusing on small positives.",
    instructions: "Write down 3 things you're grateful for today — big or small.",
    prompt: "Which of these made you smile or feel grounded?",
  },
];

const Exercise = () => {
  const { getSuggestedExercise, suggested, isLoading } = useJournalStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 px-6 py-16 relative top-28">
      <HamburgerMenu />

      <h1 className="text-3xl font-bold text-purple-800 mb-8 text-center">
        🧘 Mindful Exercises
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {staticExercises.map((ex, i) => (
          <div
            key={i}
            className="bg-white/90 border border-purple-200 rounded-2xl shadow p-6"
          >
            <h2 className="text-xl font-semibold text-purple-700 mb-1">{ex.title}</h2>
            <p className="text-sm text-purple-500 mb-2 italic">{ex.type}</p>
            <p className="text-gray-700 mb-3">{ex.description}</p>
            <p className="text-sm text-purple-800 font-medium">Instructions:</p>
            <p className="text-sm mb-3 whitespace-pre-line">{ex.instructions}</p>
            {ex.prompt && (
              <>
                <p className="text-sm text-purple-800 font-medium">Reflect:</p>
                <p className="text-sm text-gray-700">{ex.prompt}</p>
              </>
            )}
          </div>
        ))}

        <div className="text-center mt-10">
          <button
            onClick={getSuggestedExercise}
            disabled={isLoading}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-md transition text-lg"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="animate-spin" size={18} /> Suggesting...
              </span>
            ) : (
              "💡 Suggest Exercise for Me"
            )}
          </button>
        </div>

        {suggested && (
  <div className="bg-white/90 border border-green-200 rounded-2xl shadow p-6 mt-8">
    <h2 className="text-xl font-semibold text-green-700 mb-1">{suggested.title}</h2>
    <p className="text-sm font-medium text-green-500 mb-2 italic">{suggested.type}</p>
    <p className="text-gray-700 mb-3">{suggested.description}</p>

    {suggested.instructions?.length > 0 && (
      <>
        <p className="text-sm text-green-800 font-medium">Instructions:</p>
        <ul className="list-disc list-inside text-sm mb-3 text-gray-700 space-y-1">
          {suggested.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ul>
      </>
    )}

    {suggested.prompt && (
      <>
        <p className="text-sm text-green-800 font-medium">Reflect:</p>
        <p className="text-sm text-gray-700">{suggested.prompt}</p>
      </>
    )}
  </div>
)}

      </div>
    </div>
  );
};

export default Exercise;
