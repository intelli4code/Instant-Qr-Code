import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Papa from "papaparse";
import JSZip from "jszip";
import QRCodeStyling from "qr-code-styling";

export default function BulkGenerator() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFile(file);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data);
      }
    });
  };

  const generateBulk = async () => {
    if (data.length === 0) return;
    setIsProcessing(true);
    setProgress(0);

    const zip = new JSZip();
    const qrFolder = zip.folder("instant-qrs");

    for (let i = 0; i < data.length; i++) {
        const row = data[i];
        const fileName = row.name || `qr-${i+1}`;
        const content = row.url || row.content || Object.values(row)[0];

        const qrCode = new QRCodeStyling({
            width: 512,
            height: 512,
            data: content,
            dotsOptions: { color: "#000000", type: "square" },
            backgroundOptions: { color: "#ffffff" },
            margin: 10
        });

        const blob = await qrCode.getRawData("png");
        qrFolder.file(`${fileName}.png`, blob);
        
        setProgress(Math.round(((i + 1) / data.length) * 100));
    }

    const content = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(content);
    link.download = `bulk-qrs-${Date.now()}.zip`;
    link.click();

    setIsProcessing(false);
    setProgress(0);
  };

  const downloadSample = () => {
    const csvContent = "name,url\nCompany Website,https://example.com\nProduct Page,https://example.com/product\nLinkedIn,https://linkedin.com/in/user";
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "sample-bulk-qr.csv";
    link.click();
  };

  return (
    <main className="flex-1 py-24 px-6 relative overflow-hidden bg-background">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full -z-10 animate-pulse-slow" />

        <div className="max-w-5xl mx-auto">
            <header className="mb-16 text-center">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase font-black tracking-[0.2em] mb-8 shadow-sm"
                >
                    <span className="material-symbols-outlined text-sm">rocket_launch</span>
                    Power User Feature
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-black text-on-surface mb-6 tracking-tighter drop-shadow-sm">
                   Bulk <span className="text-primary italic">QR</span> Generator
                </h1>
                <p className="text-on-surface-variant max-w-xl mx-auto text-lg leading-relaxed">
                    Generate hundreds of QR codes instantly. Upload a CSV file and download your codes in a beautiful ZIP archive.
                </p>
            </header>

            <div className="glass-card-elevated rounded-[3rem] p-1 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
                
                {!file ? (
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-primary/20 rounded-[2rem] py-28 hover:border-primary/40 transition-all group relative bg-surface/20 backdrop-blur-sm">
                        <input 
                            type="file" 
                            accept=".csv" 
                            onChange={handleFileUpload}
                            className="absolute inset-0 opacity-0 cursor-pointer z-10"
                        />
                        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                             <span className="material-symbols-outlined text-primary text-4xl">upload_file</span>
                        </div>
                        <h2 className="text-2xl font-black text-on-surface mb-3">Drop your CSV here</h2>
                        <p className="text-on-surface-variant text-base mb-8">or click to browse your computer</p>
                        
                        <button 
                            onClick={(e) => { e.stopPropagation(); downloadSample(); }}
                            className="text-[10px] uppercase font-black tracking-widest text-primary border-b-2 border-primary/20 pb-1 hover:text-on-surface hover:border-on-surface transition-all z-20"
                        >
                            Download Sample CSV Template
                        </button>
                    </div>
                ) : (
                    <div className="space-y-10 relative z-10">
                        <div className="flex items-center justify-between p-6 bg-surface/40 rounded-[2rem] border border-white/10 shadow-glass-md">
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-3xl">description</span>
                                </div>
                                <div>
                                    <p className="text-on-surface text-lg font-black">{file.name}</p>
                                    <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">{data.length} codes detected</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => { setFile(null); setData([]); }} 
                                className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm"
                            >
                                <span className="material-symbols-outlined">delete</span>
                            </button>
                        </div>

                        <div className="overflow-x-auto rounded-[2rem] border border-white/10 bg-surface/20">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-surface/40 text-on-surface-variant font-black uppercase text-[10px] tracking-[0.2em] border-b border-white/5">
                                    <tr>
                                        {data[0] && Object.keys(data[0]).map((key, i) => (
                                            <th key={i} className="p-6">{key}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {data.slice(0, 5).map((row, i) => (
                                        <tr key={i} className="text-on-surface/80 hover:bg-white/5 transition-colors">
                                            {Object.values(row).map((val, j) => (
                                                <td key={j} className="p-6 truncate max-w-[250px] font-medium">{String(val)}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {data.length > 5 && (
                                <div className="p-6 text-center bg-surface/40 text-on-surface-variant text-[10px] uppercase font-black tracking-[0.3em] border-t border-white/5">
                                    And {data.length - 5} more rows detected
                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <AnimatePresence>
                                {isProcessing && (
                                    <div className="mb-8 p-1">
                                        <div className="flex justify-between text-[10px] font-black text-primary uppercase mb-3 tracking-widest">
                                            <span className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                                                Processing Queue
                                            </span>
                                            <span>{progress}%</span>
                                        </div>
                                        <div className="h-3 w-full bg-surface/30 rounded-full overflow-hidden border border-white/10 shadow-inner">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: `${progress}%` }}
                                                className="h-full bg-primary shadow-[0_0_20px_var(--primary-glow)]"
                                            />
                                        </div>
                                    </div>
                                )}
                            </AnimatePresence>

                            <button
                                onClick={generateBulk}
                                disabled={isProcessing}
                                className="w-full bg-primary hover:brightness-110 text-white dark:text-sky-950 font-black py-6 rounded-[2rem] shadow-2xl shadow-primary/30 transition-all flex items-center justify-center gap-4 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                            >
                                <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">auto_fix_high</span>
                                <span className="uppercase tracking-[0.3em] text-sm">Process and Export ZIP</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />
                            </button>
                        </div>
                    </div>
                )}

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: "csv", title: "CSV Driven", text: "Map columns to Name and Content fields easily." },
                        { icon: "bolt", title: "Instant ZIP", text: "Download all generated codes in a single archive." },
                        { icon: "high_res", title: "High-Res PNG", text: "512x512 pixels standard for professional use." }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                            <span className="material-symbols-outlined text-primary">{item.icon}</span>
                            <div>
                                <h3 className="text-white text-xs font-black uppercase mb-1">{item.title}</h3>
                                <p className="text-slate-500 text-[10px] leading-relaxed">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </main>
  );
}
