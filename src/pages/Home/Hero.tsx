import reactIcon from "/src/assets/icons/react.svg";
import { Typewriter } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";
import { useInViewRepeat } from "/src/utils/functions";

export default function Hero() {
	const { triggerRef, visible } = useInViewRepeat();
	return (
		<section
			id="hero"
			className="min-h-screen flex items-center justify-center px-6 w-full"
		>
			<div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				<div className="space-y-6 text-center md:text-left order-2 md:order-1">
					<div ref={triggerRef} >
					<div
						className={`fade-animation ${visible ? "is-visible" : ""}`}
					>
						<div>
							<p className="text-4xl md:text-5xl font-bold text-gray-200">
								Randy Andal Bangun
							</p>
							<p className="mt-2 text-2xl md:text-3xl font-semibold text-gray-400">
								Web Developer
							</p>
						</div>

						<p className="text-lg md:text-xl text-gray-300 italic min-h-[2rem]">
							<Typewriter
								words={[
									"Build modern web experiences.",
									"Fast. Clean. Scalable.",
									"Vite + React + Tailwind."
								]}
								loop={0}
								cursor
								cursorStyle="|"
								typeSpeed={80}
								deleteSpeed={30}
								delaySpeed={1500}
							/>
						</p>
					</div></div>
					<div className="flex justify-center md:justify-start gap-4 pt-4">
						<a href="#about" className="btn">
							About Me
						</a>
						<button className="px-6 py-3 rounded-xl border border-gray-500 text-gray-200 hover:bg-white/10 transition">
							Contact Me
						</button>
					</div>
				</div>

				<div className="relative flex items-center justify-center order-1 md:order-2">
					<div ref={triggerRef}>
						<img
							src={reactIcon}
							alt="React Icon"
							className={`w-32 h-32 animate-spin-slow relative fade-animation ${visible ? "is-visible" : ""}`}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
