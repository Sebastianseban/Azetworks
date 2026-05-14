export default function VisionSection() {
  return (
    <section className="bg-[#F5F5F3] text-[#0E0E10] py-[80px] lg:py-[160px]">
      <div className="px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#474649] mb-4 md:mb-8 block">
              Vision
            </span>

            <blockquote className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.3] tracking-[-0.01em] max-w-5xl font-medium">
              "Enable businesses to fully leverage cloud, AI, and modernization
              for sustainable growth."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}