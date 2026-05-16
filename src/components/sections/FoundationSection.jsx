import Image from "next/image";
import { FiLayers } from "react-icons/fi";

export default function FoundationSection() {
  return (
    <section className="px-4 sm:px-8 max-w-[1440px] mx-auto  sm:py-20 grid grid-cols-12 gap-8 sm:gap-12 md:gap-8 items-center text-center md:text-left">
      <div className="col-span-12 md:col-span-5 flex flex-col items-center md:items-start gap-4 sm:gap-6 lg:gap-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 sm:mb-6 hover:bg-white/10 transition-colors cursor-default w-fit">
          <FiLayers className="text-[#3A6FF7] text-sm md:text-base" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#e5e2e1] font-medium">
            Our Foundation
          </span>
        </div>

        <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.1] tracking-[-0.02em] font-semibold">
          AI-Driven Modernization at the Core
        </h2>

        <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.6] text-[#F5F5F399] max-w-lg mx-auto md:mx-0">
          We leverage predictive analytics and generative models to de-risk
          legacy migrations and accelerate modern software delivery.
        </p>
      </div>

      <div className="col-span-12 md:col-span-7 flex justify-center mt-4 md:mt-0">
        <Image
          src="/images/foundation.png"
          alt="AI-Driven Modernization Foundation"
          width={600}
          height={300}
          className="w-[90%] sm:w-[80%] md:w-[65%] max-w-[550px] h-auto object-contain rounded-2xl mx-auto"
          priority
        />
      </div>
    </section>
  );
}