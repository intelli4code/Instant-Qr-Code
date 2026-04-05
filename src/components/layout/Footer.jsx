export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-sky-400/10 py-12 px-6 font-inter text-sm text-slate-400 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl">qr_code_2</span>
            <span className="text-lg font-bold text-white uppercase tracking-tighter">
              Instant <span className="text-primary italic">QR</span>
            </span>
          </div>
          <p className="text-slate-500 text-xs tracking-wide">
            Designed and Developed By <span className="text-primary font-bold">Hamza Munir</span>
          </p>
          <p className="text-slate-600 text-[10px] font-bold tracking-[0.2em] uppercase mt-1">
            IG HANDLE <a href="https://instagram.com/i_am_hamza_3" target="_blank" className="text-sky-400 hover:underline">@i_am_hamza_3</a>
          </p>
        </div>
        <div className="flex gap-8">
          <a className="text-slate-500 hover:text-sky-300 transition-colors cursor-pointer font-medium" href="#">Privacy Policy</a>
          <a className="text-slate-500 hover:text-sky-300 transition-colors cursor-pointer font-medium" href="#">Terms of Service</a>
          <a className="text-slate-500 hover:text-sky-300 transition-colors cursor-pointer font-medium" href="#">Contact</a>
        </div>
        <div className="flex gap-4">
          <a className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary/20 transition-colors" href="#">
            <span className="material-symbols-outlined text-lg">public</span>
          </a>
          <a className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary/20 transition-colors" href="#">
            <span className="material-symbols-outlined text-lg">share</span>
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-xs">
        © {new Date().getFullYear()} Instant QR Generator. No cookies used. Your privacy is prioritized.
      </div>
    </footer>
  );
}
