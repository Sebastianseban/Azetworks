const pillars = [
  {
    id: "AZ-PILLAR-01",
    title: "Outcome-Based",
    desc: "We price on results, not hours. Our success is tied directly to yours.",
  },
  {
    id: "AZ-PILLAR-02",
    title: "Cloud Agnostic",
    desc: "AWS, Azure, GCP, OCI — we recommend what's right for you.",
  },
  {
    id: "AZ-PILLAR-03",
    title: "AI-First Delivery",
    desc: "Every engagement is accelerated by proprietary AI tools.",
  },
];

export default function MissionSection() {
  return (
    <section className="px-16 py-[160px] max-w-[1440px] mx-auto">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="text-[64px] leading-[1.1] font-semibold text-white">
            Transforming Business Through Technology
          </h2>
        </div>

        <div className="col-span-12 md:col-start-6 md:col-span-7">
          <div className="space-y-16">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.id}
                className={`flex flex-col md:flex-row gap-8 items-start pb-12 ${
                  index !== pillars.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <span className="text-xs uppercase tracking-[0.15em] text-[#3A6FF7] py-1">
                  {pillar.id}
                </span>

                <div>
                  <h3 className="text-[32px] font-medium text-white mb-4">
                    {pillar.title}
                  </h3>

                  <p className="text-[#F5F5F399] leading-[1.7]">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}