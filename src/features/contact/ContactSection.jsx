import { ArrowUpRight, GitHub, LinkedIn, Mail } from "@/components/ui/Icons";
import { containerClass, revealClass } from "@/components/ui/layout";
import { siteConfig } from "@/config/site";

function TelegramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m20.4 4.7-2.8 14c-.2 1-1 1.2-1.8.8l-4.5-3.3-2.2 2.1c-.2.2-.4.4-.8.4l.3-4.6 8.4-7.6c.4-.3-.1-.5-.5-.2L6.2 12.7 1.8 11.3c-1-.3-1-1 .2-1.5L19.1 3c.8-.3 1.6.2 1.3 1.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

const contactMethods = [
  {
    label: "Email",
    value: siteConfig.email,
    href: siteConfig.emailHref,
    icon: Mail
  },
  {
    label: "Telegram",
    value: "Message me directly",
    href: siteConfig.telegram,
    icon: TelegramIcon,
    external: true
  },
  {
    label: "GitHub",
    value: "Suriya-Haidari",
    href: siteConfig.github,
    icon: GitHub,
    external: true
  },
  {
    label: "LinkedIn",
    value: "Suriya Haidari",
    href: siteConfig.linkedin,
    icon: LinkedIn,
    external: true
  }
];

export function ContactSection() {
  return (
    <section
      className="bg-white py-20 sm:py-28"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className={containerClass}>
        <div
          className={
            revealClass +
            " relative overflow-hidden rounded-[1.75rem] bg-[#173b2a] p-6 text-white shadow-[0_24px_55px_rgba(23,59,42,0.2)] sm:p-10 lg:p-14"
          }
          data-reveal
        >
          <div
            className="pointer-events-none absolute -right-24 -top-28 size-80 rounded-full bg-[#f4b000]/25 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-36 -left-28 size-80 rounded-full border border-white/10"
            aria-hidden="true"
          />

          <div className="relative">
            <div className="flex flex-col justify-between gap-6 border-b border-white/15 pb-8 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.13em] text-[#f4b000]">
                  06 / Contact
                </p>

                <h2
                  className="mt-4 text-[clamp(2.35rem,5vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.06em]"
                  id="contact-title"
                >
                  Let&apos;s <span className="text-[#f4b000]">connect.</span>
                </h2>
              </div>

              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-bold text-white/80">
                <i className="size-2 rounded-full bg-[#f4b000] shadow-[0_0_12px_#f4b000]" />
                Open to remote work
              </span>
            </div>

            <div className="grid gap-7 py-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="max-w-[24rem] text-[0.96rem] leading-7 text-white/70">
                  Have a product idea, a full-stack role, or a problem worth
                  solving? Send me a message and let&apos;s start a conversation.
                </p>

                <a
                  className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4b000] px-5 text-sm font-bold text-[#173b2a] transition hover:-translate-y-0.5 hover:bg-[#ffc333]"
                  href={siteConfig.emailHref}
                >
                  Email me <ArrowUpRight size={17} />
                </a>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {contactMethods.map((method) => {
                  const Icon = method.icon;

                  return (
                    <a
                      className="group rounded-2xl border border-white/15 bg-white/[0.07] p-4 transition hover:-translate-y-1 hover:border-[#f4b000]/70 hover:bg-white/[0.12]"
                      href={method.href}
                      key={method.label}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noreferrer" : undefined}
                    >
                      <span className="flex items-center justify-between">
                        <span className="grid size-9 place-items-center rounded-xl bg-white text-[#173b2a] transition group-hover:bg-[#f4b000]">
                          <Icon size={17} />
                        </span>
                        <ArrowUpRight size={16} />
                      </span>

                      <span className="mt-5 block text-xs font-bold uppercase tracking-[0.1em] text-[#f4b000]">
                        {method.label}
                      </span>

                      <span className="mt-1 block break-all text-sm font-semibold text-white/85">
                        {method.value}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-3 border-t border-white/15 pt-5 text-sm text-white/55 sm:flex-row sm:items-center">
              <span>Based in {siteConfig.location} · Working remotely</span>

              <a
                className="font-semibold text-white/75 transition hover:text-[#f4b000]"
                href={siteConfig.emailHref}
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}