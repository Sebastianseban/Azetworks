import Link from "next/link";

const features = [
  { name: "Technical Depth", azetworks: "✓", traditional: "~", aiFirst: "✗" },
  { name: "AI-Driven Delivery", azetworks: "✓", traditional: "✗", aiFirst: "✓" },
  { name: "Outcome-Based Pricing", azetworks: "✓", traditional: "✗", aiFirst: "✗" },
  { name: "Cloud Agnostic", azetworks: "✓", traditional: "~", aiFirst: "~" },
  { name: "Strategic Alignment", azetworks: "✓", traditional: "✓", aiFirst: "✗" },
];

const renderIcon = (val) => {
  if (val === "✓") {
    return (
      <div className="flex justify-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3A6FF7]/20 text-[#3A6FF7]">
          ✓
        </div>
      </div>
    );
  }
  if (val === "~") {
    return (
      <div className="flex justify-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-[#c8c5ca]">
          ~
        </div>
      </div>
    );
  }
  if (val === "✗") {
    return (
      <div className="flex justify-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10 text-red-500/80">
          ✗
        </div>
      </div>
    );
  }
  return val;
};

const checkmarks = [
  "AI-powered tools for every engagement",
  "Outcome-based, not time-and-materials pricing",
  "Cloud and technology agnostic",
  "Deep technical expertise + strategic alignment",
  "Co-build with customers, end-to-end",
];

export default function WhySection() {
  return (
    <section className="px-8 max-w-[1440px] mx-auto py-20 grid grid-cols-12 gap-12 lg:gap-8 items-center">
      <div className="col-span-12 lg:col-span-5 flex flex-col gap-8">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#3A6FF7] mb-4">
            Why Azetworks
          </div>
          <h2 className="text-[56px] md:text-[64px] leading-[1.1] tracking-[-0.02em] font-semibold">
            Built Different.
          </h2>
        </div>

        <p className="text-[18px] leading-[1.6] text-[#F5F5F399]">
          Traditional consulting firms rely on legacy approaches. AI-first firms
          lack technical depth. Cloud specialists miss strategic alignment.
          Azetworks combines all three — with outcome-based pricing that puts
          our skin in the game.
        </p>

        <ul className="flex flex-col gap-4">
          {checkmarks.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-[#3A6FF7] font-bold mt-1">✓</span>
              <span className="text-[#d5d2d6]">{item}</span>
            </li>
          ))}
        </ul>

        <div>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full bg-[#3A6FF7] px-8 py-4 text-sm font-medium text-white transition-all hover:bg-[#2b5ae6] hover:shadow-[0_0_20px_rgba(58,111,247,0.4)]"
          >
            About Azetworks
          </Link>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-7">
        <div className="rounded-3xl border border-white/10 bg-[#111112] p-6 md:p-10 overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10 text-sm font-medium text-[#c8c5ca]">
                <th className="pb-6 font-normal">Feature</th>
                <th className="pb-6 text-center font-semibold text-white">
                  Azetworks
                </th>
                <th className="pb-6 text-center font-normal">Traditional</th>
                <th className="pb-6 text-center font-normal">AI-First</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={feature.name}
                  className={
                    idx !== features.length - 1
                      ? "border-b border-white/5"
                      : ""
                  }
                >
                  <td className="py-6 text-[15px] font-medium text-[#d5d2d6]">
                    {feature.name}
                  </td>
                  <td className="py-6">{renderIcon(feature.azetworks)}</td>
                  <td className="py-6">{renderIcon(feature.traditional)}</td>
                  <td className="py-6">{renderIcon(feature.aiFirst)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
