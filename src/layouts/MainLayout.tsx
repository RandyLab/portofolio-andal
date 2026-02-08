import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ToggleBackground from "../components/ToggleBackground";

import StaticLottieBackground from "../components/StaticLottieBackground";
import ScrollLottieBackground from "../components/ScrollLottieBackground";

export default function MainLayout({
	children
}: {
	children: React.ReactNode;
}) {
	// default: background lama (static)
	const [useScrollBg, setUseScrollBg] = useState(false);

	return (
		<div className="relative min-h-screen">
			{/* Background */}
			{useScrollBg ? (
				<ScrollLottieBackground />
			) : (
				<StaticLottieBackground />
			)}

			{/* Toggle */}
			<ToggleBackground
				enabled={useScrollBg}
				onToggle={() => setUseScrollBg(prev => !prev)}
			/>

			<Navbar />

			<main className="min-h-screen flex flex-col items-center">
				{children}
			</main>

			<Footer />
		</div>
	);
}
