import { motion, AnimatePresence } from "framer-motion";
import { useHistoryState } from "../../context/HistoryContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNavigate, useLocation } from "react-router-dom";

export default function HistoryDrawer() {
  const { isHistoryOpen, setIsHistoryOpen, applyToGenerator } = useHistoryState();
  const [history, setHistory] = useLocalStorage("qr_history", []);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelect = (item) => {
    applyToGenerator(item);
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear your QR history?")) {
      setHistory([]);
    }
  };

  return (
    <AnimatePresence>
      {isHistoryOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsHistoryOpen(false)}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100]"
          />
          
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-sm bg-slate-900 border-l border-sky-400/10 z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-sky-400/10 flex justify-between items-center bg-slate-950/20">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">history</span>
                  Recent QRs
                </h2>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Last 10 generations</p>
              </div>
              <button onClick={() => setIsHistoryOpen(false)} className="p-2 hover:bg-white/5 rounded-lg text-slate-400">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
              {history.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center opacity-40 text-center px-8">
                  <span className="material-symbols-outlined text-6xl mb-4">qr_code_2</span>
                  <p className="text-sm font-medium">No history yet. Generate a QR code to see it here.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {history.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(item)}
                      className="w-full text-left glass-card p-4 rounded-xl border border-sky-400/5 hover:border-primary/40 hover:bg-primary/5 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
                          <div className="w-full h-full opacity-20 bg-slate-950 rounded-sm flex items-center justify-center">
                             <span className="material-symbols-outlined text-xs">qr_code</span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-primary font-black uppercase tracking-widest mb-1">{item.category}</p>
                          <p className="text-sm text-white font-bold truncate leading-tight">
                            {item.category === 'url' ? item.content.url : 
                             item.category === 'text' ? item.content.text :
                             item.category === 'wifi' ? item.content.wifi.ssid :
                             `${item.content.vcard.firstName} ${item.content.vcard.lastName}`}
                          </p>
                        </div>
                        <span className="material-symbols-outlined text-slate-600 group-hover:text-primary transition-colors">restore</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {history.length > 0 && (
              <div className="p-6 border-t border-sky-400/10 bg-slate-950/20">
                <button 
                  onClick={handleClear}
                  className="w-full py-3 rounded-xl border border-red-500/20 text-red-400 text-xs font-black uppercase tracking-widest hover:bg-red-500/10 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">delete_sweep</span>
                  Clear History
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
