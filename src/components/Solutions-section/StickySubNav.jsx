"use client";
import React, { useState, useEffect } from "react";

export default function StickySubNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("move-to-cloud");

  useEffect(() => {
    const handleScroll = () => {
      // Show the floating nav after scrolling past the hero section
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check which section is active
      const sections = ["move-to-cloud", "modernize-scale", "ai-powered-workflows"];
      let currentActive = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          // Trigger the active state when the section hits about 300px from the top of the viewport
          if (window.scrollY >= element.offsetTop - 300) {
            currentActive = section;
          }
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state on load
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getButtonClass = (sectionId) => {
    const baseClass = "px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[12px] sm:text-[14px] font-bold transition-all duration-300 whitespace-nowrap";
    const activeClass = "bg-[#3A6FF7] text-white shadow-[0_5px_15px_-5px_rgba(58,111,247,0.5)]";
    const inactiveClass = "text-[#c8c5ca] hover:text-white hover:bg-white/10";
    
    return `${baseClass} ${activeSection === sectionId ? activeClass : inactiveClass}`;
  };

  return (
    <div
      className={`fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled
          ? "translate-y-0 opacity-100"
          : "-translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-full bg-[#111112]/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
        <a
          href="#move-to-cloud"
          className={getButtonClass("move-to-cloud")}
        >
          Move to Cloud
        </a>
        <a
          href="#modernize-scale"
          className={getButtonClass("modernize-scale")}
        >
          Modernize & Scale
        </a>
        <a
          href="#ai-powered-workflows"
          className={getButtonClass("ai-powered-workflows")}
        >
          AI Workflows
        </a>
      </div>
    </div>
  );
}
