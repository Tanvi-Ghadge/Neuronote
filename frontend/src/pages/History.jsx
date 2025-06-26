// /pages/HistoryPage.jsx
import React, { useEffect, useState } from "react";
import { useJournalStore } from "../store/useentrystore";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import HamburgerMenu from "../components/Hamburger.jsx";

const sentimentMap = {
  Positive: { emoji: "💜", label: "Uplifting" },
  Neutral: { emoji: "🌿", label: "Calm" },
  Negative: { emoji: "🌧️", label: "Tough Day" },
};

const History = () => {
  const { entries, getHistory, isLoading } = useJournalStore();
  const [menuOpen, setMenuOpen] = useState(false); // ✅ moved inside component

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 px-6 py-12 relative top-25">
      {/* Hamburger Menu */}
      <HamburgerMenu/>
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">
        📘 My Journal History
      </h1>

      {/* Journal Entries */}
      {isLoading ? (
        <p className="text-center text-purple-500">Loading entries...</p>
      ) : entries.length === 0 ? (
        <p className="text-center text-gray-500">
          No entries yet. Start writing something today! ✨
        </p>
      ) : (
        <div className="space-y-6 max-w-3xl mx-auto">
          {entries.map((entry) => {
            const { emoji, label } = sentimentMap[entry.sentiment] || {};
            return (
              <div
                key={entry._id}
                className="bg-white/90 border border-purple-200 rounded-xl shadow p-5"
              >
                <div className="text-sm text-gray-500 mb-2">
                  {new Date(entry.createdAt).toLocaleString()}
                </div>
                <p className="text-lg text-purple-800 whitespace-pre-line mb-3">
                  {entry.text}
                </p>
                {emoji && (
                  <div className="text-sm text-purple-600">
                    {emoji} <span className="font-medium">{label}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default History;
