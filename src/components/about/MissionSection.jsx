import { FiTarget, FiCloud, FiCpu } from "react-icons/fi";

const pillars = [
  {
    icon: FiTarget,
    title: "Outcome-Based",
    desc: "We price on results, not hours. Our success is tied directly to yours.",
  },
  {
    icon: FiCloud,
    title: "Cloud Agnostic",
    desc: "AWS, Azure, GCP, OCI — we recommend what's right for you, not what's convenient for us.",
  },
  {
    icon: FiCpu,
    title: "AI-First Delivery",
    desc: "Every engagement is accelerated by our proprietary agentic AI tools.",
  },
];

export default function MissionSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-[80px] lg:py-[160px] max-w-[1440px] mx-auto">
      <div className="grid grid-cols-12 gap-6 md:gap-8">
        <div className="col-span-12 lg:col-span-5 mb-8 md:mb-12 lg:mb-0">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#3A6FF7] mb-4 md:mb-6 block">
            Our Mission
          </span>
          <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.1] font-semibold text-white mb-6 md:mb-8">
            Transforming Business Through Technology
          </h2>
          <div className="space-y-4 md:space-y-6 text-[14px] md:text-[16px] text-[#F5F5F399] leading-[1.6]">
            <p>
              Azetworks helps businesses migrate and modernize to the cloud, enabling increased efficiency and scalability. We use AI-powered tools for consulting and project delivery, ensuring customized solutions that fit each customer's unique needs.
            </p>
            <p>
              We offer outcome-based pricing and remain cloud and technology agnostic — always prioritizing your unique business challenges for optimal results.
            </p>
          </div>
        </div>

        <div className="col-span-12 lg:col-start-7 lg:col-span-6">
          <div className="space-y-8 md:space-y-12 lg:space-y-16 lg:mt-16">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`flex flex-row gap-4 md:gap-8 items-start pb-8 md:pb-12 ${
                  index !== pillars.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <div className="text-[24px] md:text-[32px] text-[#3A6FF7] mt-1">
                  <pillar.icon />
                </div>

                <div>
                  <h3 className="text-[20px] md:text-[24px] lg:text-[32px] font-medium text-white mb-2 md:mb-4">
                    {pillar.title}
                  </h3>

                  <p className="text-[14px] md:text-[16px] text-[#F5F5F399] leading-[1.7]">
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