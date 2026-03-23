import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Games', id: 'games' },
    { name: 'Rules', id: 'rules' },
    { name: 'Prizes', id: 'prizes' },
    { name: 'Event', id: 'event' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-cyan-500/25' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-1.5 sm:gap-2 cursor-pointer min-w-0"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
          >
            <span className="text-2xl sm:text-3xl">🚀</span>
            <span className="text-sm sm:text-xl md:text-2xl font-black tracking-tight bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-500 bg-clip-text text-transparent truncate max-w-[220px] sm:max-w-none">
              Technovation 4.0 — Mirai
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-white transition-colors relative group"
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-300 to-violet-500 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('games')}
              className="px-6 py-2 bg-gradient-to-r from-sky-500 to-violet-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-violet-500/40 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-gray-300 hover:text-white transition-colors py-2"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('games')}
              className="px-6 py-2 bg-gradient-to-r from-sky-500 to-violet-600 rounded-lg font-semibold text-center"
            >
              Register Now
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
