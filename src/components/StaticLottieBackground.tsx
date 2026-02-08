import Lottie from "lottie-react";
import bgAnimation from "../assets/lottie/network.json";

export default function StaticLottieBackground() {
	return (
		<div className="fixed inset-0 -z-10 bg-gray-950">
			<Lottie
				animationData={bgAnimation}
				loop
				autoplay
				className="absolute inset-0 w-full h-full"
			/>
		</div>
	);
}
