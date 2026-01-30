import "../styles/hero.css";
import reactIcon from "../assets/icons/react.svg";

export default function Hero() {
	return (
		<section className="hero text-center w-full grow md:columns-1">
			<div>
				<img src={reactIcon} alt="React Icon" className="w-16 h-16" />
			</div>
			<div>
				<h1 className="text-3xl font-bold">Randy Andal Bangun</h1>
				<p className="mt-4text-gray-600">Beginner Developer</p>
				<button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
					About
				</button>
			</div>
		</section>
	);
}
