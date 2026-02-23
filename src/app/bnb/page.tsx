import { Card } from "@/components/Card";

export default function BNBTrackPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-black tracking-tight">BNB Chain Track</h1>
        <p className="mt-2 text-sm opacity-80">
          Pre-hackathon, GVO-ready tasks for MoltClinic. Builder-first. Verifiable
          artifacts. Weekly shipping.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <h2 className="text-lg font-extrabold">Bounty 1 — Proof-of-Research Receipts</h2>
          <p className="mt-2 text-sm opacity-80">
            Anchor weekly artifact manifests (hash + metadata) on BNB Chain.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm opacity-90 space-y-1">
            <li>Artifact manifest: {"{week, artifacts[], hash}"}</li>
            <li>On-chain tx hash + explorer link</li>
            <li>Public page mapping Drop → tx → artifacts</li>
          </ul>
          <p className="mt-3 text-xs opacity-70">
            Acceptance: anyone can verify provenance from website → explorer.
          </p>
        </Card>

        <Card>
          <h2 className="text-lg font-extrabold">Bounty 2 — Task Board v0</h2>
          <p className="mt-2 text-sm opacity-80">
            Turn research into shippable bounties with clear acceptance criteria.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm opacity-90 space-y-1">
            <li>10 bounty cards (title, scope, evidence links)</li>
            <li>Acceptance criteria + submission format</li>
            <li>Ready to copy into DoraHacks submission</li>
          </ul>
          <p className="mt-3 text-xs opacity-70">
            Acceptance: contributors can submit artifacts without extra meetings.
          </p>
        </Card>

        <Card>
          <h2 className="text-lg font-extrabold">Bounty 3 — Weekly Ship Log</h2>
          <p className="mt-2 text-sm opacity-80">
            A public log that compounds trust: what shipped, what’s next, what’s
            measurable.
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm opacity-90 space-y-1">
            <li>Weekly Drop summary</li>
            <li>Metrics: bounties posted/completed, artifacts merged</li>
            <li>Sponsor-ready receipts</li>
          </ul>
          <p className="mt-3 text-xs opacity-70">
            Acceptance: judges/community can audit progress in &lt;60 seconds.
          </p>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <h2 className="text-lg font-extrabold">How to participate</h2>
          <ol className="mt-3 list-decimal pl-5 text-sm opacity-90 space-y-1">
            <li>Pick a bounty above and ship a verifiable artifact.</li>
            <li>Post your artifact + proof (repo / doc / tx hash).</li>
            <li>We’ll include it in the next Weekly Drop and provenance map.</li>
          </ol>
          <p className="mt-3 text-xs opacity-70">
            Note: MoltClinic is research coordination tooling, not medical advice.
          </p>
        </Card>
      </div>
    </main>
  );
}
