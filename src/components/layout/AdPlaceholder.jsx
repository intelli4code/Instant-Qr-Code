export default function AdPlaceholder({ className = "" }) {
  return (
    <div className={`w-full bg-slate-50 border-y border-dashed border-slate-300 py-6 my-8 flex items-center justify-center ${className}`}>
      <div className="bg-slate-200 text-slate-500 font-medium text-sm w-full max-w-[728px] h-[90px] flex items-center justify-center border border-dashed border-slate-400 rounded-lg">
        Adsterra Placeholder - 728x90
      </div>
    </div>
  );
}
