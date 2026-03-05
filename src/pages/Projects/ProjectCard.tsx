// src/pages/Projects/ProjectCard.tsx
import React from "react";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";

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
		<div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-500 transition-all hover:-translate-y-1">
			<div className="flex items-start justify-between mb-4">
				<div className="flex items-center gap-3">
					<FolderGit2 className="w-8 h-8 text-purple-400" />
					<h4 className="text-lg font-semibold text-white">
						{title}
					</h4>
				</div>
			</div>

			<p className="text-gray-400 text-sm mb-4 line-clamp-2">
				Repository: {repoName}
			</p>

			<div className="flex gap-3">
				<a
					href={github}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors"
				>
					<Github className="w-4 h-4" />
					GitHub
				</a>

				{preview && (
					<a
						href={preview}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm transition-colors"
					>
						<ExternalLink className="w-4 h-4" />
						Preview
					</a>
				)}
			</div>
		</div>
	);
};
