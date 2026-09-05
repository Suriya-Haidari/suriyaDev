import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer section-shell">
      <a className="brand" href="#top" aria-label="Back to the top">
        <span className="brand-mark" aria-hidden="true">SH</span>
        <span className="brand-copy">
          <strong>{siteConfig.name}</strong>
          <small>{siteConfig.role}</small>
        </span>
      </a>
      <nav className="footer-links" aria-label="Professional links">
        <a href={siteConfig.emailHref}>Email</a>
        <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub</a>
      </nav>
      <span>© {new Date().getFullYear()} {siteConfig.name}</span>
    </footer>
  );
}
