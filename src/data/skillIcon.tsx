// src/data/skillIcon.ts
// Import semua ikon dari assets
import htmlIcon from "/src/assets/Languages/html.svg";
import cssIcon from "/src/assets/Languages/css.svg";
import jsIcon from "/src/assets/Languages/javascript.svg";
import tsIcon from "/src/assets/Languages/typescript.svg";
import pythonIcon from "/src/assets/Languages/python.svg";
import javaIcon from "/src/assets/Languages/java.svg";
import cppIcon from "/src/assets/Languages/cpp.svg";

import gitIcon from "/src/assets/Tools/git.svg";
import githubIcon from "/src/assets/Tools/github.svg";
import npmIcon from "/src/assets/Tools/npm.svg";
import viteIcon from "/src/assets/Tools/vite.svg";
import prettierIcon from "/src/assets/Tools/prettier.svg";

import reactIcon from "/src/assets/icons/react.svg";

export const skillIcons: Record<string, string> = {
	// Languages
	HTML: htmlIcon,
	CSS: cssIcon,
	JavaScript: jsIcon,
	TypeScript: tsIcon,
	Python: pythonIcon,
	Java: javaIcon,
	"C++": cppIcon,

	// Tools
	Git: gitIcon,
	GitHub: githubIcon,
	NPM: npmIcon,
	Vite: viteIcon,
	Prettier: prettierIcon,

	// Frameworks & Libraries
	React: reactIcon,
	"React Native": reactIcon,
	"Next.js": reactIcon,
	Tailwind:
		"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
	"Tailwind CSS":
		"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
};
