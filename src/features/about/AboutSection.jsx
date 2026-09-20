import { ArrowUpRight, Mail } from "@/components/ui/Icons";
import { containerClass, revealClass } from "@/components/ui/layout";
import { siteConfig } from "@/config/site";

const skills = [
  { label: "React interfaces", className: "left-0 top-[18%]" },
  { label: "Node.js APIs", className: "right-0 top-[30%]" },
  { label: "MongoDB data", className: "bottom-[21%] left-[3%]" },
  { label: "Product systems", className: "bottom-[10%] right-[3%]" }
];

export function AboutSection() {
  return (
    <section
      className="overflow-hidden bg-[#173b2a] py-20 text-white sm:py-28"
      id="about"
      aria-labelledby="about-title"
    >
      <div className={containerClass}>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(22rem,0.9fr)_minmax(0,1fr)] lg:gap-20">
          <div
            className={`${revealClass} relative mx-auto w-full max-w-[31rem] py-5 sm:py-8`}
            data-reveal
          >
            <div
              className="absolute inset-x-[7%] bottom-[12%] top-[11%] rounded-[48%_52%_46%_54%/42%_46%_54%_58%] bg-[#f4b000]"
              aria-hidden="true"
            />

            <div
              className="absolute left-[3%] top-[26%] size-10 rounded-full border-2 border-white/75 border-r-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-[19%] right-[1%] size-7 rounded-full border-2 border-white/55 border-l-transparent"
              aria-hidden="true"
            />

            <img
              className="relative z-10 mx-auto aspect-square w-[68%] rounded-[46%_54%_50%_50%/46%_46%_54%_54%] object-cover object-top"
              src="/profile.jpg"
              alt="Suriya Haidari"
            />

            {skills.map((skill) => (
              <span
                key={skill.label}
                className={
                  "absolute z-20 rounded-full bg-white px-3 py-2 text-[0.68rem] font-bold text-[#173b2a] shadow-[0_10px_20px_rgba(7,28,18,0.2)] sm:px-4 sm:text-xs " +
                  skill.className
                }
              >
                {skill.label}
              </span>
            ))}
          </div>

          <div className={`${revealClass} max-w-[39rem]`} data-reveal>
            <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.13em] text-[#f4b000]">
              02 / About me
            </p>

            <h2
              className="mt-4 text-[clamp(2.35rem,4.8vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.06em]"
              id="about-title"
            >
              Full-stack developer building useful products that feel simple.
            </h2>

            <p className="mt-6 max-w-[35rem] text-[0.96rem] leading-7 text-white/72">
              I build web products from the first interface to the APIs and data
              behind them. My work focuses on clear user journeys, reliable
              backend logic and practical tools that solve real problems.
            </p>

            <div className="mt-8 grid max-w-[36rem] grid-cols-3 gap-3 border-y border-white/15 py-6">
              <div>
                <strong className="block text-2xl font-semibold tracking-[-0.05em] text-[#f4b000] sm:text-3xl">
                  2+
                </strong>
                <span className="mt-1 block text-xs leading-5 text-white/65">
                  Years building products
                </span>
              </div>

              <div>
                <strong className="block text-2xl font-semibold tracking-[-0.05em] text-[#f4b000] sm:text-3xl">
                  3+
                </strong>
                <span className="mt-1 block text-xs leading-5 text-white/65">
                  Live web projects
                </span>
              </div>

              <div>
                <strong className="block text-2xl font-semibold tracking-[-0.05em] text-[#f4b000] sm:text-3xl">
                  Remote
                </strong>
                <span className="mt-1 block text-xs leading-5 text-white/65">
                  Available worldwide
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4b000] px-5 text-sm font-bold text-[#173b2a] transition hover:-translate-y-0.5 hover:bg-[#ffc333]"
                href="#projects"
              >
                View my projects <ArrowUpRight size={17} />
              </a>

              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
                href={siteConfig.emailHref}
              >
                <Mail size={17} /> Let&apos;s talk
              </a>
            </div>

            <p className="mt-6 text-sm text-white/55">
              Based in {siteConfig.location} · {siteConfig.workStyle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}