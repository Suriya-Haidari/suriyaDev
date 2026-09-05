import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities } from "@/data/portfolio";

const capabilityIcons: Record<string, string> = {
  interface: "⌁",
  code: "{ }",
  data: "◇",
  product: "↗",
};

export function CapabilitiesSection() {
  return (
    <section className="capabilities-section section-shell" id="capabilities" aria-labelledby="capabilities-title">
      <SectionHeading
        headingId="capabilities-title"
        index="03"
        eyebrow="Capabilities"
        title="From interface to infrastructure."
        description="Comfortable moving between product decisions and the engineering details that make them real."
      />

      <div className="capability-grid">
        {capabilities.map((capability) => (
          <article className={`capability-card ${capability.className}`} key={capability.eyebrow} data-reveal>
            <span className="capability-icon" aria-hidden="true">{capabilityIcons[capability.icon]}</span>
            <p className="capability-eyebrow">{capability.eyebrow}</p>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
            <ul className="skill-list" aria-label={`${capability.eyebrow} skills`}>
              {capability.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
