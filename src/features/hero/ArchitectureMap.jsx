const nodes = [
  { index: "01", title: "Interface", detail: "React · Vite", position: "left-3 top-14 sm:left-6" },
  { index: "02", title: "Services", detail: "Node · Express", position: "right-3 top-16 sm:right-6" },
  { index: "03", title: "Data", detail: "MongoDB · SQL", position: "bottom-14 right-3 sm:right-6" },
  { index: "04", title: "Delivery", detail: "Tests · Integrations", position: "bottom-16 left-3 sm:left-6" }
];

export function ArchitectureMap() {
  return (
    <div className="relative min-h-[34rem] overflow-hidden rounded-[1.75rem] border border-line bg-panel shadow-[0_34px_90px_rgba(38,28,85,0.16)] motion-safe:animate-[portfolio-float_7s_ease-in-out_infinite] sm:min-h-[37.5rem] sm:rounded-[2.125rem]" aria-label="Full-stack architecture overview">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(104,72,245,0.18),transparent_42%)]" aria-hidden="true" />

      <div className="relative z-10 flex items-center justify-between border-b border-line px-5 py-5 font-mono text-xs font-bold uppercase tracking-[0.1em] text-muted sm:px-7">
        <span>Product system</span>
        <span className="inline-flex items-center gap-2 text-mint">
          <i className="size-1.5 rounded-full bg-current shadow-[0_0_10px_currentColor]" /> Connected
        </span>
      </div>

      <div className="relative h-[25rem] sm:h-[28rem]" aria-hidden="true">
        <svg className="absolute inset-0 h-full w-full text-brand/40 motion-safe:animate-[line-flow_10s_linear_infinite]" viewBox="0 0 540 430" fill="none">
          <path d="M270 215 118 100M270 215l157-102M270 215l131 136M270 215 111 337" stroke="currentColor" strokeWidth="1" strokeDasharray="6 7" />
          <circle cx="270" cy="215" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="6 7" />
          <circle cx="270" cy="215" r="174" stroke="currentColor" strokeWidth="1" strokeDasharray="6 7" />
        </svg>

        <div className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-[1.75rem] border border-brand/40 bg-panel text-center shadow-[0_25px_60px_rgba(104,72,245,0.22)] sm:size-28 sm:rounded-[2.125rem]">
          <strong className="bg-gradient-to-br from-brand to-mint bg-clip-text text-3xl font-black tracking-[-0.07em] text-transparent">SH</strong>
          <small className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-muted">Full stack</small>
        </div>

        {nodes.map((node, nodeIndex) => (
          <div
            className={`absolute grid min-w-[7.5rem] grid-cols-[1.75rem_auto] items-center gap-2 rounded-xl border border-line bg-panel p-2 shadow-[0_12px_40px_rgba(38,28,85,0.10)] backdrop-blur-xl motion-safe:animate-[node-float_4.8s_ease-in-out_infinite] sm:min-w-[9.4rem] sm:grid-cols-[2rem_auto] sm:p-2.5 ${node.position}`}
            key={node.title}
            style={{ animationDelay: `${nodeIndex * -1.1}s` }}
          >
            <i className="grid size-7 place-items-center rounded-lg bg-brand/10 font-mono text-xs font-extrabold not-italic text-brand sm:size-8">{node.index}</i>
            <span className="grid gap-0.5">
              <b className="text-xs">{node.title}</b>
              <small className="hidden text-xs text-muted sm:block">{node.detail}</small>
            </span>
          </div>
        ))}
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-2 border-t border-line px-4 py-5 sm:px-7">
        {[['Frontend', 'Precise'], ['Backend', 'Reliable'], ['Product', 'Practical']].map(([label, value]) => (
          <span className="grid gap-1" key={label}>
            <small className="text-xs uppercase tracking-[0.1em] text-muted">{label}</small>
            <b className="text-xs sm:text-sm">{value}</b>
          </span>
        ))}
      </div>
    </div>
  );
}
