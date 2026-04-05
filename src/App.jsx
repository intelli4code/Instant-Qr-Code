import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AdPlaceholder from "./components/layout/AdPlaceholder";
import HeroGenerator from "./components/sections/HeroGenerator";
import HowItWorks from "./components/sections/HowItWorks";
import FeaturesGrid from "./components/sections/FeaturesGrid";
import FAQ from "./components/sections/FAQ";
import GeneratorWidget from "./components/generator/GeneratorWidget";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroGenerator>
          <GeneratorWidget />
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
