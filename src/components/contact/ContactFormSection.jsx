const options = [
  "DEMS – Datacenter Exit Made Simple",
  "C2C – Cloud to Cloud Migration",
  "LRT – Legacy Re-platforming",
  "DBL – Database Liberation",
  "CNE – Cloud-Native Foundation",
  "PXO – Performance Optimization",
  "GAT – GenAI Transformation",
  "AAT – Agentic AI Transformation",
  "General Inquiry",
  "Partnership",
];

export default function ContactFormSection() {
  return (
    <section className="px-16 py-[160px] max-w-[1440px] mx-auto border-t border-[#47464a]">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
          <h2 className="text-[32px] font-medium text-white sticky top-32">
            Send us a message
          </h2>

          <div className="mt-12 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#F5F5F399] mb-2">
                DIRECT ACCESS
              </p>

              <a
                href="#"
                className="hover:text-[#c8c6c8] transition-colors"
              >
                www.azetworks.com
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#F5F5F399] mb-2">
                NETWORK
              </p>

              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#c8c6c8] transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <InputField label="First Name*" placeholder="John" />

            <InputField label="Last Name*" placeholder="Doe" />

            <InputField
              label="Work Email*"
              placeholder="john@enterprise.com"
              type="email"
            />

            <InputField
              label="Company"
              placeholder="Organization Name"
            />

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs uppercase tracking-[0.2em] text-[#F5F5F399]">
                I'm interested in*
              </label>

              <select className="bg-transparent border-b border-[#47464a] py-4 focus:outline-none focus:border-[#c8c6c8] transition-colors">
                <option>Select an option</option>

                {options.map((option) => (
                  <option
                    key={option}
                    className="bg-[#141313] text-white"
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs uppercase tracking-[0.2em] text-[#F5F5F399]">
                Message*
              </label>

              <textarea
                rows={4}
                placeholder="Describe environment, challenge, success goals"
                className="bg-transparent border-b border-[#47464a] py-4 resize-none focus:outline-none focus:border-[#c8c6c8] transition-colors"
              />
            </div>

            <div className="md:col-span-2 flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6">
              <button
                type="submit"
                className="bg-white text-black py-6 px-12 text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>

              <p className="text-[#F5F5F399] italic">
                We typically respond within one business day.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function InputField({
  label,
  placeholder,
  type = "text",
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs uppercase tracking-[0.2em] text-[#F5F5F399]">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent border-b border-[#47464a] py-4 focus:outline-none focus:border-[#c8c6c8] transition-colors placeholder:text-[#353434]"
      />
    </div>
  );
}