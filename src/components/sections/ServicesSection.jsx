"use client";

import { useState } from "react";

const services = [
  {
    category: "Migration",
    code: "DEMS",
    title: "Datacenter Exit Made Simple",
    tagline: '"The Easy Button for Total On-Premise Decommissioning"',
    description:
      "Eradicate hardware debt. Fully decommission VMware, Hyper-V, KVM, or Bare-Metal with agentic AI orchestration — no spreadsheets, no guesswork.",
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
      "Move workloads between AWS, Azure, GCP with near-zero downtime and zero data loss. Eliminate the Migration Tax.",
    metrics: [
      ["~0", "Downtime"],
      ["3", "Hyperscalers"],
    ],
  },
  {
    category: "Modernization",
    code: "LRT",
    title: "Legacy Re-platforming & Translation",
    tagline: '"Retire the Debt. Release the Value."',
    description:
      "Escape VB6, COBOL, PowerBuilder. AI code mapping rewrites legacy logic 70% faster than manual rewrites.",
    metrics: [["70%", "Faster"]],
  },
  {
    category: "Modernization",
    code: "DBL",
    title: "Database Liberation",
    tagline: '"Break Free From the License Tax."',
    description:
      "Eliminate Oracle & SQL Server licensing. Migrate to open-source cloud-native engines with zero business logic loss.",
    metrics: [["↓TCO", "Dramatic"]],
  },
  {
    category: "Modernization",
    code: "CNE",
    title: "Cloud-Native Foundation",
    tagline: '"From Monolith to Modern Architecture."',
    description:
      "Decompose monoliths into microservices, containers, or serverless. Monthly releases → on-demand deployments.",
  },
  {
    category: "Modernization",
    code: "PXO",
    title: "Performance Optimization",
    tagline: '"Immediate Gains, No Full Rewrite Required."',
    description:
      "Java-to-Graviton and targeted upgrades. 40% better price-performance in weeks, not months.",
    metrics: [["40%", "Price-Performance"]],
  },
  {
    category: "GenAI",
    code: "GAT",
    title: "GenAI Transformation",
    tagline: '"Turn Enterprise Data into Competitive Advantage."',
    description:
      "Embed enterprise-grade LLMs and RAG into core business processes. Convert static data into a dynamic, queryable, actionable intelligence layer.",
    large: true,
    metrics: [
      ["360°", "Intelligence Uplift"],
      ["LLM+RAG", "Powered"],
    ],
  },
  {
    category: "GenAI",
    code: "AAT",
    title: "Agentic AI Transformation",
    tagline: '"From Chatbots to Autonomous Digital Workers."',
    description:
      "Autonomous AI agents that plan, act, and execute complex workflows with minimal human intervention.",
  },
];

const filters = [
  { id: "All Offerings", label: "All Offerings" },
  { id: "Migration", label: "Move to Cloud" },
  { id: "Modernization", label: "Modernize & Scale" },
  { id: "GenAI", label: "AI-Powered Workflows" },
];

export default function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState("All Offerings");

  const filteredServices =
    activeFilter === "All Offerings"
      ? services
      : services.filter((service) => service.category === activeFilter);

  return (
    <section className="px-4 sm:px-8 max-w-[1440px] mx-auto py-16 sm:py-20">
      <div className="mb-10 sm:mb-16">
        <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#4A8F8B] mb-3 sm:mb-4">
          Our Offerings
        </div>

        <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.1] tracking-[-0.02em] font-semibold mb-6 sm:mb-10">
          Systematic Excellence.
        </h2>

        <div className="flex flex-wrap gap-2 sm:gap-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-[12px] sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-[#3A6FF7] text-white shadow-[0_0_15px_rgba(58,111,247,0.5)]"
                  : "bg-[#111112] border border-white/10 text-[#c8c5ca] hover:bg-white/5"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        {filteredServices.map((service) => (
          <article
            key={service.code}
            className={`rounded-2xl sm:rounded-3xl border border-white/10 bg-[#111112] p-6 sm:p-10 transition-all duration-500 hover:shadow-[0_35px_120px_-40px_rgba(58,111,247,0.55)] ${
              service.large ? "lg:col-span-2" : ""
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#3A6FF7]">
                  {service.category}
                </span>
                <span className="text-[#3A6FF7]">↗</span>
              </div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#c8c5ca]">
                {service.code}
              </span>
            </div>

            <h3 className="text-[24px] sm:text-[32px] lg:text-[36px] leading-[1.1] sm:leading-[1.05] font-semibold mb-3 sm:mb-4">
              {service.title}
            </h3>

            <p className="text-[14px] sm:text-[16px] text-[#F5F5F399] italic mb-4 sm:mb-6">
              {service.tagline}
            </p>

            <p className="text-[16px] sm:text-[18px] leading-[1.6] sm:leading-[1.75] text-[#d5d2d6] mb-6 sm:mb-8">
              {service.description}
            </p>

            {service.metrics ? (
              <div className="grid gap-4 grid-cols-2">
                {service.metrics.map(([value, label]) => (
                  <div key={`${service.code}-${value}`}>
                    <div className="text-[24px] sm:text-[32px] font-semibold tracking-tight text-white">
                      {value}
                    </div>
                    <div className="text-[10px] sm:text-sm uppercase tracking-[0.2em] text-[#8e8c96]">
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
