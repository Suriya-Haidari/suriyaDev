import { processSteps } from "@/data/portfolio";

export function ProcessSection() {
  return (
    <section className="process-section" aria-labelledby="process-title">
      <div className="section-shell process-layout">
        <div className="process-heading" data-reveal>
          <p className="kicker">04 / Engineering flow</p>
          <h2 id="process-title">Clarity at every step.</h2>
        </div>
        <ol className="process-list">
          {processSteps.map((step) => (
            <li key={step.index} data-reveal>
              <span>{step.index}</span>
              <div><h3>{step.title}</h3><p>{step.description}</p></div>
              <i aria-hidden="true">↗</i>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
