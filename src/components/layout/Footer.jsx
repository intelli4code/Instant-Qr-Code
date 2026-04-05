export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Built by Hamza's Digital Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
