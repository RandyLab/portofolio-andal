import React from "react";
import {
	Github,
	GraduationCap,
	Users,
	Lightbulb,
	Sparkles
} from "lucide-react";
import { profileData } from "../../data/profileData";

export const ProfileHeader: React.FC = () => {
	const avatarUrl = `https://github.com/${profileData.name}.png`;

	const bioItems = [
		{
			icon: GraduationCap,
			text: profileData.bio.student,
			color: "text-blue-400"
		},
		{
			icon: Users,
			text: profileData.bio.collaboration,
			color: "text-green-400"
		},
		{
			icon: Lightbulb,
			text: profileData.bio.learning,
			color: "text-yellow-400"
		},
		{
			icon: Sparkles,
			text: profileData.bio.funFact,
			color: "text-purple-400"
		}
	];

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
			{/* User Card */}
			<div className="lg:col-span-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-xl">
				<div className="flex flex-col items-center space-y-4">
					<div className="relative">
						<div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-50"></div>
						<img
							src={avatarUrl}
							alt={profileData.name}
							className="relative w-32 h-32 rounded-full border-4 border-purple-500 shadow-lg"
						/>
					</div>

					<h2 className="text-2xl font-bold text-white">
						@{profileData.name}
					</h2>

					<a
						href={`https://github.com/${profileData.name}`}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all hover:scale-105"
					>
						<Github className="w-5 h-5" />
						GitHub Profile
					</a>
				</div>
			</div>

			{/* Bio Card */}
			<div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
				<h3 className="text-xl font-semibold text-white mb-4">
					About Me
				</h3>
				<div className="space-y-4">
					{bioItems.map((item, index) => (
						<div key={index} className="flex items-start gap-3">
							<item.icon
								className={`w-6 h-6 ${item.color} flex-shrink-0 mt-1`}
							/>
							<p className="text-gray-300">{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
