// src/pages/Projects/ProfileHeader.tsx
import React from "react";
import {
	Github,
	GraduationCap,
	Users,
	Lightbulb,
	Sparkles
} from "lucide-react";
import { useInViewRepeat } from "../../utils/functions";

interface ProfileHeaderProps {
	profileData: {
		name: string;
		bio: {
			student: string;
			collaboration: string;
			learning: string;
			funFact: string;
		};
	};
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
	profileData
}) => {
	const { triggerRef, visible } = useInViewRepeat();
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
		<div ref={triggerRef} className="max-w-2xl mx-auto w-full">
			<div
				className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 transition-all duration-700 ${
					visible
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-10"
				}`}
			>
				<div className="flex flex-col md:flex-row items-center gap-8">
					{/* Avatar */}
					<div className="relative">
						<div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-50"></div>
						<img
							src={avatarUrl}
							alt={profileData.name}
							className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-purple-500 shadow-lg"
							onError={e => {
								e.currentTarget.src =
									"https://via.placeholder.com/160";
							}}
						/>
					</div>

					{/* Bio */}
					<div className="flex-1 space-y-3 text-center md:text-left">
						<h2 className="text-3xl font-bold text-white">
							@{profileData.name}
						</h2>
						{bioItems.map((item, index) => (
							<div
								key={index}
								className="flex items-center gap-2 justify-center md:justify-start"
							>
								<item.icon
									className={`w-5 h-5 ${item.color}`}
								/>
								<p className="text-gray-300">{item.text}</p>
							</div>
						))}

						<a
							href={`https://github.com/${profileData.name}`}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all hover:scale-105 mt-4"
						>
							<Github className="w-5 h-5" />
							GitHub Profile
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
