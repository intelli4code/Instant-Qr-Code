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

  const presetColors = ["#ffffff", "#7dd3fc", "#c8a0f0", "#ff6b6b", "#000000"];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* Colors Section */}
      <div>
        <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">
          QR Code Styling
        </label>
        
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-xs font-semibold text-slate-400 mb-3">Color Accent</h4>
            <div className="flex flex-wrap gap-3">
              {presetColors.map(color => (
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
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-[8px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Custom</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-400 mb-3">Corner Shape</h4>
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
      </div>

      <div className="pt-4 border-t border-sky-400/5">
        <p className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest font-medium">
          Note: Static QR codes support real-time preview updates.
        </p>
      </div>
    </div>
  );
}
