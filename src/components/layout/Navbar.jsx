import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useHistoryState } from "../../context/HistoryContext";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const { setIsHistoryOpen } = useHistoryState();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", path: "/#features" },
    { name: "FAQ", path: "/#faq" },
    { name: "Bulk Mode", path: "/bulk" },
    { name: "Privacy", path: "/privacy" },
  ];
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="sticky top-0 z-[60] w-full border-b border-on-surface-variant/10 bg-glass-bg backdrop-blur-2xl transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full px-6 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="material-symbols-outlined text-primary text-3xl group-hover:rotate-12 transition-transform drop-shadow-[0_0_10px_rgba(14,165,233,0.3)]">qr_code_2</span>
          <span className="text-xl font-bold tracking-tight text-on-surface hover:text-primary transition-all">
            Instant <span className="text-primary italic tracking-wider">QR</span>
          </span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <Link 
              key={idx}
              to={link.path}
              className="text-sm font-semibold transition-all hover:text-primary text-on-surface-variant hover:translate-y-[-1px]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-xl hover:bg-primary/10 text-on-surface-variant hover:text-primary transition-all border border-transparent hover:border-primary/20"
            title="Toggle Theme"
          >
            <span className="material-symbols-outlined text-xl">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>

          <button 
            onClick={() => setIsHistoryOpen(true)}
            className="hidden lg:flex items-center gap-2 text-on-surface-variant hover:text-primary transition-all py-2.5 px-4 rounded-xl hover:bg-primary/10 border border-transparent hover:border-primary/20 group"
          >
            <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">history</span>
            <span className="text-xs font-black uppercase tracking-widest pt-0.5 whitespace-nowrap">Recent</span>
          </button>

          <div className="hidden sm:flex items-center">
            <a 
              href="https://github.com/intelli4code" 
              target="_blank" 
              className="bg-primary text-slate-900 dark:text-sky-950 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:brightness-110 shadow-lg shadow-primary/20 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-sm">code</span>
              API <span className="hidden sm:inline">Docs</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl hover:bg-primary/10 text-on-surface-variant hover:text-primary transition-all border border-transparent hover:border-primary/20"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-glass-bg border-t border-on-surface-variant/10 overflow-hidden"
          >
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link, idx) => (
                <Link 
                  key={idx}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-bold text-on-surface hover:text-primary p-3 rounded-xl hover:bg-primary/5 transition-all flex items-center justify-between"
                >
                  {link.name}
                  <span className="material-symbols-outlined text-sm opacity-20">chevron_right</span>
                </Link>
              ))}
              <div className="h-px bg-on-surface-variant/10 my-4" />
              <button 
                onClick={() => {
                  setIsHistoryOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 p-3 text-on-surface font-bold hover:text-primary transition-all"
              >
                <span className="material-symbols-outlined">history</span>
                Recent Generations
              </button>
              <a 
                href="https://github.com/intelli4code" 
                target="_blank" 
                className="mt-4 bg-primary text-slate-900 dark:text-sky-950 p-4 rounded-2xl flex items-center justify-center gap-3 font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20"
              >
                <span className="material-symbols-outlined">code</span>
                API Documentation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
