// src/data/profile.types.ts
export interface ProfileBio {
	student: string;
	collaboration: string;
	learning: string;
	funFact: string;
}

export interface ProjectItem {
	title: string;
	github: string;
	preview?: string;
}

export interface CurrentProjects {
	pkl: ProjectItem;
	game: ProjectItem;
}

export interface GitHubStats {
	apiUrl: string;
	streakUrl: string;
	username: string;
}

export interface ProfileData {
	name: string;
	greeting: string;
	bio: ProfileBio;
	currentProjects: CurrentProjects;
	githubStats: GitHubStats;
}
