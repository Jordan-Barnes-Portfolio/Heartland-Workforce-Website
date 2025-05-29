import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import FeatureShowcase from './components/FeatureShowcase';
import BetaSection from './components/BetaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        <FeatureShowcase />
        <BetaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;