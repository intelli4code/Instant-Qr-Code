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
    <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
      
      {/* Category Icons Sub-switcher */}
      <div className="flex flex-wrap gap-3 mb-6">
        {["url", "text", "wifi", "vcard"].map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all ${
              config.category === cat 
                ? "bg-sky-400 text-sky-950 shadow-lg shadow-sky-400/20" 
                : "bg-surface-container text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar min-h-[300px] flex flex-col justify-center">
        <label className="block text-sm font-medium text-on-surface-variant mb-3 uppercase tracking-widest text-[10px]">
          {config.category === "vcard" ? "Business Card Details" : "Content Information"}
        </label>
        
        <div className="w-full">
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

          {config.category === "vcard" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <input 
                type="tel" placeholder="Work Phone" value={config.content.vcard.workPhone}
                onChange={(e) => handleContentChange("workPhone", e.target.value)}
                className="vcard-input"
              />
              <input 
                type="tel" placeholder="Fax" value={config.content.vcard.fax}
                onChange={(e) => handleContentChange("fax", e.target.value)}
                className="vcard-input"
              />
              <div className="md:col-span-2">
                <input 
                  type="text" placeholder="Street Address" value={config.content.vcard.street}
                  onChange={(e) => handleContentChange("street", e.target.value)}
                  className="vcard-input"
                />
              </div>
              <input 
                type="text" placeholder="City" value={config.content.vcard.city}
                onChange={(e) => handleContentChange("city", e.target.value)}
                className="vcard-input"
              />
              <input 
                type="text" placeholder="State / Province" value={config.content.vcard.state}
                onChange={(e) => handleContentChange("state", e.target.value)}
                className="vcard-input"
              />
              <input 
                type="text" placeholder="ZIP / Postal Code" value={config.content.vcard.zip}
                onChange={(e) => handleContentChange("zip", e.target.value)}
                className="vcard-input"
              />
              <input 
                type="text" placeholder="Country" value={config.content.vcard.country}
                onChange={(e) => handleContentChange("country", e.target.value)}
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
          background: var(--color-surface-container);
          border: 1px solid rgba(74, 96, 112, 0.2);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          outline: none;
          transition: all 0.2s;
          color: var(--color-on-surface);
          font-family: Inter, sans-serif;
          font-size: 0.875rem;
        }
        .vcard-input:focus {
          ring: 2px;
          ring-color: rgba(125, 211, 252, 0.5);
          border-color: var(--color-primary);
        }
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
