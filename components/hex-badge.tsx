import Image from 'next/image'
import { Check } from 'lucide-react'
import { type Certification } from '@/lib/certifications'

export function HexBadge({ cert }: { cert: Certification }) {
  const earned = cert.earned

  return (
    <a
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      data-earned-badge={earned ? 'true' : undefined}
      aria-label={`${cert.name} — ${earned ? 'earned' : 'not yet earned'}`}
      className="group relative block outline-none focus-visible:ring-2 focus-visible:ring-amber-300 rounded-xl p-2 transition-transform hover:-translate-y-1"
    >
      <span className="relative block aspect-square w-full max-w-[132px]">
        <Image
          src={cert.image}
          alt={cert.name}
          fill
          sizes="132px"
          className={`object-contain drop-shadow-[0_6px_16px_rgba(0,0,0,0.35)] transition-all ${
            earned ? '' : 'grayscale opacity-50'
          }`}
        />
        {earned && (
          <span
            aria-hidden
            className="absolute right-1 top-1 z-20 grid h-6 w-6 place-items-center rounded-full bg-amber-400 text-slate-900 shadow-md ring-2 ring-amber-200"
          >
            <Check className="h-3.5 w-3.5 stroke-[3.5]" />
          </span>
        )}
        {!earned && (
          <span
            aria-hidden
            className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/60 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white/80"
          >
            Coming soon
          </span>
        )}
      </span>
    </a>
  )
}
