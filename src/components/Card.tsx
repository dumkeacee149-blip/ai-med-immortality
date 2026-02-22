import { ReactNode } from "react";

export function Card(props: { title?: string; children: ReactNode; footer?: ReactNode }) {
  return (
    <section className="rounded-2xl border border-line bg-card p-5">
      {props.title ? (
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold tracking-wide">{props.title}</h3>
        </div>
      ) : null}
      <div className="text-sm leading-6 opacity-95">{props.children}</div>
      {props.footer ? <div className="mt-4 border-t border-line pt-4">{props.footer}</div> : null}
    </section>
  );
}
