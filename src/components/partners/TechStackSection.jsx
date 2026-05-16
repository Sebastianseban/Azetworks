import { FaCircleCheck, FaArrowRight, FaLayerGroup } from "react-icons/fa6";

const checkItems = [
  "AWS Transform for infrastructure modernization",
  "Multi-cloud deployment capabilities",
  "Enterprise-grade security and compliance",
  "Proven delivery frameworks and playbooks",
  "Continuous innovation and optimization",
];

export default function TechStackSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-16 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3A6FF7]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[500px] aspect-square flex flex-col justify-center items-center gap-4 sm:gap-6">
            {/* Glowing lines behind */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3A6FF7]/20 to-transparent opacity-30 rounded-3xl blur-2xl"></div>
            
            {/* Stack elements */}
            <div className="w-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-[0_0_40px_rgba(58,111,247,0.15)] transform hover:-translate-y-2 transition-transform duration-500 z-30">
              <div className="flex items-center gap-3 sm:gap-4 mb-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0 rounded-full bg-[#3A6FF7] shadow-[0_0_10px_#3A6FF7]"></div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">Azetworks AI Engine</h3>
              </div>
              <p className="text-[#F5F5F3]/50 text-xs sm:text-sm ml-6 sm:ml-7">Cognitive processing & orchestration</p>
            </div>

            <div className="w-[95%] sm:w-[90%] bg-gradient-to-r from-white/10 to-white/5 border border-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.05)] transform hover:-translate-y-1 transition-transform duration-500 z-20">
              <div className="flex items-center gap-3 sm:gap-4 mb-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0 rounded-full bg-purple-500 shadow-[0_0_10px_#A855F7]"></div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">AWS Transform + Agentic AI</h3>
              </div>
              <p className="text-[#F5F5F3]/50 text-xs sm:text-sm ml-6 sm:ml-7">Intelligent modernization layer</p>
            </div>

            <div className="w-[90%] sm:w-[80%] bg-gradient-to-r from-white/10 to-white/5 border border-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.02)] z-10">
              <div className="flex items-center gap-3 sm:gap-4 mb-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_10px_#10B981]"></div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">Cloud Infrastructure</h3>
              </div>
              <p className="text-[#F5F5F3]/50 text-xs sm:text-sm ml-6 sm:ml-7">Scalable compute & storage foundation</p>
            </div>

            {/* Connecting line */}
            <div className="absolute top-1/2 bottom-1/2 left-[30px] sm:left-[50px] w-px h-[70%] -translate-y-1/2 bg-gradient-to-b from-[#3A6FF7] via-purple-500 to-emerald-500 z-0 opacity-50"></div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 lg:col-start-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 sm:mb-6 hover:bg-white/10 transition-colors cursor-default w-fit">
            <FaLayerGroup className="text-[#3A6FF7] text-sm md:text-base" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#e5e2e1] font-medium">
              Technology Stack
            </span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] leading-[1.1] font-bold text-white mb-6">
            Built on Trusted Platforms
          </h2>

          <p className="text-[#F5F5F3]/70 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
            We leverage industry-leading transformation platforms and cloud services to deliver reliable, scalable solutions. Our approach combines deep technical expertise with proven infrastructure.
          </p>

          <ul className="space-y-4 sm:space-y-5 mb-10 sm:mb-12">
            {checkItems.map((item) => (
              <li key={item} className="flex items-start gap-3 sm:gap-4 group">
                <FaCircleCheck className="text-[#3A6FF7] text-lg sm:text-xl shrink-0 mt-0.5 sm:mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base text-[#F5F5F3]/90">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white font-semibold hover:text-[#3A6FF7] transition-colors group"
          >
            <span className="border-b-2 border-white/30 group-hover:border-[#3A6FF7] pb-1 transition-colors">
              Learn About Our Approach
            </span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}