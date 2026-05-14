import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/Solutions-section/HeroSection";
import MoveToCloudSection from "@/components/Solutions-section/MoveToCloudSection";
import ModernizeScaleSection from "@/components/Solutions-section/ModernizeScaleSection";
import AIWorkflowSection from "@/components/Solutions-section/AIWorkflowSection";
import CTASection from "@/components/Solutions-section/CTASection";
import StickySubNav from "@/components/Solutions-section/StickySubNav";

export default function SolutionsPage() {
  return (
    <main className="bg-[#0E0E10] text-[#e5e2e1] overflow-hidden relative">
      <Header />

      <main className="pt-20">
        <StickySubNav />
        <HeroSection />

        <MoveToCloudSection />

        <ModernizeScaleSection />

        <AIWorkflowSection />

        <CTASection />
      </main>

      <Footer />
    </main>
  );
}