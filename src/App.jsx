import Hero from "./components/Hero.jsx";
import PainSection from "./components/PainSection.jsx";
import SolutionSection from "./components/SolutionSection.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Benefits from "./components/Benefits.jsx";
import ResultDemo from "./components/ResultDemo.jsx";
import CoreArgument from "./components/CoreArgument.jsx";
import Objection from "./components/Objection.jsx";
import Offer from "./components/Offer.jsx";
import FAQ from "./components/FAQ.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import MobileStickyCTA from "./components/MobileStickyCTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <main>
        <Hero />
        <PainSection />
        <SolutionSection />
        <HowItWorks />
        <Benefits />
        <ResultDemo />
        <CoreArgument />
        <Objection />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
