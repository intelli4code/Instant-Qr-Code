import { motion } from "framer-motion";

export default function UseCases() {
  const cases = [
    { 
      title: "Restaurants", 
      desc: "Contactless menus that load instantly for your diners.", 
      icon: "restaurant",
      color: "bg-orange-500/10 text-orange-400"
    },
    { 
      title: "Real Estate", 
      desc: "Virtual tours on every 'For Sale' sign in the neighborhood.", 
      icon: "home_work",
      color: "bg-blue-500/10 text-blue-400"
    },
    { 
      title: "Retail", 
      desc: "Exclusive coupon codes directly on product packaging.", 
      icon: "shopping_bag",
      color: "bg-green-500/10 text-green-400"
    },
    { 
      title: "Events", 
      desc: "Digital ticketing and easy guest check-ins at the door.", 
      icon: "confirmation_number",
      color: "bg-purple-500/10 text-purple-400"
    },
    { 
      title: "Healthcare", 
      desc: "No-touch patient registration forms for modern clinics.", 
      icon: "medical_services",
      color: "bg-red-500/10 text-red-400"
    },
    { 
      title: "Education", 
      desc: "Quick access to lesson plans and homework portals for students.", 
      icon: "school",
      color: "bg-yellow-500/10 text-yellow-400"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-on-surface mb-4 text-glow">Limitless Use Cases</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto italic">How will you use Instant QR to expand your digital footprint?</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cases.map((useCase, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card-elevated p-8 rounded-3xl border border-on-surface-variant/10 group transition-all hover:bg-primary/5"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-on-surface-variant/10 bg-surface group-hover:border-primary/50 transition-all duration-500 shadow-sm">
                <span className="material-symbols-outlined text-4xl text-on-surface group-hover:text-primary transition-colors font-light">{useCase.icon}</span>
              </div>
              <h3 className="text-2xl font-black text-on-surface mb-4 tracking-tighter">{useCase.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed font-medium">{useCase.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
