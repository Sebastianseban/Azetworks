import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-[#F5F5F3] text-[#0E0E10] py-24 sm:py-32 lg:py-[160px] px-4 sm:px-8 relative overflow-hidden">
      
      {/* Subtle background glow for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#3A6FF7]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[100px] xl:text-[120px] leading-[1.05] tracking-[-0.04em] font-semibold mb-6 sm:mb-10">
          Find the right service
        </h2>

        <p className="text-[18px] sm:text-[20px] lg:text-[24px] leading-[1.6] text-[#474649] font-medium max-w-2xl mx-auto mb-12 sm:mb-16">
          Our team will assess your environment and recommend the best path forward.
        </p>

        <Link href="/contact" className="group flex w-fit items-center justify-center gap-4 bg-[#0E0E10] text-[#F5F5F3] px-8 sm:px-12 py-5 sm:py-6 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-[#3A6FF7] hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(58,111,247,0.4)] transition-all duration-300 mx-auto">
          <span>Request Free Assessment</span>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/20">
            <FiArrowRight className="text-lg" />
          </div>
        </Link>
      </div>
    </section>
  );
}