import { containerClass, revealClass } from "@/components/ui/layout";
import { siteConfig } from "@/config/site";
import { principles } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section className="bg-[#111118] py-24 text-[#f6f5fb] lg:py-36" id="about" aria-labelledby="about-title">
      <div className={containerClass}>
        <div className={`${revealClass} border-b border-white/15 pb-12 lg:pb-16`} data-reveal>
          <p className="mb-5 font-mono text-xs font-extrabold uppercase tracking-[0.13em] text-[#8b70ff]">02 / How I think</p>
          <h2 className="max-w-[1060px] text-[clamp(2.7rem,6vw,5.125rem)] font-black leading-[1.02] tracking-[-0.065em]" id="about-title">
            Good software should be technically sound, visually calm and <em className="not-italic text-mint">obvious to use.</em>
          </h2>
        </div>

        <div className="grid gap-10 pt-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:pt-16">
          <div className={`${revealClass} text-base leading-8 text-white/65`} data-reveal>
            <p>
              With {siteConfig.experience.toLowerCase()} of professional experience, I work across the stack—but the real craft is in the connection between layers: translating product intent into an interface, an API and a data model that stay understandable as the product grows.
            </p>
            <p className="mt-5">My approach favors clear domain logic, considered interactions and dependable systems over unnecessary complexity.</p>
          </div>

          <ol className={`${revealClass} grid gap-3 md:grid-cols-3`} data-reveal>
            {principles.map((principle) => (
              <li className="rounded-[1.25rem] border border-white/15 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/5" key={principle.index}>
                <span className="font-mono text-xs font-extrabold text-mint">{principle.index}</span>
                <h3 className="mb-2.5 mt-8 text-xl font-extrabold tracking-tight">{principle.title}</h3>
                <p className="text-base leading-7 text-white/60">{principle.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
