import { Type, Cog, Download } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Type className="w-8 h-8 text-blue-500" />,
      title: "1. Enter Content",
      desc: "Type your URL, text, or WiFi details into our left-hand pane."
    },
    {
      icon: <Cog className="w-8 h-8 text-indigo-500" />,
      title: "2. Customize Design",
      desc: "Select colors, tweak patterns, and wrap it in a gorgeous frame."
    },
    {
      icon: <Download className="w-8 h-8 text-emerald-500" />,
      title: "3. Download Instantly",
      desc: "Wait 2 seconds and your crisp, high-res QR code is ready to save."
    }
  ];

  return (
    <section className="w-full bg-white py-20 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
