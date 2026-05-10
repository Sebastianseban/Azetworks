import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import WorkflowSection from "@/components/contact/WorkflowSection";
import FAQSection from "@/components/contact/FAQSection";
import VisualAnchor from "@/components/contact/VisualAnchor";

export default function ContactPage() {
  return (
    <main className="bg-[#141313] text-[#e5e2e1] overflow-hidden">
      <Header />

      <main className="pt-20">
        <ContactHero />

        <ContactFormSection />

        <WorkflowSection />

        <FAQSection />

        <VisualAnchor />
      </main>

      <Footer />
    </main>
  );
}