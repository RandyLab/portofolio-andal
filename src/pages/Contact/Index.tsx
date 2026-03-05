// src/pages/Contact/Index.tsx
import React, { useRef, useState, useEffect } from "react";
import {
	Github,
	Linkedin,
	Mail,
	Instagram,
	Send,
	CheckCircle,
	AlertCircle,
	MapPin,
	Clock
} from "lucide-react";
import { useInViewRepeat } from "../../utils/functions";
import emailjs from "@emailjs/browser";

// ==============================================
// KONFIGURASI - MUDAH DIUBAH
// ==============================================

// EmailJS Configuration
const EMAILJS_CONFIG = {
	SERVICE_ID: "service_4sx3prl", // Ganti dengan Service ID EmailJS-mu
	TEMPLATE_ID: "template_yx3f9k8", // Ganti dengan Template ID EmailJS-mu
	PUBLIC_KEY: "NVlkasvP3TD13Bso-" // Ganti dengan Public Key EmailJS-mu
};

// Gmail Tujuan (email yang akan menerima pesan)
const RECIPIENT_EMAIL = "randibangun9@gmail.com"; // Ganti dengan email tujuan

// Social Media Links
const SOCIAL_LINKS = [
	{
		name: "GitHub",
		url: "https://github.com/RandyLab",
		icon: Github,
		color: "bg-gray-900 hover:bg-gray-800",
		textColor: "text-white",
		username: "@RandyLab"
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/randyandal/",
		icon: Linkedin,
		color: "bg-blue-600 hover:bg-blue-700",
		textColor: "text-white",
		username: "randyandal"
	},
	{
		name: "Email",
		url: `mailto:${RECIPIENT_EMAIL}`,
		icon: Mail,
		color: "bg-red-500 hover:bg-red-600",
		textColor: "text-white",
		username: RECIPIENT_EMAIL.split("@")[0]
	},
	{
		name: "Instagram",
		url: "https://www.instagram.com/randyandal/",
		icon: Instagram,
		color: "bg-pink-600 hover:bg-pink-700",
		textColor: "text-white",
		username: "@randyandal"
	}
];

// Contact Information
const CONTACT_INFO = [
	{
		icon: MapPin,
		label: "Location",
		value: "Indonesia",
		color: "text-purple-400"
	},
	{
		icon: Mail,
		label: "Email",
		value: RECIPIENT_EMAIL,
		color: "text-red-400"
	},
	{
		icon: Clock,
		label: "Response Time",
		value: "Within 24 hours",
		color: "text-green-400"
	}
];

// ==============================================
// KOMPONEN CONTACT
// ==============================================

