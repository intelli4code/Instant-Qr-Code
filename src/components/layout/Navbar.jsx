export default function Navbar() {
  return (
    <nav className="bg-slate-950/60 backdrop-blur-xl border-b border-sky-400/10 shadow-2xl shadow-sky-900/20 font-inter antialiased top-0 sticky z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sky-300 text-3xl">qr_code_2</span>
          <span className="text-xl font-bold tracking-tight text-white uppercase">Instant QR</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sky-300 font-semibold border-b-2 border-sky-400 pb-1" href="#features">Features</a>
          <a className="text-slate-300 hover:text-white transition-colors" href="#how-it-works">How it Works</a>
          <a className="text-slate-300 hover:text-white transition-colors" href="#faq">FAQ</a>
        </div>
        <button className="bg-primary hover:bg-sky-400 text-on-primary font-semibold px-6 py-2 rounded-full transition-all active:scale-95 shadow-lg shadow-sky-400/20">
          Get Started
        </button>
      </div>
    </nav>
  );
}
