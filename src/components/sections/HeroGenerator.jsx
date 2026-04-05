export default function HeroGenerator({ children }) {
  return (
    <header className="relative pt-20 pb-32 overflow-hidden bg-background">
      {/* Ambient background glow from Designref */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-900/20 via-background to-transparent -z-10"
      />
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 text-glow leading-tight">
          Free & Instant <span className="text-primary italic">QR Code</span> Generator
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-16 font-medium">
          No sign-up. No tracking. Just type, pause, and download your high-quality vector QR codes instantly.
        </p>

        {/* The Generator Widget Slot */}
        <div className="relative z-20">
          {children}
        </div>
      </div>
    </header>
  );
}
