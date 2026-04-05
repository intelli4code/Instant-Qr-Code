import { motion } from "framer-motion";

export default function HeroGenerator({ children }) {
  return (
    <section className="relative pt-24 md:pt-32 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background transition-colors duration-500">
      
      {/* Background radial glows - Fixed for responsive centering */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 dark:bg-primary/5 blur-[80px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-500/5 blur-[80px] rounded-full" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Main Visual Logo */}
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-8"
          >
            <span className="material-symbols-outlined text-primary text-7xl md:text-8xl drop-shadow-[0_0_30px_rgba(14,165,233,0.4)]">qr_code_2</span>
          </motion.div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary/30"></span>
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-sm">Professional QR toolkit</span>
            <span className="h-px w-8 bg-primary/30"></span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter text-on-surface mb-6 leading-[0.9] text-glow transition-all">
            Generate <span className="text-primary italic">Instant</span> <br className="hidden md:block" /> QR Codes
          </h1>
          <p className="text-on-surface-variant text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed px-4">
            Zero limits. High resolution. <span className="text-on-surface font-black">100% Privacy-First.</span> 
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

    </section>
  );
}
