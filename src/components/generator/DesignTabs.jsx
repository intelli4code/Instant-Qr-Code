export default function DesignTabs({ config, setConfig }) {
  const handleDesignChange = (field, value) => {
    setConfig({
      ...config,
      design: {
        ...config.design,
        [field]: value
      }
    });
  };

  const fgPresets = ["#000000", "#ffffff", "#7dd3fc", "#c8a0f0", "#ff6b6b"];
  const bgPresets = ["#ffffff", "#f8fafc", "#e2e8f0", "#0a0e1a", "#7dd3fc"];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 pr-4 h-[550px] overflow-y-auto custom-scrollbar">
      
      {/* Colors Section */}
      <div className="space-y-10">
        
        {/* Foreground Color */}
        <div>
          <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] mb-6">
            QR Color (Foreground)
          </label>
          <div className="flex flex-wrap gap-4">
            {fgPresets.map(color => (
              <button
                key={color}
                onClick={() => handleDesignChange("fgColor", color)}
                className={`w-10 h-10 rounded-2xl border-[3px] transition-all duration-300 ${
                  config.design.fgColor === color 
                    ? "border-primary scale-110 shadow-lg shadow-primary/30" 
                    : "border-on-surface-variant/10 hover:border-on-surface-variant/30"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
            <div className="relative group">
              <input 
                type="color" 
                value={config.design.fgColor} 
                onChange={(e) => handleDesignChange("fgColor", e.target.value)}
                className="w-10 h-10 rounded-2xl cursor-pointer bg-surface border-[3px] border-on-surface-variant/10 p-0 overflow-hidden shadow-sm hover:border-on-surface-variant/30 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Background Color */}
        <div>
          <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] mb-6">
            Background Color
          </label>
          <div className="flex flex-wrap gap-4">
            {bgPresets.map(color => (
              <button
                key={color}
                onClick={() => handleDesignChange("bgColor", color)}
                className={`w-10 h-10 rounded-2xl border-[3px] transition-all duration-300 ${
                  config.design.bgColor === color 
                    ? "border-primary scale-110 shadow-lg shadow-primary/30" 
                    : "border-on-surface-variant/10 hover:border-on-surface-variant/30"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
            <div className="relative group">
              <input 
                type="color" 
                value={config.design.bgColor} 
                onChange={(e) => handleDesignChange("bgColor", e.target.value)}
                className="w-10 h-10 rounded-2xl cursor-pointer bg-surface border-[3px] border-on-surface-variant/10 p-0 overflow-hidden shadow-sm hover:border-on-surface-variant/30 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Pattern / Style */}
        <div>
          <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] mb-6">
            Corner Style
          </label>
          <div className="flex gap-4">
            {["squares", "dots", "rounded"].map((pattern) => (
              <button
                key={pattern}
                onClick={() => handleDesignChange("pattern", pattern)}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${
                  config.design.pattern === pattern 
                    ? "border-primary bg-primary text-slate-900 dark:text-sky-950 shadow-lg shadow-primary/20" 
                    : "border-on-surface-variant/10 text-on-surface-variant hover:border-on-surface-variant/30 hover:bg-surface"
                }`}
              >
                <div className={`w-6 h-6 border-[3px] border-current transition-all ${
                  pattern === 'squares' ? 'rounded-none' : pattern === 'dots' ? 'rounded-full' : 'rounded-lg'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Logo Integration */}
        <div className="pt-8 border-t border-on-surface-variant/10">
          <label className="block text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] mb-6">
            Center Logo (PNG/SVG)
          </label>
          
          <div className="space-y-6">
            {!config.design.logo ? (
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-primary/20 rounded-3xl cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all group overflow-hidden bg-surface/20 backdrop-blur-sm shadow-inner">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <span className="material-symbols-outlined text-primary text-4xl mb-3 group-hover:scale-110 transition-transform">add_photo_alternate</span>
                  <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest">Drop logo here or click</p>
                </div>
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/png, image/jpeg, image/svg+xml"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => handleDesignChange("logo", reader.result);
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>
            ) : (
              <div className="flex items-center gap-6 p-4 bg-surface/40 rounded-3xl border border-primary/20 shadow-glass-md animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center p-2 shadow-sm border border-on-surface-variant/10 group relative overflow-hidden">
                   <img src={config.design.logo} alt="QR Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[10px] text-on-surface font-black uppercase tracking-widest">Logo Size</p>
                    <span className="text-[10px] text-primary font-black">{(config.design.logoSize * 100).toFixed(0)}%</span>
                  </div>
                  <input 
                    type="range"
                    min="0.1"
                    max="0.4"
                    step="0.05"
                    value={config.design.logoSize}
                    onChange={(e) => handleDesignChange("logoSize", parseFloat(e.target.value))}
                    className="w-full h-2 bg-on-surface-variant/20 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
                <button 
                  onClick={() => handleDesignChange("logo", null)}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined text-xl">delete</span>
                </button>
              </div>
            )}
          </div>
        </div>

      </div>

      <div className="pt-8 border-t border-on-surface-variant/10">
        <p className="text-[10px] text-on-surface-variant/60 uppercase tracking-[0.1em] font-bold leading-relaxed italic">
          Tip: Contrast is key. Use a dark foreground with a light background for maximum reliability.
        </p>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(125, 211, 252, 0.2);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
