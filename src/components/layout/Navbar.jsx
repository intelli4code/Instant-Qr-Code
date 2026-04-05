import { QrCode } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full absolute top-0 z-50 py-4">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <QrCode className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold text-white tracking-tight">Instant QR</span>
        </div>
        <div>
          <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Support
          </button>
        </div>
      </div>
    </nav>
  );
}
