import { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import { Download, Loader2 } from "lucide-react";

export default function PreviewPanel({ debouncedConfig, isGenerating }) {
  const ref = useRef(null);
  const qrCode = useRef(null);

  // Helper to compile the string data based on category
  const getDataString = (config) => {
    if (config.category === "url") return config.content.url || "https://example.com";
    if (config.category === "text") return config.content.text || "Hello World";
    if (config.category === "wifi") {
      const { ssid, password, encryption } = config.content.wifi;
      if (!ssid) return "WIFI:S:Example;T:nopass;P:;;";
      return `WIFI:S:${ssid};T:${encryption};P:${password};;`;
    }
    return "https://example.com";
  };

  useEffect(() => {
    // Determine the data string
    const data = getDataString(debouncedConfig);

    // Styling configuration
    const options = {
      width: 300,
      height: 300,
      type: "svg",
      data: data,
      dotsOptions: {
        color: debouncedConfig.design.fgColor,
        type: debouncedConfig.design.pattern, // squares, dots, rounded
      },
      backgroundOptions: {
        color: debouncedConfig.design.bgColor,
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 10
      }
    };

    if (!qrCode.current) {
      // First time initialization
      qrCode.current = new QRCodeStyling(options);
      if (ref.current) {
        qrCode.current.append(ref.current);
      }
    } else {
      // Update existing instance
      qrCode.current.update(options);
    }
  }, [debouncedConfig]);

  const handleDownload = (ext) => {
    if (!qrCode.current) return;
    qrCode.current.download({ name: "instant-qr", extension: ext });
  };

  return (
    <div className="sticky top-6 flex flex-col items-center p-2">
      <div className="relative w-full aspect-square max-w-[320px] bg-slate-50 border border-slate-200 rounded-3xl shadow-inner flex items-center justify-center p-8 mb-6">
        
        {/* Loading Overlay */}
        {isGenerating && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center z-10 transition-all duration-300">
            <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-3" />
            <span className="text-sm font-semibold text-slate-600 tracking-wide">Generating...</span>
          </div>
        )}

        {/* The DOM element where qr-code-styling appends the canvas/svg */}
        <div ref={ref} className="w-full h-full flex items-center justify-center pointer-events-none" />
        
      </div>

      <div className="flex gap-3 w-full max-w-[320px]">
        <button 
          onClick={() => handleDownload("png")}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all active:scale-95"
        >
          <Download className="w-5 h-5" /> PNG
        </button>
        <button 
          onClick={() => handleDownload("svg")}
          className="flex-1 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2 transition-all active:scale-95"
        >
          <Download className="w-5 h-5" /> SVG
        </button>
      </div>
    </div>
  );
}
