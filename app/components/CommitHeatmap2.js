'use client'
import { useState } from 'react'

export default function CommitHeatmap2() {
  const [hoveredDay, setHoveredDay] = useState(null)

  // Parse commit data from July 16 - August 21, 2025
  const commitData = {
    // July 2025 (second half)
    '2025-07-09': 0,
    '2025-07-10': 0,
    '2025-07-11': 6,
    '2025-07-12': 25,
    '2025-07-13': 14,
    '2025-07-14': 0,
    '2025-07-15': 0,
    '2025-07-16': 0,
    '2025-07-17': 0,
    '2025-07-18': 0,
    '2025-07-19': 0,
    '2025-07-20': 0,
    '2025-07-21': 0,
    '2025-07-22': 0,
    '2025-07-23': 0, 
    '2025-07-24': 0, 
    '2025-07-25': 0,
    '2025-07-26': 0, 
    '2025-07-27': 0,
    '2025-07-28': 0,
    '2025-07-29': 0, 
    '2025-07-30': 0,
    '2025-07-31': 0, 

    // August 2025
    '2025-08-01': 0,
    '2025-08-02': 0,
    '2025-08-03': 0,
    '2025-08-04': 0,
    '2025-08-05': 0,
    '2025-08-06': 0,
    '2025-08-07': 0,
    '2025-08-08': 0,
    '2025-08-09': 0,
    '2025-08-10': 0,
    '2025-08-11': 0,
    '2025-08-12': 0,
    '2025-08-13': 0,
    '2025-08-14': 0
  }

  const createCalendarData = () => {
    const startDate = new Date('2025-07-09T12:00:00-04:00') 
    const endDate = new Date('2025-08-16T12:00:00-04:00')  
    const weeks = []
    let currentWeek = []
    
    const firstWeekStart = new Date(startDate)
    firstWeekStart.setDate(startDate.getDate() - startDate.getDay()) // Go to Sunday
    
    let currentDate = new Date(firstWeekStart)
    
    while (currentDate <= endDate) {
      const year = currentDate.getFullYear()
      const month = String(currentDate.getMonth() + 1).padStart(2, '0')
      const day = String(currentDate.getDate()).padStart(2, '0')
      const dateStr = `${year}-${month}-${day}`
      
      const commits = commitData[dateStr] || 0
      const isInRange = currentDate >= startDate && currentDate <= endDate
      
      currentWeek.push({
        date: new Date(currentDate),
        dateStr,
        commits,
        isInRange
      })
      
      if (currentWeek.length === 7) {
        weeks.push(currentWeek)
        currentWeek = []
      }
      
      currentDate.setDate(currentDate.getDate() + 1)
    }
    
    if (currentWeek.length > 0) {
      weeks.push(currentWeek)
    }
    
    return weeks
  }

  const getCommitLevel = (commits) => {
    if (commits === 0) return 0
    if (commits <= 3) return 1
    if (commits <= 7) return 2
    if (commits <= 15) return 3
    return 4
  }

  const getCommitColor = (level, isInRange) => {
    // Use the same dimmer color for all 0 commit days (both in and out of range)
    if (level === 0) return 'bg-zinc-100 dark:bg-zinc-800'
    
    // Only show colors for in-range days with commits
    if (!isInRange) return 'bg-zinc-100 dark:bg-zinc-700'
    
    const colors = {
      1: 'bg-green-200 dark:bg-green-900',
      2: 'bg-green-300 dark:bg-green-800',
      3: 'bg-green-400 dark:bg-green-700',
      4: 'bg-green-500 dark:bg-green-600'
    }
    return colors[level]
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  const activeDays = Object.values(commitData).filter(commits => commits > 0).length
  const totalCommits = Object.values(commitData).reduce((a, b) => a + b, 0)
  const weeks = createCalendarData()

  return (
    <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-800/30 rounded-lg">
      <div className="mb-3">
        <div className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-1">Development Activity</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {activeDays} active days, {totalCommits} commits
        </div>
      </div>
      
      {/* Heatmap */}
      <div className="relative">
        <div className="flex justify-center mb-2">
          <div className="grid grid-flow-col gap-1" style={{ gridTemplateRows: 'repeat(7, 1fr)' }}>
            {weeks.map((week, weekIndex) =>
              week.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`w-3 h-3 rounded-xs cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-green-400 hover:ring-opacity-50 ${
                    getCommitColor(getCommitLevel(day.commits), day.isInRange)
                  }`}
                  onMouseEnter={(e) => setHoveredDay({
                    ...day,
                    mouseX: e.clientX,
                    mouseY: e.clientY
                  })}
                  onMouseLeave={() => setHoveredDay(null)}
                />
              ))
            )}
          </div>
        </div>
        
        {/* Month labels */}
        <div className="flex justify-center text-xs text-gray-500 dark:text-gray-400 mb-2">
          <div className="grid grid-cols-2 gap-8">
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <span>Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map(level => (
              <div
                key={level}
                className={`w-2.5 h-2.5 rounded-xs ${getCommitColor(level, true)}`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
        
        {/* Tooltip */}
        {hoveredDay && (
          <div 
            className="fixed px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg whitespace-nowrap z-50 pointer-events-none transform -translate-x-1/2"
            style={{
              left: `${hoveredDay.mouseX}px`,
              top: `${hoveredDay.mouseY - 60}px`,
            }}
          >
            <div className="font-medium">
              {hoveredDay.commits === 0 
                ? 'No commits' 
                : `${hoveredDay.commits} commit${hoveredDay.commits !== 1 ? 's' : ''}`
              }
            </div>
            <div className="opacity-75">
              {formatDate(hoveredDay.date)}
            </div>
          </div>
        )}
      </div>
      
      <div className="text-xs text-gray-400 dark:text-gray-500 mt-2">
        July 6 - August 16, 2025
      </div>
    </div>
  )
}