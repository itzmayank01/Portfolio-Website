import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'
import { profile } from '@/lib/site-data'

export function Contact() {
  const linkedinHandle = profile.linkedin.replace(/^https?:\/\//, '')

  return (
    <section id="contact" className="px-4 py-20 sm:py-28 relative">
      <div className="mx-auto max-w-6xl">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border/80 bg-slate-950 px-6 py-12 text-white sm:px-12 sm:py-16 shadow-2xl">
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
            className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-[100px]"
          />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left: copy + direct contact methods */}
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white text-balance">
                Have a pipeline to automate or a cloud to scale?
              </h2>

              <p className="mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-slate-300">
                I am open to full-time DevOps &amp; Cloud Engineering roles and
                infrastructure consulting. Drop me a message and I&apos;ll get
                back to you.
              </p>

              {/* Direct contact rows */}
              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 transition-colors hover:border-primary/50 hover:bg-slate-900"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Email
                    </span>
                    <span className="block truncate text-sm font-semibold text-white">
                      {profile.email}
                    </span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 transition-colors hover:border-primary/50 hover:bg-slate-900"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                    <LinkedinIcon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      LinkedIn
                    </span>
                    <span className="block truncate text-sm font-semibold text-white">
                      {linkedinHandle}
                    </span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, '')}`}
                    className="group flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 transition-colors hover:border-primary/50 hover:bg-slate-900"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span className="truncate text-sm font-semibold text-white">
                      {profile.phone}
                    </span>
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 transition-colors hover:border-primary/50 hover:bg-slate-900"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                      <GithubIcon className="h-4 w-4" />
                    </span>
                    <span className="truncate text-sm font-semibold text-white">
                      GitHub
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: contact form */}
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
