import { Mail } from "@/components/ui/Icons";
import { siteConfig } from "@/config/site";
import { navigation } from "@/layout/Navbar/navigation";

export function Navbar() {
  return (
    <header className="fixed left-1/2 top-3 z-50 grid min-h-[3.75rem] w-[calc(100%-1.25rem)] max-w-[1180px] -translate-x-1/2 grid-cols-[auto_1fr_auto] items-center rounded-full border border-white/15 bg-[#173b2a]/95 px-2 py-2 text-white shadow-[0_14px_36px_rgba(23,59,42,0.22)] backdrop-blur-xl sm:top-5 sm:min-h-[4.1rem] sm:grid-cols-[1fr_auto_1fr] sm:px-3">
      <a
        className="inline-flex w-max items-center gap-2.5"
        href="/#top"
        aria-label={`${siteConfig.name}, home`}
      >
        <span className="grid size-9 place-items-center rounded-full bg-[#f4b000] text-[0.68rem] font-black text-[#173b2a] shadow-[0_7px_18px_rgba(244,176,0,0.28)] sm:size-10">
          {siteConfig.initials}
        </span>

        <span className="hidden gap-0.5 md:grid">
          <strong className="text-sm tracking-tight text-white">
            {siteConfig.name}
          </strong>
          <small className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-white/55">
            {siteConfig.role}
          </small>
        </span>
      </a>

      <nav
        className="flex justify-self-center rounded-full p-1"
        aria-label="Primary navigation"
      >
        {navigation.map((item) => (
          <a
            className="rounded-full px-1.5 py-2 text-[0.68rem] font-bold text-white/65 transition hover:bg-white/10 hover:text-white min-[360px]:px-2.5 sm:px-3.5 sm:text-sm"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center justify-self-end gap-1.5 sm:gap-2">
        <a
          className="grid size-9 place-items-center rounded-full bg-white text-[#173b2a] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f4b000] sm:flex sm:h-10 sm:w-auto sm:px-4 sm:text-sm sm:font-extrabold"
          href={siteConfig.emailHref}
          aria-label="Email Suriya"
        >
          <Mail size={16} />
          <span className="hidden sm:inline">Let&apos;s talk</span>
        </a>

        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
}