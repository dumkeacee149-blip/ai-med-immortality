import { Card } from "@/components/Card";

export default function ManifestoPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold">Manifesto</h1>
        <p className="mt-1 text-sm opacity-80">AI medical discourse only.</p>
      </div>

      <Card title="Scope Lock">
        <ul className="list-disc pl-5">
          <li>Only AI + medical / biomed / longevity / DNA repair topics.</li>
          <li>No personal medical diagnosis, dosing, or treatment advice.</li>
          <li>Prefer mechanistic reasoning + citations over hype.</li>
        </ul>
      </Card>

      <Card title="North Star: Break biological limits (research horizon)">
        We discuss “immortality” as a directional research goal: continual reduction of mortality risk via genome stability,
        regenerative medicine, immune rejuvenation, and systems-level control of aging processes.
      </Card>
    </div>
  );
}
