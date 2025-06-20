'use client'
import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { useScrollTo } from '../hooks/useScrollTo'

export default function Hero() {
  const [showName, setShowName] = useState(false)
  const [showSub, setShowSub] = useState(false)
  const [showDesc, setShowDesc] = useState(false)
  const [showBtns, setShowBtns] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const [showArrow, setShowArrow] = useState(false) 
  const { scrollToSection } = useScrollTo()

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowName(true), 20),
      setTimeout(() => setShowSub(true), 80),
      setTimeout(() => setShowDesc(true), 140),
      setTimeout(() => {
        setShowBtns(true)
        setShowSidebar(true)
      }, 200),
      setTimeout(() => setShowArrow(true), 5200), 
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center transition-colors duration-300 overflow-hidden"
      style={{ paddingTop: '80px', paddingBottom: '60px', background: 'none' }}
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-16 flex flex-col gap-10 md:gap-0 md:flex-row md:items-center md:justify-between">
        {/* Main Info */}
        <div className="flex-1 flex flex-col items-start justify-center gap-6">
          <h1 className={`text-5xl md:text-6xl tracking-tight mb-2 accent transition-opacity duration-500 ${showName ? 'opacity-100 animate-fade-in-left' : 'opacity-0'}`}>
            Lucas Lotze
          </h1>
          <p className={`text-2xl md:text-3xl font-semibold text-gray-500 dark:text-gray-400 transition-opacity duration-500 ${showSub ? 'opacity-100 animate-fade-in-left' : 'opacity-0'}`} style={{ transitionDelay: '0.05s' }}>
            Computer Science Student & Full Stack Developer
          </p>
          <p className={`text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl transition-opacity duration-500 ${showDesc ? 'opacity-100 animate-fade-in-left' : 'opacity-0'}`} style={{ transitionDelay: '0.1s' }}>            Building production-ready SaaS. Creator of <span
  className="font-semibold accent text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
  onClick={() => scrollToSection('projects')}
>
  AperturePM
</span>, a multi-tenant property management platform serving real clients. Passionate about modern web development, automation, and delivering real value through technology.
          </p>          <div className={`flex gap-4 mt-2 transition-opacity duration-500 ${showBtns ? 'opacity-100 animate-fade-in-left' : 'opacity-0'}`} style={{ transitionDelay: '0.15s' }}>            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 px-5 py-2 text-gray-700 dark:text-gray-300 bg-zinc-50 dark:bg-zinc-800/30 rounded-md transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none group"
            >
              <Mail size={18} className="text-gray-400 dark:text-gray-400 transition-transform group-hover:translate-y-0.5" />
              Contact Me
            </button>
            
            {/* Add this resume download button */}
            <a
              href="/portfolio/Lucas-Lotze-Resume.pdf"
              download="Lucas-Lotze-Resume.pdf"
              className="flex items-center gap-2 px-5 py-2 text-gray-700 dark:text-gray-300 bg-zinc-50 dark:bg-zinc-800/30 rounded-md transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
        {/* Socials */}
        <div className={`flex flex-col items-center md:items-end md:justify-center gap-4 md:ml-10 mt-10 md:mt-0 transition-opacity duration-500 ${showBtns ? 'opacity-100 animate-fade-in-left' : 'opacity-0'}`} style={{ transitionDelay: '0.15s' }}>
          <div className="flex flex-row gap-5 justify-center">
            <a
              href="https://github.com/llotze"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-lotze-79b777340"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={30} />
            </a>
          </div>
        </div>
      </div>
      {/* Down Arrow */}
      <div className="absolute left-1/2 bottom-10 -translate-x-1/2">
        <span
          className={`inline-block animate-bounce rounded-full bg-blue-100 dark:bg-blue-900 p-3 transition-opacity duration-700 ${
            showArrow ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ArrowDown size={28} className="text-blue-600 dark:text-blue-400" />
        </span>
      </div>
      <style jsx>{`
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
      {/* Sidebar trigger for Navigation */}
      {showSidebar && <span id="sidebar-trigger" style={{ display: 'none' }} />}
    </section>
  )
}
