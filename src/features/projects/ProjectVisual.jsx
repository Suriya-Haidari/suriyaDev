function OperationsVisual() {
  const barHeights = [34, 57, 46, 78, 63, 91, 74];

  return (
    <div className="grid min-h-[19rem] w-[92%] grid-cols-[3.25rem_1fr] overflow-hidden rounded-3xl border border-white/15 bg-[#111118] text-white shadow-[0_30px_70px_rgba(18,13,47,0.35)] transition duration-500 group-hover:rotate-0 group-hover:scale-[1.02] md:min-h-[24rem] md:w-[84%] md:grid-cols-[3.875rem_1fr] lg:-rotate-2">
      <div className="flex flex-col items-center gap-5 border-r border-white/10 pt-5">
        <b className="grid size-9 place-items-center rounded-[0.625rem] bg-brand text-xs">p24</b>
        {[1, 2, 3, 4].map((item) => <i className="h-1 w-4 rounded-full bg-white/15" key={item} />)}
      </div>
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between text-xs font-extrabold">
          <span>Service operations</span><i className="size-7 rounded-full bg-gradient-to-br from-brand to-mint" />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-2 md:mt-9 md:gap-3">
          {[['REST', 'Secure APIs'], ['RBAC', 'Role workflows']].map(([title, subtitle]) => (
            <span className="grid gap-1.5 rounded-[0.875rem] border border-white/10 bg-white/5 p-3 md:p-4" key={title}>
              <b className="text-lg">{title}</b><small className="text-xs uppercase tracking-[0.08em] text-[#aaa7b5]">{subtitle}</small>
            </span>
          ))}
        </div>
        <div className="mt-5 flex h-28 items-end gap-2 rounded-[0.875rem] bg-white/[0.035] p-4 md:h-36">
          {barHeights.map((height, index) => (
            <i
              className="flex-1 origin-bottom rounded-t-md bg-gradient-to-t from-brand to-mint motion-safe:animate-[chart-pulse_2.7s_ease-in-out_infinite_alternate]"
              key={`${height}-${index}`}
              style={{ height: `${height}%`, animationDelay: `${index * -0.35}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function LayersVisual() {
  return (
    <div className="min-h-[15.625rem] w-[calc(100%-1.875rem)] rounded-[1.375rem] border border-line bg-panel p-4 shadow-[0_12px_40px_rgba(38,28,85,0.08)] transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.025] md:w-[calc(100%-3.25rem)] md:p-6">
      <div className="flex items-center justify-between text-xs font-extrabold">
        <span>Application layers</span><small className="rounded-full bg-mint/10 px-2.5 py-1.5 text-xs uppercase text-mint">Connected</small>
      </div>
      <div className="mt-5 grid gap-2.5">
        {["React interface", "Node services", "SQL + NoSQL"].map((layer, index) => (
          <div className="grid min-h-12 grid-cols-[2.125rem_1fr_auto] items-center gap-2.5 rounded-xl border border-line bg-surface px-3.5" key={layer}>
            <i className="font-mono text-xs font-extrabold not-italic text-brand">0{index + 1}</i>
            <b className="text-xs">{layer}</b>
            <span className="size-2 rounded-full bg-mint shadow-[0_0_0_4px_rgba(57,215,163,0.10)]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function PortalVisual() {
  return (
    <div className="grid min-h-[15.625rem] w-[calc(100%-1.875rem)] grid-cols-3 gap-1.5 rounded-[1.375rem] border border-line bg-panel p-4 shadow-[0_12px_40px_rgba(38,28,85,0.08)] transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.025] md:w-[calc(100%-3.25rem)] md:gap-2.5 md:p-6">
      {["Patients", "Services", "Alerts"].map((column, columnIndex) => (
        <div className="flex flex-col gap-2 rounded-xl border border-line bg-surface p-2 md:p-3" key={column}>
          <b className="mb-1 text-xs uppercase tracking-[0.08em] text-muted">{column}</b>
          {[1, 2].map((item) => (
            <i
              className={`relative h-14 rounded-[0.625rem] border bg-panel before:absolute before:left-2 before:top-3.5 before:h-1 before:w-3/5 before:rounded-full before:bg-line after:absolute after:left-2 after:top-6 after:h-1 after:w-2/5 after:rounded-full after:bg-line md:h-16 ${columnIndex === 0 && item === 1 ? "border-brand/50 bg-brand/5 shadow-[0_12px_24px_rgba(104,72,245,0.12)]" : "border-line"}`}
              key={item}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function ProjectVisual({ type, featured }) {
  return (
    <div className={`relative grid min-h-80 place-items-center overflow-hidden border-line bg-soft [background-image:radial-gradient(circle_at_50%_50%,rgba(104,72,245,0.16),transparent_62%)] ${featured ? "border-t lg:border-l lg:border-t-0" : "border-t"}`} aria-hidden="true">
      {type === "operations" ? <OperationsVisual /> : null}
      {type === "layers" ? <LayersVisual /> : null}
      {type === "portal" ? <PortalVisual /> : null}
    </div>
  );
}
