// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";

// import HeroSection from "@/components/sections/HeroSection";
// import TrustStrip from "@/components/sections/TrustStrip";
// import FoundationSection from "@/components/sections/FoundationSection";
// import ServicesSection from "@/components/sections/ServicesSection";
// import CTASection from "@/components/sections/CTASection";

// export default function HomePage() {
//   return (
//     <main className="bg-[#0E0E10] text-[#e5e2e1] overflow-hidden">
//       <Header />

//       <HeroSection />

//       <FoundationSection />

//       <ServicesSection />

//       <CTASection />

//       <Footer />
//     </main>
//   );
// }

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import ApproachSection from "@/components/sections/ApproachSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <main className="overflow-hidden px-6 bg-[#0E0E10] text-[#e5e2e1]">
      <Header />

      <HeroSection />

      <ApproachSection />

      <ServicesSection />

      <CTASection />

      <Footer />
    </main>
  );
}
