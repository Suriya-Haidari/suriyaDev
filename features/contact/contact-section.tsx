import { ArrowUpRight, GitHub, LinkedIn, Mail } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  return (
    <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
      <div className="contact-card" data-reveal>
        <div className="contact-glow" aria-hidden="true" />
        <p className="kicker">05 / Let&apos;s work together</p>
        <h2 id="contact-title">Let&apos;s build something useful.</h2>
        <p>
          I&apos;m open to remote full-stack JavaScript roles and product teams where thoughtful engineering, useful software and long-term quality matter.
        </p>
        <div className="contact-actions">
          <a className="button button--light" href={siteConfig.emailHref}>
            <Mail /> Email Suriya <ArrowUpRight />
          </a>
          <a className="button button--outline" href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            <LinkedIn /> LinkedIn <ArrowUpRight />
          </a>
          <a className="button button--outline" href={siteConfig.github} target="_blank" rel="noreferrer">
            <GitHub /> GitHub <ArrowUpRight />
          </a>
        </div>
        <div className="contact-footer">
          <span><i />{siteConfig.availability}</span>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </div>
    </section>
  );
}
