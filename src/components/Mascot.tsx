import Link from "next/link";

export function Mascot({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "flex items-center gap-2" : "flex items-center gap-3"}>
      <div className={compact ? "h-9 w-9" : "h-11 w-11"} aria-hidden>
        {/* Lobster doctor mascot (SVG) */}
        <svg viewBox="0 0 96 96" className="h-full w-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#FF4D6D" />
              <stop offset="1" stopColor="#FF8FAB" />
            </linearGradient>
          </defs>

          {/* glow */}
          <circle cx="48" cy="48" r="44" fill="rgba(56,189,248,0.12)" />
          <circle cx="48" cy="48" r="40" fill="rgba(110,231,183,0.10)" />

          {/* body */}
          <ellipse cx="48" cy="52" rx="22" ry="26" fill="url(#g)" />

          {/* face */}
          <circle cx="40" cy="48" r="3" fill="rgba(0,0,0,0.55)" />
          <circle cx="56" cy="48" r="3" fill="rgba(0,0,0,0.55)" />
          <path d="M43 58c3 3 7 3 10 0" stroke="rgba(0,0,0,0.55)" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* claws */}
          <path d="M22 56c-6-6-6-16 2-22 8-6 18-1 18 9" fill="url(#g)" opacity="0.95" />
          <path d="M74 56c6-6 6-16-2-22-8-6-18-1-18 9" fill="url(#g)" opacity="0.95" />

          {/* stethoscope */}
          <path d="M33 62c0 10 8 18 15 18s15-8 15-18" stroke="rgba(56,189,248,0.85)" strokeWidth="4" fill="none" strokeLinecap="round" />
          <circle cx="48" cy="80" r="5" fill="rgba(56,189,248,0.9)" />

          {/* medical cross */}
          <rect x="44" y="20" width="8" height="18" rx="2" fill="#22C55E" />
          <rect x="38" y="26" width="20" height="8" rx="2" fill="#22C55E" />

          {/* tiny DNA helix */}
          <path d="M62 68c-4-4-4-8 0-12" stroke="rgba(255,255,255,0.65)" strokeWidth="2" fill="none" />
          <path d="M70 68c4-4 4-8 0-12" stroke="rgba(255,255,255,0.65)" strokeWidth="2" fill="none" />
          <path d="M62 62h8" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
          <path d="M62 66h8" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
        </svg>
      </div>

      <div className={compact ? "leading-tight" : "leading-tight"}>
        <Link href="/" className="font-semibold tracking-tight">
          MoltClinic
        </Link>
        <div className="text-xs opacity-70">Lobster-led AI medicine</div>
      </div>
    </div>
  );
}
