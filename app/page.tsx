import { AboutSection } from "@/components/portfolio/about-section";
import { CapabilitiesSection } from "@/components/portfolio/capabilities-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { ProcessSection } from "@/components/portfolio/process-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { RevealObserver } from "@/components/portfolio/reveal-observer";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteHeader } from "@/components/portfolio/site-header";
import { projects } from "@/data/portfolio";
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
    sameAs: [siteConfig.github],
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
  hasPart: projects.map((project) => ({
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    keywords: project.stack.join(", "),
    url: `${siteConfig.url}/#project-${project.slug}`,
  })),
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#projects">Skip to selected projects</a>
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
