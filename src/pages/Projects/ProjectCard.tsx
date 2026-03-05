// src/pages/Projects/ProjectCard.tsx
import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
	title: string;
	github: string;
	preview?: string;
	index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	github,
	preview,
	index
}) => {
	const repoName =
		github.split("/").pop()?.replace(".git", "") || "repository";

	return (
		<div
			className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500 transition-all hover:-translate-y-1"
			style={{ transitionDelay: `${index * 100}ms` }}
		>
			<h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

			<p className="text-gray-400 text-sm mb-4 font-mono">{repoName}</p>

			<div className="flex gap-3">
				<a
					href={github}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors"
				>
					<Github className="w-4 h-4" />
					Repository
				</a>

				{preview && (
					<a
						href={preview}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm transition-colors"
					>
						<ExternalLink className="w-4 h-4" />
						Live Demo
					</a>
				)}
			</div>
		</div>
	);
};
