'use client'
import { useEffect, useRef, useState } from 'react'
import { useScrollTo } from '../hooks/useScrollTo'

export default function Navigation() {  const [navTop, setNavTop] = useState('37.25vh')
  const [showName, setShowName] = useState(false)
  const [showTopbarName, setShowTopbarName] = useState(false)
  const [typedName, setTypedName] = useState('')
  const [showSidebar, setShowSidebar] = useState(false)
  const [fadeFast, setFadeFast] = useState(false)
  const [isTopbar, setIsTopbar] = useState(false)
  const [showTopbarBg, setShowTopbarBg] = useState(false)
  const navRef = useRef(null)
  const fullName = 'Lucas Lotze'
  const scrollToSection = useScrollTo()

  // Responsive: switch to topbar if width < 1318px
  useEffect(() => {
    function handleResize() {
      setIsTopbar(window.innerWidth < 1318)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  // Typing animation effect
  useEffect(() => {
    let typingTimeout
    const shouldShowName = isTopbar ? showTopbarName : showName
    
    if (shouldShowName && typedName.length < fullName.length) {
      typingTimeout = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length + 1))
      }, 60)
    }
    if (!shouldShowName && typedName.length > 0) {
      typingTimeout = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length - 1))
      }, 30)
    }
    return () => clearTimeout(typingTimeout)
  }, [showName, showTopbarName, typedName, fullName, isTopbar])
  useEffect(() => {
    function handleScroll() {
      if (!navRef.current) return
      const hero = document.getElementById('home')
      if (!hero) return
      const navHeight = navRef.current.offsetHeight
      const heroRect = hero.getBoundingClientRect()
      const heroCenter = heroRect.top + heroRect.height / 2 - navHeight / 2
      
      // For sidebar (desktop)
      if (!isTopbar) {
        if (heroCenter < 56) {
          setNavTop('56px')
          setShowName(true)
          setFadeFast(true)
        } else {
          setNavTop(`${heroCenter}px`)
          setShowName(false)
          setFadeFast(false)
        }
      } else {
        // For topbar (mobile), show background when scrolled past hero
        const scrollY = window.scrollY
        const heroHeight = hero.offsetHeight
        
        // Get the hero title element to check if it's scrolled past
        const heroTitle = hero.querySelector('h1')
        const heroTitleRect = heroTitle ? heroTitle.getBoundingClientRect() : null
        
        if (scrollY > heroHeight * 0.3) { // Show pill when scrolled 30% past hero
          setShowTopbarBg(true)
        } else {
          setShowTopbarBg(false)
        }
        
        // Show name when hero title is scrolled past the top
        if (heroTitleRect && heroTitleRect.bottom < 80) {
          setShowTopbarName(true)
        } else {
          setShowTopbarName(false)
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [isTopbar])

  // Sidebar fade-in sync with Hero
  useEffect(() => {
    const checkSidebarTrigger = () => {
      const trigger = document.getElementById('sidebar-trigger')
      if (trigger) setShowSidebar(true)
    }
    // Check on mount and after a short delay
    checkSidebarTrigger()
    const interval = setInterval(checkSidebarTrigger, 100)
    setTimeout(() => clearInterval(interval), 2200)
    return () => clearInterval(interval)
  }, [])

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ]

  return (    <nav
      ref={navRef}
      className={
        isTopbar
          ? `flex fixed top-4 left-1/2 transform -translate-x-1/2 z-40 flex-row items-center justify-center gap-4 px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap ${fadeFast ? 'duration-200' : 'duration-500'} ${showSidebar ? 'opacity-100 animate-fade-in-left' : 'opacity-0 pointer-events-none'} ${showTopbarBg ? 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg border border-zinc-200/50 dark:border-zinc-700/50' : 'bg-transparent'}`
          : `flex fixed left-8 z-40 flex-col space-y-2 text-gray-500 dark:text-gray-400 transition-opacity ${fadeFast ? 'duration-200' : 'duration-500'} ${showSidebar ? 'opacity-100 animate-fade-in-left' : 'opacity-0 pointer-events-none'}`
      }
      style={
        isTopbar
          ? { top: '1rem', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)', minWidth: 'max-content' }
          : { top: navTop, transition: 'top 0.2s cubic-bezier(0.4,0,0.2,1)' }
      }
    >      {/* Name shows for sidebar mode (desktop) and topbar when hero name is scrolled past */}
      {((isTopbar && showTopbarName) || (!isTopbar)) && (
        <span
          className={`font-bold min-h-[28px] select-none whitespace-nowrap ${isTopbar ? 'text-lg text-gray-900 dark:text-gray-100' : 'text-xl text-gray-900 dark:text-gray-100'}`}
          aria-label="Lucas Lotze"
          style={{
            opacity: typedName.length > 0 ? 1 : 0,
            transition: 'opacity 0.2s',
            letterSpacing: '0.01em',
          }}
        >
          {typedName}
          <span className="inline-block w-2 animate-blink" style={{ opacity: (isTopbar ? showTopbarName : showName) && typedName.length < fullName.length ? 1 : 0 }}>|</span>
        </span>
      )}
      
      {/* Navigation Links */}
      <div className={isTopbar ? 'flex flex-row gap-6' : 'flex flex-col gap-2'}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="px-2 py-1 text-left rounded transition-colors hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
          >
            {link.label}
          </button>
        ))}
      </div>
      <style jsx>{`
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          to {
            opacity: 0;
          }
        }
        .animate-fade-in-left {
          animation: fadeInLeft ${fadeFast ? '0.2s' : '0.8s'} cubic-bezier(0.4,0,0.2,1);
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
    </nav>
  )
}
