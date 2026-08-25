'use client'

import { Globe, ArrowUpRight, Shield, Heart } from 'lucide-react'
import { profile } from '@/lib/site-data'
import { AwsIcon, GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const FOOTER_COLUMNS = [
  {
    title: 'Expertise',
    links: [
      { label: 'AWS Cloud Architecture', href: '#stack' },
      { label: 'Kubernetes & Docker', href: '#stack' },
      { label: 'Terraform IaC', href: '#stack' },
      { label: 'DevSecOps Automation', href: '#stack' },
    ],
  },
  {
    title: 'Featured Works',
    links: [
      { label: 'AWS EKS CI/CD Pipeline', href: '#work' },
      { label: 'Campus Connect Platform', href: '#work' },
      { label: 'AWS Infrastructure Modules', href: '#work' },
      { label: 'GitHub Activity Matrix', href: '#activity' },
    ],
  },
  {
    title: 'Credentials',
    links: [
      { label: 'AWS Solutions Architect Associate', href: '#certifications' },
      { label: 'Google Associate Cloud Engineer', href: '#certifications' },
      { label: 'AWS Certified Cloud Practitioner', href: '#certifications' },
      { label: 'AWS Certified AI Practitioner', href: '#certifications' },
    ],
  },
  {
    title: 'Connect & Contact',
    links: [
      { label: 'LinkedIn Profile', href: profile.linkedin, external: true },
      { label: 'GitHub Repositories', href: profile.github, external: true },
      { label: `Email: ${profile.email}`, href: `mailto:${profile.email}`, external: true },
      { label: `Phone: ${profile.phone}`, href: `tel:${profile.phone}`, external: true },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-950 text-slate-200 px-4 pt-16 pb-12 mt-10">
      <div className="mx-auto max-w-6xl">
        {/* Top CTA Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-slate-950 font-mono text-sm font-black">
              MT
            </span>
            <div>
              <p className="font-display text-lg font-bold text-white">{profile.name}</p>
              <p className="text-xs text-slate-400 font-medium">DevOps &amp; AWS Cloud Solutions Architect</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-slate-950 px-6 py-2.5 text-xs font-bold shadow-md hover:bg-slate-200 transition-colors"
            >
              <span>Schedule Architecture Review</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-medium text-slate-300">
              <Globe className="h-3.5 w-3.5 text-primary" />
              <span>English (US)</span>
            </div>
          </div>
        </div>

        {/* 4 Columns Sitemap */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-xs text-slate-400 hover:text-primary transition-colors flex items-center gap-1"
                    >
                      <span>{link.label}</span>
                      {link.external && <ArrowUpRight className="h-3 w-3 opacity-60" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright & Socials */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {profile.name}. Inspired by Amazon &amp; AWS Cloud Design.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <span className="text-slate-700">|</span>
            <span>Built with Next.js &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
