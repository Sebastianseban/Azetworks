export default function TechStackSection() {
  return (
    <section className="py-[160px] px-16 bg-[#0e0e0e]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 md:col-span-6">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmw2xJEfZmynKEH42Fqd4pGn6RyqIHsyNdHo7VuZh9bycSBhifbrS7HHX0AQoIr1DrMJ20q8KKCna6_ptHrLgDVM04o1GAwzXKEEJh5EERdkmzHBAT12HkMO3ABxMVTXPmQGW8DuKiGO8FwTNOqZnGcH2kTUXdrCsZ0NL22wbY7kGc-SRQb942E24UPvBtM12u0SJuFUxJfY2Ivj9TB8jx7Zl9KgkGRrX1DgCsFDxo2yX-pRK02bfgLxhulPqVqrAaJZhm9S1w3A"
            alt="Technical Architecture"
            className="w-full grayscale border border-[#47464a]"
          />
        </div>

        <div className="col-span-12 md:col-span-4 md:col-start-8">
          <h2 className="text-[32px] font-medium text-white mb-6">
            Built on Trusted Platforms
          </h2>

          <p className="text-[#F5F5F399] mb-8">
            Industry-leading transformation platforms engineered for scale.
          </p>

          <ul className="space-y-4 mb-10">
            {[
              "Validated enterprise-grade security.",
              "Cross-cloud orchestration.",
              "Automated compliance governance.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="text-[#3A6FF7]">●</span>

                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="inline-flex items-center gap-2 border-b-2 border-white pb-1 font-semibold hover:gap-4 transition-all"
          >
            Learn About Our Approach →
          </a>
        </div>
      </div>
    </section>
  );
}