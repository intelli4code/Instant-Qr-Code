export default function AdPlaceholder({ className = "" }) {
  return (
    <div className={`w-full bg-glass-bg border-y border-dashed border-on-surface-variant/10 py-6 my-8 flex items-center justify-center transition-colors duration-500 ${className}`}>
      <div className="bg-surface/30 text-on-surface-variant/50 font-black text-[10px] tracking-[0.3em] w-full max-w-[728px] h-[90px] flex items-center justify-center border border-dashed border-on-surface-variant/20 rounded-2xl overflow-hidden glass-card uppercase">
        ADSTERRA PLACEHOLDER - 728x90
      </div>
    </div>
  );
}
