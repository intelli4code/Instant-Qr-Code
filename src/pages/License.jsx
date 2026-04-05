import { motion } from "framer-motion";

export default function License() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-background text-on-surface">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-4xl mx-auto glass-card p-10 rounded-2xl border border-sky-400/10"
      >
        <h1 className="text-4xl font-extrabold mb-8 text-white text-glow">License Agreement</h1>
        
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          <section className="bg-sky-400/5 p-6 rounded-xl border border-sky-400/10">
            <h2 className="text-xl font-bold text-sky-300 mb-2">QR Code Usage Rights</h2>
            <p className="text-white font-medium">All QR codes generated through Instant QR are 100% royalty-free for both personal and commercial use.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Permitted Uses</h2>
            <p>You are free to use generated QR codes for branding, product packaging, digital marketing, signage, and more. Our platform imposes no license fees or scanning limits.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. QR Code Trademark</h2>
            <p>The name "QR Code" is an international standard and a registered trademark of <span className="text-white font-bold">DENSO WAVE INCORPORATED</span>. Use of the standard itself is free and open to everyone.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Software License</h2>
            <p>The Instant QR platform software is licensed under the MIT License. You may modify and redistribute it, provided the original copyright notice is maintained.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. No Warranties</h2>
            <p>We do not guarantee the readability of generated QR codes on all scanners, nor are we responsible for the correct operation of your codes after export.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
