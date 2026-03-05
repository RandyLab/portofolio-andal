// src/pages/Projects/Index.tsx
import { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Star,
  GitFork,
  Calendar,
  Users,
  BookOpen,
  AlertCircle,
} from "lucide-react";
import SkillGroup from "../../components/SkillGroup";
import Heatmap from "../../components/Heatmap";
import { useGitHubData } from "../../hooks/useGitHubData";

export default function Projects() {
  const username = "RandyLab";
  const { data, loading, error } = useGitHubData(username);
  const [languageStats, setLanguageStats] = useState<Record<string, number>>(
    {},
  );

  useEffect(() => {
    if (data?.repos) {
      const stats: Record<string, number> = {};
      data.repos.forEach((repo: any) => {
        if (repo.language)
          stats[repo.language] = (stats[repo.language] || 0) + 1;
      });
      setLanguageStats(stats);
    }
  }, [data]);

  // --------------------------
  // Loading Skeleton
  // --------------------------
  if (loading) {
    return (
      <section className="min-h-screen py-12 px-8 bg-white">
        <div className="max-w-5xl mx-auto animate-pulse space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="h-12 bg-gray-200 rounded w-1/3"></div>
            <div className="h-6 bg-gray-200 rounded w-2/3"></div>
          </div>

          {/* About Me / Stats */}
          <div className="flex flex-wrap gap-4">
            <div className="h-12 bg-gray-200 rounded w-24"></div>
            <div className="h-12 bg-gray-200 rounded w-24"></div>
          </div>

          {/* About Me Cards Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-gray-100 rounded-lg"></div>
            ))}
          </div>

          {/* Fun Fact */}
          <div className="h-16 bg-purple-100 rounded-lg mt-4"></div>

          {/* Heatmap */}
          <div className="h-48 bg-gray-100 rounded-lg mt-8"></div>

          {/* Current Projects */}
          <div className="mt-8 space-y-4">
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="h-48 bg-gray-100 rounded-xl"></div>
              ))}
            </div>
          </div>

          {/* Latest Repos */}
          <div className="mt-8 space-y-4">
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-48 bg-gray-100 rounded-xl"></div>
              ))}
            </div>
          </div>

          {/* Skills Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
            {[1, 2].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="h-6 w-16 bg-gray-100 rounded"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Profile Button */}
          <div className="h-12 bg-gray-200 rounded w-1/4 mx-auto mt-8"></div>
        </div>
      </section>
    );
  }

  // --------------------------
  // Error State
  // --------------------------
  if (error || !data) {
    return (
      <section className="min-h-screen py-12 px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <p className="text-red-500">Failed to load GitHub data</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  const languages = Object.entries(languageStats).map(([name, count]) => ({
    name,
    count,
  }));

  // --------------------------
  // Main Content
  // --------------------------
  return (
    <section className="min-h-screen mt-6 py-12 px-8 text-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-4xl font-semibold text-gray-900 mb-2">
                {data.readme?.greeting || `@${username}`}
              </h2>
              <p className="text-gray-700 max-w-2xl">
                {data.user?.bio ||
                  "Passionate developer creating awesome stuff"}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg border border-gray-300">
                <BookOpen className="w-4 h-4 text-purple-500" />
                <span>{data.user?.public_repos || 0}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg border border-gray-300">
                <Users className="w-4 h-4 text-blue-500" />
                <span>{data.user?.followers || 0}</span>
              </div>
            </div>
          </div>

          {/* About Me Cards */}
          {data.readme?.aboutMe?.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {data.readme.aboutMe.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          )}

          {/* Fun Fact */}
          {data.readme?.funFact && (
            <div className="mt-4 p-4 bg-purple-100 rounded-lg border border-purple-300">
              <p className="text-gray-700 italic">{data.readme.funFact}</p>
            </div>
          )}
        </div>

        {/* Heatmap */}
        <div className="mb-16">
          <Heatmap username={username} />
        </div>

        {/* Current Projects */}
        {data.readme?.currentProjects?.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-medium text-gray-900 mb-6">
              Current Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.readme.currentProjects.map((project, index) => (
                <div
                  key={index}
                  className="group p-6 border border-gray-200 rounded-xl hover:border-gray-400 transition-all hover:-translate-y-1 bg-gray-50"
                >
                  <h4 className="text-xl font-medium text-gray-900 mb-2">
                    {project.title}
                  </h4>

                  {project.description && (
                    <p className="text-gray-700 text-sm mb-3">
                      {project.description}
                    </p>
                  )}

                  {project.techStack?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.status && (
                    <p className="text-sm text-gray-500 mb-4">
                      Status: {project.status}
                    </p>
                  )}

                  <div className="flex gap-3 mt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                      >
                        <Github className="w-4 h-4" /> Repository
                      </a>
                    )}
                    {project.preview && (
                      <a
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Latest Repositories */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium text-gray-900 mb-6">
            Latest Repositories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.repos?.slice(0, 4).map((repo: any) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 border border-gray-200 rounded-xl hover:border-gray-400 transition-all hover:-translate-y-1 bg-gray-50"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-medium text-gray-900">
                    {repo.name}
                  </h4>
                  {repo.language && (
                    <span className="text-xs text-gray-700 px-2 py-1 bg-gray-200 rounded-full">
                      {repo.language}
                    </span>
                  )}
                </div>
                <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                  {repo.description || "No description provided"}
                </p>
                <div className="flex items-center gap-4 text-gray-700 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />{" "}
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />{" "}
                    <span>{repo.forks_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />{" "}
                    <span>
                      {new Date(repo.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <SkillGroup
            title="Languages"
            skills={
              languages.length > 0
                ? languages
                : [
                    { name: "HTML" },
                    { name: "CSS" },
                    { name: "JavaScript" },
                    { name: "TypeScript" },
                    { name: "Python" },
                    { name: "Java" },
                    { name: "C++" },
                  ]
            }
          />
          <SkillGroup
            title="Tools & Frameworks"
            skills={[
              { name: "React" },
              { name: "Vite" },
              { name: "Tailwind" },
              { name: "Git" },
              { name: "GitHub" },
              { name: "NPM" },
            ]}
          />
        </div>

        {/* GitHub Profile Link */}
        <div className="mt-12 text-center">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            <Github className="w-5 h-5" /> View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
