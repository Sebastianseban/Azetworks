import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import VisionSection from "@/components/about/VisionSection";
import ValuesSection from "@/components/about/ValuesSection";
import MarketPositionSection from "@/components/about/MarketPositionSection";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="bg-[#0E0E10] text-[#F5F5F3] overflow-hidden">
      <Header />

      <main>
        <AboutHero />

        <MissionSection />

        <VisionSection />

        <ValuesSection />

        <MarketPositionSection />

        <AboutCTA />
      </main>

      <Footer />
    </main>
  );
}