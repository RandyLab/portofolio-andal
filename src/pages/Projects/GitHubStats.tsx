// src/pages/Projects/GitHubStats.tsx
import React, { useState } from "react";
import { BarChart3, TrendingUp, AlertCircle } from "lucide-react";
import { profileData } from "../../data/profileData";

const GitHubStats: React.FC = () => {
	const [apiError, setApiError] = useState(false);
	const [streakError, setStreakError] = useState(false);

	const handleImageError = (type: "api" | "streak") => {
		if (type === "api") setApiError(true);
		if (type === "streak") setStreakError(true);
	};

	return (
		<section className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 mt-8">
			<div className="flex items-center gap-3 mb-6">
				<BarChart3 className="w-8 h-8 text-purple-400" />
				<h3 className="text-2xl font-bold text-white">
					GitHub Statistics
				</h3>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="bg-gray-800/50 rounded-xl p-4">
					<div className="flex items-center gap-2 mb-3">
						<TrendingUp className="w-5 h-5 text-green-400" />
						<h4 className="text-lg font-semibold text-white">
							Stats Overview
						</h4>
					</div>

					{apiError ? (
						<div className="flex items-center gap-2 text-yellow-400 bg-yellow-400/10 p-4 rounded-lg">
							<AlertCircle className="w-5 h-5" />
							<p className="text-sm">
								Stats temporarily unavailable
							</p>
						</div>
					) : (
						<img
							src={profileData.githubStats.apiUrl}
							alt="GitHub Stats"
							className="w-full rounded-lg"
							onError={() => handleImageError("api")}
						/>
					)}
				</div>

				<div className="bg-gray-800/50 rounded-xl p-4">
					<div className="flex items-center gap-2 mb-3">
						<TrendingUp className="w-5 h-5 text-purple-400" />
						<h4 className="text-lg font-semibold text-white">
							Contribution Streak
						</h4>
					</div>

					{streakError ? (
						<div className="flex items-center gap-2 text-yellow-400 bg-yellow-400/10 p-4 rounded-lg">
							<AlertCircle className="w-5 h-5" />
							<p className="text-sm">
								Streak stats temporarily unavailable
							</p>
						</div>
					) : (
						<img
							src={profileData.githubStats.streakUrl}
							alt="GitHub Streak"
							className="w-full rounded-lg"
							onError={() => handleImageError("streak")}
						/>
					)}
				</div>
			</div>

			<p className="text-xs text-gray-500 mt-4 text-center">
				*Stats include public contributions only
			</p>
		</section>
	);
};

export default GitHubStats;
