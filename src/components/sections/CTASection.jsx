import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1536px] mx-auto py-16 sm:py-24 mb-10">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F5F5F3] px-8 py-16 sm:px-12 md:px-16 sm:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left shadow-[0_15px_40px_-10px_rgba(255,255,255,0.05)]">
        
        {/* Decorative background ambient glows for light mode */}
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-white blur-[80px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl lg:max-w-2xl">
          <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-[1.05] tracking-[-0.02em] font-semibold text-[#0E0E10] mb-6">
            Ready to transform your business?
          </h2>

          <p className="text-[18px] sm:text-[20px] md:text-[22px] leading-[1.6] text-[#474649] font-medium">
            Let's talk about your cloud, modernization, or AI challenge. 
            <br className="hidden sm:block" /> No fluff — just outcomes.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
          <Link
            href="/contact"
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#3A6FF7] px-8 py-4 sm:py-5 text-[15px] sm:text-[16px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2b5ae6] hover:shadow-[0_10px_30px_rgba(58,111,247,0.3)]"
          >
            Start the Conversation
            <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          
          <Link
            href="/Solutions"
            className="flex w-full sm:w-auto items-center justify-center rounded-full border border-[#d1d0d4] bg-transparent px-8 py-4 sm:py-5 text-[15px] sm:text-[16px] font-bold text-[#0E0E10] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-transparent hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}