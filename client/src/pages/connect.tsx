import Navigation from "@/components/navigation";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import ParticlesBackground from "@/components/particles-background";

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}
