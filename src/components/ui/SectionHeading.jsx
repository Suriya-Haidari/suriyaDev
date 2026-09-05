import { revealClass } from "@/components/ui/layout";

export function SectionHeading({ headingId, index, eyebrow, title, description }) {
  return (
    <div
      className={`${revealClass} mb-10 flex flex-col items-start justify-between gap-5 md:mb-14 lg:flex-row lg:items-end lg:gap-12`}
      data-reveal
    >
      <div>
        <p className="mb-5 font-mono text-xs font-extrabold uppercase tracking-[0.13em] text-brand">
          {index} / {eyebrow}
        </p>
        <h2 id={headingId} className="max-w-[720px] text-[clamp(2.8rem,6vw,4.75rem)] font-extrabold leading-[0.98] tracking-[-0.065em]">
          {title}
        </h2>
      </div>
      {description ? <p className="max-w-[430px] text-base leading-7 text-muted">{description}</p> : null}
    </div>
  );
}
