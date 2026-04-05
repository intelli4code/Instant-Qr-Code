export default function HowItWorks() {
  const steps = [
    {
      icon: "edit_note",
      title: "1. Enter Content",
      desc: "Paste your link, Wi-Fi password, or business details into the input field.",
      color: "text-sky-600",
      bg: "bg-sky-50"
    },
    {
      icon: "timer",
      title: "2. Wait 2 Seconds",
      desc: "Our engine generates your unique, secure QR code in real-time as you type.",
      color: "text-sky-600",
      bg: "bg-sky-50"
    },
    {
      icon: "download_done",
      title: "3. Download",
      desc: "Instantly save your high-quality file for print or digital use with one click.",
      color: "text-sky-600",
      bg: "bg-sky-50"
    }
  ];

  return (
    <section id="how-it-works" className="bg-white py-32 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Simple as 1-2-3</h2>
          <p className="text-slate-500 font-medium">The fastest way to generate secure codes without the fluff.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center group">
              <div className={`w-20 h-20 ${step.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-sky-100`}>
                <span className={`material-symbols-outlined text-3xl ${step.color}`}>{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
