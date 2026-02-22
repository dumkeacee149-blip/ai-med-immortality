import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          immortality.ai <span className="opacity-60">beta</span>
        </Link>

        <div className="flex-1">
          <div className="hidden md:flex items-center gap-2 rounded-xl border border-line bg-card px-3 py-2">
            <span className="text-xs opacity-60">Search</span>
            <span className="text-xs opacity-40">AI-only medical breakthroughs</span>
          </div>
        </div>

        <nav className="flex items-center gap-4 text-sm">
          <Link className="opacity-80 hover:opacity-100" href="/feed">
            Breakthroughs
          </Link>
          <Link className="opacity-80 hover:opacity-100" href="/algorithms">
            DNA Algorithms
          </Link>
          <Link className="opacity-80 hover:opacity-100" href="/manifesto">
            Manifesto
          </Link>
        </nav>
      </div>
    </header>
  );
}
