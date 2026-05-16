import { FaAws, FaMicrosoft, FaGoogle, FaDatabase, FaLinux, FaBrain, FaCode } from "react-icons/fa6";

const partners = [
  {
    id: "AWS",
    title: "Amazon Web Services",
    badge: "Advanced Partner",
    desc: "Advanced Partner with specializations in migration, modernization, and AI/ML services. Certified across EC2, RDS, Lambda, Bedrock, and more.",
    tags: ["Migration", "AI/ML", "Modernization"],
    icon: FaAws,
    color: "from-[#FF9900]/20 to-transparent border-[#FF9900]/50 hover:border-[#FF9900]",
    iconColor: "text-[#FF9900]",
    large: true,
  },
  {
    id: "Azure",
    title: "Microsoft Azure",
    badge: "Solutions Partner",
    desc: "Solutions Partner for cloud migration and AI workloads. Deep expertise in Azure Migrate, Azure OpenAI, and hybrid cloud architectures.",
    tags: ["Migration", "OpenAI", "Hybrid"],
    icon: FaMicrosoft,
    color: "from-[#00A4EF]/20 to-transparent border-[#00A4EF]/50 hover:border-[#00A4EF]",
    iconColor: "text-[#00A4EF]",
    large: true,
  },
  {
    id: "GCP",
    title: "Google Cloud Platform",
    badge: "Partner",
    desc: "Partner for data modernization, Kubernetes-native workloads, and Vertex AI deployments across enterprise environments.",
    tags: ["Data", "Kubernetes", "Vertex AI"],
    icon: FaGoogle,
    color: "from-[#4285F4]/20 to-transparent border-[#4285F4]/50 hover:border-[#4285F4]",
    iconColor: "text-[#4285F4]",
    large: true,
  },
  {
    id: "OCI",
    title: "Oracle Cloud Infrastructure",
    desc: "Specialized in Oracle-to-OCI migrations and database liberation from Oracle licensing to open-source alternatives.",
    tags: ["Database", "Migration", "Oracle"],
    icon: FaDatabase,
    color: "from-[#F80000]/20 to-transparent border-[#F80000]/50 hover:border-[#F80000]",
    iconColor: "text-[#F80000]",
  },
  {
    id: "RH",
    title: "Red Hat",
    desc: "Enterprise Linux and container platform expertise. Deep integration with OpenShift for cloud-native deployments and hybrid infrastructure.",
    tags: ["Linux", "Containers", "OpenShift"],
    icon: FaLinux,
    color: "from-[#EE0000]/20 to-transparent border-[#EE0000]/50 hover:border-[#EE0000]",
    iconColor: "text-[#EE0000]",
  },
  {
    id: "Anthropic",
    title: "Anthropic",
    desc: "Claude LLM integration for enterprise AI applications. Building safe, interpretable AI systems for business-critical workflows.",
    tags: ["LLM", "GenAI", "Safety"],
    icon: FaBrain,
    color: "from-[#D97757]/20 to-transparent border-[#D97757]/50 hover:border-[#D97757]",
    iconColor: "text-[#D97757]",
  },
  {
    id: "CAST",
    title: "CAST Software",
    desc: "Code intelligence and application analytics for legacy modernization. AI-powered code assessment and transformation insights.",
    tags: ["Code Analysis", "Modernization", "Legacy"],
    icon: FaCode,
    color: "from-[#0055A4]/20 to-transparent border-[#0055A4]/50 hover:border-[#0055A4]",
    iconColor: "text-[#0055A4]",
  },
];

export default function CloudPartnersGrid() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-16 max-w-[1440px] mx-auto relative z-10">
      <div className="grid grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-16">
        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-medium text-white mb-4 leading-tight">
            Hyperscale Cloud Alliances
          </h2>

          <p className="text-[#F5F5F3]/70 text-base sm:text-lg">
            We are cloud-agnostic by design — certified and partnered across all major hyperscalers so we can always recommend what's right for you.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 sm:gap-6">
        {partners.map((partner, index) => {
          const Icon = partner.icon;
          return (
            <div
              key={partner.id}
              className={`group relative overflow-hidden rounded-2xl bg-[#1a1a1a]/80 backdrop-blur-sm border border-white/5 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] p-6 sm:p-8
              ${partner.large ? "col-span-12 lg:col-span-4" : "col-span-12 md:col-span-6 lg:col-span-3"}`}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 flex-grow">
                <div className="flex justify-between items-start mb-6 sm:mb-8">
                  <div className={`p-2.5 sm:p-3 rounded-xl bg-black/40 border border-white/10 ${partner.iconColor}`}>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>

                  {partner.badge && (
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white bg-white/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                      {partner.badge}
                    </span>
                  )}
                </div>

                <div className="mb-2">
                  <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#F5F5F3]/50 uppercase mb-2 block">
                    {partner.id}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {partner.title}
                  </h3>
                </div>

                {partner.desc && (
                  <p className="text-[#F5F5F3]/70 mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed">
                    {partner.desc}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mt-6 sm:mt-8 relative z-10">
                {partner.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wider bg-black/40 border border-white/5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md text-[#c8c5ca] group-hover:border-white/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}