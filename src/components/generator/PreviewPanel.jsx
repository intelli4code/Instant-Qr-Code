import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

export default function PreviewPanel({ debouncedConfig, isGenerating }) {
  const ref = useRef(null);
  const qrCode = useRef(null);

  const getDataString = (config) => {
    const { category, content } = config;
    
    if (category === "url") return content.url || "https://example.com";
    if (category === "text") return content.text || "Hello World";
    
    if (category === "wifi") {
      const { ssid, password, encryption } = content.wifi;
      if (!ssid) return "WIFI:S:Example;T:nopass;P:;;";
      return `WIFI:S:${ssid};T:${encryption};P:${password};;`;
    }

    if (category === "vcard") {
      const v = content.vcard;
      // Filter out empty lines to keep the QR code less dense
      const vcardLines = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        v.firstName || v.lastName ? `FN:${v.firstName} ${v.lastName}`.trim() : "",
        v.firstName || v.lastName ? `N:${v.lastName};${v.firstName};;;` : "",
        v.company ? `ORG:${v.company}` : "",
        v.title ? `TITLE:${v.title}` : "",
        v.phone ? `TEL;TYPE=CELL:${v.phone}` : "",
        v.workPhone ? `TEL;TYPE=WORK:${v.workPhone}` : "",
        v.fax ? `TEL;TYPE=FAX:${v.fax}` : "",
        v.email ? `EMAIL:${v.email}` : "",
        v.website ? `URL:${v.website}` : "",
        v.street || v.city || v.state || v.zip || v.country 
          ? `ADR;TYPE=WORK:;;${v.street};${v.city};${v.state};${v.zip};${v.country}` 
          : "",
        "END:VCARD"
      ].filter(line => line !== "");
      
      return vcardLines.join("\n");
    }

    return "https://example.com";
  };

  useEffect(() => {
    const data = getDataString(debouncedConfig);
    const options = {
      width: 400, // Higher resolution for cleaner downloads
      height: 400,
      type: "svg",
      data: data,
      margin: 20, // Centering and background visibility
      dotsOptions: {
        color: debouncedConfig.design.fgColor,
        type: debouncedConfig.design.pattern === "squares" ? "square" : debouncedConfig.design.pattern === "dots" ? "dots" : "rounded",
      },
      backgroundOptions: {
        color: debouncedConfig.design.bgColor,
      },
      image: debouncedConfig.design.logo,
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: debouncedConfig.design.logoSize,
        margin: 5,
      },
      cornersSquareOptions: {
        type: debouncedConfig.design.pattern === "squares" ? "square" : debouncedConfig.design.pattern === "dots" ? "dot" : "extra-rounded",
        color: debouncedConfig.design.fgColor,
      },
      cornersDotOptions: {
        type: debouncedConfig.design.pattern === "squares" ? "square" : debouncedConfig.design.pattern === "dots" ? "dot" : "extra-rounded",
        color: debouncedConfig.design.fgColor,
      }
    };

    if (!qrCode.current) {
      qrCode.current = new QRCodeStyling(options);
      if (ref.current) {
        qrCode.current.append(ref.current);
      }
    } else {
      qrCode.current.update(options);
    }
  }, [debouncedConfig]);

  const handleDownload = (ext) => {
    if (!qrCode.current) return;
    qrCode.current.download({ name: "instant-qr", extension: ext });
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative group mb-8">
        <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-primary/30" />
        
        {/* Preview Container */}
        <div className="relative bg-white p-2 rounded-2xl shadow-inner border border-white/5 transition-all group-hover:scale-[1.02] overflow-hidden">
          <div ref={ref} className="w-48 h-48 flex items-center justify-center preview-qr-wrapper" />
          
          {isGenerating && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-2xl transition-all duration-300 z-10">
              <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin shadow-lg shadow-primary/10"></div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full max-w-[280px]">
        <button
          onClick={() => handleDownload("png")}
          className="w-full bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 active:scale-95 group focus:ring-4 focus:ring-blue-500/20"
        >
          <span className="material-symbols-outlined text-xl group-hover:animate-bounce">download</span>
          Download PNG
        </button>
        <button
          onClick={() => handleDownload("svg")}
          className="w-full bg-slate-900 border border-sky-400/10 hover:bg-slate-950 text-slate-300 font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95 text-xs uppercase tracking-widest"
        >
          Get SVG Vector
        </button>
      </div>
      
      <p className="mt-4 text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant/40 text-center animate-pulse">
        Ready for high-res print
      </p>

      <style>{`
        .preview-qr-wrapper canvas, .preview-qr-wrapper svg {
          width: 100% !important;
          height: 100% !important;
          border-radius: 0.75rem;
        }
      `}</style>
    </div>
  );
}
