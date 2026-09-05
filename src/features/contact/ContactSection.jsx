import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArrowUpRight, GitHub, LinkedIn, Mail } from "@/components/ui/Icons";
import { containerClass, revealClass } from "@/components/ui/layout";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <section className={`${containerClass} py-24 lg:pb-14 lg:pt-32`} id="contact" aria-labelledby="contact-title">
      <div className={`${revealClass} relative flex min-h-[36rem] flex-col justify-center overflow-hidden rounded-[1.75rem] bg-[#111118] p-7 text-white shadow-[0_38px_105px_rgba(24,17,60,0.28)] sm:p-12 lg:rounded-[2.5rem] lg:p-20`} data-reveal>
        <div className="pointer-events-none absolute -right-40 -top-48 size-[33rem] rounded-full bg-[#7657ff] opacity-40 blur-[120px] motion-safe:animate-[glow-drift_9s_ease-in-out_infinite_alternate]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(90deg,transparent,black)]" aria-hidden="true" />

        <div className="relative z-10">
          <p className="mb-5 font-mono text-xs font-extrabold uppercase tracking-[0.13em] text-[#8b70ff]">05 / Let&apos;s work together</p>
          <h2 className="max-w-[850px] text-[clamp(3.25rem,7.4vw,6rem)] font-black leading-[0.94] tracking-[-0.075em]" id="contact-title">Let&apos;s build something useful.</h2>
          <p className="mt-7 max-w-[680px] text-base leading-7 text-[#aaa7b5]">
            I&apos;m open to remote full-stack JavaScript roles and product teams where thoughtful engineering, useful software and long-term quality matter.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink variant="light" href={siteConfig.emailHref}>
              <Mail /> Email Suriya <ArrowUpRight />
            </ButtonLink>
            <ButtonLink variant="outline" href={siteConfig.linkedin} target="_blank" rel="noreferrer">
              <LinkedIn /> LinkedIn <ArrowUpRight />
            </ButtonLink>
            <ButtonLink variant="outline" href={siteConfig.github} target="_blank" rel="noreferrer">
              <GitHub /> GitHub <ArrowUpRight />
            </ButtonLink>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-5 text-xs font-bold uppercase tracking-[0.09em] text-[#8f8c99] sm:flex-row sm:items-center">
            <span className="inline-flex items-center gap-2"><i className="size-2 rounded-full bg-mint shadow-[0_0_12px_#39d7a3]" />{siteConfig.availability}</span>
            <a className="break-all normal-case transition hover:text-mint" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
