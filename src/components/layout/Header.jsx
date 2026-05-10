export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#47464a]/10 bg-[#0E0E10]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 py-6">
        <div className="text-[32px] font-bold tracking-tight">
          AZETWORKS
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {[
            "Home",
            "Solutions",
            "About",
            "Partners",
            "Blog",
            "Contact Us",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="uppercase tracking-[0.2em] text-sm text-[#c8c5ca] hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="border border-[#919095] px-6 py-2 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
          Get Started
        </button>
      </div>
    </header>
  );
}