import { hitungUmur } from "/src/utils/functions";
import randy from "/src/assets/img/randy.jpg";
import { NavLink } from "react-router-dom";
import { useInViewRepeat } from "/src/utils/functions";

export default function About() {
	const umur = hitungUmur("2007-11-08");
	const { triggerRef, visible } = useInViewRepeat();
	return (
		<section
			id="about"
			className="min-h-screen flex justify-center items-center text-gray-50 w-full"
		>
			<div ref={triggerRef}>
				<div
					className={`flex min-w-fit w-3/4 border border-indigo-300 rounded-xl p-12 md:gap-16 bg-gradient-to-br from-indigo-800/15 to-indigo-50/10 backdrop-blur fade-animation ${visible ? "is-visible" : ""}`}
				>
					<div className="flex-1 place-content-center place-items-center">
						<img
							src={randy}
							className="w-64 rounded-sm border-4 border-indigo-950/80 shadow-[4px_4px_50px_rgba(86,36,255,0.4)]"
						/>
					</div>
					<div className="flex-1 place-content-center space-y-6 space-x-4 text-center md:text-left">
						<p className="md:text-3xl text-xl font-bold">
							Randy Andal Bangun
						</p>
						<p className="text-gray-300 md:text-2xl textlg">
							Web Developer
						</p>
						<p>Age : {umur}</p>
						<p>
							I build fast, clean, and scalable web applications.
						</p>
						<p>React · Vite · Tailwind</p>
						<NavLink to="#" className="btn">
							Contact
						</NavLink>
						<button className="btn">CV</button>
					</div>
				</div>
			</div>
		</section>
	);
}
