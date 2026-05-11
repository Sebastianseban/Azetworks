const services = [
  {
    category: "Migration",
    code: "DEMS",
    title: "Datacenter Exit Made Simple",
    tagline: '"The Easy Button for Total On-Premise Decommissioning"',
    description:
      "Eradicate hardware debt with AI orchestration for VMware, Hyper-V, KVM, or bare-metal infrastructure.",
    large: true,
    metrics: [
      ["60%", "More Efficient"],
      ["0", "Hardware Debt"],
    ],
  },
  {
    category: "Migration",
    code: "C2C",
    title: "Cloud to Cloud Migration",
    tagline: '"Freedom Across the Hyperscale Divide"',
    description:
      "Near-zero downtime migrations across AWS, Azure, and GCP.",
  },
  {
    category: "Modernization",
    code: "LRT",
    title: "Legacy Re-platforming & Translation",
    tagline: '"Retire the Debt. Release the Value."',
    description:
      "AI-assisted modernization for legacy enterprise systems.",
    metrics: [["70%", "Faster"]],
  },
  {
    category: "Modernization",
    code: "DBL",
    title: "Database Liberation",
    tagline: '"Break Free From the License Tax."',
    description:
      "Move from expensive legacy databases to open-source cloud-native platforms.",
  },
  {
    category: "GenAI",
    code: "GAT",
    title: "GenAI Transformation",
    tagline: '"Turn Enterprise Data into Competitive Advantage."',
    description:
      "Enterprise-grade LLM + RAG intelligence systems integrated into operations.",
    large: true,
    metrics: [
      ["360°", "Intelligence Lift"],
      ["LLM+RAG", "Powered"],
    ],
  },
  {
    category: "GenAI",
    code: "AAT",
    title: "Agentic AI Transformation",
    tagline: '"From Chatbots to Autonomous Digital Workers."',
    description:
      "AI agents executing operational workflows autonomously.",
  },
  {
    category: "Modernization",
    code: "CNE",
    title: "Cloud-Native Foundation",
    tagline: '"From Monolith to Modern Architecture."',
    description:
      "Containers, serverless, microservices, and scalable infrastructure systems.",
  },
  {
    category: "Modernization",
    code: "PXO",
    title: "Performance Optimization",
    tagline: '"Immediate Gains, No Full Rewrite Required."',
    description:
      "Performance tuning delivering substantial price-performance gains.",
    metrics: [["40%", "Price-Perf Gain"]],
  },
];

export default function ServicesSection() {
  return (
    <section className="px-8 max-w-[1440px] mx-auto py-20">
      <div className="mb-16">
        <div className="text-xs uppercase tracking-[0.2em] text-[#4A8F8B] mb-4">
          Our Offerings
        </div>

        <h2 className="text-[64px] leading-[1.1] tracking-[-0.02em] font-semibold">
          Systematic Excellence.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.code}
            className={`rounded-3xl border border-white/10 bg-[#111112] p-10 transition-shadow hover:shadow-[0_35px_120px_-40px_rgba(58,111,247,0.55)] ${
              service.large ? "lg:col-span-2" : ""
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <span className="text-xs uppercase tracking-[0.2em] text-[#3A6FF7]">
                {service.category}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#c8c5ca]">
                {service.code}
              </span>
            </div>

            <h3 className="text-[36px] leading-[1.05] font-semibold mb-4">
              {service.title}
            </h3>

            <p className="text-[#F5F5F399] italic mb-6">
              {service.tagline}
            </p>

            <p className="text-[18px] leading-[1.75] text-[#d5d2d6] mb-8">
              {service.description}
            </p>

            {service.metrics ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {service.metrics.map(([value, label]) => (
                  <div key={`${service.code}-${value}`}>
                    <div className="text-[32px] font-semibold tracking-tight text-white">
                      {value}
                    </div>
                    <div className="text-sm uppercase tracking-[0.2em] text-[#8e8c96]">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
