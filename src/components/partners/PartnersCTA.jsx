import { FaArrowRight, FaHandshake } from "react-icons/fa6";
import Link from "next/link";

export default function PartnersCTA() {
  return (
    <section className="py-16 md:py-32 px-4 sm:px-6 md:px-16 max-w-[1440px] mx-auto relative overflow-hidden">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/10 p-8 sm:p-12 md:p-24 text-center">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-gradient-to-b from-[#3A6FF7]/20 to-transparent blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-purple-600/10 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 sm:mb-8 hover:bg-white/10 transition-colors cursor-default w-fit">
            <FaHandshake className="text-[#3A6FF7] text-sm md:text-base" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#e5e2e1] font-medium">
              Strategic Engagement
            </span>
          </div>

          <h2 className="text-[32px] sm:text-[40px] md:text-[64px] leading-[1.1] font-bold text-white mb-6 sm:mb-8 tracking-tight">
            Ready to partner with Azetworks?
          </h2>

          <p className="text-[16px] sm:text-[20px] md:text-[24px] leading-[1.6] text-[#F5F5F3]/70 mb-10 sm:mb-12 font-light">
            Let's explore how we can create value together for our shared customers.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <Link href="/contact" className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-[#F5F5F3] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto">
              <span>Get in Touch</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link href="/Solutions" className="inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg border border-white/20 text-white hover:bg-white/10 transition-colors backdrop-blur-sm w-full sm:w-auto">
              View Solution Briefs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}