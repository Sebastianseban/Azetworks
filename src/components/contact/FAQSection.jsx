const faqs = [
  {
    q: "Do you work with mid-market companies?",
    a: "Yes. Our outcome-based model works for companies of all sizes.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "Depends on scope. PXO → weeks. Datacenter exit → 3–9 months.",
  },
  {
    q: "Are you locked into one cloud provider?",
    a: "Never. We are cloud-agnostic.",
  },
];

export default function FAQSection() {
  return (
    <section className="px-16 py-[160px] max-w-[1440px] mx-auto">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4">
          <h2 className="text-[32px] font-medium text-white">
            Quick Questions
          </h2>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <div className="space-y-12">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="pb-12 border-b border-[#47464a]"
              >
                <h4 className="text-[20px] leading-[1.6] text-white mb-4">
                  {faq.q}
                </h4>

                <p className="text-[#F5F5F399] max-w-2xl leading-[1.7]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}