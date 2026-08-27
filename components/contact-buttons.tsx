'use client'

import { useState } from 'react'
import { Mail, Copy, Check, Download } from 'lucide-react'
import { profile, social } from '@/lib/site-data'
import { withBasePath } from '@/lib/base-path'

// Email (with copy) + Download CV. Shared between the hero (under the photo)
// and the contact section so the two stay in sync.
export function ContactButtons({ className = '' }: { className?: string }) {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      // Fallback for browsers without clipboard permissions
      const el = document.createElement('textarea')
      el.value = profile.email
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-4 sm:flex-row ${className}`}>
      {/* Amber split button with soft glow */}
      <div className="relative w-full sm:w-auto">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-2 rounded-2xl bg-amber-500/30 blur-xl"
        />
        <div className="relative flex w-full overflow-hidden rounded-xl bg-gradient-to-b from-[#F5A623] to-[#E89012] text-slate-950 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105">
          <a
            href={`mailto:${profile.email}`}
            aria-label={`Email ${profile.email}`}
            className="inline-flex flex-1 items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950/60"
          >
            <Mail className="h-4 w-4 stroke-[2.5]" />
            <span>Email me</span>
          </a>
          <button
            type="button"
            onClick={copyEmail}
            aria-label={copied ? 'Email copied to clipboard' : 'Copy email address to clipboard'}
            className="inline-flex items-center justify-center border-l border-slate-950/25 px-4 py-3.5 transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950/60"
          >
            {copied ? (
              <Check className="h-4 w-4 stroke-[3]" />
            ) : (
              <Copy className="h-4 w-4 stroke-[2.5]" />
            )}
            <span className="sr-only" role="status" aria-live="polite">
              {copied ? 'Copied' : ''}
            </span>
          </button>
        </div>
        {copied && (
          <span
            className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-2.5 py-0.5 text-[11px] font-bold text-background"
            aria-hidden
          >
            Copied
          </span>
        )}
      </div>

      {/* Download CV */}
      <a
        href={withBasePath(social.resumePath)}
        download
        aria-label="Download Mayank Thakur's CV as PDF"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-transparent px-7 py-3.5 text-sm font-bold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
      >
        <span>Download CV</span>
        <Download className="h-4 w-4 stroke-[2.5]" />
      </a>
    </div>
  )
}
