export default function VisualAnchor() {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[600px] bg-[#0a0a0a] relative overflow-hidden">
      {/* Background radial gradients for abstract feel instead of an image */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#3A6FF7]/10 rounded-full blur-[80px] md:blur-[150px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[150px] mix-blend-screen pointer-events-none"></div>
      
      {/* Abstract Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>

      {/* Fade at bottom to blend into footer */}
      <div className="absolute inset-x-0 bottom-0 h-32 md:h-64 bg-gradient-to-t from-[#141313] via-[#141313]/80 to-transparent z-10"></div>
    </div>
  );
}