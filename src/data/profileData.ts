// src/data/profileData.ts
import { ProfileData } from "./profile.types";

export const profileData: ProfileData = {
	name: "RandyLab",
	greeting: "👋 Hey there! I am RandyLab",
	bio: {
		student: "👨‍🎓 Student",
		collaboration: "🤝 I Like Teaming Up: Love collaborating.",
		learning: "💡 Always Learning",
		funFact: "🌟 Fun Fact: I'm lazy."
	},
	currentProjects: {
		pkl: {
			title: "Project Akhir PKL",
			github: "https://github.com/RandyLab/Project-Akhir-PKL.git",
			preview: "https://randylab.github.io/pustipada/"
		},
		game: {
			title: "Project Game",
			github: "https://github.com/",
			preview: undefined
		}
	},
	githubStats: {
		apiUrl: "https://github-readme-stats.vercel.app/api?username=RandyLab&theme=dark&hide_border=false&include_all_commits=false&count_private=false",
		streakUrl:
			"https://github-readme-streak-stats.herokuapp.com/?user=RandyLab&theme=dark&hide_border=false",
		username: "RandyLab"
	}
};
