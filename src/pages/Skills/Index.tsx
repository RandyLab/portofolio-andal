// src/pages/Skills/Index.tsx
import SkillGroup from "../../components/SkillGroup";
import { motion } from "framer-motion";

export default function Skills() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen py-20 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Technologies and tools I use to build fast, clean, and maintainable
          applications.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          {/* Languages */}
          <motion.div
            className="bg-gray-200/10 backdrop-blur-xs rounded-xl shadow-md p-6 border border-gray-200"
            variants={fadeInUp}
          >
            <SkillGroup
              title="Languages"
              skills={[
                { name: "HTML" },
                { name: "CSS" },
                { name: "JavaScript" },
                { name: "TypeScript" },
                { name: "Python" },
                { name: "Java" },
                { name: "C++" },
              ]}
            />
          </motion.div>

          {/* Frontend */}
          <motion.div
            className="bg-gray-200/10 backdrop-blur-xs rounded-xl shadow-md p-6 border border-gray-200"
            variants={fadeInUp}
          >
            <SkillGroup
              title="Frontend"
              skills={[
                { name: "React" },
                { name: "Vite" },
                { name: "React Router" },
              ]}
            />
          </motion.div>

          {/* Styling & UI */}
          <motion.div
            className="bg-gray-200/10 backdrop-blur-xs rounded-xl shadow-md p-6 border border-gray-200"
            variants={fadeInUp}
          >
            <SkillGroup
              title="Styling & UI"
              skills={[
                { name: "Tailwind CSS" },
                { name: "Responsive Design" },
                { name: "UI Animation" },
              ]}
            />
          </motion.div>

          {/* Tools & Workflow */}
          <motion.div
            className="bg-gray-200/10 backdrop-blur-xs rounded-xl shadow-md p-6 border border-gray-200"
            variants={fadeInUp}
          >
            <SkillGroup
              title="Tools & Workflow"
              skills={[
                { name: "Git" },
                { name: "GitHub" },
                { name: "NPM" },
                { name: "Prettier" },
              ]}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
