'use client'
import { useCallback, useRef } from 'react'

export const useScrollTo = () => {
  const lastScrolledSection = useRef(null)

  const scrollToSection = useCallback((sectionId, offset = 20, forceScroll = false) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    // For short screens, increase offset so header isn't covered by sidebar
    let adjustedOffset = offset
    if (window.innerHeight <= 956 && (sectionId === 'contact' || sectionId === 'get-in-touch')) {
      adjustedOffset = offset + 32
    }

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const currentScroll = window.pageYOffset
    const targetPosition = elementPosition - adjustedOffset

    // If we're calling the same section and already close to it, don't scroll (unless forced)
    if (!forceScroll && lastScrolledSection.current === sectionId && Math.abs(currentScroll - targetPosition) < 50) {
      return
    }

    lastScrolledSection.current = sectionId

    // Use native smooth scroll for mobile/short screens if available
    if (window.innerHeight <= 956 && 'scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
      return
    }

    // Custom animation for desktop/large screens
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = Math.abs(distance) > 1000 ? 1000 : Math.abs(distance) * 0.5 // Adaptive duration

    let startTime = null

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    }

    const animateScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      
      const ease = easeInOutCubic(progress)
      const currentPosition = startPosition + distance * ease
      
      window.scrollTo(0, currentPosition)
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }, [])

  return { 
    scrollToSection, 
    setLastScrolled: (sectionId) => { lastScrolledSection.current = sectionId } 
  }
}
