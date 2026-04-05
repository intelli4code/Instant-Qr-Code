import HeroGenerator from "../components/sections/HeroGenerator";
import HowItWorks from "../components/sections/HowItWorks";
import FAQ from "../components/sections/FAQ";
import GeneratorWidget from "../components/generator/GeneratorWidget";
import UseCases from "../components/sections/UseCases";
import PrivacyShield from "../components/sections/PrivacyShield";
import InfoGrid from "../components/sections/InfoGrid";
import TechnicalBanner from "../components/sections/TechnicalBanner";
import ReadyCTA from "../components/sections/ReadyCTA";
import AdPlaceholder from "../components/layout/AdPlaceholder";

export default function Home() {
  return (
    <>
      <main>
        {/* Hero & Generator */}
        <HeroGenerator>
          <GeneratorWidget />
        </HeroGenerator>
        
        {/* Use Cases - NEW */}
        <UseCases />
        
        {/* Top Ad Slot */}
        <AdPlaceholder className="!my-0 !border-t-0" />
        
        {/* Simple Steps Section */}
        <HowItWorks />
        
        {/* Privacy & Security - NEW */}
        <PrivacyShield />
        
        {/* In-depth Information Grid - NEW */}
        <InfoGrid />
        
        {/* Technical Specs - NEW */}
        <TechnicalBanner />
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* Bottom Ad Slot */}
        <AdPlaceholder className="!my-0 border-b-0" />

        {/* Final CTA - NEW */}
        <ReadyCTA />
      </main>
    </>
  );
}
