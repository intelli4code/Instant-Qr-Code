import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    { title: "Select Content", desc: "Choose from URL, Text, WiFi or vCard.", icon: "edit_document" },
    { title: "Customize Design", desc: "Change colors, patterns and styling.", icon: "tune" },
    { title: "Download & Print", desc: "Get high-res PNG or SVG instantly.", icon: "cloud_download" }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-surface-container relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 px-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-4 text-glow">How It Works</h2>
            <p className="text-on-surface-variant max-w-sm font-medium">Generate professional-grade QR codes in three simple steps.</p>
          </motion.div>
          <div className="h-px bg-primary/10 flex-1 hidden md:block mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-primary/0 group-hover:bg-primary/5 transition-all duration-500 rounded-3xl -z-10" />
              <div className="flex flex-col items-start gap-6 p-4">
                <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center border border-primary/10 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <span className="material-symbols-outlined text-primary text-3xl font-bold">{step.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-on-surface mb-3 tracking-tight group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
