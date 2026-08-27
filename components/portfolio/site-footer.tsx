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
      <p>Designed with curiosity. Built with care.</p>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
