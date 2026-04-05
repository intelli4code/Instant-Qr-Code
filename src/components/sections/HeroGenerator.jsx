export default function HeroGenerator({ children }) {
  return (
    <section className="relative w-full min-h-[85vh] bg-slate-900 pt-24 pb-12 flex flex-col items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Create Custom <span className="text-blue-500">QR Codes</span> Instantly
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          No sign-up required. Just type and pause to generate beautiful, high-quality QR codes tailored entirely to your brand.
        </p>
      </div>

      {/* The Generator Widget fits here */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
