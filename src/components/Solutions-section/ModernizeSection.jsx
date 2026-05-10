export default function ModernizeSection() {
  return (
    <section className="px-16 py-[160px] max-w-[1440px] mx-auto border-b border-white/10">
      <div className="grid grid-cols-12 gap-8 mb-24">
        <div className="col-span-12 md:col-span-4">
          <p className="text-xs uppercase tracking-[0.15em] text-[#4A8F8B]">
            Application Modernization
          </p>
        </div>

        <div className="col-span-12 md:col-span-8">
          <h2 className="text-[64px] leading-[1.1] font-semibold">
            Modernize & Scale
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-6 border border-white/10 p-12 hover:border-[#3A6FF7] transition-all">
          <div className="flex justify-between mb-16">
            <span className="text-xs uppercase tracking-[0.15em] text-[#F5F5F399]">
              LRT-03
            </span>

            <span className="text-[#4A8F8B] text-[32px]">
              70% FASTER
            </span>
          </div>

          <h3 className="text-[32px] font-medium mb-4">
            Legacy Re-platforming
          </h3>

          <p className="text-[#F5F5F399]">
            Transform legacy systems into cloud-native architecture.
          </p>
        </div>
      </div>
    </section>
  );
}