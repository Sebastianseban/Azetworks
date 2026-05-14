"use client";

import { useEffect, useRef } from "react";
import TrustStrip from "./TrustStrip";
import FoundationSection from "./FoundationSection";

export default function HeroSection() {
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  const totalFrames = 192;

  useEffect(() => {
    let framesPreloaded = false;

    const preloadFrames = () => {
      if (framesPreloaded) return;
      framesPreloaded = true;
      for (let i = 1; i <= totalFrames; i++) {
        const img = new window.Image();
        const paddedIndex = i.toString().padStart(3, "0");
        img.src = `/hero/ezgif-frame-${paddedIndex}.jpg`;
      }
    };

    if (window.innerWidth >= 768) {
      preloadFrames();
    }

    let rafId;

    const updateFrame = () => {
      if (window.innerWidth < 768) return;
      
      preloadFrames(); // Ensure loaded if resized from mobile

      if (!containerRef.current || !imgRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const scrollDistance = Math.max(1, rect.height - viewportHeight);

      let progress = -rect.top / scrollDistance;
      progress = Math.max(0, Math.min(1, progress));

      const frame = Math.min(
        totalFrames,
        Math.max(1, Math.floor(progress * (totalFrames - 1)) + 1),
      );

      const paddedFrame = frame.toString().padStart(3, "0");

      rafId = requestAnimationFrame(() => {
        if (imgRef.current) {
          imgRef.current.src = `/hero/ezgif-frame-${paddedFrame}.jpg`;
        }
      });
    };

    window.addEventListener("scroll", updateFrame, { passive: true });
    window.addEventListener("resize", updateFrame, { passive: true });

    updateFrame();

    return () => {
      window.removeEventListener("scroll", updateFrame);
      window.removeEventListener("resize", updateFrame);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="
        relative
        bg-[#0E0E10]

        h-auto
        md:h-[200vh]
        lg:h-[180vh]
        xl:h-[160vh]
      "
    >
      {/* STICKY HERO */}
      <div
        className="
          relative
          md:sticky
          md:top-0
          md:h-screen
          overflow-hidden
        "
      >
        <div
          className="
            relative
            z-10
            flex
            min-h-[85vh]
            md:min-h-[100vh]
            flex-col
            justify-center
            md:justify-between
            pt-32
            md:pt-0
            gap-16
            md:gap-0
          "
        >
          {/* HERO CONTENT */}
          <div
            className="
              mx-auto
              grid
              w-full
              flex-1
              max-w-[1440px]
              grid-cols-12
              items-center
              px-4

              sm:px-8
              md:h-full
              md:gap-2
              md:pt-20
              lg:px-10
              xl:px-16
            "
          >
            {/* LEFT */}
            <div
              className="
                col-span-12
                flex
                flex-col
                gap-6
                items-center text-center

                md:text-left
                md:items-start
                md:gap-12
                md:col-span-7
              "
            >
              {/* BADGE */}
              <div
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#47464a]/30
                  bg-[#0e0e10]/50
                  px-3
                  py-1.5
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#3A6FF7]
                  "
                />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-[#F5F5F3]

                    md:text-xs
                    md:tracking-[0.2em]
                  "
                >
                  AI-Powered Consulting & Delivery
                </span>
              </div>

              {/* HEADLINE */}
              <h1
                className="
                  max-w-[100%]
                  text-[36px]
                  font-semibold
                  leading-[1.1]
                  tracking-[-0.02em]
                  text-[#F5F5F3]

                  sm:text-[48px]
                  sm:leading-[1]
                  sm:tracking-[-0.03em]

                  md:max-w-none
                  md:text-[72px]
                  md:leading-[0.98]
                  lg:text-[96px]
                  xl:text-[120px]
                  xl:tracking-[-0.04em]
                "
              >
                Empowering
                <br className="hidden md:block" /> Business
                <br className="hidden md:block" /> Transformation
              </h1>
            </div>

            {/* RIGHT VISUAL - HIDDEN ON MOBILE */}
            <div
              className="
                relative
                hidden
                aspect-square
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#47464a]/10

                md:col-span-5
                md:block
                md:max-w-none
                md:rounded-lg
              "
            >
              {/* GRID */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-40
                "
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* ANIMATION */}
              <img
                ref={imgRef}
                src="/hero/ezgif-frame-001.jpg"
                alt="Azetworks AI Infrastructure"
                className="
                  relative
                  z-10
                  h-full
                  w-full
                  scale-[1.12]
                  object-contain
                  opacity-80
                  mix-blend-luminosity
                "
              />

              {/* DEPTH */}
              <div
                className="
                  absolute
                  inset-0
                  z-20
                  bg-gradient-to-t
                  from-[#0E0E10]
                  via-transparent
                  to-transparent
                  opacity-70
                "
              />
            </div>
          </div>

          {/* TRUST STRIP */}
          <div className="relative z-20 pb-16 md:pb-0">
            <TrustStrip />
          </div>
        </div>

        {/* FADE */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-30
            hidden
            h-40
            w-full
            bg-gradient-to-b
            from-transparent
            to-[#0E0E10]

            md:block
          "
        />
      </div>

      {/* FOUNDATION OVERLAP */}
      <div
        className="
          relative
          z-40
          w-full

          md:absolute
          md:bottom-0
          md:left-0
          md:translate-y-[10%]
        "
      >
        <FoundationSection />
      </div>
    </section>
  );
}
