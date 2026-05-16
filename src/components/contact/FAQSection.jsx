import { FaPlus, FaLifeRing } from "react-icons/fa6";

const faqs = [
  {
    q: "Do you work with mid-market companies?",
    a: "Yes. Our outcome-based model works for companies of all sizes — from 50-person teams to global enterprises.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "It depends on scope. A PXO optimization can deliver ROI in weeks. A full datacenter exit typically runs 3–9 months.",
  },
  {
    q: "Are you locked into one cloud provider?",
    a: "Never. We're cloud-agnostic and will always recommend what's right for your business.",
  },
];

export default function FAQSection() {
  return (
    <section className="px-4 sm:px-6 md:px-16 py-16 md:py-32 max-w-[1440px] mx-auto border-t border-white/5">
      <div className="grid grid-cols-12 gap-10 md:gap-8">
        <div className="col-span-12 lg:col-span-4">
          <div className="sticky top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 sm:mb-6 hover:bg-white/10 transition-colors cursor-default w-fit">
              <FaLifeRing className="text-[#3A6FF7] text-sm md:text-base" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#e5e2e1] font-medium">
                Support
              </span>
            </div>
            <h2 className="text-[32px] md:text-[48px] leading-[1.1] font-bold text-white mb-6">
              Quick Questions
            </h2>
            <p className="text-[#F5F5F3]/60 text-lg">
              Everything you need to know about working with Azetworks.
            </p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-[#111111]/80 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between p-6 sm:p-8 cursor-pointer select-none">
                  <h4 className="text-lg sm:text-xl font-medium text-white group-hover:text-[#3A6FF7] transition-colors pr-6">
                    {faq.q}
                  </h4>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-open:-rotate-45 transition-transform duration-300">
                    <FaPlus className="text-white/60" />
                  </div>
                </summary>

                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 -mt-2">
                  <p className="text-[#F5F5F3]/70 leading-relaxed text-base sm:text-lg">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}