import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-background text-on-surface">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl mx-auto glass-card-elevated p-10 rounded-2xl border border-sky-400/10 shadow-2xl"
      >
        <h1 className="text-4xl font-extrabold mb-8 text-white text-glow">Privacy Policy</h1>
        
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          <section className="bg-primary/5 p-6 rounded-xl border border-primary/10">
            <h2 className="text-xl font-bold text-primary mb-2">Our Core Privacy Value</h2>
            <p className="text-on-surface">Instant QR is built on a "Privacy-First" architecture. Your QR codes are generated entirely within your browser (client-side). No data ever leaves your device.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>We do not collect, store, or transmit any personal information or the content you enter into the QR generator. Everything is processed locally.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Cookies & Tracking</h2>
            <p>We do not use tracking cookies, analytics scripts, or third-party behavioral trackers. Your session is private.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Third-Party Links</h2>
            <p>Generated QR codes link directly to the target URL you provide. We are not responsible for the content or privacy practices of those external sites.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Local Storage</h2>
            <p>If you save your configuration, it is stored in your browser's local storage and is never uploaded to our servers.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
