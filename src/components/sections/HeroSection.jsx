
"use client";

import { useEffect, useRef } from "react";
import TrustStrip from "./TrustStrip";
import FoundationSection from "./FoundationSection";

export default function HeroSection() {
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  const totalFrames = 192;

  useEffect(() => {
    // Preload frames
    for (let i = 1; i <= totalFrames; i++) {
      const img = new window.Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/hero/ezgif-frame-${paddedIndex}.jpg`;
    }

    let rafId;

    const updateFrame = () => {
      if (!containerRef.current || !imgRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /**
       * Total sticky scroll distance
       */
      const scrollDistance = rect.height - viewportHeight;

      /**
       * Progress: 0 → 1
       */
      let progress = -rect.top / scrollDistance;

      progress = Math.max(0, Math.min(1, progress));

      /**
       * Smooth frame mapping
       */
      const frame = Math.min(
        totalFrames,
        Math.max(
          1,
          Math.floor(progress * (totalFrames - 1)) + 1
        )
      );

      const paddedFrame = frame.toString().padStart(3, "0");

      rafId = requestAnimationFrame(() => {
        if (imgRef.current) {
          imgRef.current.src = `/hero/ezgif-frame-${paddedFrame}.jpg`;
        }
      });
    };

    window.addEventListener("scroll", updateFrame, {
      passive: true,
    });

    updateFrame();

    return () => {
      window.removeEventListener("scroll", updateFrame);

      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[160vh] bg-[#0E0E10]"
    >
      {/* Sticky Hero */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative z-10 flex h-full flex-col justify-between">
          {/* Hero Content */}
          <div className="mx-auto grid h-full w-full max-w-[1440px] grid-cols-12 items-center gap-2 px-8 pt-20">
            {/* LEFT */}
            <div className="col-span-12 flex flex-col gap-12 md:col-span-7">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#47464a]/30 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-[#3A6FF7]" />

                <span className="text-xs uppercase tracking-[0.2em] text-[#F5F5F3]">
                  AI-Powered Consulting & Delivery
                </span>
              </div>

              <h1 className="text-[120px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#F5F5F3]">
                Empowering
                <br />
                Business
                <br />
                Transformation
              </h1>
            </div>

            {/* RIGHT */}
            <div className="relative col-span-12 aspect-square overflow-hidden rounded-lg border border-[#47464a]/10 md:col-span-5">
              {/* Blueprint Grid */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Animation */}
              <img
                ref={imgRef}
                src="/hero/ezgif-frame-001.jpg"
                alt="Azetworks AI Infrastructure"
                className="relative z-10 h-full w-full scale-[1.12] object-contain opacity-80 mix-blend-luminosity"
              />

              {/* Depth */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0E0E10] via-transparent to-transparent opacity-70" />
            </div>
          </div>

          {/* Trust Strip */}
          <div className="relative z-20">
            <TrustStrip />
          </div>
        </div>

        {/* Hero Bottom Fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-30 h-40 w-full bg-gradient-to-b from-transparent to-[#0E0E10]" />
      </div>

      {/* FOUNDATION SECTION OVERLAP */}
      <div className="absolute bottom-0 left-0 z-40 w-full translate-y-[10%]">
        <FoundationSection />
      </div>
    </section>
  );
}