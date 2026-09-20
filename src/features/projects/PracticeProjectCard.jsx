import { ArrowUpRight } from "@/components/ui/Icons";

export function PracticeProjectCard({ project }) {
  return (
    <article
      className="flex min-h-[20rem] flex-col rounded-[1.4rem] border border-[#173b2a]/10 bg-white p-6 transition duration-300 hover:border-[#173b2a]/25 hover:shadow-[0_16px_35px_rgba(53,47,27,0.09)]"
      id={"practice-" + project.slug}
    >
      <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.11em] text-[#617267]">
        {project.type}
      </p>

      <h4 className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.045em] text-[#173b2a]">
        {project.title}
      </h4>

      <p className="mt-3 text-sm leading-7 text-[#626b64]">
        {project.summary}
      </p>

      <ul
        className="mt-auto flex flex-wrap gap-2 pt-7"
        aria-label={project.title + " technologies"}
      >
        {project.stack.map((technology) => (
          <li
            className="rounded-full bg-[#f7f4ea] px-3 py-1.5 text-xs font-semibold text-[#173b2a]"
            key={technology}
          >
            {technology}
          </li>
        ))}
      </ul>

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
    </article>
  );
}