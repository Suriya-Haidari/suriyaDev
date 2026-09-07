import { containerClass, revealClass } from "@/components/ui/layout";
import { processSteps } from "@/data/portfolio";

export function ProcessSection() {
  return (
    <section className="bg-[linear-gradient(180deg,rgba(104,72,245,0.07),transparent)] py-24 lg:py-32" aria-labelledby="process-title">
      <div className={`${containerClass} grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24`}>
        <div className={`${revealClass} h-fit lg:sticky lg:top-32`} data-reveal>
          <p className="mb-5 font-mono text-xs font-extrabold uppercase tracking-[0.13em] text-brand">04 / Engineering flow</p>
          <h2 className="max-w-[430px] text-[clamp(3rem,5.5vw,4.625rem)] font-black leading-[0.98] tracking-[-0.065em]" id="process-title">Clarity at every step.</h2>
        </div>

        <ol>
          {processSteps.map((step) => (
            <li className={`${revealClass} group grid grid-cols-[2.25rem_1fr_auto] gap-3 border-t border-line px-1 py-8 transition duration-300 hover:pl-3 sm:grid-cols-[3.25rem_1fr_auto] sm:gap-5 last:border-b`} key={step.index} data-reveal>
              <span className="pt-1 font-mono text-xs font-extrabold text-brand">{step.index}</span>
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight">{step.title}</h3>
                <p className="mt-2 max-w-[520px] text-base leading-7 text-muted">{step.description}</p>
              </div>
              <i className="not-italic text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand" aria-hidden="true">↗</i>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
