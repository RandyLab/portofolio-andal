// src/pages/Skills/Index.tsx
import SkillGroup from "../../components/SkillGroup";

export default function Skills() {
  return (
    <section className="min-h-screen mt-6 py-12 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">Skills</h2>

        <p className="text-gray-600 max-w-2xl mb-16">
          Technologies and tools I use to build fast, clean, and maintainable
          applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
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

          <SkillGroup
            title="Frontend"
            skills={[
              { name: "React" },
              { name: "Vite" },
              { name: "React Router" },
            ]}
          />

          <SkillGroup
            title="Styling & UI"
            skills={[
              { name: "Tailwind CSS" },
              { name: "Responsive Design" },
              { name: "UI Animation" },
            ]}
          />

          <SkillGroup
            title="Tools & Workflow"
            skills={[
              { name: "Git" },
              { name: "GitHub" },
              { name: "NPM" },
              { name: "Prettier" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
