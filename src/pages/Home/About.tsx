// src/pages/About/Index.tsx
import { hitungUmur } from "/src/utils/functions";
import randy from "/src/assets/img/randy.jpg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import summary from "/src/assets/img/summary.png";
import solving from "/src/assets/img/solving.png";
import engineering from "/src/assets/img/engineering.png";

export default function About() {
	const umur = hitungUmur("2007-11-08");

	// Animasi Variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 40 },
		visible: { opacity: 1, y: 0 }
	};

	const container = {
		hidden: {},
		visible: { transition: { staggerChildren: 0.2 } }
	};

	return (
		<section id="about" className="min-h-screen w-full py-20 text-gray-900">
			<div className="mx-auto max-w-6xl px-6 space-y-16">
				{/* Header */}
				<motion.h2
					className="text-4xl font-bold text-left"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					About Me
				</motion.h2>

				{/* Profile Card */}
				<motion.div
					className="flex flex-col md:flex-row items-center gap-12 rounded-xl border border-gray-200 shadow-lg p-10 bg-white max-w-4xl mx-auto overflow-hidden"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={container}
				>
					<motion.img
						src={randy}
						alt="Randy Andal Bangun"
						className="w-40 md:w-56 max-w-full rounded-md border-4 border-indigo-950/80 shadow-[4px_4px_50px_rgba(86,36,255,0.2)]"
						variants={fadeInUp}
					/>

					<motion.div
						className="text-center md:text-left space-y-3 break-words"
						variants={fadeInUp}
					>
						<p className="text-indigo-600 text-lg">
							Software Engineer
						</p>
						<h3 className="text-3xl md:text-4xl font-bold">{`Randy Andal Bangun`}</h3>
						<p className="text-gray-500">Age: {umur}</p>
						<p className="max-w-xl text-gray-600 break-words">
							I build fast, clean, and scalable systems with an
							industry-standard engineering approach.
						</p>

						<div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
							<NavLink
								to="/contact"
								className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
							>
								Contact
							</NavLink>
							<button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
								Download CV
							</button>
						</div>
					</motion.div>
				</motion.div>

				{/* Sections */}
				<motion.div
					className="space-y-24 px-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={container}
				>
					{/* Summary */}
					<motion.div
						className="grid md:grid-cols-2 gap-12 items-center"
						variants={fadeInUp}
					>
						<img
							src={summary}
							alt="Summary illustration"
							className="w-40 mx-auto opacity-90"
						/>
						<div className="space-y-4">
							<h4 className="text-2xl font-semibold">Summary</h4>
							<p className="text-gray-600">
								I am a Software Engineer who focuses on building
								fast, clean, and scalable systems. I care not
								only about making things work, but about making
								them maintainable, performant, and
								production-ready.
							</p>
						</div>
					</motion.div>

					{/* Problem Solving */}
					<motion.div className="grid md:grid-cols-2 gap-12 items-center">
						<div
							className="space-y-4 md:order-1 order-2"
							variants={fadeInUp}
						>
							<h4 className="text-2xl font-semibold">
								Problem Solving Approach
							</h4>
							<p className="text-gray-600">
								I approach problems by understanding the real
								requirements, designing a clear solution, and
								implementing it with clean and efficient code.
							</p>
						</div>
						<motion.img
							src={solving}
							alt="Problem solving illustration"
							className="w-40 mx-auto opacity-80 md:order-2 order-1"
							variants={fadeInUp}
						/>
					</motion.div>

					{/* Engineering Principles */}
					<motion.div
						className="grid md:grid-cols-2 gap-12 items-center"
						variants={fadeInUp}
					>
						<img
							src={engineering}
							alt="Principles illustration"
							className="w-40 mx-auto opacity-80"
						/>
						<div className="space-y-4">
							<h4 className="text-2xl font-semibold">
								Engineering Principles
							</h4>
							<ul className="space-y-3 text-gray-600">
								<li>
									<strong>Clean & Maintainable Code</strong>
									<p>readable, structured, and extensible.</p>
								</li>
								<li>
									<strong>Performance Awareness</strong>
									<p>considered from the start.</p>
								</li>
								<li>
									<strong>Scalable Design</strong>
									<p>built with future growth in mind.</p>
								</li>
								<li>
									<strong>Industry Best Practices</strong>
									<p>proven workflows and patterns.</p>
								</li>
							</ul>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
