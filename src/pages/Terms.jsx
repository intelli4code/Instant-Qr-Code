import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-background text-on-surface">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto glass-card p-10 rounded-2xl border border-sky-400/10"
      >
        <h1 className="text-4xl font-extrabold mb-8 text-white text-glow">Terms of Service</h1>
        
        <div className="space-y-6 text-on-surface-variant leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using Instant QR, you agree to be bound by these Terms of Service. If you do not agree, please do not use the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Description of Service</h2>
            <p>Instant QR provides a tool for generating static QR codes. All generation is done client-side. We do not store or track your data.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. User Conduct</h2>
            <p>You agree not to use generated QR codes for any illegal or harmful purposes, including but not limited to phishing, malware distribution, or deceptive practices.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <p>The "QR Code" trademark is registered to DENSO WAVE INCORPORATED. Our tool is a generator for this standard.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p>Instant QR is provided "as is" without any warranties. We are not liable for any damages arising from the use or inability to use the service.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
