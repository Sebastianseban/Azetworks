export default function ContactHero() {
  return (
    <section className="px-16 pt-[160px] pb-20 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <span className="text-xs uppercase tracking-[0.2em] text-[#c8c6c8] mb-8 block">
            Contact
          </span>

          <h1 className="text-[120px] leading-[1.05] tracking-[-0.04em] font-semibold text-white mb-8">
            Let’s Talk
          </h1>

          <p className="text-[20px] leading-[1.6] text-[#F5F5F399] max-w-xl">
            Tell us about your challenge. We'll come back with a clear path
            forward — no sales pitch, just substance.
          </p>
        </div>
      </div>
    </section>
  );
}