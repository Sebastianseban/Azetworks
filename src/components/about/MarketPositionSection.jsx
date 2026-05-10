export default function MarketPositionSection() {
  return (
    <section className="px-16 py-[160px] max-w-[1440px] mx-auto bg-[#0e0e0e]">
      <div className="grid grid-cols-12 gap-8 mb-16">
        <div className="col-span-12">
          <h2 className="text-[64px] leading-[1.1] font-semibold text-white mb-8">
            Unique in the Consulting Market
          </h2>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              {[
                "Comparison Factor",
                "Azetworks",
                "Traditional Firms",
                "AI-First Startups",
              ].map((item, index) => (
                <th
                  key={item}
                  className={`py-8 px-4 text-left text-xs uppercase tracking-[0.2em] ${
                    index === 1 ? "text-[#3A6FF7]" : "text-[#F5F5F399]"
                  }`}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-white/10 hover:bg-[#201f1f] transition-colors">
              <td className="py-10 px-4 text-white font-medium">
                Pricing Model
              </td>

              <td className="py-10 px-4 text-[#3A6FF7]">
                Outcome-based
              </td>

              <td className="py-10 px-4 text-[#F5F5F399]">
                Billable hours
              </td>

              <td className="py-10 px-4 text-[#F5F5F399]">
                SaaS Subscription
              </td>
            </tr>

            <tr className="border-b border-white/10 hover:bg-[#201f1f] transition-colors">
              <td className="py-10 px-4 text-white font-medium">
                Delivery Method
              </td>

              <td className="py-10 px-4 text-[#3A6FF7]">
                AI-accelerated engineering
              </td>

              <td className="py-10 px-4 text-[#F5F5F399]">
                Offshore teams
              </td>

              <td className="py-10 px-4 text-[#F5F5F399]">
                Tool-centric
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}