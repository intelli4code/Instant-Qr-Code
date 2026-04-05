import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Do these QR codes ever expire?",
      a: "No! The static QR codes generated here are permanent and will never expire as long as the content they point to remains active."
    },
    {
      q: "Can I use the generated codes for commercial purposes?",
      a: "Absolutely. Once downloaded, the QR codes are yours to use on flyers, business cards, merchandise, or websites."
    },
    {
      q: "Why is there no 'Generate' button?",
      a: "We built Instant QR with a completely frictionless flow. Just type, pause for 2 seconds, and the code updates automatically."
    }
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
              >
                <span className="font-semibold text-slate-800">{faq.q}</span>
                {openIdx === idx ? <ChevronUp className="text-slate-500" /> : <ChevronDown className="text-slate-500" />}
              </button>
              {openIdx === idx && (
                <div className="p-6 bg-white text-slate-600 border-t border-slate-100">
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
