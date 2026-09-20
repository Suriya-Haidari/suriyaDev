import { ArrowUpRight, LinkedIn, Mail } from "@/components/ui/Icons";
import { containerClass, revealClass } from "@/components/ui/layout";
import { siteConfig } from "@/config/site";

const roles = [
    {
        period: "Dec 2024 — Present",
        title: "Full-Stack Engineer",
        organization: "PEDAL24",
        description: "Backend systems and React-based administrative tools."
    },
    {
        period: "Aug 2025 — Jul 2026",
        title: "Full-Stack Engineer",
        organization: "SkyTeams",
        description: "Built features for the Mizban food-delivery platform."
    },
    {
        period: "Feb 2025 — Jul 2025",
        title: "Software Development Intern",
        organization: "Herat",
        description: "Strengthened JavaScript, algorithms and web development foundations."
    }
];

function EducationIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="m3 9 9-4 9 4-9 4-9-4Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />
            <path
                d="M6.5 11.2V16c2.8 2.5 8.2 2.5 11 0v-4.8M21 9v5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function WorkIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect
                x="3.5"
                y="7"
                width="17"
                height="12"
                rx="2.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
            />
            <path
                d="M8.5 7V5.8c0-1 .8-1.8 1.8-1.8h3.4c1 0 1.8.8 1.8 1.8V7M3.8 12h16.4M10 12v1.3h4V12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function EducationSection() {
    return (
        <section
            className="bg-[#f7f4ea] py-20 sm:py-28"
            id="contact"
            aria-labelledby="contact-title"
        >
            <div className={containerClass}>
                <div
                    className={revealClass + " mx-auto max-w-[46rem] text-center"}
                    data-reveal
                >
                    <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.13em] text-[#617267]">
                        05 / Education & work
                    </p>

                    <h2
                        className="mt-4 text-[clamp(2.3rem,4.8vw,4.3rem)] font-semibold leading-[1.05] tracking-[-0.06em] text-[#173b2a]"
                        id="contact-title"
                    >
                        My academic and{" "}
                        <span className="text-[#d39000]">professional journey.</span>
                    </h2>
                </div>

                <div className="mx-auto mt-10 grid max-w-[62rem] gap-4 lg:mt-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <article
                        className={
                            revealClass +
                            " rounded-[1.5rem] border border-[#173b2a]/10 bg-[#f7f4ea] p-6 sm:p-8"
                        }
                        data-reveal
                    >
                        <div className="flex items-center gap-3">
                            <span className="grid size-11 place-items-center rounded-full bg-[#f4b000] p-2.5 text-[#173b2a]">
                                <EducationIcon />
                            </span>

                            <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#173b2a]">
                                Education
                            </h3>
                        </div>

                        <div className="mt-9 border-l border-[#173b2a]/15 pl-5">
                            <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[#617267]">
                                Secondary education
                            </p>

                            <h4 className="mt-2 text-lg font-semibold tracking-[-0.035em] text-[#173b2a]">
                                Tajrabavi High School
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-[#626b64]">
                                Academic foundation and a continued focus on learning through
                                practical software projects.
                            </p>
                        </div>

                        <div className="mt-9 rounded-2xl border border-[#173b2a]/10 bg-white p-4">
                            <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.1em] text-[#617267]">
                                Current focus
                            </p>

                            <p className="mt-2 text-sm font-semibold leading-6 text-[#173b2a]">
                                Full-stack JavaScript, system design and practical product
                                development.
                            </p>
                        </div>
                    </article>

                    <article
                        className={
                            revealClass +
                            " rounded-[1.5rem] border border-[#173b2a]/10 bg-[#173b2a] p-6 text-white shadow-[0_16px_35px_rgba(23,59,42,0.14)] sm:p-8"
                        }
                        data-reveal
                    >
                        <div className="flex items-center gap-3">
                            <span className="grid size-11 place-items-center rounded-full bg-[#f4b000] p-2.5 text-[#173b2a]">
                                <WorkIcon />
                            </span>

                            <h3 className="text-xl font-semibold tracking-[-0.04em]">
                                Work experience
                            </h3>
                        </div>

                        <ol className="mt-7 divide-y divide-white/15">
                            {roles.map((role) => (
                                <li
                                    className="py-5 first:pt-0 last:pb-0"
                                    key={role.period + role.organization}
                                >
                                    <p className="font-mono text-[0.63rem] font-bold uppercase tracking-[0.1em] text-[#f4b000]">
                                        {role.period}
                                    </p>

                                    <h4 className="mt-2 text-lg font-semibold tracking-[-0.035em]">
                                        {role.title}
                                    </h4>

                                    <p className="mt-1 text-sm font-semibold text-white/70">
                                        {role.organization}
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-white/60">
                                        {role.description}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </article>
                </div>

                <div
                    className={revealClass + " mt-9 flex flex-wrap justify-center gap-3"}
                    data-reveal
                >
                    <a
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#173b2a] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#285440]"
                        href={siteConfig.linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <LinkedIn size={17} /> View full LinkedIn profile{" "}
                        <ArrowUpRight size={16} />
                    </a>

                    <a
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#173b2a]/20 px-5 text-sm font-bold text-[#173b2a] transition hover:-translate-y-0.5 hover:border-[#173b2a] hover:bg-[#f7f4ea]"
                        href={siteConfig.emailHref}
                    >
                        <Mail size={17} /> Get in touch
                    </a>
                </div>
            </div>
        </section>
    );
}