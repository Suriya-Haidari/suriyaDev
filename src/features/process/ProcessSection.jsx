import { useState } from "react";
import { ArrowUpRight } from "@/components/ui/Icons";
import { containerClass, revealClass } from "@/components/ui/layout";

const workHighlights = [
  {
    name: "PEDAL24",
    type: "Product platform",
    title: "Service and marketplace workflows for cyclists.",
    description:
      "Built backend features for service requests, mechanic offers, marketplace operations and role-based access.",
    tags: ["Node.js", "Express", "MongoDB"]
  },
  {
    name: "Mizban",
    type: "Food-delivery platform",
    title: "A clearer flow from customer order to delivery.",
    description:
      "Developed frontend and backend features for ordering, delivery zones and financial-management workflows.",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    name: "Medical Platform",
    type: "Healthcare web application",
    title: "One connected portal for patients and administrators.",
    description:
      "Built responsive patient services, secure accounts, notification flows and practical administrative views.",
    tags: ["React", "Express", "PostgreSQL"]
  }
];

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeWork = workHighlights[activeIndex];

  function showWork(index) {
    setActiveIndex(index);
  }

  return (
    <section
      className="overflow-hidden bg-white py-20 sm:py-28"
      aria-labelledby="process-title"
      id="impact"
    >
      <div className={containerClass}>
        <div
          className={`${revealClass} mx-auto max-w-[44rem] text-center`}
          data-reveal
        >
          <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.13em] text-[#617267]">
            04 / Product impact
          </p>

          <h2
            className="mt-4 text-[clamp(2.25rem,4.5vw,4.1rem)] font-semibold leading-[1.06] tracking-[-0.06em] text-[#173b2a]"
            id="process-title"
          >
            The impact of my work.
          </h2>

          <p className="mt-4 text-[0.95rem] leading-7 text-[#626b64]">
            Practical product work across platforms, workflows and internal tools.
          </p>
        </div>

        <div
          className={`${revealClass} mx-auto mt-10 max-w-[52rem] lg:mt-12`}
          data-reveal
        >
          <article className="relative overflow-hidden rounded-[1.6rem] border border-[#173b2a]/10 bg-[#f7f4ea] p-6 shadow-[0_18px_45px_rgba(53,47,27,0.08)] sm:p-9">
            <div
              className="absolute -right-14 -top-14 size-48 rounded-full bg-[#f4b000]/30 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-16 -left-16 size-44 rounded-full bg-[#173b2a]/10 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div
                  className="flex items-center gap-1 text-[#e0a000]"
                  aria-label="Selected project"
                >
                  <span>●</span>
                  <span>●</span>
                  <span>●</span>
                </div>

                <span className="rounded-full bg-white px-3 py-1.5 font-mono text-[0.63rem] font-bold uppercase tracking-[0.1em] text-[#617267]">
                  {activeWork.type}
                </span>
              </div>

              <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#d39000]">
                {activeWork.name}
              </p>

              <h3 className="mt-3 max-w-[38rem] text-[clamp(1.8rem,3.5vw,3rem)] font-semibold leading-[1.08] tracking-[-0.055em] text-[#173b2a]">
                {activeWork.title}
              </h3>

              <p className="mt-4 max-w-[42rem] text-[0.95rem] leading-7 text-[#626b64]">
                {activeWork.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-t border-[#173b2a]/10 pt-6">
                <ul
                  className="flex flex-wrap gap-2"
                  aria-label={activeWork.name + " technologies"}
                >
                  {activeWork.tags.map((tag) => (
                    <li
                      className="rounded-full border border-[#173b2a]/10 bg-white px-3 py-1.5 text-xs font-semibold text-[#173b2a]"
                      key={tag}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <a
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#173b2a] transition hover:text-[#285440]"
                  href="#projects"
                >
                  View project <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </article>

          <div
            className="mt-7 flex items-center justify-center gap-3"
            aria-label="Work highlights"
          >
            <button
              className="grid size-9 place-items-center rounded-full border border-[#173b2a]/10 text-base font-semibold text-[#173b2a] transition hover:border-[#173b2a] disabled:cursor-not-allowed disabled:opacity-35"
              type="button"
              onClick={() => showWork(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous work highlight"
            >
              ←
            </button>

            <div className="flex items-center gap-2">
              {workHighlights.map((work, index) => (
                <button
                  className={
                    "h-2.5 rounded-full transition-all " +
                    (index === activeIndex
                      ? "w-8 bg-[#f4b000]"
                      : "w-2.5 bg-[#173b2a]/20 hover:bg-[#173b2a]/45")
                  }
                  type="button"
                  key={work.name}
                  onClick={() => showWork(index)}
                  aria-label={"Show " + work.name + " highlight"}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </div>

            <button
              className="grid size-9 place-items-center rounded-full border border-[#173b2a]/10 text-base font-semibold text-[#173b2a] transition hover:border-[#173b2a] disabled:cursor-not-allowed disabled:opacity-35"
              type="button"
              onClick={() => showWork(activeIndex + 1)}
              disabled={activeIndex === workHighlights.length - 1}
              aria-label="Next work highlight"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}