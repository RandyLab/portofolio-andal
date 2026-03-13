import randy from "/src/assets/img/randyPro.png";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pb-6 pt-16 w-full"
    >
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-center">
        {/* TEXT SIDE */}
        <motion.div
          className="order-2 md:order-1 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <p className="text-3xl md:text-5xl font-bold text-gray-900 whitespace-nowrap">
              Randy Andal Bangun
            </p>

            <p className="mt-2 text-2xl md:text-3xl font-semibold text-indigo-600">
              Software Engineer
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-600 italic min-h-[2rem]">
            <Typewriter
              words={[
                "Build modern web experiences.",
                "Vite + React + Tailwind.",
                "Fast. Clean. Scalable.",
                "Python",
                "Java",
                "C++",
                "JavaScript",
                "TypeScript",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </p>

          {/* BUTTON */}
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <a
              href="#about"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              About Me
            </a>

            <a
              href="/contact"
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          className="order-1 md:order-2 grow-1 relative flex items-end md:items-center justify-center md:justify-end h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src={randy}
            alt="Randy Portrait"
            className="min-w-fit h-72 md:h-128"
          />
        </motion.div>
      </div>
    </section>
  );
}
