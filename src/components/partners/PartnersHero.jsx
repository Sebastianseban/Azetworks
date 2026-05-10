export default function PartnersHero() {
  return (
    <section className="relative pt-[160px] pb-8 px-16 max-w-[1440px] mx-auto grid grid-cols-12 gap-8">
      <div className="col-span-12 md:col-span-10">
        <span className="text-xs uppercase tracking-[0.2em] text-[#3A6FF7] mb-4 block">
          Partners
        </span>

        <h1 className="text-[64px] leading-[1.1] font-semibold text-white mb-8">
          Built on Strong Alliances
        </h1>

        <p className="text-[20px] leading-[1.6] text-[#F5F5F399] max-w-3xl">
          Azetworks partners with the world's leading cloud providers and
          technology platforms to deliver best-in-class outcomes.
        </p>
      </div>

      <div className="col-span-12 pt-16">
        <div className="w-full h-px bg-[#47464a] opacity-30"></div>
      </div>
    </section>
  );
}