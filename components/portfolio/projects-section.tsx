import { projects } from "@/data/portfolio";
import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
  return (
    <section className="projects-section section-shell" id="projects" aria-labelledby="projects-title">
      <SectionHeading
        headingId="projects-title"
        index="01"
        eyebrow="Selected projects"
        title="Products brought to life."
        description="A closer look at the product thinking, engineering scope and systems behind selected work."
      />
      <div className="project-list">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </section>
  );
}
