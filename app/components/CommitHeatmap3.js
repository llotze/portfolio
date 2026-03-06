'use client'
import { useState } from 'react'

export default function CommitHeatmap3() {
  const [hoveredDay, setHoveredDay] = useState(null)

  // Placeholder commit data Nov 1 – Dec 20, 2025 (update with real data)
  const commitData = {
    // November 2025
    '2025-11-01': 0,
    '2025-11-02': 0,
    '2025-11-03': 0,
    '2025-11-04': 0,
    '2025-11-05': 0,
    '2025-11-06': 3,
    '2025-11-07': 0,
    '2025-11-08': 0,
    '2025-11-09': 3,
    '2025-11-10': 3,
    '2025-11-11': 0,
    '2025-11-12': 0,
    '2025-11-13': 0,
    '2025-11-14': 0,
    '2025-11-15': 0,
    '2025-11-16': 0,
    '2025-11-17': 2,
    '2025-11-18': 0,
    '2025-11-19': 1,
    '2025-11-20': 0,
    '2025-11-21': 1,
    '2025-11-22': 0,
    '2025-11-23': 1,
    // Thanksgiving week
    '2025-11-24': 2,
    '2025-11-25': 0,
    '2025-11-26': 0,
    '2025-11-27': 0,
    '2025-11-28': 0,
    '2025-11-29': 0,
    '2025-11-30': 0,
    // December 2025 — final push
    '2025-12-01': 2,
    '2025-12-02': 0,
    '2025-12-03': 0,
    '2025-12-04': 4,
    '2025-12-05': 6,
    '2025-12-06': 0,
    '2025-12-07': 0,
    '2025-12-08': 2,
    '2025-12-09': 1,
    '2025-12-10': 15,
    '2025-12-11': 4,
    '2025-12-12': 0,
    '2025-12-13': 0,
    '2025-12-14': 0,
    '2025-12-15': 0,
    '2025-12-16': 0,
    '2025-12-17': 0,
    '2025-12-18': 0,
    '2025-12-19': 0,
    '2025-12-20': 0,
  }

  const createCalendarData = () => {
    const startDate = new Date('2025-11-01T12:00:00-04:00')
    const endDate = new Date('2025-12-20T12:00:00-05:00')
    const weeks = []
    let currentWeek = []

    const firstWeekStart = new Date(startDate)
    firstWeekStart.setDate(startDate.getDate() - startDate.getDay())

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
    if (commits <= 5) return 1
    if (commits <= 12) return 2
    if (commits <= 20) return 3
    return 4
  }

  const getCommitColor = (level, isInRange) => {
    if (level === 0) return 'bg-zinc-100 dark:bg-zinc-800 border border-[#f1f1f2] dark:border-[#252529]'

    if (!isInRange) return 'bg-[#ebedf0] dark:bg-[#161b22] border border-[#e8eaed] dark:border-[#14191f]'

    const colors = {
      1: 'bg-[#9be9a8] dark:bg-[#0e4429] border border-[#95e5a3] dark:border-[#0c3f26]',
      2: 'bg-[#40c463] dark:bg-[#006d32] border border-[#3cbf5e] dark:border-[#00652f]',
      3: 'bg-[#30a14e] dark:bg-[#26a641] border border-[#2e9e4b] dark:border-[#24a03f]',
      4: 'bg-[#216e39] dark:bg-[#39d353] border border-[#206a37] dark:border-[#37ce50]'
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
            <span>Nov</span>
            <span>Dec</span>
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
        Nov 1 – Dec 20, 2025
      </div>
    </div>
  )
}
