import { motion } from "framer-motion";

export default function HeroGenerator({ children }) {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#0a0e1a]">
      
      {/* Background radial glows - Fixed for responsive centering */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-sky-400/30"></span>
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">Professional QR toolkit</span>
            <span className="h-px w-8 bg-sky-400/30"></span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.9] text-glow">
            Generate <span className="text-primary italic italic">Instant</span> <br className="hidden md:block" /> QR Codes
          </h1>
          <p className="text-on-surface-variant text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed px-4">
            Zero limits. High resolution. <span className="text-white">100% Privacy-First.</span> 
            Create professional codes for URLs, WiFi, and vCards in seconds.
          </p>
        </motion.div>

        {/* Generator Widget Insertion */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full flex justify-center"
        >
          {children}
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-sky-400/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
        </div>
      </motion.div>

    </section>
  );
}
