// /pages/WeeklySummary.jsx
import React, { useEffect } from "react";
import { useJournalStore } from "../store/useentrystore";
import HamburgerMenu from "../components/Hamburger";
import { Loader2 } from "lucide-react";

const WeeklySummary = () => {
  const { getweeklysummary, summary, isLoading, error } = useJournalStore();

  useEffect(() => {
    getweeklysummary();
  }, [getweeklysummary]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 px-6 py-12 relative top-25">
      <HamburgerMenu />

      <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">
        🗓️ Weekly Summary
      </h1>

      {isLoading ? (
        <p className="text-center text-purple-500 flex justify-center items-center gap-2">
          <Loader2 className="animate-spin" size={20} /> Loading summary...
        </p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : summary ? (
        <div className="max-w-3xl mx-auto bg-white/90 border border-purple-200 rounded-xl shadow p-6 whitespace-pre-line text-purple-800 text-lg">
          {summary.summary}
        </div>
      ) : (
        <p className="text-center text-gray-500">No summary available.</p>
      )}
    </div>
  );
};

export default WeeklySummary;