export default function Contact() {
	const { triggerRef, visible } = useInViewRepeat();
	const formRef = useRef<HTMLFormElement>(null);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: ""
	});

	const [status, setStatus] = useState<{
		type: "success" | "error" | "loading" | null;
		message: string;
	}>({ type: null, message: "" });

	// Initialize EmailJS
	useEffect(() => {
		emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
	}, []);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		setStatus({ type: "loading", message: "Sending message..." });

		try {
			// Tambahkan hidden field untuk recipient email
			const formElement = formRef.current;
			if (formElement) {
				// Tambah hidden input untuk recipient jika diperlukan
				const recipientInput = document.createElement("input");
				recipientInput.type = "hidden";
				recipientInput.name = "to_email";
				recipientInput.value = RECIPIENT_EMAIL;
				formElement.appendChild(recipientInput);
			}

			const result = await emailjs.sendForm(
				EMAILJS_CONFIG.SERVICE_ID,
				EMAILJS_CONFIG.TEMPLATE_ID,
				formRef.current!,
				EMAILJS_CONFIG.PUBLIC_KEY
			);

			if (result.text === "OK") {
				setStatus({
					type: "success",
					message:
						"Message sent successfully! I'll get back to you soon."
				});
				setFormData({ name: "", email: "", subject: "", message: "" });

				// Reset success message after 5 seconds
				setTimeout(() => {
					setStatus({ type: null, message: "" });
				}, 5000);
			}
		} catch (error) {
			setStatus({
				type: "error",
				message: "Failed to send message. Please try again later."
			});
			console.error("EmailJS error:", error);
		}
	};

	return (
		<section
			id="contact"
			className="min-h-screen py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
		>
			<div className="max-w-6xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
						Get In Touch
					</h2>
					<p className="text-gray-300 max-w-2xl mx-auto">
						Have a project in mind or just want to chat? Feel free
						to reach out! I'm always open to discussing new
						opportunities and collaborations.
					</p>
				</div>

				<div
					ref={triggerRef}
					className={`grid grid-cols-1 lg:grid-cols-5 gap-8 transition-all duration-700 ${
						visible
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10"
					}`}
				>
					{/* Left Side - Contact Info & Social */}
					<div className="lg:col-span-2 space-y-6">
						{/* Contact Info Cards */}
						<div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
							<h3 className="text-xl font-semibold text-white mb-6">
								Contact Information
							</h3>
							<div className="space-y-4">
								{CONTACT_INFO.map((item, index) => (
									<div
										key={index}
										className="flex items-start gap-4"
									>
										<div
											className={`p-3 bg-gray-700/50 rounded-lg ${item.color}`}
										>
											<item.icon className="w-5 h-5" />
										</div>
										<div>
											<p className="text-sm text-gray-400">
												{item.label}
											</p>
											<p className="text-white font-medium">
												{item.value}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Social Links */}
						<div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
							<h3 className="text-xl font-semibold text-white mb-6">
								Connect With Me
							</h3>
							<div className="grid grid-cols-2 gap-3">
								{SOCIAL_LINKS.map(social => (
									<a
										key={social.name}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										className={`flex items-center gap-2 p-3 rounded-lg transition-all ${social.color} ${social.textColor} hover:scale-105`}
									>
										<social.icon className="w-4 h-4" />
										<span className="text-sm font-medium truncate">
											{social.name}
										</span>
									</a>
								))}
							</div>
							<div className="mt-4 pt-4 border-t border-gray-700">
								<p className="text-sm text-gray-400 text-center">
									Follow me for updates and tech content
								</p>
							</div>
						</div>
					</div>

					{/* Right Side - Contact Form */}
					<div className="lg:col-span-3">
						<div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-purple-500/30">
							<h3 className="text-2xl font-semibold text-white mb-6">
								Send Me a Message
							</h3>

							<form
								ref={formRef}
								onSubmit={handleSubmit}
								className="space-y-5"
							>
								{/* Hidden field untuk recipient email (untuk EmailJS template) */}
								<input
									type="hidden"
									name="to_email"
									value={RECIPIENT_EMAIL}
								/>
								<input
									type="hidden"
									name="recipient"
									value={RECIPIENT_EMAIL}
								/>

								{/* Status Message */}
								{status.type && (
									<div
										className={`p-4 rounded-lg flex items-center gap-3 ${
											status.type === "success"
												? "bg-green-500/20 text-green-300 border border-green-500/30"
												: status.type === "error"
													? "bg-red-500/20 text-red-300 border border-red-500/30"
													: "bg-blue-500/20 text-blue-300 border border-blue-500/30"
										}`}
									>
										{status.type === "success" && (
											<CheckCircle className="w-5 h-5 flex-shrink-0" />
										)}
										{status.type === "error" && (
											<AlertCircle className="w-5 h-5 flex-shrink-0" />
										)}
										{status.type === "loading" && (
											<div className="w-5 h-5 border-2 border-blue-300 border-t-transparent rounded-full animate-spin" />
										)}
										<p className="text-sm">
											{status.message}
										</p>
									</div>
								)}

								{/* Name & Email Row */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="block text-gray-300 text-sm font-medium mb-2">
											Your Name *
										</label>
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleChange}
											required
											disabled={status.type === "loading"}
											className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg 
                               text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                               focus:ring-purple-500 focus:border-transparent transition
                               disabled:opacity-50 disabled:cursor-not-allowed"
											placeholder="John Doe"
										/>
									</div>

									<div>
										<label className="block text-gray-300 text-sm font-medium mb-2">
											Your Email *
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											required
											disabled={status.type === "loading"}
											className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg 
                               text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                               focus:ring-purple-500 focus:border-transparent transition
                               disabled:opacity-50 disabled:cursor-not-allowed"
											placeholder="john@example.com"
										/>
									</div>
								</div>

								{/* Subject */}
								<div>
									<label className="block text-gray-300 text-sm font-medium mb-2">
										Subject *
									</label>
									<input
										type="text"
										name="subject"
										value={formData.subject}
										onChange={handleChange}
										required
										disabled={status.type === "loading"}
										className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg 
                             text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                             focus:ring-purple-500 focus:border-transparent transition
                             disabled:opacity-50 disabled:cursor-not-allowed"
										placeholder="What's this about?"
									/>
								</div>

								{/* Message */}
								<div>
									<label className="block text-gray-300 text-sm font-medium mb-2">
										Your Message *
									</label>
									<textarea
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={5}
										disabled={status.type === "loading"}
										className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg 
                             text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                             focus:ring-purple-500 focus:border-transparent transition resize-none
                             disabled:opacity-50 disabled:cursor-not-allowed"
										placeholder="Tell me about your project or just say hi..."
									/>
								</div>

								{/* Submit Button */}
								<button
									type="submit"
									disabled={status.type === "loading"}
									className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 
                           hover:from-purple-700 hover:to-pink-700 text-white rounded-lg 
                           font-medium transition-all transform hover:scale-[1.02] 
                           disabled:opacity-50 disabled:cursor-not-allowed
                           flex items-center justify-center gap-2 group"
								>
									{status.type === "loading" ? (
										<>
											<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
											Sending...
										</>
									) : (
										<>
											Send Message
											<Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
										</>
									)}
								</button>

								{/* Privacy Note */}
								<p className="text-xs text-gray-500 text-center mt-4">
									Your information will be kept confidential.
									I'll respond within 24 hours.
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
