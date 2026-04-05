import { Link, MapPin, Mail, Phone, Wifi, FileText } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    { icon: <Link />, title: "URLs & Links" },
    { icon: <FileText />, title: "Plain Text" },
    { icon: <Mail />, title: "Emails" },
    { icon: <Phone />, title: "Phone Nums" },
    { icon: <MapPin />, title: "Locations" },
    { icon: <Wifi />, title: "WiFi Configs" },
  ];

  return (
    <section className="w-full bg-slate-50 py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">Supported QR Types</h2>
        <p className="text-center text-slate-600 mb-12">From a simple URL to complex WiFi setups, we handle it all.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 hover:-translate-y-1 hover:shadow-md transition-all">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                {item.icon}
              </div>
              <span className="font-semibold text-slate-800">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
