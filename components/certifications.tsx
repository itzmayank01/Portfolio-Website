import Image from 'next/image'
import { BadgeCheck, ExternalLink } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { certifications } from '@/lib/site-data'

export function Certifications() {
  return (
    <section id="certifications" className="px-4 py-16 sm:py-24 relative">
      <div className="mx-auto max-w-6xl">
        <Reveal className="rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xl p-8 sm:p-12 shadow-2xl">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase font-bold tracking-widest text-primary">
                Credentials
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Official <span className="text-primary">Certifications</span>
              </h2>
            </div>
            <span className="font-mono text-xs font-bold text-muted-foreground">
              4x Cloud &amp; AI Accreditations
            </span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, i) => (
              <Reveal
                key={cert.title}
                delay={i * 70}
                className="group flex items-center gap-4 rounded-2xl border border-border/70 bg-secondary/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-secondary/60 shadow-sm"
              >
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-card border border-border/50 p-1 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-display text-sm sm:text-base font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-muted-foreground flex items-center justify-between">
                    <span>{cert.issuer}</span>
                    <span className="font-mono text-[10px] text-emerald-500 font-bold">Active &amp; Verified</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
