export default function VisualAnchor() {
  return (
    <div className="w-full h-[600px] bg-[#201f1f] relative overflow-hidden">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgTFmtN3JcAqLUIkL6MTOHgLsg2P5oh1q2qDfCuiUxhauA9lPiHEVrxa2klItZNUYzCtLXqkOjR1cn8FsQqYGU8THn-7d24oE7TBT74QRy9IRSdFOL2HzSWmoHDYc4nL8ax2EMvftTRzCEGfRb8dwVwZpWPJ40BxqQjCjzvg2rLhw4hmjBx9eny1uyn8g89UIenRPrkmnPc6OWIHhzqFIL2Wvf60rfzpvBN-jjsA2BYPsUvh2ZH8QktBt49Psr_7n8sWr4WkuWyg"
        alt="Architecture"
        className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#141313] via-transparent to-transparent"></div>
    </div>
  );
}