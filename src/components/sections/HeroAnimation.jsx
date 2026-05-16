"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroAnimation() {
  const canvasRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef([]);

  useEffect(() => {
    const totalFrames = 96;
    let loadedCount = 0;
    const imgs = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new window.Image();
      const numStr = String(i).padStart(3, "0");
      img.src = `/animation/ezgif-frame-${numStr}.webp`;
      img.onload = () => {
        loadedCount++;
        // Preload next image (not really needed since we do all at once, but just simple counting)
        if (loadedCount === totalFrames) {
          imagesRef.current = imgs;
          setImagesLoaded(true);
        }
      };
      // Keep track of errors to not stall forever
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          imagesRef.current = imgs;
          setImagesLoaded(true);
        }
      };
      imgs.push(img);
    }
  }, []);

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || imagesRef.current.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    
    // Set canvas dimensions based on container
    const resizeCanvas = () => {
      // Use higher resolution for better quality on retina displays
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      // Normalize coordinate system to use css pixels
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let frame = 0;
    let animationFrameId;
    let lastDrawTime = performance.now();
    const fps = 24; // Smooth framerate
    const frameInterval = 1000 / fps;

    const render = (time) => {
      if (time - lastDrawTime >= frameInterval) {
        lastDrawTime = time;
        
        const img = imagesRef.current[frame];
        
        if (img && img.complete && img.naturalWidth > 0) {
          // Object-cover drawing logic
          const rect = canvas.parentElement.getBoundingClientRect();
          const imgAspect = img.width / img.height;
          const canvasAspect = rect.width / rect.height;
          
          let drawWidth, drawHeight, drawX, drawY;
          
          if (canvasAspect > imgAspect) {
            drawWidth = rect.width;
            drawHeight = rect.width / imgAspect;
            drawX = 0;
            drawY = (rect.height - drawHeight) / 2;
          } else {
            drawHeight = rect.height;
            drawWidth = rect.height * imgAspect;
            drawX = (rect.width - drawWidth) / 2;
            drawY = 0;
          }
          
          ctx.fillStyle = "#0E0E10";
          ctx.fillRect(0, 0, rect.width, rect.height);
          ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        }
        
        frame = (frame + 1) % imagesRef.current.length;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [imagesLoaded]);

  return (
    <div className="relative z-10 h-full w-full opacity-80 mix-blend-luminosity overflow-hidden bg-[#0E0E10]">
      <canvas
        ref={canvasRef}
        className="block"
      />
    </div>
  );
}
