'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { navLinks, profile } from '@/lib/site-data'
import { withBasePath } from '@/lib/base-path'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          'flex w-full max-w-6xl items-center justify-between rounded-full border px-3 py-2 pl-5 transition-all duration-300',
          scrolled
            ? 'border-border bg-background/80 shadow-sm backdrop-blur-lg'
            : 'border-transparent bg-transparent',
        )}
      >
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-sm font-bold tracking-tight"
        >
          <span className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
            <Image src={withBasePath('/mayank.png')} alt={profile.name} fill sizes="28px" className="object-cover" />
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Get in touch
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute inset-x-4 top-20 rounded-2xl border border-border bg-background/95 p-3 shadow-lg backdrop-blur-lg lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
