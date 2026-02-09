import { skillIcons } from "/src/data/skillIcon";

type SkillGroupProps = {
	title: string;
	skills: string[];
};

export default function SkillGroup({ title, skills }: SkillGroupProps) {
	return (
		<div>
			<h3 className="text-xl font-medium text-white mb-4">{title}</h3>

			<div className="flex flex-wrap gap-4">
				{skills.map(skill => {
					const icon = skillIcons[skill];

					return (
						<div
							key={skill}
							className="group backdrop-blur-sm flex items-center gap-3 px-3 py-2
                         border border-white/10 rounded-lg
                         hover:border-white/20 transition"
						>
							{icon && (
								<img
									src={icon}
									alt={skill}
									className="w-6 h-6 opacity-80
                             group-hover:opacity-100 transition"
									loading="lazy"
								/>
							)}

							<span className="text-sm text-gray-300">
								{skill}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}
