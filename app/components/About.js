"use client";

import {
  SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiPostgresql, SiPrisma, SiPython,
  SiStripe, SiSupabase, SiRailway, SiVercel, SiNodedotjs, SiGithub, SiOpenai
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
import { FileText } from "lucide-react";

const coreIcons = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-gray-100" /> },
  { name: "React", icon: <SiReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "Prisma ORM", icon: <SiPrisma className="text-gray-800 dark:text-gray-200" /> },
  { name: "Python", icon: <SiPython className="text-yellow-500" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
];

const integrationIcons = [
  { name: "Stripe", icon: <SiStripe className="text-indigo-500" /> },
  { 
    name: "DocuSign", 
    icon: (
      <img 
        src="/docusign-logo.png" 
        alt="DocuSign" 
        className="w-8 h-8 object-contain"
      />
    )
  },
  { name: "Supabase", icon: <SiSupabase className="text-green-600" /> },
  { name: "Railway", icon: <SiRailway className="text-black dark:text-gray-200" /> },
  { name: "Vercel", icon: <SiVercel className="text-black dark:text-gray-200" /> },
  { name: "OpenAI", icon: <SiOpenai className="text-gray-900 dark:text-gray-100" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-900 dark:text-gray-100" /> },
  { name: "Nodemailer", icon: <SiMaildotru className="text-green-700" /> },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20  flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 border-b border-zinc-200 dark:border-zinc-700 pb-8">
          <h2 className="text-4xl mb-4 accent">About Me</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            Computer Science student at Boston University with a passion for building production-ready applications that solve real-world problems.
          </p>
        </div>        
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - About Text */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              I'm a motivated Computer Science student at Boston University with hands-on experience 
              building and deploying SaaS applications. As a quick learner and full-stack developer with an eye for design, I'm passionate about web development, 
              cybersecurity, and AI.
            </p>
            
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              My approach to development focuses on learning what's needed to solve problems effectively. 
              I've successfully built AperturePM, a multi-tenant property management platform that's 
              currently serving real clients, demonstrating my ability to create production-ready solutions 
              using modern technologies and API integrations.
            </p>
            
            {/* Technologies Grid - Moved under text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Core Technologies</h3>
                <div className="grid grid-cols-3 gap-3">
                  {coreIcons.map((tech, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 group">
                      <span className="text-3xl scale-hover">
                        {tech.icon}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Integrations</h3>
                <div className="grid grid-cols-3 gap-3">
                  {integrationIcons.map((integration, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 group">
                      <span className="text-3xl scale-hover">
                        {integration.icon}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{integration.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Languages - Moved under technologies */}
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs text-gray-700 dark:text-gray-200">
                  English <span className="text-xs text-gray-500 dark:text-gray-400">Native</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs text-gray-700 dark:text-gray-200">
                  Spanish <span className="text-xs text-gray-500 dark:text-gray-400">Fluent</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs text-gray-700 dark:text-gray-200">
                  Portuguese <span className="text-xs text-gray-500 dark:text-gray-400">Fluent</span>
                </span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Education Card */}
          <div className="lg:col-span-1">
            <div className="card p-6 h-fit">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Education</h3>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p className="flex items-center gap-2">
                  Boston University
                  <img src="/bu-logo-gray.png" alt="Boston University Logo" className="h-15 w-15 -m-5 -ml-4 object-contain grayscale" />
                </p>
                <p> Major: Computer Science</p>
                <p> Minor: Business Administration and Management</p>
                <p> Boston, MA 02215</p>
                <p> Expected Graduation: Fall 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .scale-hover svg {
          transition: transform 0.18s;
        }
        .scale-hover:hover svg {
          transform: scale(1.13);
        }
        .scale-hover img {
          transition: transform 0.18s;
        }
        .scale-hover:hover img {
          transform: scale(1.13);
        }
      `}</style>
    </section>
  )
}
