import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-surface-container border-t border-on-surface-variant/10 pt-20 pb-10 px-6 font-inter antialiased transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="material-symbols-outlined text-primary text-xl group-hover:rotate-12 transition-transform">qr_code_2</span>
            <span className="text-lg font-black text-on-surface uppercase tracking-tighter">
              Instant <span className="text-primary italic">QR</span>
            </span>
          </Link>
          <div className="text-center md:text-left">
            <p className="text-on-surface-variant text-xs tracking-wide">
              Designed and Developed By <span className="text-primary font-bold">Hamza Munir</span>
            </p>
            <p className="text-on-surface-variant/60 text-[10px] font-black tracking-[0.2em] uppercase mt-2">
              IG HANDLE <a href="https://instagram.com/i_am_hamza_3" target="_blank" className="text-primary hover:underline">@i_am_hamza_3</a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col gap-3">
            <p className="text-on-surface text-xs font-black uppercase tracking-widest mb-2">Platform</p>
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-xs font-bold" to="/#features">Features</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-xs font-bold" to="/#how-it-works">How It Works</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-xs font-bold" to="/#faq">FAQs</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-on-surface text-xs font-black uppercase tracking-widest mb-2">Legal</p>
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-xs font-bold" to="/terms">Terms of Service</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-xs font-bold" to="/privacy">Privacy Policy</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-xs font-bold" to="/license">License Agreement</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-on-surface text-xs font-black uppercase tracking-widest mb-2">Social</p>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-xs font-bold" href="https://instagram.com/i_am_hamza_3" target="_blank">Instagram</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-xs font-bold" href="https://github.com/intelli4code" target="_blank">GitHub</a>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-7xl mx-auto mt-20 pt-8 border-t border-on-surface-variant/10 text-center"
      >
        <p className="text-on-surface-variant/40 text-[10px] font-black uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} Instant QR - Professional Generator Tool
        </p>
      </motion.div>
    </footer>
  );
}
