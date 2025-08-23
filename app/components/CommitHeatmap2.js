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
    '2025-07-14': 3,
    '2025-07-15': 1,
    '2025-07-16': 5,
    '2025-07-17': 8,
    '2025-07-18': 6,
    '2025-07-19': 9,
    '2025-07-20': 5,
    '2025-07-21': 7,
    '2025-07-22': 1,
    '2025-07-23': 3, 
    '2025-07-24': 9, 
    '2025-07-25': 9,
    '2025-07-26': 8, 
    '2025-07-27': 0,
    '2025-07-28': 8,
    '2025-07-29': 9, 
    '2025-07-30': 4,
    '2025-07-31': 3, 

    // August 2025
    '2025-08-01': 1,
    '2025-08-02': 1,
    '2025-08-03': 0,
    '2025-08-04': 0,
    '2025-08-05': 2,
    '2025-08-06': 2,
    '2025-08-07': 2,
    '2025-08-08': 0,
    '2025-08-09': 0,
    '2025-08-10': 0,
    '2025-08-11': 0,
    '2025-08-12': 0,
    '2025-08-13': 0,
    '2025-08-14': 0,
    '2025-08-15': 0,
    '2025-08-16': 0,
    '2025-08-17': 0,
    '2025-08-18': 0,
    '2025-08-19': 0,
    '2025-08-20': 8,
    '2025-08-21': 8,
    '2025-08-22': 10,
    '2025-08-23': 0,
    '2025-08-24': 0,
    '2025-08-25': 0,
    '2025-08-26': 0,
    '2025-08-27': 0,
    '2025-08-28': 0,
    '2025-08-29': 0,
    '2025-08-30': 0,
    '2025-08-31': 0,
  }

  const createCalendarData = () => {
    const startDate = new Date('2025-07-09T12:00:00-04:00') 
    const endDate = new Date('2025-08-31T12:00:00-04:00')  
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
     if (level === 0) return 'bg-zinc-100 dark:bg-zinc-800 border border-[#f1f1f2] dark:border-[#252529]'
    
    if (!isInRange) return 'bg-[#ebedf0] dark:bg-[#161b22] border border-[#e8eaed] dark:border-[#14191f]'
    
    const colors = {
      1: 'bg-[#9be9a8] dark:bg-[#0e4429] border border-[#95e5a3] dark:border-[#0c3f26]', // light green
      2: 'bg-[#40c463] dark:bg-[#006d32] border border-[#3cbf5e] dark:border-[#00652f]', // medium green
      3: 'bg-[#30a14e] dark:bg-[#26a641] border border-[#2e9e4b] dark:border-[#24a03f]', // dark green
      4: 'bg-[#216e39] dark:bg-[#39d353] border border-[#206a37] dark:border-[#37ce50]'  // darkest green
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

  // Dates to show "Critical BSOD issues"
  const bsodDates = [
    '2025-08-03',
    '2025-08-04',
    '2025-08-08',
    '2025-08-09',
    '2025-08-10',
    '2025-08-11',
    '2025-08-12',
    '2025-08-13',
    '2025-08-14',
    '2025-08-15',
    '2025-08-16',
    '2025-08-17',
    '2025-08-18',
    '2025-08-19'
  ];

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
              {bsodDates.includes(hoveredDay.dateStr)
                ? 'Critical BSOD issues'
                : hoveredDay.commits === 0 
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