import { ArrowUpRight, GitHub } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  return (
    <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
      <div className="contact-card" data-reveal>
        <div className="contact-glow" aria-hidden="true" />
        <p className="kicker">05 / Let&apos;s work together</p>
        <h2 id="contact-title">Have a product worth building?</h2>
        <p>
          I&apos;m open to full-stack JavaScript roles and product teams where thoughtful engineering, useful software and long-term quality matter.
        </p>
        <div className="contact-actions">
          <a className="button button--light" href={siteConfig.github} target="_blank" rel="noreferrer">
            <GitHub /> View GitHub <ArrowUpRight />
          </a>
          <a className="button button--outline" href="#top">Back to the top ↑</a>
        </div>
        <div className="contact-footer">
          <span><i />{siteConfig.availability}</span>
          <span>React · Node.js · MongoDB</span>
        </div>
      </div>
    </section>
  );
}
