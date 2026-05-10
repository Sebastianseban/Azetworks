const values = [
  {
    id: "Value 01",
    title: "Innovation",
    desc: "Constant evolution of proprietary technical frameworks.",
  },
  {
    id: "Value 02",
    title: "Customer-Centricity",
    desc: "We prioritize long-term operational health over short-term wins.",
  },
  {
    id: "Value 03",
    title: "Integrity",
    desc: "Direct communication and honest architectural guidance.",
  },
];

export default function ValuesSection() {
  return (
    <section className="px-16 py-[160px] max-w-[1440px] mx-auto">
      <div className="grid grid-cols-12 gap-8 mb-24">
        <div className="col-span-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#3A6FF7] mb-4 block">
            Core Values
          </span>

          <h2 className="text-[64px] leading-[1.1] font-semibold text-white">
            What Drives Us
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {values.map((value) => (
          <div
            key={value.id}
            className="col-span-12 md:col-span-4 border-t border-white/10 pt-8"
          >
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#3A6FF7] mb-6">
              {value.id}
            </h4>

            <h3 className="text-[32px] font-medium text-white mb-4">
              {value.title}
            </h3>

            <p className="text-[#F5F5F399] leading-[1.7]">
              {value.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}