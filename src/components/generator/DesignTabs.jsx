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

  return (
    <div className="flex flex-col flex-1 border-t border-slate-200 pt-6 mt-2">
      <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">2. Beautiful Design</h2>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Colors */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">QR Code Color</label>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input 
                type="color" 
                value={config.design.fgColor} 
                onChange={(e) => handleDesignChange("fgColor", e.target.value)}
                className="w-10 h-10 rounded-lg cursor-pointer border-0 p-0"
              />
              <div 
                className="absolute inset-0 rounded-lg border border-slate-200 pointer-events-none" 
                style={{ backgroundColor: config.design.fgColor }} 
              />
            </div>
            <span className="text-sm text-slate-500 uppercase tracking-widest">{config.design.fgColor}</span>
          </div>
        </div>

        {/* Pattern Style */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">Pattern Style</label>
          <div className="grid grid-cols-3 gap-2">
            {["squares", "dots", "rounded"].map(type => (
              <button
                key={type}
                onClick={() => handleDesignChange("pattern", type)}
                className={`py-2 px-1 border rounded-lg text-xs font-semibold capitalize transition-colors ${
                  config.design.pattern === type 
                    ? "border-blue-500 bg-blue-50 text-blue-600" 
                    : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
