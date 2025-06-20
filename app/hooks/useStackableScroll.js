'use client'
import { useCallback, useRef } from 'react'

export const useStackableScroll = () => {
  const expandedSectionsRef = useRef(new Set())
  const lastExpandedRef = useRef(null)

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  }

  const smoothScrollTo = useCallback((targetPosition) => {
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = Math.abs(distance) > 1000 ? 1000 : Math.abs(distance) * 0.8
    
    let startTime = null

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

  const handleSectionToggle = useCallback((sectionId, isExpanding, expandedSections, scrollToAperturePM) => {
    // Update the ref with current expanded sections
    const currentExpandedSections = Object.keys(expandedSections).filter(key => expandedSections[key])
    expandedSectionsRef.current = new Set(currentExpandedSections)

    // Track the last expanded section
    if (isExpanding) {
      lastExpandedRef.current = sectionId
    }

    // Wait for DOM update
    setTimeout(() => {
      const allExpandedSectionIds = Array.from(expandedSectionsRef.current)
      
      if (allExpandedSectionIds.length === 0) {
        // No sections expanded, return to regular AperturePM view
        scrollToAperturePM()
        return
      }

      // Get the AperturePM card to calculate relative positioning
      const apertureCard = document.getElementById('aperturepm-card')
      if (!apertureCard) return

      // Define section order for prioritization
      const sectionOrder = ['technical', 'features', 'lessons']
      
      // Sort expanded sections by their order (lowest = highest priority)
      const sortedExpandedSections = allExpandedSectionIds.sort((a, b) => {
        return sectionOrder.indexOf(a) - sectionOrder.indexOf(b)
      })

      // Get all expanded section elements
      const expandedElements = sortedExpandedSections
        .map(id => {
          const element = document.getElementById(`${id}-section`)
          return element ? { id, element } : null
        })
        .filter(Boolean)

      if (expandedElements.length === 0) return

      // Calculate positions for all expanded sections
      const sectionPositions = expandedElements.map(({ id, element }) => {
        const rect = element.getBoundingClientRect()
        return {
          id,
          element,
          top: rect.top + window.pageYOffset,
          bottom: rect.bottom + window.pageYOffset,
          height: rect.height
        }
      })

      const windowHeight = window.innerHeight
      const apertureRect = apertureCard.getBoundingClientRect()
      const apertureBottom = apertureRect.bottom + window.pageYOffset

      // Find the lowest (last in order) expanded section
      const lowestSection = sectionPositions[sectionPositions.length - 1]
      
      // Calculate target scroll position
      let targetScroll

      if (allExpandedSectionIds.length === 1) {
        // Only one section expanded - position it to show the entire AperturePM card bottom
        let marginFromBottom
        if (lowestSection.id === 'features') {
            marginFromBottom = 112
            } else if (lowestSection.id === 'technical') {
            marginFromBottom = 186
            } else if (lowestSection.id === 'lessons') {
            marginFromBottom = 40   
            }
            
        targetScroll = lowestSection.bottom - windowHeight + marginFromBottom
      } else if (allExpandedSectionIds.length === 2) {
        // Two sections expanded - prioritize the lowest one
        const marginFromBottom = 40
        targetScroll = lowestSection.bottom - windowHeight + marginFromBottom
      } else {
        // Three sections expanded - check if we can show the most recent while keeping the lowest visible
        const lastExpandedElement = document.getElementById(`${lastExpandedRef.current}-section`)
        if (lastExpandedElement) {
          const lastExpandedRect = lastExpandedElement.getBoundingClientRect()
          const lastExpandedTop = lastExpandedRect.top + window.pageYOffset
          const lastExpandedHeight = lastExpandedRect.height
          
          // Try to position to show the lowest section bottom
          const idealScroll = lowestSection.bottom - windowHeight + 40
          
          // Check if the most recently expanded section would be visible
          const lastExpandedBottomAtIdealScroll = lastExpandedTop + lastExpandedHeight - idealScroll
          const lastExpandedTopAtIdealScroll = lastExpandedTop - idealScroll
          
          // If the most recent section wouldn't be fully visible, adjust
          if (lastExpandedTopAtIdealScroll < 0 || lastExpandedBottomAtIdealScroll > windowHeight) {
            // Position to show the most recent section with some padding
            targetScroll = lastExpandedTop - 60
          } else {
            // The lowest section positioning works for showing the most recent too
            targetScroll = idealScroll
          }
        } else {
          // Fallback to lowest section
          targetScroll = lowestSection.bottom - windowHeight + 40
        }
      }

      // Ensure we don't scroll past the AperturePM card boundaries
      const apertureTop = apertureRect.top + window.pageYOffset
      targetScroll = Math.max(apertureTop - 100, targetScroll)
      targetScroll = Math.max(0, targetScroll)

      smoothScrollTo(targetScroll)
    }, 250) // Wait for expansion animation to complete
  }, [smoothScrollTo])

  return { handleSectionToggle }
}