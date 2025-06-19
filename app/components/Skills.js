"use client";

import {
  SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiPostgresql, SiPrisma, SiPython,
  SiStripe, SiSupabase, SiRailway, SiVercel, SiNodedotjs, SiGithub, SiOpenai
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";

const techIcons = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-gray-100" /> },
  { name: "React", icon: <SiReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "Prisma ORM", icon: <SiPrisma className="text-gray-800 dark:text-gray-200" /> },
  { name: "Python", icon: <SiPython className="text-yellow-500" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "OpenAI", icon: <SiOpenai className="text-gray-900 dark:text-gray-100" /> },
];

const integrationIcons = [
  { name: "Stripe", icon: <SiStripe className="text-indigo-500" /> },
  { name: "Supabase", icon: <SiSupabase className="text-green-600" /> },
  { name: "Railway", icon: <SiRailway className="text-black dark:text-gray-200" /> },
  { name: "Vercel", icon: <SiVercel className="text-black dark:text-gray-200" /> },
  { name: "REST APIs", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-900 dark:text-gray-100" /> },
  { name: "Nodemailer", icon: <SiMaildotru className="text-green-700" /> },
];

export default function Skills() {
  return (    <section
      id="skills"
      className="py-32 min-h-[80vh] flex items-center"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="mb-16 border-b border-zinc-200 dark:border-zinc-700 pb-8">
          <h2 className="text-3xl accent mb-2">Skills & Technologies</h2>
          <p className="text-base max-w-2xl text-gray-700 dark:text-gray-300">
            Technologies I use to build production-ready applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Core Technologies */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-6 tracking-wide uppercase">Core Technologies</h3>
            <ul className="grid grid-cols-3 gap-y-10 gap-x-6">
              {techIcons.map((tech, idx) => (
                <li key={idx} className="flex flex-col items-center gap-2 group">
                  <span className="text-4xl relative scale-hover">
                    {tech.icon}
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-300">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Integrations & Tools */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-6 tracking-wide uppercase">Integrations & Tools</h3>
            <ul className="grid grid-cols-3 gap-y-10 gap-x-6">
              {integrationIcons.map((integration, idx) => (
                <li key={idx} className="flex flex-col items-center gap-2 group">
                  <span className="text-4xl relative scale-hover">
                    {integration.icon}
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-300 text-center">{integration.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Languages */}
        <div className="flex flex-wrap gap-3 mt-20 justify-center">
          <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs text-gray-700 dark:text-gray-200">English (Native)</span>
          <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs text-gray-700 dark:text-gray-200">Spanish (Fluent)</span>
          <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs text-gray-700 dark:text-gray-200">Portuguese (Fluent)</span>
        </div>
      </div>
      <style jsx global>{`
        .scale-hover svg {
          transition: transform 0.18s;
        }
        .scale-hover:hover svg {
          transform: scale(1.13);
        }
      `}</style>
    </section>
  );
}
