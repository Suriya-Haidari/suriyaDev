import { ArrowUpRight } from "@/components/ui/Icons";
import { revealClass } from "@/components/ui/layout";
import { ProjectVisual } from "@/features/projects/ProjectVisual";

export function ProjectCard({ project }) {
  const featuredLayout = project.featured
    ? "md:col-span-2 lg:grid-cols-[minmax(0,0.94fr)_minmax(26.875rem,1.06fr)]"
    : "grid-rows-[auto_20rem]";

  return (
    <article
      className={`${revealClass} group grid overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-500 hover:-translate-y-2 hover:border-brand/50 hover:shadow-[0_34px_90px_rgba(38,28,85,0.16)] md:rounded-[2.125rem] ${featuredLayout}`}
      id={`project-${project.slug}`}
      data-reveal
    >
      <div className="flex flex-col p-6 sm:p-9 lg:p-11">
        <div className="flex items-center justify-between gap-5">
          <p className="m-0 text-xs font-extrabold uppercase tracking-[0.12em] text-brand">{project.category} · {project.organization}</p>
          <span className="font-mono text-xs font-extrabold text-muted">{project.index}</span>
        </div>

        <h3 className="mb-3.5 mt-8 text-[clamp(2.7rem,5vw,4.25rem)] font-black leading-[0.96] tracking-[-0.065em]">{project.title}</h3>
        <p className="max-w-[660px] text-base leading-7 text-muted">{project.summary}</p>

        <dl className="mt-7 grid grid-cols-1 gap-2 min-[430px]:grid-cols-2">
          {[
            ["Contribution", project.role],
            ["Scope", project.scope]
          ].map(([label, value]) => (
            <div className="grid gap-2 rounded-[0.875rem] border border-line bg-panel p-3.5" key={label}>
              <dt className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-muted">{label}</dt>
              <dd className="text-sm font-bold">{value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-6 grid list-none gap-2.5 text-sm leading-6 text-muted" aria-label={`${project.title} highlights`}>
          {project.highlights.map((highlight) => (
            <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-mint before:shadow-[0_0_0_4px_rgba(57,215,163,0.10)]" key={highlight}>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col items-start justify-between gap-5 pt-7 xl:flex-row xl:items-end">
          <ul className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
            {project.stack.map((technology) => (
              <li className="rounded-full border border-line px-2.5 py-1.5 text-xs font-bold text-muted" key={technology}>{technology}</li>
            ))}
          </ul>

          {project.links ? (
            <div className="flex flex-wrap gap-4 xl:justify-end">
              {project.links.map((link) => (
                <a className="inline-flex items-center gap-2 border-b border-line pb-1 text-sm font-extrabold transition hover:border-brand hover:text-brand" href={link.href} key={link.href} target="_blank" rel="noreferrer">
                  {link.label} <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          ) : (
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-muted">
              <i className="size-1.5 rounded-full bg-mint" />Private product work
            </span>
          )}
        </div>
      </div>

      <ProjectVisual type={project.visual} featured={project.featured} />
    </article>
  );
}
