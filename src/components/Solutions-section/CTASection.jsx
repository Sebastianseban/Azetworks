export default function CTASection() {
  return (
    <section className="bg-[#F5F5F3] text-[#0E0E10] py-[160px] px-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[120px] leading-[1.05] tracking-[-0.04em] font-semibold mb-12">
          Find the right service
        </h2>

        <p className="text-[20px] leading-[1.6] opacity-80 max-w-2xl mx-auto mb-16">
          Our team will assess your environment and recommend the best path
          forward.
        </p>

        <button className="bg-[#0E0E10] text-[#F5F5F3] px-12 py-6 text-xs uppercase tracking-[0.15em] hover:scale-[1.02] transition-transform">
          Request Free Assessment
        </button>
      </div>
    </section>
  );
}