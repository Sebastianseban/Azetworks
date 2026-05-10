const partners = [
  {
    id: "AWS-01",
    title: "Amazon Web Services",
    badge: "Advanced Partner",
    desc: "Full-scale digital transformation powered by AWS infrastructure.",
    tags: ["Migration", "AI/ML", "Modernization"],
    large: true,
  },
  {
    id: "MSFT-02",
    title: "Microsoft Azure",
    badge: "Solutions Partner",
    tags: ["OpenAI", "Hybrid"],
  },
  {
    id: "GOOG-03",
    title: "Google Cloud",
    badge: "Partner",
    tags: ["Kubernetes", "Vertex AI"],
  },
  {
    id: "ORCL-04",
    title: "Oracle Cloud",
    desc: "Mission-critical Oracle migrations.",
    tags: ["Database", "Migration"],
  },
];

export default function CloudPartnersGrid() {
  return (
    <section className="py-8 px-16 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-12 gap-8 mb-12">
        <div className="col-span-12 md:col-span-4">
          <h2 className="text-[32px] font-medium text-white mb-4">
            Hyperscale Cloud Alliances
          </h2>

          <p className="text-[#F5F5F399]">
            Deep certifications across all major platforms.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {partners.map((partner, index) => (
          <div
            key={partner.id}
            className={`border border-[#47464a] p-8 hover:border-[#3A6FF7] transition-colors duration-300 flex flex-col justify-between min-h-[320px]
            ${
              index === 0
                ? "col-span-12 md:col-span-8"
                : "col-span-12 md:col-span-4"
            }`}
          >
            <div>
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs uppercase tracking-[0.15em] text-[#F5F5F399]">
                  {partner.id}
                </span>

                {partner.badge && (
                  <span className="text-xs uppercase tracking-[0.15em] text-[#3A6FF7] border border-[#3A6FF7] px-3 py-1">
                    {partner.badge}
                  </span>
                )}
              </div>

              <h3 className="text-[32px] font-medium text-white mb-2">
                {partner.title}
              </h3>

              {partner.desc && (
                <p className="text-[#F5F5F399] max-w-lg">
                  {partner.desc}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-2 pt-8">
              {partner.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-[0.15em] bg-[#2b2a2a] px-3 py-1 text-[#c8c5ca]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}   