// src/components/Heatmap.tsx
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

interface HeatmapProps {
	username: string;
}

export default function Heatmap({ username }: HeatmapProps) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// GitHub tidak menyediakan API publik untuk contributions heatmap
		// Bisa pakai github-contributions-api atau gambar dari github-readme-activity-graph
		setLoading(false);
	}, [username]);

	if (loading) {
		return (
			<div className="animate-pulse bg-gray-800 h-32 rounded-lg"></div>
		);
	}

	return (
		<div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
			<div className="flex items-center gap-2 mb-4">
				<Calendar className="w-5 h-5 text-purple-400" />
				<h3 className="text-lg font-medium text-white">
					Contribution Activity
				</h3>
			</div>

			<img
				src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&hide_border=true&area=true`}
				alt={`GitHub activity graph for ${username}`}
				className="w-full rounded-lg"
				loading="lazy"
			/>

			<p className="text-xs text-gray-500 mt-2 text-center">
				Last 31 days contribution activity
			</p>
		</div>
	);
}
