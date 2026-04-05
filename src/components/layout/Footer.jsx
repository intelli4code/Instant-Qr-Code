import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-sky-400/5 pt-20 pb-10 px-6 font-inter antialiased">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="material-symbols-outlined text-primary text-xl group-hover:rotate-12 transition-transform">qr_code_2</span>
            <span className="text-lg font-bold text-white uppercase tracking-tighter">
              Instant <span className="text-primary italic">QR</span>
            </span>
          </Link>
          <div className="text-center md:text-left">
            <p className="text-slate-500 text-xs tracking-wide">
              Designed and Developed By <span className="text-primary font-bold">Hamza Munir</span>
            </p>
            <p className="text-slate-600 text-[10px] font-bold tracking-[0.2em] uppercase mt-2">
              IG HANDLE <a href="https://instagram.com/i_am_hamza_3" target="_blank" className="text-sky-400 hover:underline">@i_am_hamza_3</a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col gap-3">
            <p className="text-white text-xs font-black uppercase tracking-widest mb-2">Platform</p>
            <Link className="text-slate-500 hover:text-sky-300 transition-colors text-xs font-semibold" to="/#features">Features</Link>
            <Link className="text-slate-500 hover:text-sky-300 transition-colors text-xs font-semibold" to="/#how-it-works">How It Works</Link>
            <Link className="text-slate-500 hover:text-sky-300 transition-colors text-xs font-semibold" to="/#faq">FAQs</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white text-xs font-black uppercase tracking-widest mb-2">Legal</p>
            <Link className="text-slate-500 hover:text-sky-300 transition-colors text-xs font-semibold" to="/terms">Terms of Service</Link>
            <Link className="text-slate-500 hover:text-sky-300 transition-colors text-xs font-semibold" to="/privacy">Privacy Policy</Link>
            <Link className="text-slate-500 hover:text-sky-300 transition-colors text-xs font-semibold" to="/license">License Agreement</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white text-xs font-black uppercase tracking-widest mb-2">Social</p>
            <a className="text-slate-500 hover:text-sky-300 transition-colors text-xs font-semibold" href="https://instagram.com/i_am_hamza_3" target="_blank">Instagram</a>
            <a className="text-slate-500 hover:text-sky-300 transition-colors text-xs font-semibold" href="https://github.com/intelli4code" target="_blank">GitHub</a>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center"
      >
        <p className="text-slate-700 text-[10px] font-bold uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} Instant QR - Professional Generator Tool
        </p>
      </motion.div>
    </footer>
  );
}
