import { FiServer, FiZap, FiDatabase, FiCloud } from "react-icons/fi";
import { BsCpu, BsRobot } from "react-icons/bs";

const promises = [
  {
    icon: <FiServer className="w-6 h-6 sm:w-7 sm:h-7 text-[#3A6FF7]" />,
    quote: '"The Easy Button for Total On-Premise Decommissioning"',
    title: "DEMS — Datacenter Exit Made Simple",
  },
  {
    icon: <FiZap className="w-6 h-6 sm:w-7 sm:h-7 text-[#3A6FF7]" />,
    quote: '"Retire the Debt. Release the Value."',
    title: "LRT — Legacy Re-platforming & Translation",
  },
  {
    icon: <FiDatabase className="w-6 h-6 sm:w-7 sm:h-7 text-[#3A6FF7]" />,
    quote: '"Break Free From the License Tax."',
    title: "DBL — Database Liberation",
  },
  {
    icon: <BsCpu className="w-6 h-6 sm:w-7 sm:h-7 text-[#3A6FF7]" />,
    quote: '"Turn Enterprise Data into Competitive Advantage."',
    title: "GAT — GenAI Transformation",
  },
  {
    icon: <BsRobot className="w-6 h-6 sm:w-7 sm:h-7 text-[#3A6FF7]" />,
    quote: '"From Chatbots to Autonomous Digital Workers."',
    title: "AAT — Agentic AI Transformation",
  },
  {
    icon: <FiCloud className="w-6 h-6 sm:w-7 sm:h-7 text-[#3A6FF7]" />,
    quote: '"The Freedom to Move Across the Hyperscale Divide."',
    title: "C2C — Cloud to Cloud Migration",
  },
];

export default function PromisesSection() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1536px] mx-auto py-16 sm:py-20 lg:py-24">
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16 lg:mb-20">
        <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#3A6FF7] mb-3 sm:mb-4">
          Our Promises
        </div>
        <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.02em] font-semibold text-white max-w-3xl">
          What We Stand For
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {promises.map((promise, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between rounded-3xl border border-white/5 bg-[#111112] p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-2 hover:border-white/10 hover:bg-[#151517] hover:shadow-[0_20px_40px_-15px_rgba(58,111,247,0.15)]"
          >
            <div>
              <div className="mb-6 sm:mb-8 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3A6FF7]/20 to-[#3A6FF7]/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3A6FF7]/30">
                {promise.icon}
              </div>
              <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.4] text-[#e5e2e1] mb-6 sm:mb-8 font-medium italic">
                {promise.quote}
              </h3>
            </div>
            
            <div className="mt-auto">
              <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent mb-5 sm:mb-6"></div>
              <p className="text-[12px] sm:text-[13px] lg:text-[14px] font-semibold text-[#8e8c96] uppercase tracking-[0.05em] group-hover:text-white/80 transition-colors duration-300">
                {promise.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
