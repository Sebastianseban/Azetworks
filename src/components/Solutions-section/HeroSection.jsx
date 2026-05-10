export default function HeroSection() {
  return (
    <header className="px-16 py-[160px] max-w-[1440px] mx-auto border-b border-white/10">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-10">
          <span className="inline-block px-3 py-1 border border-[#3A6FF7] text-[#3A6FF7] text-xs uppercase tracking-[0.15em] mb-8">
            SERVICE OFFERINGS
          </span>

          <h1 className="text-[120px] leading-[1.05] tracking-[-0.04em] font-semibold mb-12">
            What We Deliver
          </h1>

          <p className="text-[20px] leading-[1.6] text-[#F5F5F399] max-w-2xl">
            Eight precision-engineered offerings across migration,
            modernization, and AI.
          </p>
        </div>
      </div>

      <div className="mt-24 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-8">
        {["DEMS", "C2C", "LRT", "DBL", "CNE", "PXO", "GAT", "AAT"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.15em] text-[#F5F5F399] hover:text-[#3A6FF7] transition-colors"
            >
              {item}
            </a>
          )
        )}
      </div>
    </header>
  );
}