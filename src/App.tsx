import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Hero from './components/sections/Hero';
import Philosophy from './components/sections/Philosophy';
import Features from './components/sections/Features';
import Download from './components/sections/Download';
import Footer from './components/sections/Footer';

function App() {
  useEffect(() => {
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
    <main className="w-full min-h-screen bg-obsidian text-white relative">
      <div className="noise-overlay" />
      <Hero />
      <Philosophy />
      <Features />
      <Download />
      <Footer />
    </main>
  );
}

export default App;
