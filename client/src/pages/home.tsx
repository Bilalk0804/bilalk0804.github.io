import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ParticlesBackground from "@/components/particles-background";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen relative" style={{ background: "var(--bg-page)", color: "var(--fg-primary)" }}>
      <ParticlesBackground />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <Footer />
      </div>
    </div>
  );
}
