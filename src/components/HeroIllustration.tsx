export function HeroIllustration() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-blob" aria-hidden>
      {/* Big cartoon banner illustration as SVG */}
      <svg viewBox="0 0 1200 520" className="h-full w-full">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="rgba(110,231,183,0.25)" />
            <stop offset="0.5" stopColor="rgba(56,189,248,0.18)" />
            <stop offset="1" stopColor="rgba(255,77,109,0.18)" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="rgba(0,0,0,0.55)" />
          </filter>
        </defs>

        <rect x="0" y="0" width="1200" height="520" rx="46" fill="url(#bg)" />

        {/* lab bench */}
        <g filter="url(#shadow)">
          <rect x="130" y="300" width="940" height="120" rx="28" fill="rgba(11,16,34,0.75)" stroke="rgba(255,255,255,0.18)" strokeWidth="6" />
          <rect x="160" y="318" width="880" height="20" rx="10" fill="rgba(255,255,255,0.10)" />
        </g>

        {/* beakers + medical vibe */}
        <g>
          <path d="M250 260h60v40c0 30-60 30-60 0v-40z" fill="rgba(56,189,248,0.55)" stroke="rgba(255,255,255,0.25)" strokeWidth="6" />
          <path d="M260 250h40" stroke="rgba(255,255,255,0.25)" strokeWidth="8" strokeLinecap="round" />
          <path d="M360 240h66v58c0 36-66 36-66 0v-58z" fill="rgba(34,197,94,0.45)" stroke="rgba(255,255,255,0.22)" strokeWidth="6" />
          <path d="M372 230h42" stroke="rgba(255,255,255,0.25)" strokeWidth="8" strokeLinecap="round" />

          {/* DNA icon */}
          <path d="M910 210c-26 26-26 56 0 82" stroke="rgba(255,255,255,0.55)" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M980 210c26 26 26 56 0 82" stroke="rgba(255,255,255,0.55)" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M910 250h70" stroke="rgba(255,255,255,0.42)" strokeWidth="10" strokeLinecap="round" />
          <path d="M910 282h70" stroke="rgba(255,255,255,0.42)" strokeWidth="10" strokeLinecap="round" />
        </g>

        {/* lobster on bench (DNA-only: no cross, no stethoscope) */}
        <g transform="translate(520,160)" filter="url(#shadow)">
          {/* claws */}
          <path d="M-220 170c-28-68 18-140 98-152 66-10 120 44 108 110-12 66-92 96-206 42z" fill="#FF2D55" stroke="rgba(255,255,255,0.22)" strokeWidth="8" />
          <path d="M220 170c28-68-18-140-98-152-66-10-120 44-108 110 12 66 92 96 206 42z" fill="#FF2D55" stroke="rgba(255,255,255,0.22)" strokeWidth="8" />

          {/* body */}
          <path d="M-140 40c0-48 62-86 140-86S140-8 140 40v150c0 84-62 150-140 150s-140-66-140-150V40z" fill="#FF2D55" stroke="rgba(255,255,255,0.18)" strokeWidth="10" />

          {/* segments */}
          <path d="M-110 78h220" stroke="rgba(0,0,0,0.15)" strokeWidth="12" strokeLinecap="round" />
          <path d="M-110 120h220" stroke="rgba(0,0,0,0.15)" strokeWidth="12" strokeLinecap="round" />
          <path d="M-110 162h220" stroke="rgba(0,0,0,0.15)" strokeWidth="12" strokeLinecap="round" />

          {/* lab headband (no medical cross) */}
          <rect x="-120" y="-30" width="240" height="62" rx="30" fill="rgba(11,16,34,0.75)" stroke="rgba(255,255,255,0.20)" strokeWidth="8" />
          <circle cx="0" cy="1" r="14" fill="rgba(56,189,248,0.75)" />

          {/* face */}
          <circle cx="-44" cy="30" r="12" fill="rgba(0,0,0,0.55)" />
          <circle cx="44" cy="30" r="12" fill="rgba(0,0,0,0.55)" />
          <path d="M-22 62c18 16 26 16 44 0" stroke="rgba(0,0,0,0.55)" strokeWidth="10" strokeLinecap="round" fill="none" />

          {/* antennae */}
          <path d="M-46 -40c-46-44-92-38-116-14" stroke="rgba(255,255,255,0.50)" strokeWidth="10" strokeLinecap="round" fill="none" />
          <path d="M46 -40c46-44 92-38 116-14" stroke="rgba(255,255,255,0.50)" strokeWidth="10" strokeLinecap="round" fill="none" />
          <circle cx="-162" cy="-48" r="10" fill="#38BDF8" />
          <circle cx="162" cy="-48" r="10" fill="#38BDF8" />

          {/* DNA badge */}
          <path d="M-18 206c-18-18-18-38 0-56" stroke="rgba(255,255,255,0.60)" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M18 206c18-18 18-38 0-56" stroke="rgba(255,255,255,0.60)" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M-18 180h36" stroke="rgba(255,255,255,0.45)" strokeWidth="10" strokeLinecap="round" />
          <path d="M-18 198h36" stroke="rgba(255,255,255,0.45)" strokeWidth="10" strokeLinecap="round" />
        </g>

        {/* sparkle icons */}
        <g opacity="0.8">
          <path d="M104 120l12 24 24 12-24 12-12 24-12-24-24-12 24-12z" fill="rgba(255,255,255,0.18)" />
          <path d="M1096 120l10 20 20 10-20 10-10 20-10-20-20-10 20-10z" fill="rgba(255,255,255,0.16)" />
        </g>
      </svg>
    </div>
  );
}
