'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { BadgeCheck } from 'lucide-react'
import { HexBadge } from '@/components/hex-badge'
import { certifications, earnedCount, totalCount } from '@/lib/certifications'
import { social } from '@/lib/site-data'

const PROGRESS = Math.round((earnedCount / totalCount) * 100) // 25
// Jacket desaturation is tied to progress: at 3/12 it is ~a quarter of the way
// to full gold, i.e. grayscale(0.75).
const JACKET_GRAYSCALE = (1 - earnedCount / totalCount).toFixed(2)

export function AwsCertifications() {
  const flowRef = useRef<HTMLDivElement>(null)
  const jacketRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [active, setActive] = useState(false)
  const [paths, setPaths] = useState<string[]>([])
  const [size, setSize] = useState({ w: 0, h: 0 })

  // Entrance (once) + pause loops when off-screen
  useEffect(() => {
    const node = flowRef.current
    if (!node) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
        setActive(entry.isIntersecting)
      },
      { threshold: 0.2 },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  // Measure curved paths from each earned badge toward the jacket
  const computePaths = useCallback(() => {
    const wrap = flowRef.current
    const jak = jacketRef.current
    if (!wrap || !jak) return
    const wr = wrap.getBoundingClientRect()
    const jr = jak.getBoundingClientRect()
    const jx = jr.left - wr.left + jr.width / 2
    const jy = jr.top - wr.top + jr.height * 0.42
    const badges = Array.from(
      wrap.querySelectorAll<HTMLElement>('[data-earned-badge]'),
    )
    const next = badges.map((b) => {
      const br = b.getBoundingClientRect()
      const bx = br.left - wr.left + br.width / 2
      const by = br.top - wr.top + br.height / 2
      const mx = (jx + bx) / 2
      const my = (jy + by) / 2 - 50
      return `M ${bx.toFixed(1)} ${by.toFixed(1)} Q ${mx.toFixed(1)} ${my.toFixed(1)} ${jx.toFixed(1)} ${jy.toFixed(1)}`
    })
    setSize({ w: wr.width, h: wr.height })
    setPaths(next)
  }, [])

  useEffect(() => {
    let raf = 0
    const run = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(computePaths)
    }
    run()
    const ro = new ResizeObserver(run)
    if (flowRef.current) ro.observe(flowRef.current)
    window.addEventListener('resize', run)
    // recompute shortly after mount in case fonts/images shift layout
    const t = setTimeout(run, 400)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(t)
      ro.disconnect()
      window.removeEventListener('resize', run)
    }
  }, [computePaths, inView])

  return (
    <section id="aws-certifications" className="px-4 py-20 sm:py-28 relative">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-foreground">
            The AWS <span className="text-amber-400">Golden Jacket</span>
          </h2>
          <span
            aria-hidden
            className="mx-auto mt-4 block h-1 w-28 rounded-full bg-gradient-to-r from-amber-400 to-amber-500"
          />
          <p className="mt-5 text-base sm:text-lg font-bold text-foreground">
            All {totalCount} current AWS certifications — {earnedCount} earned,{' '}
            {totalCount - earnedCount} in progress.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            The full path from Foundational to Specialty.
          </p>
        </div>

        {/* Two columns: jacket | honeycomb */}
        <div
          ref={flowRef}
          className={`relative mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center ${
            active ? '' : 'flow-paused'
          }`}
        >
          {/* Flow overlay (desktop only) */}
          {size.w > 0 && (
            <svg
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
              viewBox={`0 0 ${size.w} ${size.h}`}
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="awsFlowGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.05" />
                  <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#fde68a" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              {paths.map((d, i) => (
                <g key={i}>
                  <path
                    d={d}
                    fill="none"
                    stroke="url(#awsFlowGrad)"
                    strokeWidth={1.5}
                    strokeOpacity={0.35}
                  />
                  <path
                    d={d}
                    fill="none"
                    stroke="#fde68a"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    className="flow-dash"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  />
                </g>
              ))}
            </svg>
          )}

          {/* Left: jacket + progress */}
          <div className="relative z-10 flex flex-col items-center">
            <div
              ref={jacketRef}
              className={`jacket-wrap relative w-full max-w-[320px] ${inView ? 'is-in' : ''}`}
              style={{ ['--jacket-gray' as string]: JACKET_GRAYSCALE }}
            >
              <Image
                src={social.jacketImage}
                alt="AWS golden jacket — awarded for holding all current AWS certifications"
                width={640}
                height={800}
                className="jacket-img h-auto w-full"
                priority={false}
              />
              <span aria-hidden className="jacket-shimmer" />
            </div>

            {/* Progress */}
            <div className="mt-6 w-full max-w-[320px]">
              <div className="flex items-center justify-between text-sm">
                <span className="inline-flex items-center gap-1.5 font-bold text-foreground">
                  <BadgeCheck className="h-4 w-4 text-amber-400" />
                  {earnedCount} of {totalCount} AWS certifications
                </span>
                <span className="font-mono text-xs font-bold text-amber-400">
                  {PROGRESS}%
                </span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="aws-progress-bar h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500"
                  style={{ ['--pct' as string]: inView ? PROGRESS / 100 : 0 }}
                />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                The golden jacket is what AWS gives you for holding every current
                certification at once.
              </p>
            </div>
          </div>

          {/* Right: honeycomb of badges */}
          <div className="relative z-10 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5 lg:grid-cols-4 lg:gap-2.5">
            {certifications.map((cert) => (
              <HexBadge key={cert.name} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
