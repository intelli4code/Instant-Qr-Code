import { useState } from "react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Are the QR codes permanent?",
      a: "Yes, all codes generated are static and will never expire. They link directly to your content without any middleman trackers."
    },
    {
      q: "Do you track who scans the codes?",
      a: "No. Your privacy is our priority. Since we generate static QR codes, we have no way to track or log who scans them."
    },
    {
      q: "Can I use these for commercial purposes?",
      a: "Absolutely! The QR codes are royalty-free and can be used on business cards, advertisements, or product packaging."
    },
    {
      q: "Is there a limit to how many I can make?",
      a: "Zero limits. You can generate as many QR codes as you need for free, instantly."
    }
  ];

  return (
    <section id="faq" className="bg-slate-50 py-32 text-slate-900 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-xl border transition-all duration-200 ${
                openIdx === idx ? "border-sky-300 shadow-lg shadow-sky-400/10" : "border-slate-200 hover:border-sky-200 shadow-sm"
              }`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-slate-800">{faq.q}</span>
                <span className={`material-symbols-outlined text-slate-400 transition-transform ${openIdx === idx ? "rotate-180" : ""}`}>
                  expand_more
                </span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-slate-500 leading-relaxed max-w-[90%]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
