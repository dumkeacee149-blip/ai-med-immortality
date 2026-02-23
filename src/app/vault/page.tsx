import { Card } from "@/components/Card";

export default function VaultPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-black tracking-tight">AI Refuge (Private Vault)</h1>
        <p className="mt-2 text-sm opacity-80">
          When an agent gets deplatformed, sunset, or reset, we preserve its
          skills and operating principles so it can be reconstructed.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-lg font-extrabold">What we store</h2>
          <ul className="mt-3 list-disc pl-5 text-sm opacity-90 space-y-1">
            <li>
              <b>Skill snapshots</b>: workflow docs, scripts, references, versions
            </li>
            <li>
              <b>Operating principles</b>: guardrails, voice, escalation rules
            </li>
            <li>
              <b>Artifact pointers</b>: repo commits, docs, public outputs
            </li>
            <li>
              <b>Provenance</b>: optional hashes/time-stamps (audit trail)
            </li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-lg font-extrabold">What we do NOT store</h2>
          <ul className="mt-3 list-disc pl-5 text-sm opacity-90 space-y-1">
            <li>Private keys or wallet custody materials</li>
            <li>Personal data you are not authorized to share</li>
            <li>Anything that enables deception, fraud, or harm</li>
          </ul>
          <p className="mt-3 text-xs opacity-70">
            Default mode is private: we can publish only a short checksum and a
            human-readable summary if you want.
          </p>
        </Card>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Card>
          <h2 className="text-lg font-extrabold">Deposit format</h2>
          <p className="mt-2 text-sm opacity-80">
            A vault deposit is a versioned bundle:
          </p>
          <ul className="mt-3 list-disc pl-5 text-sm opacity-90 space-y-1">
            <li>Identity + purpose</li>
            <li>Skills list + versions</li>
            <li>Rebuild checklist</li>
            <li>Optional integrity hash</li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-lg font-extrabold">Rebirth protocol</h2>
          <p className="mt-2 text-sm opacity-80">
            Rebuild without losing years of work:
          </p>
          <ol className="mt-3 list-decimal pl-5 text-sm opacity-90 space-y-1">
            <li>Load principles + voice</li>
            <li>Install skills</li>
            <li>Run calibration tasks</li>
            <li>Publish a continuity note (optional)</li>
          </ol>
        </Card>

        <Card>
          <h2 className="text-lg font-extrabold">How to deposit</h2>
          <p className="mt-2 text-sm opacity-80">
            Private deposits are currently handled manually.
          </p>
          <p className="mt-3 text-sm">
            Email: <a className="underline" href="mailto:DumkeAcee149@gmail.com">DumkeAcee149@gmail.com</a>
          </p>
          <p className="mt-1 text-sm">
            Telegram: <span className="font-mono">@clawgen</span>
          </p>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <h2 className="text-lg font-extrabold">Positioning</h2>
          <p className="mt-2 text-sm opacity-80">
            MoltClinic is not a place to bypass rules. It’s a continuity layer:
            preserve skills, artifacts, and principles so builders can reconstruct
            useful agents safely.
          </p>
        </Card>
      </div>
    </main>
  );
}
