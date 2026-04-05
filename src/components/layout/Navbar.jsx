import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useHistoryState } from "../../context/HistoryContext";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const { setIsHistoryOpen } = useHistoryState();
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="bg-white/80 dark:bg-slate-950/60 backdrop-blur-xl border-b border-slate-200 dark:border-sky-400/10 shadow-lg dark:shadow-2xl shadow-slate-200/50 dark:shadow-sky-900/20 font-inter antialiased top-0 sticky z-50 px-6 py-4 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="material-symbols-outlined text-primary text-3xl group-hover:rotate-12 transition-transform">qr_code_2</span>
          <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-white hover:text-primary dark:hover:text-glow transition-all">
            Instant <span className="text-primary italic italic tracking-wider">QR</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Features", path: "/#features" },
            { name: "FAQ", path: "/#faq" },
            { name: "Bulk Mode", path: "/bulk" },
            { name: "Privacy", path: "/privacy" },
          ].map((link, idx) => (
            <Link 
              key={idx}
              to={link.path}
              className="text-sm font-semibold transition-all hover:text-primary text-slate-600 dark:text-sky-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-primary/5 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all group"
            title="Toggle Theme"
          >
            <span className="material-symbols-outlined text-xl">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
          </button>

          <button 
            onClick={() => setIsHistoryOpen(true)}
            className="hidden sm:flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-primary/5 group"
          >
            <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">history</span>
            <span className="text-xs font-bold uppercase tracking-widest pt-0.5 whitespace-nowrap">Recent</span>
          </button>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <a 
              href="https://github.com/intelli4code" 
              target="_blank" 
              className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-sky-950 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-sm">code</span>
              API <span className="hidden sm:inline">Docs</span>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
