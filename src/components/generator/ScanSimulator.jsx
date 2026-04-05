import { motion, AnimatePresence } from "framer-motion";

export default function ScanSimulator({ isOpen, onClose, qrDataUrl }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
          />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-sm bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden aspect-[9/19] flex flex-col"
          >
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-10" />
            
            {/* Screen Content */}
            <div className="flex-1 bg-black relative flex flex-col items-center justify-center p-8">
              {/* Camera UI Overlay */}
              <div className="absolute inset-0 border-[20px] border-black/20 z-0" />
              
              <div className="relative z-10 w-full aspect-square bg-white rounded-2xl p-4 shadow-2xl overflow-hidden group">
                {qrDataUrl ? (
                  <img src={qrDataUrl} alt="Scan QR" className="w-full h-full object-contain" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-300">
                    <span className="material-symbols-outlined text-4xl animate-pulse">qr_code_scanner</span>
                  </div>
                )}

                {/* Animated Scan Line */}
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-1 bg-primary/50 shadow-[0_0_15px_rgba(125,211,252,0.8)] z-20"
                />
              </div>

              <div className="mt-12 text-center z-10">
                <p className="text-white font-bold text-lg mb-2">Scanning...</p>
                <p className="text-slate-400 text-xs px-8">Point your camera at the QR code to simulate a real-world scan experience.</p>
              </div>

              {/* Mock Buttons */}
              <div className="absolute bottom-12 flex gap-8 z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                   <span className="material-symbols-outlined text-white text-xl">flashlight_on</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                   <span className="material-symbols-outlined text-white text-xl">photo_library</span>
                </div>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="absolute top-8 right-6 text-white/40 hover:text-white transition-colors z-20"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </motion.div>

          {/* Toast Notification Mockup */}
          <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 80 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute top-0 w-full max-w-[280px] bg-white/90 backdrop-blur-md rounded-2xl p-3 flex items-center gap-3 shadow-xl z-[210]"
          >
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">link</span>
            </div>
            <div className="flex-1 overflow-hidden">
               <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Safari</p>
               <p className="text-xs font-bold text-slate-800 truncate">Open "instantqr.io" in Safari</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
