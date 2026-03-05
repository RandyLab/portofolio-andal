// src/components/SkillGroup.tsx (update)
import { skillIcons } from "../data/skillIcon";

type SkillGroupProps = {
	title: string;
	skills: Array<{ name: string; count?: number; percentage?: number }>;
};

export default function SkillGroup({ title, skills }: SkillGroupProps) {
	return (
		<div>
			<h3 className="text-xl font-medium text-white mb-4">{title}</h3>

			<div className="flex flex-wrap gap-4">
				{skills.map(skill => {
					const icon =
						skillIcons[skill.name] ||
						skillIcons[skill.name.toLowerCase()];

					return (
						<div
							key={skill.name}
							className="group backdrop-blur-sm flex items-center gap-3 px-3 py-2
                         border border-white/10 rounded-lg
                         hover:border-white/20 transition relative"
						>
							{icon && (
								<img
									src={icon}
									alt={skill.name}
									className="w-6 h-6 opacity-80
                             group-hover:opacity-100 transition"
									loading="lazy"
								/>
							)}

							<span className="text-sm text-gray-300">
								{skill.name}
							</span>

							{skill.count && (
								<span className="text-xs text-gray-500 ml-1">
									({skill.count} repos)
								</span>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
