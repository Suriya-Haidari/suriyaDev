import { useState } from "react";
import { practiceProjects, projects } from "@/data/portfolio";
import { ProjectCard } from "@/features/projects/ProjectCard";

const projectsPerPage = 3;

const allProjects = [
  ...projects.map((project) => ({
    ...project,
    label: project.category,
    organization: project.organization || "Professional project",
    kind: "Professional work"
  })),
  ...practiceProjects.map((project) => ({
    ...project,
    label: project.type,
    organization: "Independent project",
    kind: "Independent build",
    highlights: []
  }))
];

export function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);

  const pageProjects = allProjects.slice(
    currentPage * projectsPerPage,
    currentPage * projectsPerPage + projectsPerPage
  );

  function goToPage(page) {
    setCurrentPage(page);

    document.getElementById("projects-title")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  return (
    <section
      className="bg-[#f7f4ea] py-20 sm:py-28"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto w-[calc(100%-1.5rem)] max-w-[1180px] sm:w-[calc(100%-3rem)]">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-[39rem]">
            <p className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.13em] text-[#617267]">
              Selected work
            </p>

            <h2
              id="projects-title"
              className="mt-4 text-[clamp(2.2rem,4.2vw,4.1rem)] font-semibold leading-[1.06] tracking-[-0.06em] text-[#173b2a]"
            >
              Products built around real user needs.
            </h2>

            <p className="mt-5 max-w-[34rem] text-[0.95rem] leading-7 text-[#626b64]">
              Full-stack work, independent builds, and practical experiments—all
              in one place.
            </p>
          </div>

          <p className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-[#617267]">
            {String(currentPage + 1).padStart(2, "0")} /{" "}
            {String(totalPages).padStart(2, "0")}
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pageProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <nav
          className="mt-10 flex items-center justify-center gap-2"
          aria-label="Project pages"
        >
          <button
            className="grid size-10 place-items-center rounded-full border border-[#173b2a]/15 bg-white text-lg font-semibold text-[#173b2a] transition hover:border-[#173b2a] disabled:cursor-not-allowed disabled:opacity-35"
            type="button"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 0}
            aria-label="Previous project page"
          >
            ←
          </button>

          {Array.from({ length: totalPages }, (_, page) => (
            <button
              className={
                "grid size-10 place-items-center rounded-full text-sm font-bold transition " +
                (page === currentPage
                  ? "bg-[#173b2a] text-white"
                  : "border border-[#173b2a]/15 bg-white text-[#173b2a] hover:border-[#173b2a]")
              }
              type="button"
              onClick={() => goToPage(page)}
              key={page}
              aria-label={"Show project page " + (page + 1)}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page + 1}
            </button>
          ))}

          <button
            className="grid size-10 place-items-center rounded-full border border-[#173b2a]/15 bg-white text-lg font-semibold text-[#173b2a] transition hover:border-[#173b2a] disabled:cursor-not-allowed disabled:opacity-35"
            type="button"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            aria-label="Next project page"
          >
            →
          </button>
        </nav>
      </div>
    </section>
  );
}