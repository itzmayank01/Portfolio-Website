import { ArrowUpRight, Mail, Phone, Calendar } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { profile } from '@/lib/site-data'

export function Contact() {
  return (
    <section id="contact" className="px-4 py-20 sm:py-28 relative">
      <div className="mx-auto max-w-5xl">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border/80 bg-slate-950 px-6 py-14 text-white sm:px-14 sm:py-20 shadow-2xl">
          <div
            aria-hidden
            className="dotted-bg pointer-events-none absolute inset-0 opacity-[0.1]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-[100px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-sky-500/20 blur-[100px]"
          />

          <div className="relative text-center">

            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Have a pipeline to automate or a cloud to scale?
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-slate-300">
              I am open to full-time DevOps &amp; Cloud Engineering roles and infrastructure consulting. Let&apos;s build fast, resilient, and automated systems.
            </p>

            {/* Direct CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-primary/30 transition-transform hover:scale-105 active:scale-95"
              >
                <Mail className="h-4 w-4 stroke-[2.5]" />
                <span>{profile.email}</span>
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                <Phone className="h-4 w-4" />
                <span>{profile.phone}</span>
              </a>
            </div>

            {/* Social Pill Links */}
            <div className="mt-10 flex items-center justify-center gap-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-primary"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <span className="text-slate-700">|</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-primary"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
