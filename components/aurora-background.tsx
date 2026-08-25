// Fixed, whole-page aurora backdrop. Sits behind all content (-z-10) and is
// intentionally soft/low-opacity so text and cards stay perfectly readable.
// Pure CSS animation — no video, no runtime cost to speak of.
export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-[15%] -left-[10%] h-[55vh] w-[55vh] rounded-full bg-sky-400/30 blur-[130px] animate-aurora-1 dark:bg-sky-500/20" />
      <div className="absolute top-[18%] -right-[10%] h-[50vh] w-[50vh] rounded-full bg-cyan-400/25 blur-[140px] animate-aurora-2 dark:bg-cyan-500/20" />
      <div className="absolute -bottom-[10%] left-[18%] h-[55vh] w-[55vh] rounded-full bg-primary/25 blur-[140px] animate-aurora-3 dark:bg-primary/15" />
      <div className="absolute top-[42%] left-[36%] h-[45vh] w-[45vh] rounded-full bg-indigo-400/20 blur-[150px] animate-aurora-1 dark:bg-indigo-500/15" />
    </div>
  )
}
