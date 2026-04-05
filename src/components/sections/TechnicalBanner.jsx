import { motion } from "framer-motion";

export default function TechnicalBanner() {
  const specs = [
    { label: "Export Formats", value: "PNG, SVG, WEBP" },
    { label: "DPI (Max)", value: "300 (Print Ready)" },
    { label: "Correction Level", value: "L (7%), M, Q, H (30%)" },
    { label: "Technology", value: "React + QR-Code-Styling" }
  ];

  return (
    <section className="py-24 bg-surface-container relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0a0e1a] rounded-3xl p-10 md:p-16 border border-sky-400/10 shadow-2xl overflow-hidden relative group">
          
          {/* Animated background glow inside banner */}
          <div className="absolute -bottom-24 -right-12 w-96 h-96 bg-primary/10 blur-[100px] rounded-full group-hover:scale-125 transition-transform duration-700" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
            <div className="lg:col-span-2">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">High-Resolution Vector Graphics</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Designed for Billboard Scale</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
                Our SVG export delivers pure vector paths, meaning you can scale your QR code to the size of a building without losing a single pixel of clarity. <span className="text-white font-semibold">Perfect for professional printing.</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {specs.map((spec, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background/50 p-4 rounded-xl border border-white/5"
                >
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">{spec.label}</p>
                  <p className="text-white font-bold text-sm tracking-tight">{spec.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
