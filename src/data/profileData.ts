// src/data/profileData.ts
export interface GitHubRepo {
	id: number;
	name: string;
	description: string;
	html_url: string;
	homepage: string;
	stargazers_count: number;
	forks_count: number;
	language: string;
	topics: string[];
	created_at: string;
	updated_at: string;
}

export interface GitHubUser {
	login: string;
	name: string;
	avatar_url: string;
	bio: string;
	public_repos: number;
	followers: number;
	following: number;
	created_at: string;
}

export interface ParsedReadme {
	greeting: string;
	aboutMe: string[];
	currentProjects: Array<{
		title: string;
		description: string;
		github: string;
		preview?: string;
		techStack?: string[];
		status?: string;
	}>;
	techStack: {
		languages: string[];
		tools: string[];
	};
	funFact: string;
}

export const fetchGitHubData = async (username: string) => {
	try {
		// Fetch user data
		const userRes = await fetch(`https://api.github.com/users/${username}`);
		if (!userRes.ok) throw new Error("Failed to fetch user data");
		const userData: GitHubUser = await userRes.json();

		// Fetch repos
		const reposRes = await fetch(
			`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
		);
		if (!reposRes.ok) throw new Error("Failed to fetch repos");
		const reposData: GitHubRepo[] = await reposRes.json();

		// Fetch README
		let readmeData = "";
		try {
			const readmeRes = await fetch(
				`https://api.github.com/repos/${username}/${username}/readme`,
				{
					headers: {
						Accept: "application/vnd.github.v3.raw"
					}
				}
			);
			if (readmeRes.ok) {
				readmeData = await readmeRes.text();
			}
		} catch (error) {
			console.warn("Failed to fetch README, using default");
		}

		return {
			user: userData,
			repos: reposData,
			readme: parseReadme(readmeData, username)
		};
	} catch (error) {
		console.error("Error fetching GitHub data:", error);
		return null;
	}
};

// Parse README dengan format yang lebih robust
const parseReadme = (readme: string, username: string): ParsedReadme => {
	const lines = readme.split("\n");

	// Default values
	const parsed: ParsedReadme = {
		greeting: `👋 Hey there! I am ${username}`,
		aboutMe: ["Student", "Love collaborating", "Always Learning"],
		currentProjects: [],
		techStack: {
			languages: [],
			tools: []
		},
		funFact: "🌟 Fun Fact: I love coding!"
	};

	let currentSection = "";
	let currentProject: any = null;

	lines.forEach(line => {
		const trimmed = line.trim();

		// Skip empty lines
		if (!trimmed) return;

		// Detect sections
		if (trimmed.includes("About Me") || trimmed.includes("📋 About")) {
			currentSection = "about";
			return;
		}
		if (
			trimmed.includes("Current Projects") ||
			trimmed.includes("🚀 Current")
		) {
			currentSection = "projects";
			return;
		}
		if (trimmed.includes("Tech Stack") || trimmed.includes("🛠️ Tech")) {
			currentSection = "tech";
			return;
		}
		if (trimmed.includes("GitHub Stats") || trimmed.includes("📊 GitHub")) {
			currentSection = "stats";
			return;
		}

		// Parse greeting
		if (trimmed.includes("Hey there") && !parsed.greeting) {
			const match = trimmed.match(/Hey there!? I am (\w+)/i);
			if (match) {
				parsed.greeting = `👋 Hey there! I am ${match[1]}`;
			}
		}

		// Parse about me section
		if (currentSection === "about") {
			if (trimmed.startsWith("-") || trimmed.startsWith("•")) {
				const text = trimmed.replace(/^[-•]\s*/, "").trim();
				if (text && !parsed.aboutMe.includes(text)) {
					parsed.aboutMe.push(text);
				}
			}
		}

		// Parse projects
		if (currentSection === "projects") {
			// Project title (### or ## format)
			if (
				trimmed.startsWith("###") ||
				(trimmed.startsWith("##") && !trimmed.includes("Current"))
			) {
				if (currentProject) {
					parsed.currentProjects.push(currentProject);
				}
				currentProject = {
					title: trimmed.replace(/^#+\s*/, "").trim(),
					description: "",
					github: ""
				};
			}

			// Project details
			if (currentProject) {
				if (
					trimmed.includes("**Description**") ||
					trimmed.includes("Description:")
				) {
					const desc = trimmed.split(/[:*]/).pop()?.trim() || "";
					currentProject.description = desc;
				}
				if (
					trimmed.includes("**GitHub**") ||
					trimmed.includes("GitHub:")
				) {
					const match = trimmed.match(/\((https?:\/\/[^\s)]+)\)/);
					if (match) {
						currentProject.github = match[1];
					} else {
						const url = trimmed.split(/[:*]/).pop()?.trim();
						if (url?.startsWith("http")) {
							currentProject.github = url;
						}
					}
				}
				if (
					trimmed.includes("**Live Demo**") ||
					trimmed.includes("Live Demo:")
				) {
					const match = trimmed.match(/\((https?:\/\/[^\s)]+)\)/);
					if (match) {
						currentProject.preview = match[1];
					} else {
						const url = trimmed.split(/[:*]/).pop()?.trim();
						if (url?.startsWith("http")) {
							currentProject.preview = url;
						}
					}
				}
				if (
					trimmed.includes("**Tech Stack**") ||
					trimmed.includes("Tech Stack:")
				) {
					const tech = trimmed.split(/[:*]/).pop()?.trim();
					if (tech) {
						currentProject.techStack = tech
							.split(",")
							.map(t => t.trim());
					}
				}
				if (
					trimmed.includes("**Status**") ||
					trimmed.includes("Status:")
				) {
					const status = trimmed.split(/[:*]/).pop()?.trim();
					if (status) {
						currentProject.status = status;
					}
				}
			}
		}

		// Parse tech stack
		if (currentSection === "tech") {
			if (trimmed.includes("Languages")) {
				// Will be handled by the next lines
			} else if (trimmed.startsWith("![")) {
				const match = trimmed.match(/alt="([^"]+)"/);
				if (match) {
					const tech = match[1].replace(/^-/, "").trim();
					if (
						tech &&
						!parsed.techStack.languages.includes(tech) &&
						!parsed.techStack.tools.includes(tech)
					) {
						// Simple heuristic: if it's a common language
						const commonLanguages = [
							"HTML",
							"CSS",
							"JavaScript",
							"TypeScript",
							"Python",
							"Java",
							"C++",
							"C#"
						];
						if (commonLanguages.includes(tech)) {
							parsed.techStack.languages.push(tech);
						} else {
							parsed.techStack.tools.push(tech);
						}
					}
				}
			}
		}

		// Parse fun fact
		if (trimmed.includes("Fun Fact")) {
			const match = trimmed.match(/Fun Fact:\s*(.*)/i);
			if (match) {
				parsed.funFact = `🌟 ${match[1].trim()}`;
			}
		}
	});

	// Push last project
	if (currentProject) {
		parsed.currentProjects.push(currentProject);
	}

	return parsed;
};
