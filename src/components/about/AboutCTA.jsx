export default function AboutCTA() {
  return (
    <section className="px-16 py-[160px] max-w-[1440px] mx-auto border-t border-white/10">
      <div className="grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 md:col-span-8">
          <h2 className="text-[64px] leading-[1.1] font-semibold text-white mb-6">
            Want to work with us?
          </h2>

          <p className="text-[20px] leading-[1.6] text-[#F5F5F399] mb-12">
            We're always looking for great clients and great talent.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-[#F5F5F3] text-[#0E0E10] text-xs uppercase tracking-[0.2em] px-10 py-5 hover:opacity-90 transition-opacity">
              Contact Us
            </button>

            <button className="border border-[#F5F5F3] text-white text-xs uppercase tracking-[0.2em] px-10 py-5 hover:bg-[#F5F5F3] hover:text-[#0E0E10] transition-all">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}