import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-32 px-8 max-w-[1440px] mx-auto min-h-screen grid grid-cols-12 gap-2 items-center py-40">
      <div className="col-span-12 md:col-span-7 flex flex-col gap-12">
        <div className="inline-flex items-center gap-2 border border-[#47464a]/30 px-3 py-1 rounded-full w-fit">
          <span className="w-2 h-2 rounded-full bg-[#3A6FF7]" />

          <span className="text-xs uppercase tracking-[0.2em]">
            AI-Powered Consulting & Delivery
          </span>
        </div>

        <h1 className="text-[120px] leading-[1.05] tracking-[-0.04em] font-semibold">
          Empowering
          <br />
          Business
          <br />
          Transformation
        </h1>
      </div>

      <div className="col-span-12 md:col-span-5 relative aspect-square overflow-hidden rounded-lg border border-[#47464a]/10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #353434 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrRFWXexDvaHJX7px7hdBckjxQcqBbyIlljndzMOYsv6i0J6p_nUvi5pzXYKYfcfG2ChYRapOEUNvb7zw0-6HmJsKPEy9mlVDjh6DQhyVOfozAqSMGDDXNppGcscToqIvRZwwLr536S_TbH5w-rdvH_qKOwfyEIg5WGb_JKXry9ej2N0uIWSNjCSnKtwwwtcbU8yx5vwvuh9VPJ8K_dEH2s8iF9T8vZnA4wnEwJwaIxRQ32dulHJ0Zbw6TIPcLvm-5xZF4VKB2Cg"
          alt="Technical"
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] to-transparent opacity-60" />
      </div>
    </section>
  );
}