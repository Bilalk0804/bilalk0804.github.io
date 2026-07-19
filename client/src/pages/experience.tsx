import Navigation from "@/components/navigation";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import AchievementsSection from "@/components/achievements-section";
import Footer from "@/components/footer";
import ParticlesBackground from "@/components/particles-background";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen relative" style={{ background: "var(--bg-page)", color: "var(--fg-primary)" }}>
      <ParticlesBackground />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20">
          <ExperienceSection />
          <SkillsSection />
          <AchievementsSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}
