"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/Solutions" },
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#47464a]/10 bg-[#0E0E10]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6">
        <Link href="/" className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold tracking-tight text-white z-50 relative">
          AZETWORKS
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="uppercase tracking-[0.2em] text-[10px] sm:text-xs lg:text-sm text-[#c8c5ca] hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button className="border border-[#919095] px-4 sm:px-6 py-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white z-50 relative p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-[#0E0E10] flex flex-col items-center justify-center gap-8 z-40 lg:hidden">
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="uppercase tracking-[0.2em] text-sm md:text-lg text-[#c8c5ca] hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <button className="border border-[#919095] px-8 py-3 mt-4 text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
