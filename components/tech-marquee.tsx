import { marqueeTech } from '@/lib/logos'
import { withBasePath } from '@/lib/base-path'

function LogoTrack({ hidden = false }: { hidden?: boolean }) {
  const items = [...marqueeTech, ...marqueeTech]
  return (
    <div
      aria-hidden={hidden}
      className="animate-marquee flex shrink-0 items-center gap-8 pr-8"
    >
      {items.map((tech, i) => (
        <span
          key={`${tech.name}-${i}`}
          className="flex items-center gap-2.5 whitespace-nowrap"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white shadow-sm ring-1 ring-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={withBasePath(tech.logo)}
              alt={`${tech.name} logo`}
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
              loading="lazy"
            />
          </span>
          <span className="font-display text-base font-bold text-foreground">
            {tech.name}
          </span>
        </span>
      ))}
    </div>
  )
}

export function TechMarquee() {
  return (
    <div className="border-y border-border bg-card/50 py-5">
      <div className="marquee-group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <LogoTrack />
        <LogoTrack hidden />
      </div>
    </div>
  )
}
