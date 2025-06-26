import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-toastify";

export const useJournalStore = create((set) => ({
  isLoading: false,
  error: null,
  entries: [],
  suggested: null,
  summary: null,
  prompt: null,
  chartData: null,
  baseresponse: null,

  // 📝 Submit Text Entry
  submitTextEntry: async (text) => {
    set({ isLoading: true, error: null });

    if (!text || text.trim().length === 0) {
      toast.error("Please write something first! 📝");
      set({ isLoading: false });
      return false;
    }

    try {
      const { data } = await axiosInstance.post("/entry/newentry", { text });
      set({ baseresponse: data });
      toast.success(
        `📖 ${data.message}
        \n🧠 Sentiment: ${
          data.sentiment
        }\n📊 Score: ${data.score.toFixed(2)}`,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className:
            "bg-white/90 border border-purple-300 shadow-lg rounded-xl text-gray-800 text-center whitespace-pre-line w-2/3",
        }
      );
      console.log(data);
      set({ isLoading: false });
      return true;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      toast.error("Failed to submit text entry 💔", {
        icon: "⚠️",
      });
      set({ isLoading: false, error: message });
      return false;
    }
  },

  // 🎙️ Submit Audio Entry
  submitAudioEntry: async (audioBlob) => {
    set({ isLoading: true, error: null });

    if (!audioBlob) {
      toast.error("Please record something first! 🎙️");
      set({ isLoading: false });
      return false;
    }

    const formData = new FormData();
    formData.append("audio", audioBlob, "entry.webm");
    // formData.append("text", "audio-upload");

    try {
      const { data } = await axiosInstance.post("/entry/audio", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Audio entry submitted successfully 💜", {
        icon: "🔊",
      });
      console.log(data);
      set({ isLoading: false });
      return true;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      toast.error("Failed to submit empty audio entry 💔", {
        icon: "⚠️",
      });
      set({ isLoading: false, error: message });
      return false;
    }
  },
  getHistory: async () => {
    set({ isLoading: true, error: null });

    try {
      const { data } = await axiosInstance.get("/entry/getentries"); // Update route if needed
      set({ entries: data || [], isLoading: false });
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      toast.error("Failed to fetch journal history 📓");
      set({ isLoading: false, error: message });
    }
  },
  getSuggestedExercise: async () => {
    set({ isLoading: true, error: null });

    try {
      const { data } = await axiosInstance.get("/entry/getaiexercise");

      set({ suggested: data, isLoading: false });
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      set({ isLoading: false, error: message });
      toast.error("Failed to fetch suggested exercise 💔");
    }
  },
  getweeklysummary: async () => {
    set({ isLoading: true, error: null });

    try {
      const { data } = await axiosInstance.get("/entry/weeklysummary");

      set({ summary: data, isLoading: false });
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      set({ isLoading: false, error: message });
      toast.error("Failed to generate summary 💔");
    }
  },
  getprompts: async () => {
    set({ isLoading: true, error: null });

    try {
      const { data } = await axiosInstance.get("/entry/getprompt");

      set({ prompt: data, isLoading: false });
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      set({ isLoading: false, error: message });
      toast.error("Failed to generate prompt 💔");
    }
  },
  clearPrompt: () => set({ prompt: null }),
  getChartData: async () => {
    set({ isLoading: true, error: null });

    try {
      const { data } = await axiosInstance.get("/entry/chartdata");

      set({ chartData: data, isLoading: false });
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      set({ isLoading: false, error: message });
      toast.error("Failed to generate charts💔");
    }
  },
}));
