import { FiTrendingUp } from "react-icons/fi";

const marketData = [
  {
    name: "Azetworks",
    desc: "Combines deep technical expertise with AI-driven consulting and outcome-based models. Offers tailored solutions aligned with strategic business outcomes.",
    highlight: true,
  },
  {
    name: "Traditional Consulting Firms",
    desc: "Focus on legacy approaches and broad business strategies, with limited adoption of AI and cloud modernization.",
    highlight: false,
  },
  {
    name: "AI-First Consulting Firms",
    desc: "Emphasize AI integration but may lack robust technical depth and outcome-based frameworks.",
    highlight: false,
  },
  {
    name: "Cloud Specialists",
    desc: "Expertise in cloud technologies, but often lack holistic consulting and strategic business alignment.",
    highlight: false,
  },
];

export default function MarketPositionSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 lg:py-[10px] max-w-[1440px] mx-auto bg-[#0e0e0e]">
      <div className="grid grid-cols-12 gap-4 md:gap-8 mb-12 md:mb-16">
        <div className="col-span-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 md:mb-8 hover:bg-white/10 transition-colors cursor-default w-fit">
            <FiTrendingUp className="text-[#3A6FF7] text-sm md:text-base" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#e5e2e1] font-medium">
              Market Position
            </span>
          </div>
          <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.1] font-semibold text-white mb-8">
            Unique in the Consulting Market
          </h2>
        </div>
      </div>

      <div className="flex flex-col">
        {marketData.map((item, index) => (
          <div
            key={item.name}
            className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-12 border-b ${
              item.highlight ? "border-[#3A6FF7]/30" : "border-white/10"
            } ${index === 0 ? "border-t" : ""} hover:bg-[#1a1a1a] transition-colors group`}
          >
            <div className="md:col-span-4 flex items-center">
              <h3
                className={`text-[20px] md:text-[24px] lg:text-[32px] font-medium ${
                  item.highlight ? "text-[#3A6FF7]" : "text-white"
                }`}
              >
                {item.name}
              </h3>
            </div>
            <div className="md:col-span-8 flex items-center">
              <p
                className={`text-[14px] md:text-[16px] lg:text-[18px] leading-[1.6] ${
                  item.highlight ? "text-white" : "text-[#F5F5F399]"
                }`}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}