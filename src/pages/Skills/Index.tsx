import SkillGroup from "/src/components/SkillGroup";

export default function Skills() {
	return (
		<section className="min-h-screen mt-6 py-12 px-8">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-4xl font-semibold text-white mb-4">
					Skills
				</h2>

				<p className="text-gray-400 max-w-2xl mb-16">
					Technologies and tools I use to build fast, clean, and
					maintainable applications.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
					<SkillGroup
						title="Languages"
						skills={[
							"HTML",
							"CSS",
							"JavaScript",
							"TypeScript",
							"Python",
							"Java",
							"C++"
						]}
					/>

					<SkillGroup
						title="Frontend"
						skills={["React", "Vite", "React Router"]}
					/>

					<SkillGroup
						title="Styling & UI"
						skills={[
							"Tailwind CSS",
							"Responsive Design",
							"UI Animation"
						]}
					/>

					<SkillGroup
						title="Tools & Workflow"
						skills={["Git", "GitHub", "NPM", "Prettier"]}
					/>
				</div>
			</div>
		</section>
	);
}
