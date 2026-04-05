export default function AdPlaceholder({ className = "" }) {
  return (
    <div className={`w-full bg-slate-950/40 border-y border-dashed border-sky-400/10 py-6 my-8 flex items-center justify-center ${className}`}>
      <div className="bg-slate-900/50 text-slate-500 font-medium text-xs tracking-widest w-full max-w-[728px] h-[90px] flex items-center justify-center border border-dashed border-sky-400/20 rounded-xl overflow-hidden glass-card">
        ADSTERRA PLACEHOLDER - 728x90
      </div>
    </div>
  );
}
