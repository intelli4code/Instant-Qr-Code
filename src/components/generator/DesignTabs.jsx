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
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
      
      {/* Colors Section */}
      <div className="space-y-8">
        
        {/* Foreground Color */}
        <div>
          <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">
            QR Color (Foreground)
          </label>
          <div className="flex flex-wrap gap-3">
            {fgPresets.map(color => (
              <button
                key={color}
                onClick={() => handleDesignChange("fgColor", color)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  config.design.fgColor === color ? "border-primary scale-110 shadow-lg shadow-primary/20" : "border-outline/20 hover:border-outline/50"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
            <div className="relative group">
              <input 
                type="color" 
                value={config.design.fgColor} 
                onChange={(e) => handleDesignChange("fgColor", e.target.value)}
                className="w-8 h-8 rounded-full cursor-pointer bg-surface-container border-2 border-outline/20 p-0 overflow-hidden"
              />
            </div>
          </div>
        </div>

        {/* Background Color */}
        <div>
          <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">
            Background Color
          </label>
          <div className="flex flex-wrap gap-3">
            {bgPresets.map(color => (
              <button
                key={color}
                onClick={() => handleDesignChange("bgColor", color)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  config.design.bgColor === color ? "border-primary scale-110 shadow-lg shadow-primary/20" : "border-outline/20 hover:border-outline/50"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
            <div className="relative group">
              <input 
                type="color" 
                value={config.design.bgColor} 
                onChange={(e) => handleDesignChange("bgColor", e.target.value)}
                className="w-8 h-8 rounded-full cursor-pointer bg-surface-container border-2 border-outline/20 p-0 overflow-hidden"
              />
            </div>
          </div>
        </div>

        {/* Pattern / Style */}
        <div>
          <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">
            Corner Style
          </label>
          <div className="flex gap-3">
            {["squares", "dots", "rounded"].map((pattern) => (
              <button
                key={pattern}
                onClick={() => handleDesignChange("pattern", pattern)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center border-2 transition-all ${
                  config.design.pattern === pattern 
                    ? "border-primary bg-primary/10 text-primary" 
                    : "border-outline/20 text-on-surface-variant hover:border-outline/50 hover:bg-surface-container"
                }`}
              >
                <div className={`w-5 h-5 border-2 border-current ${
                  pattern === 'squares' ? 'rounded-none' : pattern === 'dots' ? 'rounded-full' : 'rounded-md'
                }`} />
              </button>
            ))}
          </div>
        </div>

      </div>

      <div className="pt-4 border-t border-sky-400/5">
        <p className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest font-medium">
          The background color will be visible in the downloaded high-res PNG/SVG.
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
