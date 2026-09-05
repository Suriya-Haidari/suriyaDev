import { SectionHeading } from "@/components/ui/SectionHeading";
import { containerClass, revealClass } from "@/components/ui/layout";
import { practiceProjects, projects } from "@/data/portfolio";
import { PracticeProjectCard } from "@/features/projects/PracticeProjectCard";
import { ProjectCard } from "@/features/projects/ProjectCard";

export function ProjectsSection() {
  return (
    <section className={`${containerClass} py-24 lg:py-36`} id="projects" aria-labelledby="projects-title">
      <SectionHeading
        headingId="projects-title"
        index="01"
        eyebrow="Selected projects"
        title="Products brought to life."
        description="A closer look at the product thinking, engineering scope and systems behind selected work."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>

      <div className={`${revealClass} mt-24 border-t border-line pt-16`} id="practice-projects" data-reveal>
        <div className="mb-9 flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end lg:gap-10">
          <div>
            <p className="mb-5 font-mono text-xs font-extrabold uppercase tracking-[0.13em] text-brand">More from the lab</p>
            <h3 className="max-w-[720px] text-[clamp(2.4rem,4.8vw,3.875rem)] font-black leading-none tracking-[-0.06em]">Practice, experiments and independent builds.</h3>
          </div>
          <p className="max-w-[390px] text-base leading-7 text-muted">Smaller projects that show range, curiosity and hands-on learning.</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {practiceProjects.map((project) => <PracticeProjectCard key={project.slug} project={project} />)}
        </div>
      </div>
    </section>
  );
}
