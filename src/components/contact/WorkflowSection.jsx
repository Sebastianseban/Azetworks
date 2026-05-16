import { FaArrowRight } from "react-icons/fa6";

const steps = [
  {
    id: "01",
    title: "We review your message",
    desc: "Our team reads every inquiry and routes it to the right expert.",
    color: "from-blue-500/20 to-blue-500/5",
    accent: "text-blue-400"
  },
  {
    id: "02",
    title: "Discovery call",
    desc: "A 30-minute call to understand your environment, goals, and constraints.",
    color: "from-purple-500/20 to-purple-500/5",
    accent: "text-purple-400"
  },
  {
    id: "03",
    title: "Free assessment",
    desc: "We deliver a tailored assessment with recommended approach and indicative outcomes.",
    color: "from-emerald-500/20 to-emerald-500/5",
    accent: "text-emerald-400"
  },
  {
    id: "04",
    title: "Proposal & kickoff",
    desc: "Outcome-based proposal. If it makes sense, we start. No lock-in.",
    color: "from-amber-500/20 to-amber-500/5",
    accent: "text-amber-400"
  },
];

export default function WorkflowSection() {
  return (
    <section className="bg-[#0a0a0a] px-4 sm:px-6 md:px-16 py-16 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3A6FF7]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-20">
          <div className="flex flex-col gap-4 md:gap-6 max-w-2xl">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#3A6FF7] bg-[#3A6FF7]/10 inline-block px-3 py-1.5 rounded-full w-fit">
              Workflow
            </span>

            <h2 className="text-[32px] sm:text-[48px] md:text-[64px] leading-[1.1] font-bold text-white tracking-tight">
              What Happens Next?
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              {/* Connector line for desktop */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[80%] w-[50%] h-[2px] bg-gradient-to-r from-white/10 to-transparent z-0"></div>
              )}

              <div className={`absolute -inset-4 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-700 blur-xl`} />
              
              <div className="relative bg-[#111111]/80 backdrop-blur-md border border-white/5 p-6 sm:p-8 rounded-3xl hover:border-white/20 transition-all duration-500 h-full flex flex-col z-10 transform group-hover:-translate-y-2">
                <div className="flex items-center justify-between mb-8">
                  <div className={`text-2xl font-black ${step.accent} bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner`}>
                    {step.id}
                  </div>
                  <FaArrowRight className="text-white/20 group-hover:text-white/60 transition-colors transform group-hover:translate-x-2" />
                </div>

                <h3 className="text-xl sm:text-[24px] leading-[1.3] font-bold text-white mb-4">
                  {step.title}
                </h3>

                <p className="text-[#F5F5F3]/60 leading-[1.6] text-sm sm:text-base flex-grow">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}