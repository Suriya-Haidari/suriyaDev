import { ArrowUpRight } from "@/components/ui/icons";
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

  return (
    <>
      <section className="hero section-shell" id="top" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow hero-enter hero-enter--1">
            <span className="status-dot" />
            {siteConfig.name} · {siteConfig.availability}
          </p>
          <h1 className="hero-enter hero-enter--2" id="hero-title">
            I build full-stack products that feel <span>effortless.</span>
          </h1>
          <p className="hero-lede hero-enter hero-enter--3">
            Turning complex workflows into clear, dependable experiences across React interfaces, Node.js services and scalable data systems.
          </p>
          <div className="hero-actions hero-enter hero-enter--4">
            <a className="button button--primary" href="#projects">
              Explore selected work <ArrowUpRight />
            </a>
            <a className="button button--secondary" href="#contact">Let&apos;s talk</a>
          </div>
          <dl className="hero-meta hero-enter hero-enter--5">
            <div><dt>Based in</dt><dd>{siteConfig.location}</dd></div>
            <div><dt>Focused on</dt><dd>React · Node · TypeScript</dd></div>
          </dl>
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
