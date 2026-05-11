export default function TrustStrip() {
  const partners = [
    "AWS", "GOOGLE CLOUD", "MICROSOFT AZURE", "ORACLE CLOUD", "ANTHROPIC", "RED HAT", "CAST SOFTWARE"
  ];
  
  const PartnerList = () => (
    <div className="flex justify-between gap-20 whitespace-nowrap text-xs uppercase tracking-[0.2em] text-[#c8c5ca] opacity-60 pr-20">
      {partners.map((partner, i) => (
        <span key={i}>{partner}</span>
      ))}
    </div>
  );

  return (
    <section className="border-y border-[#47464a]/10 py-12 overflow-hidden w-full bg-[#0E0E10] z-20 relative">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
      `}</style>
      <div className="flex animate-scroll">
        <PartnerList />
        <PartnerList />
      </div>
    </section>
  );
}