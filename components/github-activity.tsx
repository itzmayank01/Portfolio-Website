'use client'

import { useEffect, useMemo, useState } from 'react'
import { Calendar } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { profile } from '@/lib/site-data'

type Day = { date: string; count: number; level: number }

const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

const LEVEL_COLORS = [
  'bg-muted/40 dark:bg-[#161b22] border-transparent',
  'bg-emerald-950/70 dark:bg-[#0e4429] border-emerald-800/30',
  'bg-emerald-700/80 dark:bg-[#006d32] border-emerald-600/40',
  'bg-emerald-500 dark:bg-[#26a641] border-emerald-400/50',
  'bg-emerald-400 dark:bg-[#39d353] border-emerald-300 shadow-[0_0_8px_rgba(57,211,83,0.6)]',
]

const handle = profile.github.replace('https://github.com/', '').replace(/\/+$/, '')

// Group a flat list of days into GitHub-style week columns (Sun → Sat),
// padding the leading days of the first partial week with nulls.
function buildWeeks(days: Day[]): (Day | null)[][] {
  const weeks: (Day | null)[][] = []
  let current: (Day | null)[] = []

  days.forEach((day, idx) => {
    const weekday = new Date(`${day.date}T00:00:00`).getDay()
    if (idx === 0 && weekday !== 0) {
      for (let i = 0; i < weekday; i++) current.push(null)
    }
    current.push(day)
    if (weekday === 6) {
      weeks.push(current)
      current = []
    }
  })

  if (current.length) {
    while (current.length < 7) current.push(null)
    weeks.push(current)
  }
  return weeks
}

function computeStats(days: Day[]) {
  let longest = 0
  let running = 0
  for (const d of days) {
    if (d.count > 0) {
      running++
      longest = Math.max(longest, running)
    } else {
      running = 0
    }
  }

  let current = 0
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].count > 0) current++
    else break
  }

  const activeDays = days.filter((d) => d.count > 0).length
  return { longest, current, activeDays }
}

