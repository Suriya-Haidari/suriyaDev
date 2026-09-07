import { SectionHeading } from "@/components/ui/section-heading";
import { practiceProjects, projects } from "@/data/portfolio";
import { PracticeProjectCard } from "./practice-project-card";
import { ProjectCard } from "./project-card";

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

      <div className="practice-projects" id="practice-projects" data-reveal>
        <div className="practice-projects__heading">
          <div>
            <p className="kicker">More from the lab</p>
            <h3>Practice, experiments and independent builds.</h3>
          </div>
          <p>Smaller projects that show range, curiosity and hands-on learning.</p>
        </div>
        <div className="practice-projects__grid">
          {practiceProjects.map((project) => (
            <PracticeProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
