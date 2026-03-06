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
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// ==============================================
// KONFIGURASI - MUDAH DIUBAH
// ==============================================
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const RECIPIENT_EMAIL = "randibangun9@gmail.com";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/RandyLab",
    icon: Github,
    color: "bg-gray-100 hover:bg-gray-200",
    textColor: "text-gray-900",
    username: "@RandyLab",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/randyandal/",
    icon: Linkedin,
    color: "bg-blue-100 hover:bg-blue-200",
    textColor: "text-blue-800",
    username: "randyandal",
  },
  {
    name: "Email",
    url: `mailto:${RECIPIENT_EMAIL}`,
    icon: Mail,
    color: "bg-red-100 hover:bg-red-200",
    textColor: "text-red-800",
    username: RECIPIENT_EMAIL.split("@")[0],
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/randyandal/",
    icon: Instagram,
    color: "bg-pink-100 hover:bg-pink-200",
    textColor: "text-pink-800",
    username: "@randyandal",
  },
];

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Indonesia",
    color: "text-purple-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: RECIPIENT_EMAIL,
    color: "text-red-500",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    color: "text-green-500",
  },
];

// ==============================================
// KONSTANTE ANIMASI FRAMER MOTION
// ==============================================
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

// ==============================================
// KOMPONEN CONTACT
// ==============================================
export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      const formElement = formRef.current;
      if (formElement) {
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
        EMAILJS_CONFIG.PUBLIC_KEY,
      );

      if (result.text === "OK") {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus({ type: null, message: "" }), 5000);
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
      console.error("EmailJS error:", error);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
            I'm always open to discussing new opportunities and collaborations.
          </p>
        </motion.div>

        {/* Grid Container */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Left - Info Cards */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={cardVariants}
          >
            {/* Contact Info */}
            <motion.div
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
              variants={cardVariants}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {CONTACT_INFO.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg bg-gray-100 flex-shrink-0 ${item.color}`}
                    >
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="text-gray-900 font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
              variants={cardVariants}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((social) => (
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
              <p className="text-sm text-gray-500 text-center mt-4">
                Follow me for updates and tech content
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div className="lg:col-span-3" variants={cardVariants}>
            <motion.div
              className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
              variants={cardVariants}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Send Me a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="to_email" value={RECIPIENT_EMAIL} />

                {/* Status */}
                {status.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg flex items-center gap-3 ${
                      status.type === "success"
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : status.type === "error"
                          ? "bg-red-100 text-red-800 border border-red-200"
                          : "bg-blue-100 text-blue-800 border border-blue-200"
                    }`}
                  >
                    {status.type === "success" && (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    {status.type === "error" && (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    {status.type === "loading" && (
                      <div className="w-5 h-5 border-2 border-blue-800 border-t-transparent rounded-full animate-spin" />
                    )}
                    <p className="text-sm">{status.message}</p>
                  </motion.div>
                )}

                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["name", "email"].map((field) => (
                    <div key={field}>
                      <label className="block text-gray-700 text-sm font-medium mb-2 capitalize">
                        {field === "email" ? "Your Email *" : "Your Name *"}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={formData[field as "name" | "email"]}
                        onChange={handleChange}
                        required
                        disabled={status.type === "loading"}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder={
                          field === "email" ? "john@example.com" : "John Doe"
                        }
                      />
                    </div>
                  ))}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={status.type === "loading"}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={status.type === "loading"}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project or just say hi..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md"
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

                <p className="text-xs text-gray-500 text-center mt-4">
                  Your information will be kept confidential. I'll respond
                  within 24 hours.
                </p>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
