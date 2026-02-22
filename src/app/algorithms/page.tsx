import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";
import { algorithms } from "@/lib/data";

export default function AlgorithmsPage() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-2xl font-semibold">DNA Algorithms</h1>
        <p className="mt-1 text-sm opacity-80">Shareable algorithm concepts focused on genome maintenance and longevity.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {algorithms.map((a) => (
          <Card key={a.id} title={a.name}>
            <p className="mb-3 opacity-90">{a.idea}</p>

            <div className="mb-3">
              <div className="mb-1 text-xs opacity-60">Inputs</div>
              <div className="flex flex-wrap gap-2">{a.inputs.map((x) => <Tag key={x}>{x}</Tag>)}</div>
            </div>

            <div className="mb-3">
              <div className="mb-1 text-xs opacity-60">Outputs</div>
              <ul className="list-disc pl-5 text-sm opacity-90">{a.outputs.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>

            <div>
              <div className="mb-1 text-xs opacity-60">Constraints</div>
              <ul className="list-disc pl-5 text-sm opacity-80">{a.constraints.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
