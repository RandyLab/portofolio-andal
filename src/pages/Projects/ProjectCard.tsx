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
  index,
}) => {
  const repoName = github.split("/").pop()?.replace(".git", "") || "repository";

  return (
    <div
      className="bg-white/50 rounded-xl p-6 border border-purple-200 hover:border-purple-300 transition-all hover:-translate-y-1 shadow-sm"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>

      <p className="text-gray-600 text-sm mb-4 font-mono">{repoName}</p>

      <div className="flex gap-3">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-sm transition-colors shadow-sm"
        >
          <Github className="w-4 h-4" />
          Repository
        </a>

        {preview && (
          <a
            href={preview}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm transition-colors shadow-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};
