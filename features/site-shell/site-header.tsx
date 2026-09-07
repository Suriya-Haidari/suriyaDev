import { Mail } from "@/components/ui/icons";
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

      <div className="header-actions">
        <a className="header-contact" href={siteConfig.emailHref}>
          <Mail size={16} />
          <span>Email me</span>
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
