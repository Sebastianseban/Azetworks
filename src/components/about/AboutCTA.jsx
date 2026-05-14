import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-[80px] lg:py-[160px] max-w-[1440px] mx-auto border-t border-white/10">
      <div className="grid grid-cols-12 gap-4 md:gap-8 items-center">
        <div className="col-span-12 md:col-span-8">
          <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.1] font-semibold text-white mb-4 md:mb-6">
            Want to work with us?
          </h2>

          <p className="text-[16px] md:text-[20px] leading-[1.6] text-[#F5F5F399] mb-8 md:mb-12">
            We're always looking for great clients and great talent.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Link href="/contact" className="bg-[#F5F5F3] text-[#0E0E10] text-[10px] md:text-xs uppercase tracking-[0.2em] px-6 sm:px-10 py-4 sm:py-5 hover:opacity-90 transition-opacity text-center font-medium">
              Contact Us
            </Link>

            <Link href="/partners" className="border border-[#F5F5F3] text-white text-[10px] md:text-xs uppercase tracking-[0.2em] px-6 sm:px-10 py-4 sm:py-5 hover:bg-[#F5F5F3] hover:text-[#0E0E10] transition-all text-center font-medium">
              Become a Partner
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}