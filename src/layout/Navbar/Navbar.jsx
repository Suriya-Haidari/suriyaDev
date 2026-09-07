import { Mail } from "@/components/ui/Icons";
import { siteConfig } from "@/config/site";
import { navigation } from "@/layout/Navbar/navigation";
import { ThemeToggle } from "@/layout/Navbar/ThemeToggle";

export function Navbar() {
  return (
    <header className="fixed left-1/2 top-2.5 z-50 grid min-h-[3.875rem] w-[calc(100%-1.25rem)] max-w-[1120px] -translate-x-1/2 grid-cols-[auto_1fr_auto] items-center rounded-[1.125rem] border border-line bg-header px-2 py-2 shadow-[0_12px_40px_rgba(38,28,85,0.08)] backdrop-blur-xl sm:top-[1.125rem] sm:min-h-[4.25rem] sm:grid-cols-[1fr_auto_1fr] sm:rounded-[1.375rem] sm:px-3">
      <a className="inline-flex w-max items-center gap-3" href="/#top" aria-label={`${siteConfig.name}, home`}>
        <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-[#9b85ff] text-xs font-black text-white shadow-[0_8px_24px_rgba(104,72,245,0.25)]">
          {siteConfig.initials}
        </span>
        <span className="hidden gap-0.5 sm:grid">
          <strong className="text-sm tracking-tight">{siteConfig.name}</strong>
          <small className="text-xs uppercase tracking-[0.06em] text-muted">{siteConfig.role}</small>
        </span>
      </a>

      <nav className="flex justify-self-center rounded-full sm:border sm:border-line sm:bg-panel sm:p-1" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a
            className="rounded-full px-1.5 py-2 text-xs font-bold text-muted transition hover:bg-soft hover:text-ink min-[360px]:px-2.5 sm:px-3.5 sm:text-sm"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center justify-self-end gap-2">
        <a
          className="grid size-10 place-items-center rounded-xl bg-ink text-canvas transition duration-300 hover:-translate-y-0.5 hover:bg-brand hover:text-white sm:flex sm:w-auto sm:px-4 sm:text-sm sm:font-extrabold"
          href={siteConfig.emailHref}
          aria-label="Email Suriya"
        >
          <Mail size={16} />
          <span className="hidden sm:inline">Email me</span>
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
