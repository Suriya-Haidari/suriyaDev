import { practiceProjects, projects } from "@/data/portfolio";
import { AboutSection } from "@/features/about/about-section";
import { CapabilitiesSection } from "@/features/capabilities/capabilities-section";
import { ContactSection } from "@/features/contact/contact-section";
import { HeroSection } from "@/features/hero/hero-section";
import { ProcessSection } from "@/features/process/process-section";
import { ProjectsSection } from "@/features/projects/projects-section";
import { RevealObserver } from "@/features/site-shell/reveal-observer";
import { SiteFooter } from "@/features/site-shell/site-footer";
import { SiteHeader } from "@/features/site-shell/site-header";
import { siteConfig } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: siteConfig.title,
  description: siteConfig.description,
  url: siteConfig.url,
  dateModified: siteConfig.lastUpdated,
  inLanguage: "en",
  mainEntity: {
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.location,
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API design",
      "Full-stack web development",
    ],
  },
  hasPart: [
    ...projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      keywords: project.stack.join(", "),
      url: `${siteConfig.url}/#project-${project.slug}`,
    })),
    ...practiceProjects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      keywords: project.stack.join(", "),
      url: `${siteConfig.url}/#practice-${project.slug}`,
    })),
  ],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#projects">Skip to selected work</a>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <CapabilitiesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <RevealObserver />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
