'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, ExternalLink, Layers, Cpu, CheckCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { GithubIcon } from '@/components/brand-icons'
import { projects, profile, type Project } from '@/lib/site-data'

function Laptop3DMockup({ project }: { project: Project }) {
  return (
    <div className="w-full [perspective:1400px]">
      <div className="group relative mx-auto transition-all duration-700 ease-out [transform:rotateX(6deg)rotateY(-10deg)] hover:[transform:rotateX(0deg)rotateY(0deg)] hover:scale-105">
        {/* Laptop Top Lid */}
        <div className="rounded-t-2xl border-2 border-b-0 border-slate-700 bg-slate-900 p-2 shadow-2xl">
          {/* Browser Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-3 py-1.5 rounded-t-lg">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/90" />
            </div>
            <span className="font-mono text-[10px] text-slate-400">cloud.aws.amazon.com/console</span>
            <div className="w-6" />
          </div>

          {/* Screen Display */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-b-lg bg-card">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                <CheckCircle className="h-3.5 w-3.5" /> Production Ready
              </span>
            </div>
          </div>
        </div>

        {/* Laptop Base */}
        <div className="relative">
          <div className="h-3.5 rounded-b-xl border-x-2 border-b-2 border-slate-700 bg-slate-800 shadow-md" />
          <div className="mx-auto h-1.5 w-1/3 rounded-b-xl bg-slate-600" />
        </div>
      </div>
    </div>
  )
}

function Tablet3DMockup({ project }: { project: Project }) {
  return (
    <div className="w-full [perspective:1400px]">
      <div className="group relative mx-auto max-w-[90%] transition-all duration-700 ease-out [transform:rotateX(6deg)rotateY(10deg)] hover:[transform:rotateX(0deg)rotateY(0deg)] hover:scale-105">
        <div className="rounded-[2rem] border-2 border-slate-700 bg-slate-900 p-3 shadow-2xl">
          <div className="flex justify-center pb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-card">
            <Image
              src={project.image}
              alt={`${project.title} tablet view`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = ['All', 'Kubernetes · DevSecOps', 'Cloud Platform', 'Infrastructure as Code']

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="work" className="relative px-4 py-24 sm:py-32 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="mx-auto max-w-6xl">
        {/* Top Header matching reference Image 2 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <Reveal>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                Work Process
              </span>
            </div>
            <h2 className="mt-2 font-display text-4xl sm:text-6xl font-black tracking-tight text-foreground">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="mt-3 font-display text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-muted-foreground">
              FROM CONCEPT TO DEPLOYMENT
            </p>
          </Reveal>

          <Reveal delay={100} className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-foreground px-6 py-3.5 text-sm font-bold text-background transition-transform duration-200 hover:scale-105"
            >
              <span>View All Works</span>
              <div className="grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground font-bold transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[3]" />
              </div>
            </a>
          </Reveal>
        </div>

        {/* Filter Tabs */}
        <Reveal delay={120} className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/30'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* 3D Showcase Grid with Yellow Contrast Accent Cards */}
        <div className="mt-14 space-y-20 sm:space-y-28">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0
            return (
              <Reveal
                key={project.title}
                delay={idx * 100}
                className="group relative rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xl p-6 sm:p-10 shadow-2xl transition-all duration-500 hover:border-primary/60"
              >
                {/* Yellow / Orange Accent Offset Card behind mockup (from Image 2) */}
                <div className="grid items-center gap-10 lg:grid-cols-12">
                  {/* Left Mockup with Electric Cloud Offset Background */}
                  <div className={`relative lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div
                      aria-hidden
                      className="absolute -inset-2 -z-10 translate-x-3 translate-y-3 rounded-3xl bg-primary/60 dark:bg-primary/40 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5 shadow-xl"
                    />
                    <div className="rounded-2xl border border-border/90 bg-card/95 p-4 sm:p-7 shadow-lg">
                      {project.device === 'tablet' ? (
                        <Tablet3DMockup project={project} />
                      ) : (
                        <Laptop3DMockup project={project} />
                      )}
                      {/* Sub-label badge */}
                      <div className="mt-4 flex items-center justify-between">
                        <span className="rounded-lg bg-primary/15 px-3 py-1 font-mono text-xs font-bold text-primary">
                          {project.title.split('—')[0]}
                        </span>
                        <div className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-bold shadow-md">
                          <ArrowUpRight className="h-4 w-4 stroke-[3]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs uppercase font-bold tracking-widest text-primary">
                        {project.category}
                      </span>
                      <span className="rounded-full bg-emerald-500/15 px-3 py-0.5 text-xs font-bold text-emerald-500 border border-emerald-500/30">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-2xl sm:text-3xl font-black text-foreground">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-border bg-secondary/70 px-3 py-1 text-xs font-semibold text-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-8 flex items-center gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-bold text-background transition-transform hover:scale-105"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>Source Code</span>
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                      >
                        <span>Live Architecture</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
