export default function ContentTabs({ config, setConfig }) {
  const handleCategoryChange = (cat) => {
    setConfig({ ...config, category: cat });
  };

  const handleContentChange = (field, value) => {
    setConfig({
      ...config,
      content: {
        ...config.content,
        ...(config.category === "wifi" 
            ? { wifi: { ...config.content.wifi, [field]: value } }
            : { [config.category]: value })
      }
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
      
      {/* Category Icons Sub-switcher */}
      <div className="flex gap-3 mb-6">
        {["url", "text", "wifi"].map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
              config.category === cat 
                ? "bg-sky-400 text-sky-950 shadow-lg shadow-sky-400/20" 
                : "bg-surface-container text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-on-surface-variant mb-3 uppercase tracking-widest text-[10px]">
          {config.category === "url" ? "Target URL" : config.category === "text" ? "Plain Text" : "SSID Name"}
        </label>
        
        {config.category === "url" && (
          <input 
            type="url"
            placeholder="https://example.com"
            value={config.content.url}
            onChange={(e) => handleContentChange("url", e.target.value)}
            className="w-full bg-surface-container border border-outline/20 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-on-surface placeholder-slate-600 font-medium font-inter"
          />
        )}

        {config.category === "text" && (
          <textarea 
            placeholder="Enter your message here..."
            value={config.content.text}
            onChange={(e) => handleContentChange("text", e.target.value)}
            rows={4}
            className="w-full bg-surface-container border border-outline/20 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-on-surface placeholder-slate-600 font-medium font-inter resize-none"
          />
        )}

        {config.category === "wifi" && (
          <div className="space-y-4">
            <input 
              type="text"
              placeholder="My WiFi Network"
              value={config.content.wifi.ssid}
              onChange={(e) => handleContentChange("ssid", e.target.value)}
              className="w-full bg-surface-container border border-outline/20 rounded-xl px-4 py-4 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-on-surface placeholder-slate-600 font-medium font-inter"
            />
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text"
                placeholder="Password"
                value={config.content.wifi.password}
                onChange={(e) => handleContentChange("password", e.target.value)}
                className="w-full bg-surface-container border border-outline/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-on-surface placeholder-slate-600 font-medium font-inter"
              />
              <select 
                value={config.content.wifi.encryption}
                onChange={(e) => handleContentChange("encryption", e.target.value)}
                className="w-full bg-surface-container border border-outline/20 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-on-surface font-medium font-inter"
              >
                <option value="WPA">WPA/WPA2</option>
                <option value="WEP">WEP</option>
                <option value="nopass">None</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
