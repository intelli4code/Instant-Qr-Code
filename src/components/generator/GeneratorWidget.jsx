import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useHistoryState } from "../../context/HistoryContext";
import ContentTabs from "./ContentTabs";
import DesignTabs from "./DesignTabs";
import PreviewPanel from "./PreviewPanel";

export default function GeneratorWidget() {
  const [activeTab, setActiveTab] = useState("content"); // content, design
  const { selectedItem, setSelectedItem } = useHistoryState();
  const [history, setHistory] = useLocalStorage("qr_history", []);
  
  const [config, setConfig] = useState({
    category: "url",
    content: {
      url: "https://example.com",
      text: "",
      wifi: { ssid: "", password: "", encryption: "WPA" },
      vcard: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        company: "",
        title: "",
        workPhone: "",
        fax: "",
        street: "",
        city: "",
        state: "",
        country: "",
        zip: "",
        website: ""
      }
    },
    design: {
      fgColor: "#000000",
      bgColor: "#ffffff",
      frame: "none",
      pattern: "squares", // squares, dots, rounded
      logo: null,
      logoSize: 0.2, // Default 20% of QR size
    }
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const debouncedConfig = useDebounce(config, 2000);

  // Sync with selected history item
  useEffect(() => {
    if (selectedItem) {
      setConfig(selectedItem);
      setSelectedItem(null); // Clear after applying
    }
  }, [selectedItem, setSelectedItem]);

  useEffect(() => {
    setIsGenerating(true);
  }, [config]);

  useEffect(() => {
    setIsGenerating(false);
    
    // Save to history when a new config is successfully debounced
    if (debouncedConfig) {
      setHistory(prev => {
        const lastItem = prev[0];
        if (JSON.stringify(lastItem) === JSON.stringify(debouncedConfig)) return prev;
        const newHistory = [debouncedConfig, ...prev].slice(0, 10);
        return newHistory;
      });
    }
  }, [debouncedConfig, setHistory]);

  return (
    <div className="w-full max-w-[1200px] lg:w-[75%] min-h-[700px] mx-auto glass-card-elevated rounded-[2.5rem] shadow-2xl flex flex-col md:grid md:grid-cols-12 overflow-hidden text-left border border-white/5 dark:border-sky-400/10 transition-all duration-500">
      
      {/* Left Column: Settings */}
      <div className="md:col-span-7 p-10 border-b md:border-b-0 md:border-r border-sky-400/10 bg-surface/30 backdrop-blur-md">
        
        {/* Tab Switcher */}
        <div className="flex gap-4 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          <button 
            onClick={() => setActiveTab("content")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
              activeTab === "content" 
                ? "bg-primary text-white dark:text-sky-950 shadow-lg shadow-primary/20" 
                : "text-on-surface-variant hover:bg-primary/10 hover:text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-sm">link</span>
            Content
          </button>
          <button 
            onClick={() => setActiveTab("design")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
              activeTab === "design" 
                ? "bg-primary text-white dark:text-sky-950 shadow-lg shadow-primary/20" 
                : "text-on-surface-variant hover:bg-primary/10 hover:text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-sm">palette</span>
            Design
          </button>
        </div>

        {/* Conditional Content/Design Rendering */}
        <div className="min-h-[400px]">
          {activeTab === "content" ? (
            <ContentTabs config={config} setConfig={setConfig} />
          ) : (
            <DesignTabs config={config} setConfig={setConfig} />
          )}
        </div>
      </div>

      {/* Right Column: Preview */}
      <div className="md:col-span-5 p-10 flex flex-col items-center justify-center bg-primary/5 dark:bg-slate-950/40 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <PreviewPanel 
          debouncedConfig={debouncedConfig} 
          isGenerating={isGenerating} 
        />
      </div>

    </div>
  );
}
