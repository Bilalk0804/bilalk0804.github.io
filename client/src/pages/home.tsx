import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ParticlesBackground from "@/components/particles-background";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import AchievementsSection from "@/components/achievements-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href?.includes('#')) {
        e.preventDefault();
        const elementId = target.href.split('#')[1];
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleClick));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
