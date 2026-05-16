import Link from "next/link";
import { FaLinkedinIn, FaXTwitter, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-[#47464a]/20 bg-[#0E0E10] pt-20 pb-10 px-4 sm:px-8 lg:px-16 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#3A6FF7]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="text-[32px] font-black tracking-tight text-white flex items-center gap-3">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#3A6FF7] to-[#4A8F8B] shadow-[0_0_15px_rgba(58,111,247,0.4)]"></div>
              AZETWORKS
            </div>
            <p className="text-[#F5F5F3]/60 text-sm md:text-base leading-relaxed max-w-sm">
              Empowering enterprise transformation with outcome-based, AI-accelerated cloud and modernization solutions.
            </p>
            <div className="flex gap-3 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#3A6FF7] hover:text-white hover:border-[#3A6FF7] hover:shadow-[0_0_15px_rgba(58,111,247,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                <FaXTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Solutions</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/Solutions#move-to-cloud" className="text-[#F5F5F3]/60 hover:text-[#3A6FF7] transition-colors text-sm font-medium flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#3A6FF7] transition-colors"></span>
                  Move to Cloud
                </Link>
              </li>
              <li>
                <Link href="/Solutions#modernize-scale" className="text-[#F5F5F3]/60 hover:text-[#3A6FF7] transition-colors text-sm font-medium flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#3A6FF7] transition-colors"></span>
                  Modernize & Scale
                </Link>
              </li>
              <li>
                <Link href="/Solutions#ai-powered-workflows" className="text-[#F5F5F3]/60 hover:text-[#3A6FF7] transition-colors text-sm font-medium flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#3A6FF7] transition-colors"></span>
                  AI-Powered Workflows
                </Link>
              </li>
              <li>
                <Link href="/Solutions#dems" className="text-[#F5F5F3]/60 hover:text-[#3A6FF7] transition-colors text-sm font-medium flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#3A6FF7] transition-colors"></span>
                  Datacenter Exit (DEMS)
                </Link>
              </li>
              <li>
                <Link href="/Solutions#gat" className="text-[#F5F5F3]/60 hover:text-[#3A6FF7] transition-colors text-sm font-medium flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#3A6FF7] transition-colors"></span>
                  GenAI Transformation (GAT)
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-[#F5F5F3]/60 hover:text-white transition-colors text-sm font-medium">About Us</Link></li>
              <li><Link href="/partners" className="text-[#F5F5F3]/60 hover:text-white transition-colors text-sm font-medium">Partners</Link></li>
              <li><Link href="/Solutions" className="text-[#F5F5F3]/60 hover:text-white transition-colors text-sm font-medium">Offerings</Link></li>
              
              <li><Link href="/contact" className="text-[#F5F5F3]/60 hover:text-white transition-colors text-sm font-medium">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact & Legal Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Contact</h4>
            <ul className="flex flex-col gap-4 mb-8">
              <li>
                <a href="mailto:support@azetworks.com" className="text-[#F5F5F3]/60 hover:text-[#3A6FF7] transition-colors text-sm font-medium">support@azetworks.com</a>
              </li>
              <li>
                <a href="tel:+18001234567" className="text-[#F5F5F3]/60 hover:text-[#3A6FF7] transition-colors text-sm font-medium">+1 (800) 123-4567</a>
              </li>
            </ul>
            
           
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#F5F5F3]/40 text-[10px] md:text-xs uppercase tracking-[0.15em] text-center md:text-left">
            © {new Date().getFullYear()} AZETWORKS SYSTEMS. ALL RIGHTS RESERVED.
          </p>
       
        </div>
      </div>
    </footer>
  );
}