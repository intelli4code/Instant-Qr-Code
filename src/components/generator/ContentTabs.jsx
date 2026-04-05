import { Link2, Type, Wifi } from "lucide-react";

export default function ContentTabs({ config, setConfig }) {
  const tabs = [
    { id: "url", label: "Link", icon: <Link2 className="w-4 h-4" /> },
    { id: "text", label: "Text", icon: <Type className="w-4 h-4" /> },
    { id: "wifi", label: "WiFi", icon: <Wifi className="w-4 h-4" /> }
  ];

  const handleCategoryChange = (cat) => {
    setConfig({ ...config, category: cat });
  };

  const handleContentChange = (field, value) => {
    setConfig({
      ...config,
      content: {
        ...config.content,
        // If it's wifi, we need to update the nested object, else straight update
        ...(config.category === "wifi" 
            ? { wifi: { ...config.content.wifi, [field]: value } }
            : { [config.category]: value })
      }
    });
  };

  return (
    <div className="flex flex-col mb-6">
      <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">1. What's your QR for?</h2>
      
      {/* Category Selector */}
      <div className="flex space-x-2 bg-slate-100 p-1 rounded-xl mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => handleCategoryChange(tab.id)}
            className={`flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
              config.category === tab.id 
                ? "bg-white shadow-sm text-blue-600" 
                : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Inputs Configuration */}
      <div className="space-y-4">
        {config.category === "url" && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Website URL</label>
            <input 
              type="url"
              placeholder="https://example.com"
              value={config.content.url}
              onChange={(e) => handleContentChange("url", e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            />
          </div>
        )}

        {config.category === "text" && (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Plain Text</label>
            <textarea 
              placeholder="Enter any text here..."
              value={config.content.text}
              onChange={(e) => handleContentChange("text", e.target.value)}
              rows={4}
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            />
          </div>
        )}

        {config.category === "wifi" && (
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Network Name (SSID)</label>
              <input 
                type="text"
                placeholder="My WiFi Network"
                value={config.content.wifi.ssid}
                onChange={(e) => handleContentChange("ssid", e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <input 
                type="text"
                placeholder="Secret123"
                value={config.content.wifi.password}
                onChange={(e) => handleContentChange("password", e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Security</label>
              <select 
                value={config.content.wifi.encryption}
                onChange={(e) => handleContentChange("encryption", e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow appearance-none"
              >
                <option value="WPA">WPA/WPA2/WPA3</option>
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
