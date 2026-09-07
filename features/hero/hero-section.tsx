import { ArrowUpRight, GitHub, LinkedIn, Mail } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

const strengths = [
  "Product thinking",
  "React",
  "Node.js",
  "REST APIs",
  "MongoDB",
  "TypeScript",
  "System design",
] as const;

function ArchitectureMap() {
  return (
    <div className="architecture-card" aria-label="Full-stack architecture overview">
      <div className="architecture-card__header">
        <span>Product system</span>
        <span className="live-label"><i />Connected</span>
      </div>

      <div className="architecture-map" aria-hidden="true">
        <svg viewBox="0 0 540 430" fill="none">
          <path d="M270 215 118 100M270 215l157-102M270 215l131 136M270 215 111 337" />
          <circle cx="270" cy="215" r="120" />
          <circle cx="270" cy="215" r="174" />
        </svg>
        <div className="architecture-core"><strong>SH</strong><small>Full stack</small></div>
        <div className="architecture-node architecture-node--interface"><i>01</i><span><b>Interface</b><small>React · Next.js</small></span></div>
        <div className="architecture-node architecture-node--services"><i>02</i><span><b>Services</b><small>Node · Express</small></span></div>
        <div className="architecture-node architecture-node--data"><i>03</i><span><b>Data</b><small>MongoDB · SQL</small></span></div>
        <div className="architecture-node architecture-node--delivery"><i>04</i><span><b>Delivery</b><small>Tests · Integrations</small></span></div>
      </div>

      <div className="architecture-card__footer">
        <span><small>Frontend</small><b>Precise</b></span>
        <span><small>Backend</small><b>Reliable</b></span>
        <span><small>Product</small><b>Practical</b></span>
      </div>
    </div>
  );
}

export function HeroSection() {
  const tickerItems = [...strengths, ...strengths];
  const quickFacts = [
    { label: "Experience", value: siteConfig.experience },
    { label: "Work style", value: siteConfig.workStyle },
    { label: "Core stack", value: "React · Node.js" },
    { label: "Based in", value: siteConfig.location },
  ] as const;

  return (
    <>
      <section className="hero section-shell" id="top" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow hero-enter hero-enter--1">
            <span className="status-dot" />
            {siteConfig.role} · {siteConfig.availability}
          </p>
          <h1 className="hero-enter hero-enter--2" id="hero-title">
            I build full-stack products that feel <span>effortless.</span>
          </h1>
          <p className="hero-lede hero-enter hero-enter--3">
            {siteConfig.experience} of professional experience turning complex workflows into clear, dependable React interfaces, Node.js services and scalable data systems.
          </p>
          <div className="hero-actions hero-enter hero-enter--4">
            <a className="button button--primary" href="#projects">
              View selected work <ArrowUpRight />
            </a>
            <a className="button button--secondary" href={siteConfig.emailHref}>
              <Mail /> Discuss an opportunity
            </a>
          </div>
          <dl className="hero-snapshot hero-enter hero-enter--5" aria-label="Recruiter quick facts">
            {quickFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="hero-profile-links hero-enter hero-enter--5" aria-label="Professional profiles">
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
              <LinkedIn /> LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer">
              <GitHub /> GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="hero-visual hero-enter hero-enter--3">
          <ArchitectureMap />
        </div>
      </section>

      <div className="ticker" aria-label="Technical strengths">
        <div className="ticker-track">
          {tickerItems.map((item, index) => (
            <span key={`${item}-${index}`}>{item}<i aria-hidden="true">✦</i></span>
          ))}
        </div>
      </div>
    </>
  );
}
