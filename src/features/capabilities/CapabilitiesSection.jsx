import { ArrowUpRight } from "@/components/ui/Icons";
import { containerClass, revealClass } from "@/components/ui/layout";
import { siteConfig } from "@/config/site";

const services = [
  {
    icon: "frontend",
    title: "Frontend development",
    description:
      "Responsive React interfaces that make complex workflows clear, accessible and pleasant to use.",
    skills: ["React", "JavaScript", "Tailwind CSS", "Vite"]
  },
  {
    icon: "backend",
    title: "Backend & APIs",
    description:
      "Reliable Node.js services, REST APIs, authentication and data models built around real product needs.",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"]
  },
  {
    icon: "product",
    title: "Product systems",
    description:
      "Connected user flows, admin tools and practical features that move a product from idea to everyday use.",
    skills: ["Workflows", "Admin tools", "Integrations", "Delivery"]
  }
];

function ServiceIcon({ name }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  if (name === "backend") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="6" cy="7" r="2.2" {...common} />
        <circle cx="18" cy="7" r="2.2" {...common} />
        <circle cx="12" cy="17" r="2.2" {...common} />
        <path d="m7.8 8.5 2.7 6M16.2 8.5l-2.7 6M8.2 7h7.6" {...common} />
      </svg>
    );
  }

  if (name === "product") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="4" width="17" height="16" rx="3" {...common} />
        <path d="M7.5 9h9M7.5 13h5M15.5 13h1M7.5 17h9" {...common} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="4" width="17" height="16" rx="3" {...common} />
      <path
        d="M3.8 8.5h16.4M7 6.2h.1M9.5 6.2h.1M7.5 12h4.5M7.5 15.5h7.5"
        {...common}
      />
    </svg>
  );
}

export function CapabilitiesSection() {
  return (
    <section
      className="bg-[#f7f4ea] py-20 sm:py-28"
      id="capabilities"
      aria-labelledby="capabilities-title"
    >
      <div className={containerClass}>
        <div
          className={`${revealClass} flex flex-col justify-between gap-6 md:flex-row md:items-end`}
          data-reveal
        >
          <div>
            <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.13em] text-[#617267]">
              03 / Services
            </p>

            <h2
              className="mt-4 text-[clamp(2.3rem,4.5vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.06em] text-[#173b2a]"
              id="capabilities-title"
            >
              What I can help you build.
            </h2>
          </div>

          <a
            className="inline-flex min-h-11 items-center justify-center gap-3 self-start rounded-full bg-[#173b2a] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#285440] md:self-auto"
            href={siteConfig.emailHref}
          >
            Let&apos;s work together
            <span className="grid size-6 place-items-center rounded-full bg-[#f4b000] text-[#173b2a]">
              <ArrowUpRight size={15} />
            </span>
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className={`${revealClass} group flex min-h-[21rem] flex-col rounded-[1.5rem] border border-[#173b2a]/10 bg-white p-6 shadow-[0_12px_30px_rgba(53,47,27,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#173b2a]/25 hover:shadow-[0_20px_42px_rgba(53,47,27,0.11)] sm:p-7`}
              data-reveal
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-[#f7f4ea] text-[#d39000] transition duration-300 group-hover:-rotate-6 group-hover:bg-[#f4b000] group-hover:text-[#173b2a]">
                <ServiceIcon name={service.icon} />
              </span>

              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.05em] text-[#173b2a]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#626b64]">
                {service.description}
              </p>

              <ul
                className="mt-auto flex flex-wrap gap-2 pt-7"
                aria-label={service.title + " skills"}
              >
                {service.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[#173b2a]/10 px-3 py-1.5 text-xs font-semibold text-[#173b2a]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>

              <a
                className="mt-6 inline-flex w-fit items-center gap-2 border-b border-[#173b2a]/20 pb-1 text-sm font-bold text-[#173b2a] transition hover:border-[#173b2a] hover:text-[#285440]"
                href={siteConfig.emailHref}
              >
                Discuss this service <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}