import { ArrowUpRight } from "@/components/ui/Icons";

export function PracticeProjectCard({ project }) {
  return (
    <article className="flex min-h-[24rem] flex-col rounded-[1.6rem] border border-line bg-panel p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-[0_12px_40px_rgba(38,28,85,0.10)]" id={`practice-${project.slug}`}>
      <p className="font-mono text-xs font-extrabold uppercase tracking-[0.1em] text-brand">{project.type}</p>
      <h4 className="mb-3 mt-7 text-3xl font-black leading-tight tracking-[-0.045em]">{project.title}</h4>
      <p className="text-base leading-7 text-muted">{project.summary}</p>

      <ul className="mt-auto flex flex-wrap gap-2 pt-7" aria-label={`${project.title} technologies`}>
        {project.stack.map((technology) => (
          <li className="rounded-full border border-line px-2.5 py-1.5 text-xs font-bold text-muted" key={technology}>{technology}</li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-4">
        {project.links.map((link) => (
          <a className="inline-flex items-center gap-2 border-b border-line pb-1 text-sm font-extrabold transition hover:border-brand hover:text-brand" href={link.href} key={link.href} target="_blank" rel="noreferrer">
            {link.label} <ArrowUpRight size={16} />
          </a>
        ))}
      </div>
    </article>
  );
}
