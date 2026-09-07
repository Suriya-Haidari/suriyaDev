import { ArrowUpRight } from "@/components/ui/icons";
import type { PortfolioProject } from "@/data/portfolio";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article
      className={`project-card ${project.featured ? "project-card--featured" : ""}`}
      id={`project-${project.slug}`}
      data-reveal
    >
      <div className="project-card__content">
        <div className="project-card__topline">
          <p>{project.category} · {project.organization}</p>
          <span>{project.index}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        <dl className="project-facts">
          <div><dt>Contribution</dt><dd>{project.role}</dd></div>
          <div><dt>Scope</dt><dd>{project.scope}</dd></div>
        </dl>

        <ul className="project-highlights" aria-label={`${project.title} highlights`}>
          {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>

        <div className="project-card__footer">
          <ul className="tag-list" aria-label={`${project.title} technologies`}>
            {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
          {project.links ? (
            <div className="project-links">
              {project.links.map((link) => (
                <a className="text-link" href={link.href} key={link.href} target="_blank" rel="noreferrer">
                  {link.label} <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          ) : (
            <span className="project-status"><i />Private product work</span>
          )}
        </div>
      </div>
      <ProjectVisual type={project.visual} />
    </article>
  );
}
