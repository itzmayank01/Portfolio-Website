import { Briefcase } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { experience } from '@/lib/site-data'

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
            Experience
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Where I&apos;ve shipped
          </h2>
        </Reveal>
 
        <ol className="mt-12 space-y-3">
          {experience.map((job, i) => (
            <Reveal
              as="li"
              key={job.company}
              delay={i * 90}
              className="hover-lift relative rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      {job.role}
                    </h3>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                  </div>
                </div>
                <span className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground">
                  {job.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2 pl-1 sm:pl-15">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
