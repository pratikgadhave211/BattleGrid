import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import HeroSection from './components/HeroSection';
import GamesSection from './components/GamesSection';
import RulesSection from './components/RulesSection';
import PrizePoolSection from './components/PrizePoolSection';
import EventDetails from './components/EventDetails';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Global Background Video */}
      <video
        className="fixed inset-0 w-full h-full object-cover opacity-12 sm:opacity-35 brightness-95 sm:brightness-125 pointer-events-none z-0"
        src="/videos/12220498_1920_1080_25fps.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Global One-Page Connector Layers */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-70 sm:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.14),transparent_36%),radial-gradient(circle_at_50%_52%,rgba(59,130,246,0.1),transparent_42%),radial-gradient(circle_at_50%_100%,rgba(167,139,250,0.12),transparent_36%)]" />
        <div className="hidden sm:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent" />
      </div>

      {/* Particles Background */}
      <ParticlesBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <GamesSection />
        <RulesSection />
        <PrizePoolSection />
        <EventDetails />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/25 py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-400">
            © 2026 BATTLEGRID — Technovation 4.0 | DSAII Club ⚡
          </p>
          <p className="text-sm text-gray-500 mt-2">
            DY Patil Institute of Technology, Pimpri
          </p>
        </div>
      </footer>
    </div>
  );
}
