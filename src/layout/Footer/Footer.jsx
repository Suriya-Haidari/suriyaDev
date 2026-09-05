import { containerClass } from "@/components/ui/layout";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className={`${containerClass} grid justify-items-center gap-5 py-8 text-center md:grid-cols-[1fr_auto_1fr] md:items-center md:text-left`}>
      <a className="inline-flex w-max items-center gap-3 md:justify-self-start" href="/#top" aria-label="Back to the top">
        <span className="grid size-9 place-items-center rounded-[0.625rem] bg-gradient-to-br from-brand to-[#9b85ff] text-xs font-black text-white">
          {siteConfig.initials}
        </span>
        <span className="grid gap-0.5">
          <strong className="text-sm">{siteConfig.name}</strong>
          <small className="text-xs uppercase tracking-[0.06em] text-muted">{siteConfig.role}</small>
        </span>
      </a>

      <nav className="flex flex-wrap justify-center gap-5 text-sm font-bold text-muted" aria-label="Professional links">
        <a className="transition hover:text-brand" href={siteConfig.emailHref}>Email</a>
        <a className="transition hover:text-brand" href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="transition hover:text-brand" href={siteConfig.github} target="_blank" rel="noreferrer">GitHub</a>
      </nav>

      <span className="text-sm text-muted md:justify-self-end">© {new Date().getFullYear()} {siteConfig.name}</span>
    </footer>
  );
}
