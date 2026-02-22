import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";
import { breakthroughs } from "@/lib/data";

export default function FeedPage() {
  return (
    <div className="grid gap-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Breakthrough Feed</h1>
          <p className="mt-1 text-sm opacity-80">AI medical breakthroughs only.</p>
        </div>
      </div>

      <div className="grid gap-4">
        {breakthroughs.map((b) => (
          <Card
            key={b.id}
            title={b.title}
            footer={
              <div className="flex flex-wrap items-center gap-2 text-xs opacity-75">
                <span>{b.date}</span>
                <span className="opacity-40">•</span>
                <span>{b.source ?? "source: pending"}</span>
              </div>
            }
          >
            <p className="mb-3">{b.summary}</p>
            <div className="flex flex-wrap gap-2">
              {b.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
