'use client'

import Image from 'next/image'
import { ArrowUpRight, MapPin, ShieldCheck, Terminal } from 'lucide-react'
import { GithubIcon, LinkedinIcon, AwsIcon } from '@/components/brand-icons'
import { profile } from '@/lib/site-data'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-20 pt-28 sm:pt-36 lg:pb-32"
    >
      {/* Background Ambience & Dotted Grid */}
      <div
        aria-hidden
        className="dotted-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-primary/20 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-40 h-96 w-96 rounded-full bg-sky-500/15 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* Left Column: Bold Copy & CTAs */}
        <div className="z-10">
          {/* Main Bold Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-[64px] font-black leading-[1.08] tracking-tight text-balance text-foreground">
            Building Resilient{' '}
            <span className="text-primary">Cloud &amp; DevOps</span>{' '}
            Infrastructure
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
            I architect automated CI/CD pipelines, containerized Kubernetes clusters, and resilient AWS cloud infrastructure with Terraform and DevSecOps best practices.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:bg-primary/90"
            >
              Explore Projects
              <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm backdrop-blur transition-all duration-200 hover:bg-secondary hover:border-primary/50"
            >
              Get In Touch
            </a>
          </div>

          {/* Social and Location meta */}
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Column: Person Cutout + Organic Blob Backdrop + Floating Badges */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Organic Background Blob */}
          <div className="relative h-[380px] w-[320px] sm:h-[450px] sm:w-[380px]">
            {/* SVG Organic Backdrop Blob */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-tr from-primary/30 via-sky-500/20 to-purple-600/30 blur-xl animate-pulse-slow"
            />
            <div
              aria-hidden
              className="absolute inset-2 -z-10 rounded-[50%_50%_40%_60%/60%_40%_60%_40%] bg-gradient-to-br from-primary/30 to-sky-500/30 shadow-2xl backdrop-blur-3xl border border-primary/20"
            />

            {/* Profile Image Cutout */}
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border-2 border-primary/30 bg-gradient-to-b from-transparent via-card/20 to-card shadow-2xl">
              <Image
                src={profile.photo}
                alt={`${profile.name} portrait`}
                fill
                priority
                className="object-cover object-top scale-105 transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>

            {/* Floating Glassmorphism Badge 1: 99.9% Uptime */}
            <div className="absolute -left-6 top-10 animate-float rounded-2xl border border-border/80 bg-card/90 backdrop-blur-xl p-3.5 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/15 text-emerald-500">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-foreground">99.99% Uptime</p>
                  <p className="text-[11px] text-muted-foreground font-semibold">Reliable Infrastructure</p>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphism Badge 2: AWS Certified */}
            <div className="absolute -right-6 bottom-16 animate-float [animation-delay:2s] rounded-2xl border border-border/80 bg-card/90 backdrop-blur-xl p-3.5 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/20 text-primary">
                  <AwsIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-foreground">AWS Certified</p>
                  <p className="text-[11px] text-muted-foreground font-semibold">Solutions Architect</p>
                </div>
              </div>
            </div>

            <div className="absolute left-8 -bottom-5 animate-float [animation-delay:4s] rounded-2xl border border-border/80 bg-card/90 backdrop-blur-xl px-4 py-2.5 shadow-2xl">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="font-display text-xs font-bold text-foreground">50+ CI/CD Pipelines Shipped</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
