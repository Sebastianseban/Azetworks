import { FaWrench, FaDatabase, FaRobot, FaChartLine } from "react-icons/fa6";

const ecosystems = [
  {
    title: "Infrastructure & DevOps",
    icon: FaWrench,
    desc: "HashiCorp Terraform, Ansible, Kubernetes, Docker — the IaC and container toolchain that powers our cloud-native delivery.",
    items: ["Terraform", "Ansible", "Kubernetes", "Docker"],
    color: "from-blue-500/20 to-cyan-500/5",
    iconColor: "text-blue-400"
  },
  {
    title: "Database Technologies",
    icon: FaDatabase,
    desc: "PostgreSQL, MySQL, MongoDB, Aurora — open-source and cloud-native database platforms we migrate to and optimize.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Aurora"],
    color: "from-emerald-500/20 to-teal-500/5",
    iconColor: "text-emerald-400"
  },
  {
    title: "AI & LLM Platforms",
    icon: FaRobot,
    desc: "OpenAI, Anthropic, AWS Bedrock, Azure OpenAI — the LLM ecosystem powering our GenAI and Agentic AI offerings.",
    items: ["OpenAI", "Anthropic", "AWS Bedrock", "Azure OpenAI"],
    color: "from-purple-500/20 to-pink-500/5",
    iconColor: "text-purple-400"
  },
  {
    title: "Observability & Security",
    icon: FaChartLine,
    desc: "Datadog, Splunk, Wiz, Prisma Cloud — ensuring every migration and modernization is monitored, secure, and compliant.",
    items: ["Datadog", "Splunk", "Wz", "Prisma Cloud"],
    color: "from-amber-500/20 to-orange-500/5",
    iconColor: "text-amber-400"
  },
];

export default function EcosystemSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-16 max-w-[1440px] mx-auto relative">
      <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent hidden md:block" />
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block" />

      <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
        <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#3A6FF7] uppercase mb-3 sm:mb-4 block">
          Technology Partners
        </span>
        <h2 className="text-[32px] sm:text-[40px] md:text-[56px] leading-[1.1] font-bold text-white mb-4 sm:mb-6 tracking-tight">
          Technology Ecosystem
        </h2>
        <p className="text-[#F5F5F3]/70 text-base sm:text-lg">
          We leverage industry-leading transformation platforms and cloud services to deliver reliable, scalable solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-16 relative z-10">
        {ecosystems.map((eco, index) => {
          const Icon = eco.icon;
          return (
            <div key={eco.title} className="group relative">
              <div className={`absolute -inset-4 sm:-inset-6 bg-gradient-to-br ${eco.color} opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-700 blur-xl`} />
              
              <div className="relative bg-[#111111] border border-white/5 p-6 sm:p-8 rounded-3xl hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#1a1a1a] border border-white/10 ${eco.iconColor}`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{eco.title}</h3>
                </div>

                <p className="text-[#F5F5F3]/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 flex-grow">
                  {eco.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {eco.items.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] sm:text-xs font-medium bg-white/5 hover:bg-white/10 text-white/80 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}