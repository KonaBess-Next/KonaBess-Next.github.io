import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Hero from './components/sections/Hero';
import Philosophy from './components/sections/Philosophy';
import Features from './components/sections/Features';
import SupportedChipsets from './components/sections/SupportedChipsets';
import Download from './components/sections/Download';
import Footer from './components/sections/Footer';

function App() {
  useEffect(() => {
    // Set HTML lang attribute
    document.documentElement.lang = 'en';

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="w-full min-h-screen bg-obsidian text-white relative" role="main" aria-label="KonaBess Next website">
      <div className="noise-overlay" aria-hidden="true" />
      <Hero />
      <Philosophy />
      <Features />
      <SupportedChipsets />
      <Download />
      <Footer />
    </main>
  );
}

export default App;
