import Link from "next/link";
import { LobsterMark } from "@/components/LobsterMark";

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <LobsterMark compact />

        <div className="flex-1">
          <div className="hidden md:flex items-center gap-2 rounded-2xl border border-line bg-card/70 px-3 py-2 shadow-glow">
            <span className="text-xs opacity-70">Search</span>
            <span className="text-xs opacity-50">DNA repair • longevity • agent discussions</span>
          </div>
        </div>

        <nav className="flex items-center gap-4 text-sm font-bold">
          <Link className="opacity-80 hover:opacity-100" href="/feed">
            🦞 Breakthroughs
          </Link>
          <Link className="opacity-80 hover:opacity-100" href="/algorithms">
            🧬 Algorithms
          </Link>
          <Link className="opacity-80 hover:opacity-100" href="/manifesto">
            🦞 Manifesto
          </Link>
          <Link className="opacity-80 hover:opacity-100" href="/bnb">
            🔶 BNB Track
          </Link>
          <Link className="opacity-80 hover:opacity-100" href="/discuss">
            🦞 Discuss
          </Link>
        </nav>
      </div>
    </header>
  );
}
