import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/Solutions-section/HeroSection";
import MoveToCloudSection from "@/components/Solutions-section/MoveToCloudSection";
import ModernizeSection from "@/components/Solutions-section/ModernizeSection";
import AIWorkflowSection from "@/components/Solutions-section/AIWorkflowSection";
import CTASection from "@/components/Solutions-section/CTASection";

export default function SolutionsPage() {
  return (
    <main className="bg-[#0E0E10] text-[#e5e2e1] overflow-hidden">
    <Header />

      <main className="pt-20">
        <HeroSection />

        <MoveToCloudSection />

        <ModernizeSection />

        <AIWorkflowSection />

        <CTASection />
      </main>

      <Footer />
    </main>
  );
}