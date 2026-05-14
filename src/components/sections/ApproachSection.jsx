import {
  HiOutlineMagnifyingGlass,
  HiOutlineMap,
  HiOutlineCog,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

export default function ApproachSection() {
  const steps = [
    {
      id: "01",
      icon: HiOutlineMagnifyingGlass,
      title: "Discover",
      description:
        "Agentic AI scans your environment — infrastructure, code, databases — and builds a complete picture in days, not weeks.",
    },
    {
      id: "02",
      icon: HiOutlineMap,
      title: "Plan",
      description:
        "AI-generated wave plans, TCO models, and risk assessments. No spreadsheets. No guesswork. Outcome-based pricing agreed upfront.",
    },
    {
      id: "03",
      icon: HiOutlineCog,
      title: "Execute",
      description:
        "Factory-scale execution with automated validation at every step. Our AI tools handle the heavy lifting — your team stays in control.",
    },
    {
      id: "04",
      icon: HiOutlineCheckCircle,
      title: "Validate",
      description:
        "Automated testing, performance benchmarking, and sign-off. We don't close until the outcome is confirmed.",
    },
  ];

  return (
    <section className="px-4 sm:px-8 py-16 sm:py-24 max-w-[1440px] mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#3A6FF7] mb-3 sm:mb-4">
          Our Approach
        </div>
        <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.05] font-semibold">
          How Azetworks Works
        </h2>
        <p className="text-[16px] sm:text-[20px] leading-[1.6] sm:leading-[1.8] text-[#F5F5F399] mt-4 sm:mt-6">
          A repeatable, AI-accelerated delivery model that puts outcomes first.
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        {steps.map((step) => (
          <div
            key={step.id}
            className="rounded-2xl sm:rounded-[32px] border border-white/10 bg-[#111112] p-6 sm:p-10 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.55)]"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl sm:rounded-3xl bg-[#0F172A] text-xl sm:text-2xl text-[#3A6FF7]">
                <step.icon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div>
                <p className="text-[10px] sm:text-sm uppercase tracking-[0.2em] text-[#4A8F8B] mb-1 sm:mb-2">
                  {step.id}
                </p>
                <h3 className="text-[24px] sm:text-[32px] leading-[1.1] font-semibold">
                  {step.title}
                </h3>
              </div>
            </div>
            <p className="text-[16px] sm:text-[18px] leading-[1.6] sm:leading-[1.75] text-[#d5d2d6]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
