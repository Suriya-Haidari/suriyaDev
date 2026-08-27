import { navigation } from "@/data/portfolio";
import { siteConfig } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${siteConfig.name}, home`}>
        <span className="brand-mark" aria-hidden="true">SH</span>
        <span className="brand-copy">
          <strong>{siteConfig.name}</strong>
          <small>{siteConfig.role}</small>
        </span>
      </a>

      <nav className="primary-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <ThemeToggle />
    </header>
  );
}
