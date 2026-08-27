import { Reveal } from '@/components/reveal'
import { ContactButtons } from '@/components/contact-buttons'

export function SocialCta() {
  return (
    <section className="px-4 py-12 sm:py-16">
      <Reveal className="mx-auto max-w-5xl rounded-3xl border border-border/80 bg-card/60 backdrop-blur-xl p-6 sm:p-10 shadow-xl">
        <ContactButtons />
      </Reveal>
    </section>
  )
}
