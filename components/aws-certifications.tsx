'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { BadgeCheck } from 'lucide-react'
import { HexBadge } from '@/components/hex-badge'
import { certifications, earnedCount, totalCount } from '@/lib/certifications'
import { social } from '@/lib/site-data'

const PROGRESS = Math.round((earnedCount / totalCount) * 100) // 25

export function AwsCertifications() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  // Entrance (once)
  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.2 },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

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
        <div ref={sectionRef} className="relative mt-12 grid gap-10 lg:grid-cols-[300px_1fr] lg:items-center">
          {/* Left: jacket + progress */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative w-full max-w-[280px]">
              <Image
                src={social.jacketImage}
                alt="AWS golden jacket — awarded for holding all current AWS certifications"
                width={640}
                height={800}
                className="h-auto w-full"
                priority={false}
              />
            </div>

            {/* Progress */}
            <div className="mt-6 w-full max-w-[280px]">
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
          <div className="honeycomb relative z-10">
            {[
              [0, 4],
              [4, 8],
              [8, 12],
            ].map(([start, end], ri) => (
              <div key={ri} className={`hc-row ${ri === 1 ? 'hc-row-offset' : ''}`}>
                {certifications.slice(start, end).map((cert) => (
                  <HexBadge key={cert.name} cert={cert} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
