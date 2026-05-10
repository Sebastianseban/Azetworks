export default function AIWorkflowSection() {
  return (
    <section className="px-16 py-[160px] max-w-[1440px] mx-auto">
      <div className="grid grid-cols-12 gap-8 mb-24">
        <div className="col-span-12 md:col-span-4">
          <p className="text-xs uppercase tracking-[0.15em] text-[#4A8F8B]">
            Intelligent Automation
          </p>
        </div>

        <div className="col-span-12 md:col-span-8">
          <h2 className="text-[64px] leading-[1.1] font-semibold">
            AI-Powered Workflows
          </h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-[#F5F5F3] text-[#0E0E10] p-16">
          <p className="text-xs uppercase tracking-[0.15em] mb-12">
            GAT-07
          </p>

          <h3 className="text-[64px] leading-[1.1] font-semibold mb-6">
            GenAI Transformation
          </h3>

          <p className="text-[20px] leading-[1.6]">
            Turn enterprise data into competitive advantage.
          </p>
        </div>

        <div className="flex-1 border border-white/10 p-16">
          <p className="text-xs uppercase tracking-[0.15em] text-[#F5F5F399] mb-12">
            AAT-08
          </p>

          <h3 className="text-[64px] leading-[1.1] font-semibold mb-6 text-[#3A6FF7]">
            Agentic AI
          </h3>

          <p className="text-[20px] leading-[1.6] text-[#F5F5F399]">
            Autonomous digital workers with safe governance.
          </p>
        </div>
      </div>
    </section>
  );
}   