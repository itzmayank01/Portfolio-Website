'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle day and night theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'group relative h-9 w-[68px] shrink-0 overflow-hidden rounded-full border border-border/70 shadow-inner transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className,
      )}
    >
      {/* Sky */}
      <span
        aria-hidden
        className={cn(
          'absolute inset-0 transition-opacity duration-500',
          isDark ? 'opacity-0' : 'opacity-100',
        )}
        style={{
          background: 'linear-gradient(160deg, #bfe3ff 0%, #9ecbff 55%, #cfeecf 100%)',
        }}
      />
      <span
        aria-hidden
        className={cn(
          'absolute inset-0 transition-opacity duration-500',
          isDark ? 'opacity-100' : 'opacity-0',
        )}
        style={{
          background: 'linear-gradient(160deg, #2a2a6a 0%, #35357f 55%, #223b52 100%)',
        }}
      />

      {/* Stars (night) */}
      <span
        aria-hidden
        className={cn(
          'absolute inset-0 transition-opacity duration-500',
          isDark ? 'opacity-90' : 'opacity-0',
        )}
      >
        <span className="absolute left-3 top-2 h-[2px] w-[2px] rounded-full bg-white" />
        <span className="absolute left-6 top-4 h-[2px] w-[2px] rounded-full bg-white/80" />
        <span className="absolute left-4 top-5 h-[1.5px] w-[1.5px] rounded-full bg-white/70" />
        <span className="absolute left-8 top-1.5 h-[1.5px] w-[1.5px] rounded-full bg-white/70" />
      </span>

      {/* Clouds (day) */}
      <span
        aria-hidden
        className={cn(
          'absolute right-2 top-2 flex gap-0.5 transition-opacity duration-500',
          isDark ? 'opacity-0' : 'opacity-100',
        )}
      >
        <span className="h-1.5 w-4 rounded-full bg-white/90" />
      </span>

      {/* Mountains */}
      <span
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-3 overflow-hidden"
      >
        <span
          className={cn(
            'absolute -bottom-1 left-2 h-3 w-3 rotate-45 rounded-sm transition-colors duration-500',
            isDark ? 'bg-[#1c4b3a]' : 'bg-[#5fae6a]',
          )}
        />
        <span
          className={cn(
            'absolute -bottom-1.5 left-6 h-4 w-4 rotate-45 rounded-sm transition-colors duration-500',
            isDark ? 'bg-[#173d30]' : 'bg-[#4f9a5b]',
          )}
        />
        <span
          className={cn(
            'absolute -bottom-1 right-3 h-3 w-3 rotate-45 rounded-sm transition-colors duration-500',
            isDark ? 'bg-[#1c4b3a]' : 'bg-[#5fae6a]',
          )}
        />
      </span>

      {/* Sun / Moon knob */}
      <span
        aria-hidden
        className={cn(
          'absolute top-1 z-10 grid h-7 w-7 place-items-center rounded-full shadow-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isDark
            ? 'left-[35px] bg-[#f4f1e4]'
            : 'left-1 bg-[#ffdd57] shadow-[0_0_10px_2px_rgba(255,221,87,0.7)]',
        )}
      >
        {/* Moon craters */}
        <span
          className={cn(
            'relative h-full w-full rounded-full transition-opacity duration-500',
            isDark ? 'opacity-100' : 'opacity-0',
          )}
        >
          <span className="absolute left-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#d8d2bd]" />
          <span className="absolute right-1 top-3 h-1 w-1 rounded-full bg-[#d8d2bd]" />
          <span className="absolute left-3 top-4 h-1 w-1 rounded-full bg-[#d8d2bd]" />
        </span>
      </span>
    </button>
  )
}
