export default function PartnersCTA() {
  return (
    <section className="bg-[#F5F5F3] text-[#0E0E10] py-[160px] px-16 text-center">
      <div className="max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-[#3A6FF7] mb-6 block">
          Strategic Engagement
        </span>

        <h2 className="text-[64px] leading-[1.1] font-semibold mb-8">
          Ready to partner with Azetworks?
        </h2>

        <p className="text-[20px] leading-[1.6] mb-12 opacity-80">
          Let's explore how we can create value together.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-[#0E0E10] text-[#F5F5F3] px-10 py-4 font-semibold hover:opacity-90 transition-opacity">
            Get in Touch
          </button>

          <button className="border border-[#0E0E10] px-10 py-4 font-semibold hover:bg-[#0E0E10] hover:text-white transition-all">
            View Solution Briefs
          </button>
        </div>
      </div>
    </section>
  );
}