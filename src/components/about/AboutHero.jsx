import { FiUsers } from "react-icons/fi";

export default function AboutHero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[819px] flex flex-col justify-center px-4 sm:px-8 lg:px-16 pt-24 pb-[80px] lg:pb-[160px] max-w-[1440px] mx-auto overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,245,243,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,245,243,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 md:mb-8 hover:bg-white/10 transition-colors cursor-default w-fit">
            <FiUsers className="text-[#3A6FF7] text-sm md:text-base" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#e5e2e1] font-medium">
              About Us
            </span>
          </div>

          <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[120px] leading-[1.05] tracking-[-0.04em] font-semibold text-white mb-8 md:mb-12">
            We Are Azetworks
          </h1>

          <p className="text-[16px] md:text-[20px] leading-[1.6] text-[#F5F5F399] max-w-3xl border-l border-[#3A6FF7] pl-4 md:pl-8">
            A new kind of consulting firm — combining deep technical expertise,
            AI-driven delivery, and outcome-based models to transform how businesses leverage cloud and AI.
          </p>
        </div>
      </div>

      <div className="mt-16 md:mt-24 w-full h-px bg-white/10"></div>
    </section>
  );
}