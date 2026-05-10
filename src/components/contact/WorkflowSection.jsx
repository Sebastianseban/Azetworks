const steps = [
  {
    id: "01",
    title: "We review your message",
    desc: "Our team routes it to the right expert.",
  },
  {
    id: "02",
    title: "Discovery call",
    desc: "30-minute call to understand your environment.",
  },
  {
    id: "03",
    title: "Free assessment",
    desc: "Recommended approach and indicative outcomes.",
  },
  {
    id: "04",
    title: "Proposal & kickoff",
    desc: "Outcome-based proposal with no lock-in.",
  },
];

export default function WorkflowSection() {
  return (
    <section className="bg-[#0e0e0e] px-16 py-[160px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-12 mb-20">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c8c6c8]">
            Workflow
          </span>

          <h2 className="text-[64px] leading-[1.1] font-semibold text-white">
            What Happens Next
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col gap-6 group">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[#c8c6c8] p-2 border border-[#c8c6c8]">
                  {step.id}
                </span>
              </div>

              <h3 className="text-[32px] leading-[1.2] font-medium text-white group-hover:text-[#c8c6c8] transition-colors">
                {step.title}
              </h3>

              <p className="text-[#F5F5F399] leading-[1.7]">
                {step.desc}
              </p>

              <div className="hidden md:block h-px w-full border-b border-dashed border-[#47464a] mt-4 opacity-30"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}