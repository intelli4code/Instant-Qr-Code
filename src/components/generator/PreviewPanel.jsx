export default function PreviewPanel({ isGenerating }) {
  return (
    <div className="sticky top-6 flex flex-col items-center justify-center p-4">
      {isGenerating && <div className="absolute top-0 text-blue-500 text-sm">Generating...</div>}
      <div className="w-64 h-64 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center">
        Preview
      </div>
    </div>
  );
}
