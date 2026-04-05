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
            : config.category === "vcard"
            ? { vcard: { ...config.content.vcard, [field]: value } }
            : { [config.category]: value })
      }
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500 h-[550px] overflow-y-auto custom-scrollbar pr-4">
      
      {/* Category Icons Sub-switcher */}
      <div className="flex flex-wrap gap-4 mb-10">
        {["url", "text", "wifi", "vcard"].map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all active:scale-95 ${
              config.category === cat 
                ? "bg-primary text-slate-900 dark:text-sky-950 shadow-lg shadow-primary/20" 
                : "bg-surface/40 text-on-surface-variant hover:text-primary border border-on-surface-variant/10 hover:border-primary/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col justify-start pt-2">
        <label className="block text-sm font-black text-on-surface-variant mb-6 uppercase tracking-[0.2em] text-[10px] opacity-40">
          {config.category === "vcard" ? "Business Card Details" : "Content Information"}
        </label>
        
        <div className="w-full">
          {config.category === "url" && (
            <div className="space-y-8">
              <input 
                type="url"
                placeholder="https://example.com"
                value={config.content.url}
                onChange={(e) => handleContentChange("url", e.target.value)}
                className="w-full bg-surface/40 border border-on-surface-variant/10 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-primary/10 focus:border-primary/50 outline-none transition-all text-on-surface placeholder-on-surface-variant/40 font-bold font-inter shadow-sm"
              />
              {/* Pro Tip */}
              <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-6 flex gap-4 backdrop-blur-sm">
                <span className="material-symbols-outlined text-primary text-xl">lightbulb</span>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  <span className="text-primary font-black uppercase tracking-widest mr-2">Pro Tip:</span> 
                  Shorten long URLs using a service like bit.ly for a simpler, faster-to-scan QR code pattern.
                </p>
              </div>
            </div>
          )}

          {config.category === "text" && (
            <div className="space-y-8">
              <textarea 
                placeholder="Enter your message here..."
                value={config.content.text}
                onChange={(e) => handleContentChange("text", e.target.value)}
                rows={8}
                className="w-full bg-surface/40 border border-on-surface-variant/10 rounded-[2rem] px-6 py-6 focus:ring-4 focus:ring-primary/10 focus:border-primary/50 outline-none transition-all text-on-surface placeholder-on-surface-variant/40 font-bold font-inter resize-none shadow-sm"
              />
              {/* Pro Tip */}
              <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-6 flex gap-4 backdrop-blur-sm">
                <span className="material-symbols-outlined text-primary text-xl">info</span>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  <span className="text-primary font-black uppercase tracking-widest mr-2">Did you know?</span> 
                  Static QR codes can store up to 4,000+ characters, but keeping it under 300 ensures maximum reliability.
                </p>
              </div>
            </div>
          )}

          {config.category === "wifi" && (
            <div className="space-y-8">
              <div className="space-y-4">
                <input 
                  type="text"
                  placeholder="Network Name (SSID)"
                  value={config.content.wifi.ssid}
                  onChange={(e) => handleContentChange("ssid", e.target.value)}
                  className="w-full bg-surface/40 border border-on-surface-variant/10 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-primary/10 focus:border-primary/50 outline-none transition-all text-on-surface placeholder-on-surface-variant/40 font-bold font-inter shadow-sm"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text"
                    placeholder="Password"
                    value={config.content.wifi.password}
                    onChange={(e) => handleContentChange("password", e.target.value)}
                    className="w-full bg-surface/40 border border-on-surface-variant/10 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-primary/10 focus:border-primary/50 outline-none transition-all text-on-surface placeholder-on-surface-variant/40 font-bold font-inter shadow-sm"
                  />
                  <select 
                    value={config.content.wifi.encryption}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="w-full bg-surface/40 border border-on-surface-variant/10 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-primary/10 focus:border-primary/50 outline-none transition-all text-on-surface font-bold font-inter shadow-sm appearance-none cursor-pointer"
                  >
                    <option value="WPA">WPA/WPA2</option>
                    <option value="WEP">WEP</option>
                    <option value="nopass">None</option>
                  </select>
                </div>
              </div>
              {/* Pro Tip */}
              <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-6 flex gap-4 backdrop-blur-sm">
                <span className="material-symbols-outlined text-primary text-xl">wifi_protected_setup</span>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Generate a WiFi QR code for your guest room or office to let users connect instantly without typing long passwords.
                </p>
              </div>
            </div>
          )}

          {config.category === "vcard" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input 
                type="text" placeholder="First Name" value={config.content.vcard.firstName}
                onChange={(e) => handleContentChange("firstName", e.target.value)}
                className="vcard-input"
              />
              <input 
                type="text" placeholder="Last Name" value={config.content.vcard.lastName}
                onChange={(e) => handleContentChange("lastName", e.target.value)}
                className="vcard-input"
              />
              <input 
                type="tel" placeholder="Phone Number" value={config.content.vcard.phone}
                onChange={(e) => handleContentChange("phone", e.target.value)}
                className="vcard-input"
              />
              <input 
                type="email" placeholder="Email Address" value={config.content.vcard.email}
                onChange={(e) => handleContentChange("email", e.target.value)}
                className="vcard-input"
              />
              <input 
                type="text" placeholder="Company" value={config.content.vcard.company}
                onChange={(e) => handleContentChange("company", e.target.value)}
                className="vcard-input"
              />
              <input 
                type="text" placeholder="Job Title" value={config.content.vcard.title}
                onChange={(e) => handleContentChange("title", e.target.value)}
                className="vcard-input"
              />
              <div className="md:col-span-2">
                <input 
                  type="url" placeholder="Website (https://...)" value={config.content.vcard.website}
                  onChange={(e) => handleContentChange("website", e.target.value)}
                  className="vcard-input"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .vcard-input {
          width: 100%;
          background: var(--surface);
          background-opacity: 0.4;
          border: 1px solid var(--glass-border);
          border-radius: 1rem;
          padding: 1.25rem 1.5rem;
          outline: none;
          transition: all 0.3s;
          color: var(--on-surface);
          font-family: Inter, sans-serif;
          font-size: 0.875rem;
          font-weight: 700;
        }
        .vcard-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 15px var(--primary-glow);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--on-surface-variant);
          opacity: 0.1;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
