'use client'
import { useCallback } from 'react'

export const useScrollTo = () => {
  const scrollToSection = useCallback((sectionId, offset = 80) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    // Get the element's position relative to the document
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    
    // Calculate the target scroll position with offset
    const targetPosition = elementPosition - offset

    // Use requestAnimationFrame for smooth, custom animation
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = Math.abs(distance) > 1000 ? 1000 : Math.abs(distance) * 0.8 // Adaptive duration
    
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

  return scrollToSection
}
