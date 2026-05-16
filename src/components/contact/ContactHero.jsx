import { FaMessage } from "react-icons/fa6";

export default function ContactHero() {
  return (
    <section className="relative pt-[140px] sm:pt-[180px] md:pt-[200px] pb-16 md:pb-24 px-4 sm:px-6 md:px-16 max-w-[1440px] mx-auto overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#3A6FF7]/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-purple-600/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>

      <div className="grid grid-cols-12 gap-6 md:gap-8 relative z-10">
        <div className="col-span-12 md:col-span-10 lg:col-span-8 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 md:mb-8 hover:bg-white/10 transition-colors cursor-default">
            <FaMessage className="text-[#3A6FF7] text-sm md:text-base" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#e5e2e1] font-medium">
              Contact
            </span>
          </div>

          <h1 className="text-[48px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[1.05] tracking-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 mb-6 md:mb-8">
            Let’s <span className="text-[#3A6FF7]">Talk</span>
          </h1>

          <p className="text-[16px] sm:text-[20px] md:text-[24px] leading-[1.6] text-[#F5F5F3]/70 max-w-2xl font-light">
            Tell us about your challenge. We'll come back with a clear path
            forward — no sales pitch, just substance.
          </p>
        </div>

        <div className="col-span-12 pt-16 md:pt-24">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#47464a] to-transparent opacity-50"></div>
        </div>
      </div>
    </section>
  );
}