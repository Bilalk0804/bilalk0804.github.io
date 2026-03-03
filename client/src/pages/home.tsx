import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ParticlesBackground from "@/components/particles-background";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <Footer />
      </div>
    </div>
  );
}
