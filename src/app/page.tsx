import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExcellenceSection } from "@/components/ExcellenceSection";
import { ContactSection } from "@/components/ContactSection";
import { LeadershipSection } from "@/components/LeadershipSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExcellenceSection />
        <LeadershipSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}