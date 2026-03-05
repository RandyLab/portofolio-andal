// src/pages/Projects/GitHubStats.tsx
import React, { useState } from "react";
import { BarChart3, TrendingUp } from "lucide-react";
import { useInViewRepeat } from "../../utils/functions";

interface GitHubStatsProps {
  stats: {
    apiUrl: string;
    streakUrl: string;
  };
}

const GitHubStats: React.FC<GitHubStatsProps> = ({ stats }) => {
  const { triggerRef, visible } = useInViewRepeat();
  const [apiError, setApiError] = useState(false);
  const [streakError, setStreakError] = useState(false);

  return (
    <div ref={triggerRef}>
      <div
        className={`bg-gray-50 rounded-2xl p-8 border border-purple-200 transition-all duration-700 shadow-md ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <BarChart3 className="w-8 h-8 text-purple-500" />
          GitHub Statistics
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Stats Card */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-semibold text-gray-900">
                Stats Overview
              </h3>
            </div>

            {!apiError ? (
              <img
                src={stats.apiUrl}
                alt="GitHub Stats"
                className="w-full rounded-lg"
                onError={() => setApiError(true)}
              />
            ) : (
              <div className="text-yellow-700 bg-yellow-100 p-4 rounded-lg text-center">
                📊 Stats temporarily unavailable
              </div>
            )}
          </div>

          {/* Streak Card */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-purple-500" />
              <h3 className="text-lg font-semibold text-gray-900">
                Contribution Streak
              </h3>
            </div>

            {!streakError ? (
              <img
                src={stats.streakUrl}
                alt="GitHub Streak"
                className="w-full rounded-lg"
                onError={() => setStreakError(true)}
              />
            ) : (
              <div className="text-yellow-700 bg-yellow-100 p-4 rounded-lg text-center">
                🔥 Streak stats temporarily unavailable
              </div>
            )}
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-6 text-center">
          *Stats include public contributions only
        </p>
      </div>
    </div>
  );
};

export default GitHubStats;
