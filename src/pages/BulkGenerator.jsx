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
    <main className="flex-1 py-20 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full -z-10 animate-pulse" />

        <div className="max-w-4xl mx-auto">
            <header className="mb-12 text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase font-black tracking-widest mb-6"
                >
                    <span className="material-symbols-outlined text-sm">rocket_launch</span>
                    Power User Feature
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                   Bulk <span className="text-primary italic">QR</span> Generator
                </h1>
                <p className="text-slate-400 max-w-xl mx-auto">
                    Generate hundreds of QR codes instantly. Upload a CSV file and download your codes in a beautiful ZIP archive.
                </p>
            </header>

            <div className="glass-card-elevated rounded-3xl p-8 md:p-12 border border-sky-400/10 shadow-2xl relative">
                {!file ? (
                    <div className="flex flex-col items-center justify-center border-2 border-dashed border-sky-400/20 rounded-2xl py-20 hover:border-primary/40 transition-all group relative bg-slate-900/40">
                        <input 
                            type="file" 
                            accept=".csv" 
                            onChange={handleFileUpload}
                            className="absolute inset-0 opacity-0 cursor-pointer z-10"
                        />
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                             <span className="material-symbols-outlined text-primary text-3xl">upload_file</span>
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2">Drop your CSV here</h2>
                        <p className="text-slate-500 text-sm mb-6">or click to browse your computer</p>
                        
                        <button 
                            onClick={(e) => { e.stopPropagation(); downloadSample(); }}
                            className="text-[10px] uppercase font-black tracking-widest text-primary border-b border-primary/20 pb-1 hover:text-white hover:border-white transition-all z-20"
                        >
                            Download Sample CSV Template
                        </button>
                    </div>
                ) : (
                    <div className="space-y-8">
                        <div className="flex items-center justify-between p-4 bg-slate-950/40 rounded-xl border border-sky-400/10">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary text-3xl">description</span>
                                <div>
                                    <p className="text-white font-bold">{file.name}</p>
                                    <p className="text-slate-500 text-xs">{data.length} codes detected</p>
                                </div>
                            </div>
                            <button onClick={() => { setFile(null); setData([]); }} className="p-2 text-slate-500 hover:text-red-400 transition-colors">
                                <span className="material-symbols-outlined">delete</span>
                            </button>
                        </div>

                        <div className="overflow-x-auto rounded-xl border border-sky-400/5">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-slate-950/40 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                                    <tr>
                                        {data[0] && Object.keys(data[0]).map((key, i) => (
                                            <th key={i} className="p-4">{key}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-sky-400/5">
                                    {data.slice(0, 5).map((row, i) => (
                                        <tr key={i} className="text-slate-300">
                                            {Object.values(row).map((val, j) => (
                                                <td key={j} className="p-4 truncate max-w-[200px]">{String(val)}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {data.length > 5 && (
                                <div className="p-4 text-center bg-slate-950/20 text-slate-500 text-[10px] uppercase font-bold tracking-widest">
                                    And {data.length - 5} more rows...
                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <AnimatePresence>
                                {isProcessing && (
                                    <div className="mb-6">
                                        <div className="flex justify-between text-xs font-bold text-primary uppercase mb-2">
                                            <span>Generating...</span>
                                            <span>{progress}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                animate={{ width: `${progress}%` }}
                                                className="h-full bg-primary shadow-[0_0_15px_rgba(125,211,252,0.5)]"
                                            />
                                        </div>
                                    </div>
                                )}
                            </AnimatePresence>

                            <button
                                onClick={generateBulk}
                                disabled={isProcessing}
                                className="w-full bg-primary hover:bg-sky-300 text-sky-950 font-black py-5 rounded-2xl shadow-2xl shadow-primary/20 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                            >
                                <span className="material-symbols-outlined text-2xl">auto_fix_high</span>
                                <span className="uppercase tracking-[0.2em] pt-1">Process and Export ZIP</span>
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
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
