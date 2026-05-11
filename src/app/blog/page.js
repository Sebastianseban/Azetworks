import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function BlogPage() {
  return (
    <main className="bg-[#0E0E10] text-[#e5e2e1] overflow-hidden">
      <Header />

      <main className="pt-20">
        <section className="px-16 py-40 max-w-[1440px] mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-[#3A6FF7] mb-4">
            Blog
          </div>

          <h1 className="text-[64px] leading-[1.1] font-semibold mb-8">
            Insights & Updates
          </h1>

          <p className="text-[20px] leading-[1.7] text-[#F5F5F399] max-w-3xl">
            Check back soon for news on AI, cloud transformation, and enterprise
            modernization.
          </p>
        </section>
      </main>

      <Footer />
    </main>
  );
}
