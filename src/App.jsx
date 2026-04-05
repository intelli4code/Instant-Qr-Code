import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AdPlaceholder from "./components/layout/AdPlaceholder";
import HeroGenerator from "./components/sections/HeroGenerator";
import HowItWorks from "./components/sections/HowItWorks";
import FAQ from "./components/sections/FAQ";
import GeneratorWidget from "./components/generator/GeneratorWidget";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero & Generator */}
        <HeroGenerator>
          <GeneratorWidget />
        </HeroGenerator>
        
        {/* Top Ad Slot */}
        <AdPlaceholder className="!my-0 !border-t-0" />
        
        {/* Simple Steps Section */}
        <HowItWorks />
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* Bottom Ad Slot */}
        <AdPlaceholder className="!my-0 border-b-0" />
      </main>

      <Footer />
    </div>
  );
}

export default App;
