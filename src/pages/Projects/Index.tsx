// src/pages/Projects/Index.tsx
import React from "react";
import { Code2 } from "lucide-react";
import { ProfileHeader } from "./ProfileHeader";
import { ProjectCard } from "./ProjectCard";
import GitHubStats from "./GitHubStats";
import { profileData } from "../../data/profileData";

const ProjectsPage: React.FC = () => {
	console.log("ProjectsPage rendering");

	const projectList = [
		{ ...profileData.currentProjects.pkl, key: "pkl" },
		{ ...profileData.currentProjects.game, key: "game" }
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-8">
					{profileData.greeting}
				</h1>

				<ProfileHeader />

				<section className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 mt-8">
					<div className="flex items-center gap-3 mb-6">
						<Code2 className="w-8 h-8 text-purple-400" />
						<h3 className="text-2xl font-bold text-white">
							Current Projects
						</h3>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{projectList.map((project, index) => (
							<ProjectCard
								key={project.key}
								title={project.title}
								github={project.github}
								preview={project.preview}
								index={index}
							/>
						))}
					</div>
				</section>

				<GitHubStats />
			</div>
		</div>
	);
};

export default Projects;
