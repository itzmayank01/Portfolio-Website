import Image from 'next/image'
import { GraduationCap, ShieldCheck, Zap, Cloud, Award } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { profile, stats, education } from '@/lib/site-data'
import { withBasePath } from '@/lib/base-path'

export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:py-28 relative">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Left Profile Frame */}
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="dotted-bg absolute -inset-4 -z-10 rounded-3xl opacity-50"
            />
            <div className="hover-lift relative overflow-hidden rounded-3xl border-2 border-border/80 bg-card p-3 shadow-2xl">
              <Image
                src={withBasePath(profile.headshot)}
                alt={`${profile.name} — DevOps and Cloud Engineer`}
                width={480}
                height={480}
                className="aspect-square w-full rounded-2xl object-cover object-center"
              />
              <div className="mt-3 flex items-center justify-between px-2">
                <div>
                  <p className="font-display text-sm font-bold">{profile.name}</p>
                  <p className="text-[11px] text-muted-foreground">{profile.role}</p>
                </div>
                <span className="rounded-lg bg-primary px-2.5 py-1 font-mono text-[10px] font-bold text-primary-foreground">
                  AWS CERTIFIED
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right Copy */}
          <Reveal delay={100}>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-black tracking-tight text-foreground">
              Automating workflows into{' '}
              <span className="text-primary">reliable cloud systems</span>.
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
              {profile.summary} I provision multi-environment AWS infrastructure with Terraform, set up DevSecOps pipelines with automated image scanning, and build Prometheus/Grafana observability stacks for production workloads.
            </p>

            {/* Metrics 4-card grid */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/80 bg-card/80 backdrop-blur p-4 transition-transform hover:scale-105"
                >
                  <p className="font-display text-2xl sm:text-3xl font-black text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium leading-snug text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Education Card */}
            <div className="hover-lift mt-6 flex items-start gap-4 rounded-2xl border border-border/80 bg-secondary/50 p-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/20 text-primary shadow-sm">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-foreground">{education.degree}</p>
                <p className="text-xs text-muted-foreground">{education.school}</p>
                <p className="mt-1 font-mono text-[11px] font-semibold text-primary">
                  {education.period}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
