import { Check } from 'lucide-react'
import { type Certification, TIER_GRADIENTS } from '@/lib/certifications'

// Strip the "AWS Certified" prefix and the tier suffix — the wordmark and the
// tier label are rendered separately inside the badge.
function displayName(name: string) {
  return name
    .replace(/^AWS Certified\s+/, '')
    .replace(/\s+[–-]\s+(Foundational|Associate|Professional|Specialty)$/, '')
}

export function HexBadge({ cert }: { cert: Certification }) {
  const g = TIER_GRADIENTS[cert.tier]
  const earned = cert.earned

  return (
    <a
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      data-earned-badge={earned ? 'true' : undefined}
      aria-label={`${cert.name} — ${earned ? 'earned' : 'not yet earned'}`}
      style={{ ['--tier' as string]: g.from }}
      className={`hex-badge group relative block aspect-[1/1.06] w-full outline-none focus-visible:ring-2 focus-visible:ring-amber-300 rounded-[10px] ${
        earned ? 'hex-earned' : 'hex-locked'
      }`}
    >
      {/* Shape: border layer + gradient fill (glow applied to this wrapper) */}
      <span className="hex-shape absolute inset-0">
        <span
          className="hex-clip absolute inset-0"
          style={{
            background: earned
              ? 'linear-gradient(160deg,#fde68a,#f59e0b)'
              : 'rgba(255,255,255,0.22)',
          }}
        />
        <span
          className="hex-clip absolute inset-[2px]"
          style={{ backgroundImage: `linear-gradient(160deg, ${g.from}, ${g.to})` }}
        />
      </span>

      {/* Content */}
      <span className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-1.5 px-4 text-center">
        <span className="flex flex-col items-center leading-none">
          <span className="text-[11px] font-black lowercase tracking-tight text-white">
            aws
          </span>
          <span className="text-[7px] font-semibold uppercase tracking-[0.2em] text-white/70">
            certified
          </span>
        </span>
        <span aria-hidden className="h-px w-7 bg-white/25" />
        <span className="text-[11px] sm:text-xs font-bold leading-tight text-white">
          {displayName(cert.name)}
        </span>
        <span aria-hidden className="h-px w-7 bg-white/25" />
        <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.16em] text-white/75">
          {cert.tier}
        </span>
      </span>

      {/* Earned: gold check badge + tooltip */}
      {earned && (
        <>
          <span
            aria-hidden
            className="absolute right-1 top-2 z-20 grid h-6 w-6 place-items-center rounded-full bg-amber-400 text-slate-900 shadow-md ring-2 ring-amber-200"
          >
            <Check className="h-3.5 w-3.5 stroke-[3.5]" />
          </span>
          <span
            role="tooltip"
            className="pointer-events-none absolute -top-7 left-1/2 z-30 -translate-x-1/2 rounded-md bg-foreground px-2 py-0.5 text-[10px] font-bold text-background opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          >
            Earned
          </span>
        </>
      )}

      {/* Locked: coming soon pill */}
      {!earned && (
        <span
          aria-hidden
          className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/50 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white/80"
        >
          Coming soon
        </span>
      )}
    </a>
  )
}
