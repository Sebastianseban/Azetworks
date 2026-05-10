export default function MoveToCloudSection() {
  return (
    <section className="px-16 py-[160px] max-w-[1440px] mx-auto border-b border-white/10">
      <div className="grid grid-cols-12 gap-8 mb-24">
        <div className="col-span-12 md:col-span-4">
          <p className="text-xs uppercase tracking-[0.15em] text-[#4A8F8B]">
            Cloud Migration Solutions
          </p>
        </div>

        <div className="col-span-12 md:col-span-8">
          <h2 className="text-[64px] leading-[1.1] font-semibold mb-8">
            Move to Cloud
          </h2>

          <p className="text-[20px] text-[#F5F5F399]">
            Factory-scale migration engines powered by AI orchestration.
          </p>
        </div>
      </div>

      {/* DEMS */}
      <div
        id="dems"
        className="grid grid-cols-12 gap-8 py-16 border-t border-white/10 hover:bg-[#1c1b1b] transition-colors"
      >
        <div className="col-span-12 md:col-span-4">
          <p className="text-xs uppercase tracking-[0.15em] text-[#F5F5F399] mb-4">
            DEMS-01
          </p>

          <h3 className="text-[32px] font-medium mb-2">
            Datacenter Exit Made Simple
          </h3>

          <p className="italic text-[#3A6FF7]">
            The Easy Button for Decommissioning
          </p>
        </div>

        <div className="col-span-12 md:col-span-5">
          <p className="text-[#F5F5F399] leading-relaxed">
            Eradicate hardware debt through automated discovery and high
            velocity workload relocation.
          </p>
        </div>

        <div className="col-span-12 md:col-span-3 text-right">
          <div className="text-[64px] font-semibold text-[#4A8F8B]">
            60%
          </div>

          <div className="text-xs uppercase tracking-[0.15em] text-[#F5F5F399]">
            MORE EFFICIENT
          </div>
        </div>
      </div>
    </section>
  );
}