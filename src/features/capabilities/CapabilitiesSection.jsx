import { SectionHeading } from "@/components/ui/SectionHeading";
import { containerClass, revealClass } from "@/components/ui/layout";
import { capabilities } from "@/data/portfolio";

const capabilityIcons = {
  interface: "⌁",
  code: "{ }",
  data: "◇",
  product: "↗"
};

const layouts = {
  wide: "lg:col-span-2",
  dark: "bg-[#111118] text-white",
  accent: "lg:col-span-2 bg-[linear-gradient(140deg,rgba(104,72,245,0.14),var(--panel))]",
  default: ""
};

export function CapabilitiesSection() {
  return (
    <section className={`${containerClass} py-24 lg:py-36`} id="capabilities" aria-labelledby="capabilities-title">
      <SectionHeading
        headingId="capabilities-title"
        index="03"
        eyebrow="Capabilities"
        title="From interface to infrastructure."
        description="Comfortable moving between product decisions and the engineering details that make them real."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability) => {
          const isDark = capability.layout === "dark";

          return (
            <article
              className={`${revealClass} group flex min-h-[24rem] flex-col rounded-[1.75rem] border border-line bg-surface p-7 transition duration-500 hover:-translate-y-2 hover:border-brand/50 hover:shadow-[0_34px_90px_rgba(38,28,85,0.16)] ${layouts[capability.layout]}`}
              key={capability.eyebrow}
              data-reveal
            >
              <span className="mb-12 grid size-12 place-items-center rounded-[0.9rem] border border-line bg-panel font-mono text-lg font-extrabold text-brand transition duration-300 group-hover:-rotate-6" aria-hidden="true">
                {capabilityIcons[capability.icon]}
              </span>
              <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-brand">{capability.eyebrow}</p>
              <h3 className="my-3 text-[clamp(1.9rem,3vw,2.625rem)] font-black leading-none tracking-[-0.055em]">{capability.title}</h3>
              <p className={`max-w-[590px] text-base leading-7 ${isDark ? "text-white/65" : "text-muted"}`}>{capability.description}</p>
              <ul className={`mt-auto flex flex-wrap gap-2 pt-7 ${isDark ? "text-white/65" : "text-muted"}`} aria-label={`${capability.eyebrow} skills`}>
                {capability.skills.map((skill) => (
                  <li className={`rounded-full border px-2.5 py-1.5 text-xs font-bold ${isDark ? "border-white/15" : "border-line"}`} key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
