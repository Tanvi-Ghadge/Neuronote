// /pages/ChartPage.jsx
import React, { useEffect } from "react";
import { useJournalStore } from "../store/useentrystore";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Loader2 } from "lucide-react";
import HamburgerMenu from "../components/Hamburger";

ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Chart = () => {
  const { getChartData, chartData, isLoading } = useJournalStore();

  useEffect(() => {
    getChartData();
  }, []);

  if (isLoading || !chartData) {
    return (
        // 
      <div className="min-h-screen flex items-center justify-center ">
        {/* <HamburgerMenu/> */}
        <Loader2 className="animate-spin text-purple-600" size={28} />
      </div>
    );
  }

  // Format dates
  const labels = chartData.createdAt.map((dateStr) =>
    new Date(dateStr).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    })
  );

  // Chart configs
  const sentimentData = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        data: [chartData.pos, chartData.neu, chartData.neg],
        backgroundColor: ["#86efac", "#fcd34d", "#fda4af"],
        borderWidth: 1,
      },
    ],
  };

  const entriesPerDay = {
    labels,
    datasets: [
      {
        label: "Entries",
        data: chartData.createdAt.map(() => 1),
        backgroundColor: "#a78bfa",
      },
    ],
  };

  const avgScoreTrend = {
  labels: chartData.createdAt.map((dateStr) =>
    new Date(dateStr).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    })
  ),
  datasets: [
    {
      label: "Score",
      data: chartData.score.map((s) => parseFloat(s.toFixed(2))),
      fill: true,
      borderColor: "#7c3aed",
      backgroundColor: "rgba(124, 58, 237, 0.2)", // translucent purple
      tension: 0.3,
      pointRadius: 3,
      pointHoverRadius: 5,
    },
  ],
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 px-6 py-16 relative top-28">
        <HamburgerMenu/>
      <h1 className="text-3xl font-bold text-center text-purple-800 mb-10 top-28">
        📊 Your Emotional Insights
      </h1>

      <div className="grid gap-12 max-w-3xl mx-auto">
        {/* Sentiment Chart */}
        <div className="bg-white/90 rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">Sentiment Distribution</h2>
          <Doughnut data={sentimentData} />
        </div>

        {/* Entries Timeline */}
        <div className="bg-white/90 rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">Entries Over Time</h2>
          <Bar data={entriesPerDay} />
        </div>

        {/* Score Over Time */}
        <div className="bg-white/90 rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">Emotional Score Trend</h2>
          <Line data={avgScoreTrend} />
        </div>
      </div>
    </div>
  );
};

export default Chart;
