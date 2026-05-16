import TrustStrip from "./TrustStrip";
import FoundationSection from "./FoundationSection";
import { FiZap } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="relative bg-[#0E0E10]">
      {/* HERO WRAPPER */}
      <div className="relative overflow-hidden">
        <div className="relative z-10 flex min-h-[60vh] md:min-h-[100vh] flex-col justify-center pt-28 md:pt-0 gap-10 md:gap-0">
          
          {/* HERO CONTENT */}
          <div className="mx-auto grid w-full flex-1 max-w-[1440px] grid-cols-12 items-center px-4 sm:px-8 md:h-full md:gap-2 md:pt-20 lg:px-10 xl:px-16">
            
            {/* LEFT */}
            <div className="relative z-50 col-span-12 flex flex-col gap-6 items-center text-center md:text-left md:items-start md:gap-12 md:col-span-7">
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-2 md:mb-6 hover:bg-white/10 transition-colors cursor-default w-fit">
                <FiZap className="text-[#3A6FF7] text-sm md:text-base" />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#e5e2e1] font-medium">
                  AI-Powered Consulting & Delivery
                </span>
              </div>

              {/* HEADLINE */}
              <h1 className="w-full text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-[#F5F5F3] break-words sm:text-[56px] sm:leading-[1] sm:tracking-[-0.03em] md:max-w-none md:text-[64px] md:leading-[0.98] md:whitespace-nowrap lg:text-[80px] xl:text-[100px] xl:tracking-[-0.04em]">
                Empowering
                <br /> Business
                <br /> Transformation
              </h1>
            </div>

            {/* RIGHT VISUAL - HIDDEN ON MOBILE */}
            <div className="relative hidden aspect-video w-full overflow-hidden rounded-2xl border border-[#47464a]/10 md:col-span-5 md:block md:max-w-none md:rounded-lg">
              {/* GRID */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* VIDEO */}
              <video
                src="/images/landingpagevideo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="relative z-10 h-full w-full object-cover opacity-80 mix-blend-luminosity"
              />

              {/* DEPTH */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0E0E10] via-transparent to-transparent opacity-70" />
            </div>
          </div>

          {/* TRUST STRIP */}
          <div className="relative z-20 pb-8 md:pb-0">
            <TrustStrip />
          </div>
        </div>

        {/* FADE */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-30 hidden h-40 w-full bg-gradient-to-b from-transparent to-[#0E0E10] md:block" />
      </div>

      {/* FOUNDATION SECTION */}
      <div className="relative z-40 w-full  md:pt-16">
        <FoundationSection />
      </div>
    </section>
  );
}
