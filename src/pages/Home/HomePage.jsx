import { AboutSection } from "@/features/about/AboutSection";
import { CapabilitiesSection } from "@/features/capabilities/CapabilitiesSection";
import { ContactSection } from "@/features/contact/ContactSection";
import { HeroSection } from "@/features/hero/HeroSection";
import { ProcessSection } from "@/features/process/ProcessSection";
import { ProjectsSection } from "@/features/projects/ProjectsSection";
import { Footer } from "@/layout/Footer/Footer";
import { Navbar } from "@/layout/Navbar/Navbar";
import { RevealObserver } from "@/layout/RevealObserver";

export function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas text-ink transition-colors duration-300">
      <a
        className="fixed left-4 top-3 z-[100] -translate-y-40 rounded-full bg-ink px-4 py-3 text-sm font-bold text-canvas transition-transform focus:translate-y-0"
        href="#projects"
      >
        Skip to selected work
      </a>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <CapabilitiesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
      <RevealObserver />
    </div>
  );
}
