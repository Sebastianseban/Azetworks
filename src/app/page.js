
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import FoundationSection from "@/components/sections/FoundationSection";
import CoreValuesSection from "@/components/sections/CoreValuesSection";
import ApproachSection from "@/components/sections/ApproachSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhySection from "@/components/sections/WhySection";
import PromisesSection from "@/components/sections/PromisesSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <main className="overflow-hidden px-6 bg-[#0E0E10] text-[#e5e2e1]">
      <Header />

      <HeroSection />



      <CoreValuesSection />

      <ApproachSection />

      <ServicesSection />

      <WhySection />

      <PromisesSection />

      <CTASection />

      <Footer />
    </main>
  );
}
