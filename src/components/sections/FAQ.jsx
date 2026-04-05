import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    { q: "Is Instant QR truly free?", a: "Yes! All features, including high-resolution SVG exports and custom patterns, are 100% royalty-free for personal and commercial use without any subscription fees." },
    { q: "Do my QR codes ever expire?", a: "No. Since we generate static QR codes, they contain the actual data (URL, Text, etc.) and will work as long as the content exists. There are no scan limits or expiration dates." },
    { q: "Is my data stored on your servers?", a: "Never. Our 'Privacy-First' architecture means all generation is done entirely within your browser. We don't track your content or scanning behavior." },
    { q: "Can I use the generated QR codes for print?", a: "Absolutely. Our 300dpi PNG and professional SVG vector formats are specifically designed for high-quality printing on anything from business cards to large-scale billboards." },
    { q: "How do I add my logo to the QR code?", a: "Logo support is currently in development. For now, you can customize the colors, corner styles, and dot patterns to match your brand identity perfectly." }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-4 text-glow">Frequently Asked Questions</h2>
          <p className="text-on-surface-variant font-medium">Everything you need to know about our professional QR toolkit.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`glass-card rounded-2xl border transition-all ${isOpen ? 'border-primary/50 shadow-lg shadow-primary/10' : 'border-on-surface-variant/10 hover:border-primary/20'}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-primary' : 'text-on-surface'}`}>{faq.q}</span>
        <span className={`material-symbols-outlined transition-transform duration-300 text-primary ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-on-surface-variant text-sm leading-relaxed border-t border-on-surface-variant/10 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
