import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lottie from "lottie-react";
import bgAnimation from "../assets/lottie/network.json";

export default function MainLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative min-h-screen">
			<Navbar />
			{/* Background Lottie */}
			<Lottie
				animationData={bgAnimation}
				loop
				autoplay
				className="fixed h-screen inset-0 -z-10 pt-4 opacity-50"
			/>
			<div className="flex flex-col min-h-screen">
				{/* Bagian atas: Navbar */}

				{/* Bagian tengah: konten halaman */}
				<main className="flex-1 flex flex-col justify-center items-center">
					{children}
				</main>

				{/* Bagian bawah: Footer */}
				<Footer />
			</div>
		</div>
	);
}
