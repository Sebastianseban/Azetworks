import { FiZap, FiUsers, FiShield, FiStar } from "react-icons/fi";

const values = [
  {
    icon: FiZap,
    title: "Innovation",
    desc: "We experiment, learn fast, and turn ideas into practical impact. We don't wait for the industry to catch up — we build what's next.",
  },
  {
    icon: FiUsers,
    title: "Customer-Centricity",
    desc: "We co-build with customers, solving the right problems end-to-end. Your challenge is our challenge. We don't hand off — we stay in.",
  },
  {
    icon: FiShield,
    title: "Integrity",
    desc: "We commit to transparency, accountability, and long-term trust. No hidden costs, no scope creep surprises, no finger-pointing.",
  },
];

export default function ValuesSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-[80px] lg:py-[160px] max-w-[1440px] mx-auto">
      <div className="grid grid-cols-12 gap-4 md:gap-8 mb-12 md:mb-24">
        <div className="col-span-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 md:mb-8 hover:bg-white/10 transition-colors cursor-default w-fit">
            <FiStar className="text-[#3A6FF7] text-sm md:text-base" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#e5e2e1] font-medium">
              Core Values
            </span>
          </div>

          <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.1] font-semibold text-white">
            What Drives Us
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 lg:gap-12">
        {values.map((value) => (
          <div
            key={value.title}
            className="col-span-12 md:col-span-4 border-t border-white/10 pt-8"
          >
            <div className="text-[32px] text-[#3A6FF7] mb-6">
              <value.icon />
            </div>

            <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium text-white mb-3 md:mb-4">
              {value.title}
            </h3>

            <p className="text-[14px] md:text-[16px] text-[#F5F5F399] leading-[1.7]">
              {value.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}