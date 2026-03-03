import Navigation from "@/components/navigation";
import ProjectsSection from "@/components/projects-section";
import Footer from "@/components/footer";
import ParticlesBackground from "@/components/particles-background";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20">
          <ProjectsSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}
