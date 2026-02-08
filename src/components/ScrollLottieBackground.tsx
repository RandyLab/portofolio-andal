import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import bgAnimation from "../assets/lottie/network.json";

export default function ScrollLottieBackground() {
	const lottieRef = useRef<any>(null);
	const scrollTimeout = useRef<number | null>(null);
	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setIsScrolling(true);

			if (scrollTimeout.current) {
				clearTimeout(scrollTimeout.current);
			}

			scrollTimeout.current = window.setTimeout(() => {
				setIsScrolling(false);
			}, 120);
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (!lottieRef.current) return;
		lottieRef.current.setSpeed(isScrolling ? 3 : 1);
	}, [isScrolling]);

	return (
		<div
			className={`fixed inset-0 -z-10 transition-colors duration-300
			${isScrolling ? "bg-gradient-to-tl from-gray-950 to-gray-900 " : "bg-gray-950"}`}
		>
			<Lottie
				lottieRef={lottieRef}
				animationData={bgAnimation}
				loop
				autoplay
				className="absolute inset-0 w-full h-full"
			/>
		</div>
	);
}
