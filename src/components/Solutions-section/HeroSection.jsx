import { FiLayers } from "react-icons/fi";

export default function HeroSection() {
  return (
    <header className="px-4 sm:px-6 md:px-12 lg:px-16 pt-10 pb-10 sm:py-28 lg:py-[160px] max-w-[1536px] mx-auto border-b border-white/10 relative overflow-hidden">
      
      {/* Decorative background ambient glow */}
      <div className="absolute -top-32 right-0 w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] bg-[#3A6FF7]/15 blur-[100px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="grid grid-cols-12 gap-6 md:gap-8 relative z-10">
        <div className="col-span-12 lg:col-span-10 flex flex-col items-center text-center sm:items-start sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 sm:mb-8 hover:bg-white/10 transition-colors cursor-default w-fit">
            <FiLayers className="text-[#3A6FF7] text-sm md:text-base" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#e5e2e1] font-medium">
              Service Offerings
            </span>
          </div>

          <h1 className="text-[40px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[120px] leading-[1.05] tracking-[-0.03em] font-semibold mb-6 sm:mb-10 text-white break-words">
            What We Deliver
          </h1>

          <p className="text-[15px] sm:text-[18px] md:text-[20px] leading-[1.6] text-[#c8c5ca] max-w-3xl font-medium mb-8 sm:mb-10">
            Eight precision-engineered offerings across migration, modernization, and AI — each powered by agentic AI tools and priced on outcomes.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 w-full sm:w-auto">
            <a
              href="#move-to-cloud"
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#3A6FF7] text-white text-[14px] sm:text-[15px] font-bold shadow-[0_10px_20px_-10px_rgba(58,111,247,0.5)] hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(58,111,247,0.6)] hover:bg-[#2b5ae6] transition-all duration-300"
            >
              Move to Cloud
            </a>
            <a
              href="#modernize-scale"
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/5 border border-white/10 text-white text-[14px] sm:text-[15px] font-bold backdrop-blur-md hover:-translate-y-1 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              Modernize & Scale
            </a>
            <a
              href="#ai-powered-workflows"
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/5 border border-white/10 text-white text-[14px] sm:text-[15px] font-bold backdrop-blur-md hover:-translate-y-1 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              AI-Powered Workflows
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-20 lg:mt-24 flex flex-wrap justify-center sm:justify-start gap-x-4 sm:gap-x-8 md:gap-x-12 gap-y-4 sm:gap-y-6 border-t border-white/10 pt-8 lg:pt-10">
        {["DEMS", "C2C", "LRT", "DBL", "CNE", "PXO", "GAT", "AAT"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.2em] text-[#8e8c96] hover:text-[#3A6FF7] hover:scale-105 transition-all duration-300"
            >
              {item}
            </a>
          )
        )}
      </div>
    </header>
  );
}