import { FiUsers, FiShield, FiCompass } from "react-icons/fi";
import { BsLightbulb } from "react-icons/bs";

const values = [
  {
    icon: <BsLightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-[#3A6FF7]" />,
    title: "Innovation",
    description:
      "We experiment, learn fast, and turn ideas into practical impact.",
  },
  {
    icon: <FiUsers className="w-6 h-6 sm:w-7 sm:h-7 text-[#3A6FF7]" />,
    title: "Customer-Centricity",
    description:
      "We co-build with customers, solving the right problems end-to-end.",
  },
  {
    icon: <FiShield className="w-6 h-6 sm:w-7 sm:h-7 text-[#3A6FF7]" />,
    title: "Integrity",
    description:
      "We commit to transparency, accountability, and long-term trust.",
  },
  {
    icon: <FiCompass className="w-6 h-6 sm:w-7 sm:h-7 text-[#3A6FF7]" />,
    title: "Vision",
    description:
      "Enable businesses to fully leverage cloud, AI, and modernization for sustainable growth.",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1536px] mx-auto py-16 sm:py-20 lg:py-24">
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16 lg:mb-20">
        <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#3A6FF7] mb-3 sm:mb-4">
          Our Foundation
        </div>
        <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.02em] font-semibold text-white max-w-3xl">
          Core Values
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="group flex flex-col rounded-3xl border border-white/5 bg-[#111112] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/10 hover:bg-[#151517] hover:shadow-[0_20px_40px_-15px_rgba(58,111,247,0.15)]"
          >
            <div className="mb-6 sm:mb-8 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3A6FF7]/20 to-[#3A6FF7]/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3A6FF7]/30">
              {value.icon}
            </div>
            
            <h3 className="text-[20px] sm:text-[22px] font-semibold text-white mb-4 tracking-tight">
              {value.title}
            </h3>
            
            <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#8e8c96] group-hover:text-[#c8c5ca] transition-colors duration-300">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
