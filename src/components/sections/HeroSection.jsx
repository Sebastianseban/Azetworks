import TrustStrip from "./TrustStrip";
import FoundationSection from "./FoundationSection";

export default function HeroSection() {
  return (
    <section className="relative bg-[#0E0E10]">
      {/* HERO WRAPPER */}
      <div className="relative overflow-hidden">
        <div className="relative z-10 flex min-h-[85vh] md:min-h-[100vh] flex-col justify-center pt-32 md:pt-0 gap-16 md:gap-0">
          
          {/* HERO CONTENT */}
          <div className="mx-auto grid w-full flex-1 max-w-[1440px] grid-cols-12 items-center px-4 sm:px-8 md:h-full md:gap-2 md:pt-20 lg:px-10 xl:px-16">
            
            {/* LEFT */}
            <div className="relative z-50 col-span-12 flex flex-col gap-6 items-center text-center md:text-left md:items-start md:gap-12 md:col-span-7">
              {/* BADGE */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#47464a]/30 bg-[#0e0e10]/50 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-[#3A6FF7]" />
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#F5F5F3] md:text-xs md:tracking-[0.2em]">
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
          <div className="relative z-20 pb-16 md:pb-0">
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
