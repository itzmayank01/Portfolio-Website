'use client'

import type { ComponentType, SVGProps } from 'react'
import { Cloud, Boxes, GitBranch, Shield, Terminal, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

type TechItem = {
  name: string
  tag: string
  logo?: string
  icon?: ComponentType<SVGProps<SVGSVGElement>>
}

type TechCategory = {
  category: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  color: string
  borderColor: string
  items: TechItem[]
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    category: 'Cloud & Infrastructure',
    icon: Cloud,
    color: 'from-amber-500/20 to-orange-500/10',
    borderColor: 'group-hover:border-amber-500/50',
    items: [
      { name: 'Amazon Web Services', tag: 'Expert', logo: '/logos/aws.svg' },
      { name: 'Terraform (IaC)', tag: 'Advanced', logo: '/logos/terraform.svg' },
      { name: 'Google Cloud Platform', tag: 'Associate', logo: '/logos/googlecloud.svg' },
      { name: 'Linux Administration', tag: 'Core', logo: '/logos/linux.svg' },
    ],
  },
  {
    category: 'Containers & Orchestration',
    icon: Boxes,
    color: 'from-sky-500/20 to-blue-500/10',
    borderColor: 'group-hover:border-sky-500/50',
    items: [
      { name: 'Kubernetes (K8s)', tag: 'Advanced', logo: '/logos/kubernetes.svg' },
      { name: 'Docker Containers', tag: 'Expert', logo: '/logos/docker.svg' },
      { name: 'Amazon EKS / ECS', tag: 'Production', logo: '/logos/aws.svg' },
      { name: 'Helm & ArgoCD', tag: 'GitOps', logo: '/logos/helm.svg' },
    ],
  },
  {
    category: 'CI/CD & DevSecOps',
    icon: GitBranch,
    color: 'from-emerald-500/20 to-teal-500/10',
    borderColor: 'group-hover:border-emerald-500/50',
    items: [
      { name: 'GitHub Actions', tag: 'Automated', logo: '/logos/github.svg' },
      { name: 'Jenkins Pipelines', tag: 'CI/CD', logo: '/logos/jenkins.svg' },
      { name: 'Trivy & Snyk', tag: 'Security', icon: Shield },
      { name: 'SonarQube Quality', tag: 'Static Code', icon: CheckCircle2 },
    ],
  },
  {
    category: 'Observability & Code',
    icon: Terminal,
    color: 'from-purple-500/20 to-indigo-500/10',
    borderColor: 'group-hover:border-purple-500/50',
    items: [
      { name: 'Prometheus & Grafana', tag: 'Monitoring', logo: '/logos/prometheus.svg' },
      { name: 'AWS CloudWatch', tag: 'Telemetry', logo: '/logos/aws.svg' },
      { name: 'Python Automation', tag: 'Scripts', logo: '/logos/python.svg' },
      { name: 'Bash & Shell', tag: 'CLI', logo: '/logos/bash.svg' },
    ],
  },
]

export function TechStack() {
  return (
    <section id="stack" className="px-4 py-20 sm:py-28 relative">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase font-bold tracking-widest text-primary">
            Technology Stack
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Production <span className="text-primary">Cloud Stack</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Tools and technologies I use daily to build, deploy, and monitor cloud infrastructure at scale.
          </p>
        </Reveal>

        {/* Categories Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {TECH_CATEGORIES.map((cat, i) => {
            const HeaderIcon = cat.icon
            return (
              <Reveal
                key={cat.category}
                delay={i * 80}
                className={`group relative overflow-hidden rounded-3xl border border-border/80 bg-card/70 backdrop-blur-xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 ${cat.borderColor}`}
              >
                {/* Ambient glow in corner */}
                <div
                  aria-hidden
                  className={`absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${cat.color} blur-2xl transition-opacity duration-300 opacity-60 group-hover:opacity-100`}
                />

                {/* Section Header */}
                <div className="relative flex items-center gap-3 border-b border-border/60 pb-5">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary/90 text-primary shadow-inner">
                    <HeaderIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium">Enterprise Cloud Ready</p>
                  </div>
                </div>

                {/* Items */}
                <div className="relative mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.items.map((item) => {
                    const ItemIcon = item.icon
                    return (
                      <div
                        key={item.name}
                        className="flex items-center justify-between rounded-xl border border-border/70 bg-secondary/40 p-3 transition-all duration-200 hover:bg-secondary hover:border-primary/40 hover:scale-[1.02]"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white shadow-sm ring-1 ring-black/5">
                            {item.logo ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={item.logo}
                                alt={`${item.name} logo`}
                                width={16}
                                height={16}
                                className="h-4 w-4 object-contain"
                                loading="lazy"
                              />
                            ) : ItemIcon ? (
                              <ItemIcon className="h-4 w-4 text-primary" />
                            ) : null}
                          </span>
                          <span className="text-xs font-bold text-foreground">{item.name}</span>
                        </div>
                        <span className="rounded-full bg-background px-2 py-0.5 text-[10px] font-mono font-semibold text-muted-foreground border border-border">
                          {item.tag}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
