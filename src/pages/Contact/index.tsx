// src/pages/Contact/Index.tsx
import React, { useRef, useState } from "react";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { useInViewRepeat } from "../../utils/functions";

export default function Contact() {
  const { triggerRef, visible } = useInViewRepeat();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // nanti bisa dihubungkan ke backend/email service
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Contact Me
        </h2>
        <p className="text-gray-700 mb-12 text-center">
          Feel free to reach out via social media or send me a message directly.
        </p>

        <div
          ref={triggerRef}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Social Media */}
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com/RandyLab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg shadow-sm transition"
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/randyandal/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg shadow-sm transition"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a
              href="mailto:randy@example.com"
              className="flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg shadow-sm transition"
            >
              <Mail className="w-5 h-5" /> Email
            </a>
            <a
              href="https://www.instagram.com/randyandal/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-pink-50 hover:bg-pink-100 text-pink-600 rounded-lg shadow-sm transition"
            >
              <Instagram className="w-5 h-5" /> Instagram
            </a>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-8 shadow-md max-w-2xl mx-auto flex flex-col gap-4"
          >
            {submitted && (
              <p className="text-green-600 text-center font-medium">
                Thank you! Your message has been sent.
              </p>
            )}

            <label className="flex flex-col">
              <span className="text-gray-700 font-medium mb-1">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-gray-700 font-medium mb-1">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-gray-700 font-medium mb-1">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
              />
            </label>

            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
