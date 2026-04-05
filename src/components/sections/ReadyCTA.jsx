import { motion } from "framer-motion";

export default function ReadyCTA() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Dynamic background gradient for impact */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card-elevated p-12 md:p-20 rounded-[2rem] border border-primary/20 shadow-2xl overflow-hidden relative"
        >
          {/* Internal glowing elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 dark:bg-primary/20 blur-2xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 dark:bg-primary/20 blur-2xl rounded-full" />
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-on-surface mb-8 tracking-tighter text-glow">Ready to Generate Your <span className="italic text-primary">Instant QR</span>?</h2>
          <p className="text-on-surface-variant text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
            Join thousands of users creating professional, secure, and high-resolution QR codes in seconds. No account required.
          </p>

          <button 
            onClick={handleScrollToTop}
            className="group relative px-10 py-5 bg-primary text-sky-950 dark:text-sky-950 font-black text-lg rounded-2xl shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all outline-none focus:ring-4 focus:ring-primary/20"
          >
            <span className="relative z-10 flex items-center gap-3">
              Get Started Now
              <span className="material-symbols-outlined font-black group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl" />
          </button>
          
          <p className="mt-8 text-on-surface-variant/60 text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">lock</span>
            Secure & Client-Side
          </p>
        </motion.div>
      </div>
    </section>
  );
}