export function GithubActivity() {
  const [days, setDays] = useState<Day[] | null>(null)
  const [total, setTotal] = useState<number | null>(null)
  const [failed, setFailed] = useState(false)
  const [hoveredCell, setHoveredCell] = useState<{
    count: number
    date: string
    x: number
    y: number
  } | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch('/api/github-contributions')
      .then((res) => {
        if (!res.ok) throw new Error(`status ${res.status}`)
        return res.json()
      })
      .then((data: { total: number; contributions: Day[] }) => {
        if (cancelled) return
        setDays(data.contributions ?? [])
        setTotal(data.total ?? 0)
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const weeks = useMemo(() => (days ? buildWeeks(days) : []), [days])
  const stats = useMemo(
    () => (days ? computeStats(days) : { longest: 0, current: 0, activeDays: 0 }),
    [days],
  )

  // Month labels aligned to the first week that starts a new month.
  const monthLabels = useMemo(
    () =>
      weeks.map((week, i) => {
        const first = week.find(Boolean) as Day | undefined
        if (!first) return ''
        const month = new Date(`${first.date}T00:00:00`).getMonth()
        const prev = weeks[i - 1]?.find(Boolean) as Day | undefined
        const prevMonth = prev
          ? new Date(`${prev.date}T00:00:00`).getMonth()
          : -1
        return month !== prevMonth ? MONTH_NAMES[month] : ''
      }),
    [weeks],
  )

  const loading = days === null && !failed
  // Skeleton columns keep the layout stable while the live data loads.
  const skeletonWeeks = 53

  const formatCount = (n: number | null) =>
    n === null ? '—' : n.toLocaleString()

  return (
    <section id="activity" className="px-4 py-20 sm:py-28 relative">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <Reveal>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
              GitHub <span className="text-primary">Contributions</span>
            </h2>
            <p className="mt-3 max-w-md text-sm sm:text-base text-muted-foreground">
              Live from my GitHub profile — real contributions, automated
              deployments, and continuous integration workflows.
            </p>
          </Reveal>

          {/* Quick Metrics (live) */}
          <Reveal delay={100} className="flex gap-3 sm:gap-4">
            <div className="hover-lift flex items-center gap-3 rounded-xl border border-border/80 bg-card/70 backdrop-blur px-4 py-3 shadow-sm">
              <div className="grid h-9 w-9 shrink-0 place-items-center text-lg leading-none">
                <span aria-hidden>📈</span>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  Total
                </p>
                <p className="font-display text-lg sm:text-xl font-bold text-foreground tabular-nums">
                  {formatCount(total)}
                </p>
              </div>
            </div>

            <div className="hover-lift flex items-center gap-3 rounded-xl border border-border/80 bg-card/70 backdrop-blur px-4 py-3 shadow-sm">
              <div className="grid h-9 w-9 shrink-0 place-items-center text-lg leading-none">
                <span aria-hidden>🔥</span>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  Streak
                </p>
                <p className="font-display text-lg sm:text-xl font-bold text-foreground tabular-nums">
                  {days ? `${stats.current} Days` : '—'}
                </p>
              </div>
            </div>

            <div className="hover-lift flex items-center gap-3 rounded-xl border border-border/80 bg-card/70 backdrop-blur px-4 py-3 shadow-sm">
              <div className="grid h-9 w-9 shrink-0 place-items-center text-lg leading-none">
                <span aria-hidden>🏆</span>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  Longest
                </p>
                <p className="font-display text-lg sm:text-xl font-bold text-foreground tabular-nums">
                  {days ? `${stats.longest} Days` : '—'}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Heatmap Card */}
        <Reveal delay={150} className="mt-10">
          <div className="relative rounded-3xl border border-border/90 bg-card/80 dark:bg-[#0d1117] backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden">
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Calendar className="h-4 w-4 text-primary" />
                <span>
                  {total === null
                    ? 'Loading contributions…'
                    : `${total.toLocaleString()} contributions in the last year`}
                </span>
              </div>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-medium text-primary hover:underline"
              >
                @{handle}
              </a>
            </div>

            {failed ? (
              <div className="py-14 text-center">
                <p className="text-sm font-semibold text-muted-foreground">
                  Couldn&apos;t load live contributions right now.
                </p>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-bold text-primary hover:underline"
                >
                  View the graph on GitHub →
                </a>
              </div>
            ) : (
              <>
                {/* Months Row */}
                <div className="relative overflow-x-auto pb-4 pt-6 scrollbar-thin">
                  <div className="min-w-[720px]">
                    {/* Month labels */}
                    <div className="flex gap-1 pl-8 pr-2 text-[11px] font-mono text-muted-foreground">
                      {(loading
                        ? Array.from({ length: skeletonWeeks }, () => '')
                        : monthLabels
                      ).map((label, i) => (
                        <span key={i} className="flex-1 min-w-0">
                          {label}
                        </span>
                      ))}
                    </div>

                    {/* Main Grid with Day Labels */}
                    <div className="mt-2 flex gap-2">
                      {/* Days column */}
                      <div className="flex flex-col justify-between py-1 text-[10px] font-mono text-muted-foreground leading-none">
                        <span>Mon</span>
                        <span>Wed</span>
                        <span>Fri</span>
                      </div>

                      {/* Week Columns */}
                      <div className="flex flex-1 gap-1">
                        {loading
                          ? Array.from({ length: skeletonWeeks }).map((_, wIdx) => (
                              <div key={wIdx} className="flex flex-col gap-1 flex-1">
                                {Array.from({ length: 7 }).map((__, dIdx) => (
                                  <div
                                    key={dIdx}
                                    className="aspect-square w-full rounded-[3px] border border-transparent bg-muted/40 dark:bg-[#161b22] animate-pulse"
                                  />
                                ))}
                              </div>
                            ))
                          : weeks.map((week, wIdx) => (
                              <div key={wIdx} className="flex flex-col gap-1 flex-1">
                                {week.map((day, dIdx) =>
                                  day ? (
                                    <div
                                      key={dIdx}
                                      onMouseEnter={(e) => {
                                        const rect =
                                          e.currentTarget.getBoundingClientRect()
                                        setHoveredCell({
                                          count: day.count,
                                          date: day.date,
                                          x: rect.left + rect.width / 2,
                                          y: rect.top,
                                        })
                                      }}
                                      onMouseLeave={() => setHoveredCell(null)}
                                      className={`aspect-square w-full rounded-[3px] border transition-transform duration-150 hover:scale-125 hover:z-20 cursor-pointer ${
                                        LEVEL_COLORS[day.level]
                                      }`}
                                    />
                                  ) : (
                                    <div
                                      key={dIdx}
                                      className="aspect-square w-full rounded-[3px] border border-transparent"
                                    />
                                  ),
                                )}
                              </div>
                            ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom bar & Legend */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                  <span className="font-mono text-[11px]">
                    {days
                      ? `${stats.activeDays} active days in the last year`
                      : 'Learn how we count contributions'}
                  </span>

                  <div className="flex items-center gap-1.5 font-mono text-[11px]">
                    <span>Less</span>
                    {LEVEL_COLORS.map((colorClass, i) => (
                      <div
                        key={i}
                        className={`h-3 w-3 rounded-[2px] border ${colorClass}`}
                      />
                    ))}
                    <span>More</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </Reveal>

        {/* Hover Tooltip */}
        {hoveredCell && (
          <div
            style={{
              position: 'fixed',
              left: `${hoveredCell.x}px`,
              top: `${hoveredCell.y - 45}px`,
              transform: 'translateX(-50%)',
              zIndex: 50,
            }}
            className="pointer-events-none rounded-lg bg-popover/95 backdrop-blur border border-border px-3 py-1.5 text-xs shadow-xl text-center font-mono whitespace-nowrap"
          >
            <strong>
              {hoveredCell.count === 0 ? 'No' : hoveredCell.count} contributions
            </strong>{' '}
            on {hoveredCell.date}
          </div>
        )}
      </div>
    </section>
  )
}
