import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useJournalStore } from "../store/useentrystore";
import { Loader2 } from "lucide-react";
import HamburgerMenu from "../components/Hamburger";

const Prompt = () => {
  const navigate = useNavigate();
  const { getprompts, prompt, isLoading, clearPrompt } = useJournalStore();

  // 👇 Clear prompt every time this page is mounted
  useEffect(() => {
    clearPrompt();
  }, [clearPrompt]);

  const handleReflect = () => {
    clearPrompt(); // Optional, in case user clicks reflect without refreshing
    navigate("/"); // or your intended route for entry
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-purple-100 px-4 py-20">
        <HamburgerMenu/>
      <div className="max-w-3xl w-full bg-white/90 border border-purple-200 rounded-2xl shadow p-8 text-center">
        <h1 className="text-2xl font-bold text-purple-800 mb-4">💡 Your Mindful Prompt</h1>

        {isLoading ? (
          <div className="flex justify-center items-center gap-2 text-purple-600">
            <Loader2 className="animate-spin" size={20} />
            Generating prompt...
          </div>
        ) : prompt ? (
          <>
            <p className="text-lg text-gray-700 mb-6">{prompt.prompt}</p>
            <button
              onClick={handleReflect}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition shadow"
            >
              ✍️ Start Reflecting
            </button>
          </>
        ) : (
          <button
            onClick={getprompts}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition shadow"
          >
            🎯 Generate Prompt
          </button>
        )}
      </div>
    </div>
  );
};

export default Prompt;
