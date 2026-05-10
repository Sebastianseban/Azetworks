const categories = [
  {
    title: "Infrastructure & DevOps",
    items: ["Terraform", "Ansible", "Helm", "Jenkins"],
  },
  {
    title: "Database Tech",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Snowflake"],
  },
  {
    title: "AI & LLM Platforms",
    items: ["OpenAI", "Anthropic", "Hugging Face", "LangChain"],
  },
  {
    title: "Observability",
    items: ["Datadog", "Splunk", "New Relic", "Prometheus"],
  },
];

export default function EcosystemSection() {
  return (
    <section className="py-[160px] px-16 max-w-[1440px] mx-auto">
      <div className="mb-16">
        <h2 className="text-[64px] leading-[1.1] font-semibold text-white mb-4">
          Technology Ecosystem
        </h2>

        <div className="w-full h-px bg-[#47464a] mb-12"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-[#47464a] pb-8">
        {categories.map((category) => (
          <div key={category.title}>
            <span className="text-xs uppercase tracking-[0.2em] text-[#3A6FF7] block mb-8">
              {category.title}
            </span>

            <ul className="space-y-4">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="flex justify-between items-center border-b border-[#47464a]/30 pb-2"
                >
                  <span>{item}</span>

                  <span className="text-sm">↗</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}