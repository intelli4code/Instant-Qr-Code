import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AdPlaceholder from "./components/layout/AdPlaceholder";
import HeroGenerator from "./components/sections/HeroGenerator";
import HowItWorks from "./components/sections/HowItWorks";
import FeaturesGrid from "./components/sections/FeaturesGrid";
import FAQ from "./components/sections/FAQ";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroGenerator>
          {/* We will inject GeneratorWidget here in Phase 3/4/5 */}
          <div className="w-full h-64 bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700 flex items-center justify-center text-slate-400">
            [Generator Widget Placeholder]
          </div>
        </HeroGenerator>
        
        <AdPlaceholder className="!my-0 !border-t-0" />
        
        <HowItWorks />
        <FeaturesGrid />
        <FAQ />
        
        <AdPlaceholder className="!my-0 border-b-0" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
