import { motion } from "framer-motion";

export default function InfoGrid() {
  const infoItems = [
    {
      title: "Static QR Codes",
      desc: "Instant generation, works forever, and no scanning limits. Best for website URLs and contact cards.",
      icon: "task_alt",
      color: "bg-green-400/20 text-green-400"
    },
    {
      title: "Zero Tracking",
      desc: "We don't log your data or the content of your QR codes. Your scans are truly private and secure.",
      icon: "security_update_good",
      color: "bg-blue-400/20 text-blue-400"
    },
    {
      title: "High Resolution",
      desc: "Download in 300dpi PNG or professional vector SVG for printing on large billboards or tiny labels.",
      icon: "high_quality",
      color: "bg-purple-400/20 text-purple-400"
    },
    {
      title: "Custom Patterns",
      desc: "Customize dots, corners, and colors to match your brand identity without any subscription fees.",
      icon: "palette",
      color: "bg-orange-400/20 text-orange-400"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {infoItems.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="glass-card-elevated p-8 rounded-3xl border border-on-surface-variant/10 hover:border-primary/50 transition-all cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-on-surface-variant/10 bg-surface group-hover:border-primary/50 transition-all duration-500 shadow-sm">
                  <span className="material-symbols-outlined text-3xl text-on-surface group-hover:text-primary transition-colors font-light">{item.icon}</span>
                </div>
                <h3 className="text-xl font-black text-on-surface mb-3 tracking-tighter">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface text-glow mb-6 tracking-tighter">Designed for Professionals</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8 border-l-4 border-primary pl-6 font-medium">
              Instant QR isn't just another generator. We built it for designers, developers, and small business owners who need <span className="text-primary font-black italic">fast, secure, and high-quality results.</span>
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-on-surface font-bold">
                <span className="material-symbols-outlined text-primary font-black">verified</span>
                <span>Fully compliant with ISO/IEC 18004 standards</span>
              </div>
              <div className="flex items-center gap-4 text-on-surface font-bold">
                <span className="material-symbols-outlined text-primary font-black">verified</span>
                <span>Optimized for 99.9% scanner compatibility</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
