import { ArrowUpRight } from "@/components/ui/Icons";

export function ProjectCard({ project }) {
  return (
    <article
      className="flex min-h-[25rem] flex-col rounded-[1.45rem] border border-[#173b2a]/10 bg-white p-6 shadow-[0_12px_30px_rgba(53,47,27,0.06)] transition duration-300 hover:border-[#173b2a]/25 hover:shadow-[0_18px_42px_rgba(53,47,27,0.11)]"
      id={"project-" + project.slug}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.11em] text-[#617267]">
          {project.kind}
        </span>

        <span className="rounded-full bg-[#f7f4ea] px-3 py-1.5 text-[0.64rem] font-bold text-[#173b2a]">
          {project.index || "Lab"}
        </span>
      </div>

      <p className="mt-7 font-mono text-[0.65rem] font-bold uppercase tracking-[0.11em] text-[#d39000]">
        {project.label}
      </p>

      <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.055em] text-[#173b2a]">
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#626b64]">
        {project.summary}
      </p>

      {project.highlights.length > 0 && (
        <ul className="mt-6 grid gap-2 text-sm leading-6 text-[#626b64]">
          {project.highlights.slice(0, 2).map((highlight) => (
            <li
              className="relative pl-4 before:absolute before:left-0 before:top-2.5 before:size-1.5 before:rounded-full before:bg-[#e6a400]"
              key={highlight}
            >
              {highlight}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-7">
        <ul
          className="flex flex-wrap gap-2"
          aria-label={project.title + " technologies"}
        >
          {project.stack.map((technology) => (
            <li
              className="rounded-full border border-[#173b2a]/10 px-3 py-1.5 text-xs font-semibold text-[#173b2a]"
              key={technology}
            >
              {technology}
            </li>
          ))}
        </ul>

        {project.links ? (
          <div className="mt-6 flex flex-wrap gap-4">
            {project.links.map((link) => (
              <a
                className="inline-flex items-center gap-2 border-b border-[#173b2a]/25 pb-1 text-sm font-bold text-[#173b2a] transition hover:border-[#173b2a] hover:text-[#285440]"
                href={link.href}
                key={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label} <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        ) : (
          <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#617267]">
            <i className="size-2 rounded-full bg-[#e6a400]" />
            {project.organization}
          </span>
        )}
      </div>
    </article>
  );
}