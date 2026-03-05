import reactIcon from "/src/assets/icons/react.svg";
import randy from "/src/assets/img/randyPro.png";

import { Typewriter } from "react-simple-typewriter";
import { useInViewRepeat } from "/src/utils/functions";

export default function Hero() {
  const { triggerRef, visible } = useInViewRepeat();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 w-full"
    >
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* TEXT SIDE */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          <div ref={triggerRef}>
            <div className={`fade-animation ${visible ? "is-visible" : ""}`}>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-gray-900 whitespace-nowrap">
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
            </div>
          </div>

          {/* BUTTON */}
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <a
              href="#about"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              About Me
            </a>

            <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
              Contact Me
            </button>
          </div>
        </div>

        {/* ICON SIDE */}
        <div className="relative flex items-center justify-center order-1 md:order-2">
          <div ref={triggerRef}>
            <img
              src={randy}
              alt="React Icon"
              className={`w-auto h-128 animate-spin-slow relative fade-animation ${
                visible ? "is-visible" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
