"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "/" },
  { 
    label: "Solutions", 
    href: "/Solutions",
    subItems: [
      { label: "Move to Cloud", href: "/Solutions#move-to-cloud" },
      { label: "Modernize & Scale", href: "/Solutions#modernize-scale" },
      { label: "AI-Powered Workflows", href: "/Solutions#ai-powered-workflows" },
      { label: "Datacenter Exit", href: "/Solutions#dems" },
      { label: "GenAI Transformation", href: "/Solutions#gat" }
    ]
  },
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState({});

  const toggleExpand = (label, e) => {
    e.preventDefault();
    setExpandedMobile(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-[#47464a]/10 bg-[#0E0E10]/95 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6">
          <Link href="/" className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold tracking-tight text-white z-50 relative flex items-center gap-3 group">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#3A6FF7] to-[#4A8F8B] shadow-[0_0_15px_rgba(58,111,247,0.4)] group-hover:shadow-[0_0_20px_rgba(58,111,247,0.6)] transition-all"></div>
            AZETWORKS
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 uppercase tracking-[0.2em] text-[10px] sm:text-xs lg:text-sm text-[#c8c5ca] hover:text-white transition-colors py-4"
                >
                  {item.label}
                  {item.subItems && (
                    <FiChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-rotate-180" />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.subItems && (
                  <div className="absolute top-[80%] left-1/2 -translate-x-1/2 pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-[#111112] border border-white/10 rounded-xl p-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-md relative">
                      {/* Top glowing edge */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#3A6FF7]/50 to-transparent"></div>
                      
                      <div className="flex flex-col gap-1">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block px-4 py-3 text-xs font-medium uppercase tracking-[0.1em] text-[#c8c5ca] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/contact" className="inline-block bg-white text-black font-bold px-6 py-2.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] rounded-full hover:bg-[#F5F5F3] hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white z-50 relative p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0E0E10] flex flex-col items-center justify-start z-40 lg:hidden pt-[120px] overflow-y-auto">
          <nav className="flex flex-col items-center w-full pb-20 gap-2">
            {navItems.map((item) => (
              <div key={item.label} className="w-full">
                {item.subItems ? (
                  <button
                    onClick={(e) => toggleExpand(item.label, e)}
                    className="flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-sm md:text-base font-semibold text-[#c8c5ca] hover:text-white transition-colors py-4 w-full text-center"
                  >
                    {item.label}
                    <FiChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedMobile[item.label] ? 'rotate-180 text-white' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex justify-center uppercase tracking-[0.2em] text-sm md:text-base font-semibold text-[#c8c5ca] hover:text-white transition-colors py-4 w-full text-center"
                  >
                    {item.label}
                  </Link>
                )}
                
                {/* Mobile Submenu Accordion */}
                {item.subItems && (
                  <div className={`overflow-hidden transition-all duration-300 ${expandedMobile[item.label] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col items-center w-full pb-4">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-[#c8c5ca]/70 hover:text-white transition-colors w-full text-center"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="inline-block border border-white/20 text-[#c8c5ca] hover:text-white hover:border-white font-medium px-8 py-3 mt-6 text-xs uppercase tracking-[0.2em] transition-all">
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
