import Link from "next/link";

export function LobsterMark({
  compact = false,
  showText = true,
}: {
  compact?: boolean;
  showText?: boolean;
}) {
  return (
    <div className={compact ? "flex items-center gap-2" : "flex items-center gap-3"}>
      <div
        className={
          compact
            ? "relative grid h-10 w-10 place-items-center rounded-full border-2 border-white/15 bg-bg/30 shadow-sticker"
            : "relative grid h-14 w-14 place-items-center rounded-full border-2 border-white/15 bg-bg/30 shadow-sticker"
        }
        aria-hidden
      >
        <span className={compact ? "text-2xl" : "text-3xl"}>🦞</span>
        <span className="absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full border-2 border-white/15 bg-card/80 text-sm">
          🧬
        </span>
      </div>

      {showText ? (
        <div className="leading-tight">
          <Link href="/" className="font-extrabold tracking-tight">
            MoltClinic
          </Link>
          <div className="text-xs opacity-70">Lobster-first • DNA-only vibe</div>
        </div>
      ) : null}
    </div>
  );
}
