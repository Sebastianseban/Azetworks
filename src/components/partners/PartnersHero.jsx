import { FaHandshake } from "react-icons/fa6";

export default function PartnersHero() {
  return (
    <section className="relative pt-[140px] sm:pt-[180px] md:pt-[200px] pb-16 md:pb-24 px-4 sm:px-6 md:px-16 max-w-[1440px] mx-auto overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#3A6FF7]/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-purple-600/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>

      <div className="grid grid-cols-12 gap-6 md:gap-8 relative z-10">
        <div className="col-span-12 md:col-span-10 lg:col-span-8 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 md:mb-8 hover:bg-white/10 transition-colors cursor-default">
            <FaHandshake className="text-[#3A6FF7] text-sm md:text-base" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#e5e2e1] font-medium">
              Partners & Alliances
            </span>
          </div>

          <h1 className="text-[40px] sm:text-[56px] md:text-[80px] leading-[1.1] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 mb-6 md:mb-8 tracking-tight">
            Built on <br className="hidden md:block" />
            <span className="text-[#3A6FF7] relative">
              Strong Alliances
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-[#3A6FF7]/40" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,10 Q50,0 100,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-[16px] sm:text-[20px] md:text-[24px] leading-[1.6] text-[#F5F5F3]/70 max-w-2xl font-light">
            Azetworks partners with the world's leading cloud providers and
            technology platforms to deliver best-in-class outcomes for our clients.
          </p>
        </div>

        <div className="col-span-12 pt-16 md:pt-24">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#47464a] to-transparent opacity-50"></div>
        </div>
      </div>
    </section>
  );
}