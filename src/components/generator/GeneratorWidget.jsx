import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";
// We will replace these placeholders with real components in Phase 4 and 5
import ContentTabs from "./ContentTabs";
import DesignTabs from "./DesignTabs";
import PreviewPanel from "./PreviewPanel";

export default function GeneratorWidget() {
  // Global configuration state for the generator
  const [config, setConfig] = useState({
    category: "url", // url, text, wifi
    content: {
      url: "https://example.com",
      text: "",
      wifi: { ssid: "", password: "", encryption: "WPA" }
    },
    design: {
      fgColor: "#000000",
      bgColor: "#ffffff",
      frame: "none", // none, bottom-text, bottom-tooltip
      pattern: "squares", // squares, dots, rounded
    }
  });

  // Loading state mapping specifically for visual feedback during debounce
  const [isGenerating, setIsGenerating] = useState(false);

  // The debounced hook. We want to wait 2 seconds after the user stops typing/clicking
  const debouncedConfig = useDebounce(config, 2000);

  // Effect to handle the loading ring logic. 
  // If config changes, it means the user interacts, so we trigger generating state.
  // When debouncedConfig catches up (after 2s pause), we turn it off.
  useEffect(() => {
    // For single-field inputs, we show loading ring.
    // For multi-field like WiFi, we only show parsing if required fields are present.
    // (We will fine-tune the multi-field logic inside ContentTabs, but global config acts as the trigger)
    setIsGenerating(true);
  }, [config]);

  useEffect(() => {
    setIsGenerating(false);
  }, [debouncedConfig]);

  return (
    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden min-h-[600px] border border-slate-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
        
        {/* Left Column: Controls (Content & Design) */}
        <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-slate-200 p-6 flex flex-col h-full bg-slate-50/50">
          <ContentTabs config={config} setConfig={setConfig} isGenerating={isGenerating} />
          <DesignTabs config={config} setConfig={setConfig} />
        </div>

        {/* Right Column: Sticky Preview Hub */}
        <div className="lg:col-span-5 bg-white p-6 relative">
          <PreviewPanel 
            debouncedConfig={debouncedConfig} 
            isGenerating={isGenerating} 
          />
        </div>

      </div>
    </div>
  );
}
