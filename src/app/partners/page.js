 import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CloudPartnersGrid from "@/components/partners/CloudPartnersGrid";
import EcosystemSection from "@/components/partners/EcosystemSection";
import TechStackSection from "@/components/partners/TechStackSection";
import PartnersCTA from "@/components/partners/PartnersCTA";
import PartnersHero from "@/components/partners/PartnersHero";


export default function PartnersPage() {
  return (
    <main className="bg-[#141313] text-[#e5e2e1] overflow-x-hidden">
      <Header />

      <PartnersHero />

      <CloudPartnersGrid />

      <EcosystemSection />

      <TechStackSection />

      <PartnersCTA />

      <Footer />
    </main>
  );
}