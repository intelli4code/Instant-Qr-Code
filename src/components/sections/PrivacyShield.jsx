import { motion } from "framer-motion";

export default function PrivacyShield() {
  return (
    <section className="py-24 bg-surface-container relative overflow-hidden">
      {/* Background glow logic to match Hero */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-3xl rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary text-4xl">shield_locked</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white text-glow">Military-Grade Privacy</h2>
          </div>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
            We believe your data belongs to you. Unlike other QR generators that send your information to their servers for tracking, <span className="text-white font-bold italic">Instant QR generates everything directly in your browser.</span>
          </p>
          
          <ul className="space-y-4">
            {[
              "Zero Server-side Storage",
              "No Analytics Tracking",
              "100% Client-side Processing",
              "Open-Source Transparency"
            ].map((point, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-white font-bold"
              >
                <span className="material-symbols-outlined text-primary">done_all</span>
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative group">
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute inset-0 bg-primary rounded-full blur-3xl"
            />
            <div className="relative glass-card-elevated w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center border border-primary/20">
              <span className="material-symbols-outlined text-primary text-8xl md:text-9xl animate-pulse">lock_person</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
