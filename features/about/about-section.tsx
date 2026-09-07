import { principles } from "@/data/portfolio";
import { siteConfig } from "@/lib/site";

export function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="section-shell">
        <div className="about-intro" data-reveal>
          <p className="kicker">02 / How I think</p>
          <h2 className="about-statement" id="about-title">
            Good software should be technically sound, visually calm and <em>obvious to use.</em>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-copy" data-reveal>
            <p>
              With {siteConfig.experience.toLowerCase()} of professional experience, I work across the stack—but the real craft is in the connection between layers: translating product intent into an interface, an API and a data model that stay understandable as the product grows.
            </p>
            <p>
              My approach favors clear domain logic, considered interactions and dependable systems over unnecessary complexity.
            </p>
          </div>
          <ol className="principles" data-reveal>
            {principles.map((principle) => (
              <li key={principle.index}>
                <span>{principle.index}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
