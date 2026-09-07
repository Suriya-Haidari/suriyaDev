import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArrowUpRight, GitHub, LinkedIn, Mail } from "@/components/ui/Icons";
import { containerClass } from "@/components/ui/layout";
import { siteConfig } from "@/config/site";
import { ArchitectureMap } from "@/features/hero/ArchitectureMap";

const strengths = ["Product thinking", "React", "Node.js", "REST APIs", "MongoDB", "JavaScript", "System design"];

export function HeroSection() {
  const quickFacts = [
    { label: "Experience", value: siteConfig.experience },
    { label: "Work style", value: siteConfig.workStyle },
    { label: "Core stack", value: "React · Node.js" },
    { label: "Based in", value: siteConfig.location }
  ];

  return (
    <>
      <section
        className={`${containerClass} relative grid min-h-[53rem] items-center gap-14 pb-20 pt-32 text-center lg:grid-cols-[minmax(0,1fr)_minmax(26.875rem,0.9fr)] lg:gap-16 lg:text-left`}
        id="top"
        aria-labelledby="hero-title"
      >
        <div className="pointer-events-none absolute -left-48 top-24 z-0 size-[26rem] rounded-full bg-brand/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-48 bottom-12 z-0 size-[26rem] rounded-full bg-mint/10 blur-[120px]" />

        <div className="relative z-10">
          <p className="mb-6 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.11em] text-muted motion-safe:animate-[hero-in_0.8s_ease-out_both]">
            <span className="size-2 rounded-full bg-mint shadow-[0_0_0_5px_rgba(57,215,163,0.12)] motion-safe:animate-pulse" />
            {siteConfig.role} · {siteConfig.availability}
          </p>
          <h1 id="hero-title" className="mx-auto max-w-[700px] text-[clamp(3.6rem,7.1vw,6.4rem)] font-black leading-[0.91] tracking-[-0.075em] motion-safe:animate-[hero-in_0.8s_0.1s_ease-out_both] lg:mx-0">
            I build full-stack products that feel <span className="bg-gradient-to-r from-brand via-[#8b70ff] to-mint bg-clip-text text-transparent">effortless.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-[620px] text-base leading-8 text-muted motion-safe:animate-[hero-in_0.8s_0.2s_ease-out_both] lg:mx-0 lg:text-lg">
            {siteConfig.experience} of professional experience turning complex workflows into clear, dependable React interfaces, Node.js services and scalable data systems.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 motion-safe:animate-[hero-in_0.8s_0.3s_ease-out_both] lg:justify-start">
            <ButtonLink href="#projects">
              View selected work <ArrowUpRight />
            </ButtonLink>
            <ButtonLink variant="secondary" href={siteConfig.emailHref}>
              <Mail /> Discuss an opportunity
            </ButtonLink>
          </div>

          <dl className="mx-auto mt-9 grid max-w-[620px] grid-cols-1 gap-2 text-left motion-safe:animate-[hero-in_0.8s_0.4s_ease-out_both] min-[430px]:grid-cols-2 lg:mx-0" aria-label="Recruiter quick facts">
            {quickFacts.map((fact) => (
              <div className="grid gap-2 rounded-[0.875rem] border border-line bg-surface p-4" key={fact.label}>
                <dt className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-muted">{fact.label}</dt>
                <dd className="text-sm font-extrabold">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-5 flex justify-center gap-5 text-sm font-bold text-muted motion-safe:animate-[hero-in_0.8s_0.45s_ease-out_both] lg:justify-start" aria-label="Professional profiles">
            <a className="inline-flex items-center gap-2 transition hover:text-brand" href={siteConfig.linkedin} target="_blank" rel="noreferrer">
              <LinkedIn /> LinkedIn <ArrowUpRight size={14} />
            </a>
            <a className="inline-flex items-center gap-2 transition hover:text-brand" href={siteConfig.github} target="_blank" rel="noreferrer">
              <GitHub /> GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[620px] motion-safe:animate-[hero-in_0.8s_0.2s_ease-out_both]">
          <ArchitectureMap />
        </div>
      </section>

      <div className="overflow-hidden border-y border-line bg-surface" aria-label="Technical strengths">
        <div className="flex w-max motion-safe:animate-[ticker-slide_30s_linear_infinite]">
          {[...strengths, ...strengths].map((strength, index) => (
            <span className="inline-flex items-center gap-6 whitespace-nowrap px-6 py-5 font-mono text-xs font-extrabold uppercase tracking-[0.13em] text-muted" key={`${strength}-${index}`}>
              {strength}<i className="not-italic text-brand" aria-hidden="true">✦</i>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
