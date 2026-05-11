export default function   FoundationSection() {
  return (
    <section className="px-8 max-w-[1440px]  mx-auto py-20 grid grid-cols-12 gap-2">
      <div className="col-span-12 md:col-span-5 flex flex-col gap-8">
        <div className="text-xs uppercase tracking-[0.2em] text-[#3A6FF7]">
          Our Foundation
        </div>

        <h2 className="text-[64px] leading-[1.1] tracking-[-0.02em] font-semibold">
          AI-Driven Modernization at the Core
        </h2>

        <p className="text-[20px] leading-[1.6] text-[#F5F5F399] max-w-lg">
          We leverage predictive analytics and generative models to de-risk
          legacy migrations and accelerate modern software delivery.
        </p>
      </div>
    </section>
  );
}