import { ArrowUpRight } from "@/components/ui/icons";
import type { PracticeProject } from "@/data/portfolio";

type PracticeProjectCardProps = {
  project: PracticeProject;
};

export function PracticeProjectCard({ project }: PracticeProjectCardProps) {
  return (
    <article className="practice-card" id={`practice-${project.slug}`}>
      <p className="practice-card__type">{project.type}</p>
      <h4>{project.title}</h4>
      <p className="practice-card__summary">{project.summary}</p>

      <ul className="tag-list" aria-label={`${project.title} technologies`}>
        {project.stack.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <div className="practice-card__links">
        {project.links.map((link) => (
          <a className="text-link" href={link.href} key={link.href} target="_blank" rel="noreferrer">
            {link.label} <ArrowUpRight size={16} />
          </a>
        ))}
      </div>
    </article>
  );
}
