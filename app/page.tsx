import { Navbar } from '@/components/navbar'
import { AuroraBackground } from '@/components/aurora-background'
import { Hero } from '@/components/hero'
import { TechMarquee } from '@/components/tech-marquee'
import { About } from '@/components/about'
import { TechStack } from '@/components/tech-stack'
import { Projects } from '@/components/projects'
import { GithubActivity } from '@/components/github-activity'
import { ExperienceSection } from '@/components/experience'
import { Certifications } from '@/components/certifications'
import { AwsFeedback } from '@/components/aws-feedback'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <AuroraBackground />
      <Navbar />
      <main>
        <Hero />
        <GithubActivity />
        <TechMarquee />
        <About />
        <TechStack />
        <Projects />
        <ExperienceSection />
        <Certifications />
        <AwsFeedback />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
