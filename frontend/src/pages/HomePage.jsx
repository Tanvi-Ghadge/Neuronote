import React, { useRef, useState } from "react";
import { useJournalStore } from "../store/useentrystore";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import HamburgerMenu from "../components/Hamburger";

const HomePage = () => {
  const [text, setText] = useState("");
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioURL, setAudioURL] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const { submitTextEntry, submitAudioEntry, isLoading, error } = useJournalStore();

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    audioChunksRef.current = [];

    mediaRecorderRef.current.ondataavailable = (e) => {
      if (e.data.size > 0) audioChunksRef.current.push(e.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
      setAudioBlob(blob);
      setAudioURL(URL.createObjectURL(blob));
    };

    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  const handleTextSubmit = async () => {
    const success = await submitTextEntry(text);
    if (success) setText("");
  };

  const handleAudioSubmit = async () => {
    const success = await submitAudioEntry(audioBlob);
    if (success) {
      setAudioBlob(null);
      setAudioURL(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-purple-200 pt-24 px-6 relative">
      <HamburgerMenu/>

      {/* Journal Entry Box */}
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-purple-800 text-center">
          Hi there, how are you feeling today?
        </h1>

        <textarea
          rows="8"
          className="w-full p-6 text-lg rounded-2xl shadow-md bg-white/90 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none transition"
          placeholder="Dear Diary, today I feel..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={handleTextSubmit}
          disabled={isLoading}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg shadow-md transition w-full disabled:opacity-50"
        >
          {isLoading ? "Saving..." : "Save Text Entry"}
        </button>

        {/* Audio Section */}
        <div className="pt-8">
          <h3 className="text-xl font-semibold text-purple-800 mb-2">
            🎙️ Or record your thoughts
          </h3>
          <div className="flex items-center gap-4">
            {!recording ? (
              <button
                onClick={startRecording}
                className="bg-green-500 text-white px-5 py-2 rounded-full"
              >
                Start Recording
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="bg-red-500 text-white px-5 py-2 rounded-full"
              >
                Stop Recording
              </button>
            )}
            {recording && (
              <span className="text-red-600 font-medium">Recording...</span>
            )}
          </div>

          {audioURL && (
            <div className="mt-4">
              <audio controls src={audioURL} className="w-full" />
              <button
                onClick={handleAudioSubmit}
                disabled={isLoading}
                className="mt-3 bg-purple-600 text-white px-6 py-2 rounded-full w-full hover:bg-purple-700 disabled:opacity-50"
              >
                {isLoading ? "Submitting..." : "Submit Audio Entry"}
              </button>
            </div>
          )}
        </div>

        {error && <p className="text-red-600 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default HomePage;
