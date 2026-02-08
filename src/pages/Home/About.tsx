import { hitungUmur } from "/src/utils/functions";
import randy from "/src/assets/img/randy.jpg";
import { NavLink } from "react-router-dom";
import { useInViewRepeat } from "/src/utils/functions";
import reactIcon from "/src/assets/icons/react.svg";

export default function About() {
	const umur = hitungUmur("2007-11-08");
	const { triggerRef, visible } = useInViewRepeat();
	return (
		<section id="about" className="min-h-screen w-full py-20 text-gray-50">
			<div className="mx-auto max-w-6xl px-6 space-y-16">
				<h2 className="text-4xl font-bold text-left">About Me</h2>
				<div
					ref={triggerRef}
					className={`fade-animation ${visible ? "is-visible" : ""}`}
				>
					<div className="flex flex-col md:flex-row items-center gap-12 rounded-xl border border-indigo-300/40 bg-gradient-to-br from-indigo-800/15 to-indigo-50/10 md:backdrop-blur p-10">
						<img
							src={randy}
							alt="Randy Andal Bangun"
							className="w-40 md:w-56 rounded-md border-4 border-indigo-950/80 shadow-[4px_4px_50px_rgba(86,36,255,0.4)]"
						/>

						<div className="text-center md:text-left space-y-3">
							<p className="text-indigo-300 text-lg">
								Software Engineer
							</p>
							<h3 className="text-3xl font-bold">
								Randy Andal Bangun
							</h3>
							<p className="text-gray-400">Age: {umur}</p>

							<p className="max-w-xl text-gray-300">
								I build fast, clean, and scalable systems with
								an industry-standard engineering approach.
							</p>

							<div className="flex justify-center md:justify-start gap-4 pt-4">
								<NavLink to="#contact" className="btn">
									Contact
								</NavLink>
								<button className="btn">Download CV</button>
							</div>
						</div>
					</div>
				</div>

				<div className="space-y-24">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<img
							src={reactIcon}
							alt="Summary illustration"
							className="w-40 mx-auto opacity-80"
						/>

						<div className="space-y-4">
							<h4 className="text-2xl font-semibold">Summary</h4>
							<p className="text-gray-300">
								I am a Software Engineer who focuses on building
								fast, clean, and scalable systems. I care not
								only about making things work, but about making
								them maintainable, performant, and
								production-ready.
							</p>
						</div>
					</div>
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="space-y-4 md:order-1 order-2">
							<h4 className="text-2xl font-semibold">
								Engineering Principles
							</h4>
							<ul className="space-y-3 text-gray-300 list-disc list-inside">
								<li>
									<strong>Clean & Maintainable Code</strong> —
									readable, structured, and extensible.
								</li>
								<li>
									<strong>Performance Awareness</strong> —
									considered from the start.
								</li>
								<li>
									<strong>Scalable Design</strong> — built
									with future growth in mind.
								</li>
								<li>
									<strong>Industry Best Practices</strong> —
									proven workflows and patterns.
								</li>
							</ul>
						</div>

						<img
							src={reactIcon}
							alt="Principles illustration"
							className="w-40 mx-auto opacity-80 md:order-2 order-1"
						/>
					</div>
<div className="grid md:grid-cols-2 gap-12 items-center">
	<img
		src={reactIcon}
		alt="Skills illustration"
		className="w-40 mx-auto opacity-80"
	/>

	<div className="space-y-4">
		<h4 className="text-2xl font-semibold">Skills</h4>
		<p className="text-gray-300">
			<strong>Languages:</strong> JavaScript, TypeScript
			<br />
			<strong>Systems:</strong> Web applications, APIs, automation
			tools
			<br />
			<strong>Practices:</strong> Modular architecture, refactoring,
			version control
		</p>
	</div>
</div>
					
					<div className="grid md:grid-cols-2 gap-12 items-center">
	<div className="space-y-4 md:order-1 order-2">
		<h4 className="text-2xl font-semibold">
			Problem Solving Approach
		</h4>
		<p className="text-gray-300">
			I approach problems by understanding the real requirements,
			designing a clear solution, and implementing it with clean and
			efficient code.
		</p>
	</div>

	<img
		src={reactIcon}
		alt="Problem solving illustration"
		className="w-40 mx-auto opacity-80 md:order-2 order-1"
	/>
</div>
				</div>
			</div>
		</section>
	);
}
