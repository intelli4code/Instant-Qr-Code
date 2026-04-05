import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import ContentTabs from "./ContentTabs";
import DesignTabs from "./DesignTabs";
import PreviewPanel from "./PreviewPanel";

export default function GeneratorWidget() {
  const [activeTab, setActiveTab] = useState("content"); // content, design
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
    }
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const debouncedConfig = useDebounce(config, 2000);

  useEffect(() => {
    setIsGenerating(true);
  }, [config]);

  useEffect(() => {
    setIsGenerating(false);
  }, [debouncedConfig]);

  return (
    <div className="max-w-4xl mx-auto glass-card-elevated rounded-2xl shadow-2xl flex flex-col md:grid md:grid-cols-12 overflow-hidden text-left border border-sky-400/20">
      
      {/* Left Column: Settings */}
      <div className="md:col-span-7 p-8 border-b md:border-b-0 md:border-r border-sky-400/10 bg-surface/40">
        
        {/* Tab Switcher */}
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab("content")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === "content" 
                ? "bg-primary/10 text-primary border border-primary/20 shadow-sm" 
                : "text-on-surface-variant hover:bg-surface-container transition-colors"
            }`}
          >
            <span className="material-symbols-outlined text-sm">link</span>
            Content
          </button>
          <button 
            onClick={() => setActiveTab("design")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              activeTab === "design" 
                ? "bg-primary/10 text-primary border border-primary/20 shadow-sm" 
                : "text-on-surface-variant hover:bg-surface-container transition-colors"
            }`}
          >
            <span className="material-symbols-outlined text-sm">palette</span>
            Design
          </button>
        </div>

        {/* Conditional Content/Design Rendering */}
        <div className="min-h-[300px]">
          {activeTab === "content" ? (
            <ContentTabs config={config} setConfig={setConfig} />
          ) : (
            <DesignTabs config={config} setConfig={setConfig} />
          )}
        </div>
      </div>

      {/* Right Column: Preview */}
      <div className="md:col-span-5 p-8 flex flex-col items-center justify-center bg-surface-container-high/30">
        <PreviewPanel 
          debouncedConfig={debouncedConfig} 
          isGenerating={isGenerating} 
        />
      </div>

    </div>
  );
}
