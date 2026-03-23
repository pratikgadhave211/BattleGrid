import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { Swords, Trophy } from 'lucide-react';

export default function HeroSection() {
  const titleRef = useRef<HTMLSpanElement>(null);
  const glitchRedRef = useRef<HTMLSpanElement>(null);
  const glitchCyanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!titleRef.current || !glitchRedRef.current || !glitchCyanRef.current) return;

    const title = titleRef.current;
    const redGhost = glitchRedRef.current;
    const cyanGhost = glitchCyanRef.current;

    const introTween = gsap.fromTo(
      title,
      { y: 24, opacity: 0, scale: 0.94, rotateX: -8, letterSpacing: '0.04em' },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        letterSpacing: '0.1em',
        duration: 1.1,
        ease: 'power3.out'
      }
    );

    gsap.set([redGhost, cyanGhost], { opacity: 0 });

    const gradientFlow = gsap.to(title, {
      backgroundPosition: '160% center',
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'none'
    });

    const glitchTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1.4 });
    glitchTimeline
      .to([redGhost, cyanGhost], {
        opacity: 0.9,
        duration: 0.03,
        ease: 'none'
      })
      .to(redGhost, { x: -10, y: 2, duration: 0.03, ease: 'none' }, '<')
      .to(cyanGhost, { x: 10, y: -2, duration: 0.03, ease: 'none' }, '<')
      .to(title, {
        x: 2,
        skewX: 7,
        scale: 1.015,
        filter: 'drop-shadow(0 0 34px rgba(56, 189, 248, 0.95))',
        duration: 0.03,
        ease: 'none'
      }, '<')
      .to(title, { clipPath: 'inset(10% 0 48% 0)', duration: 0.03, ease: 'none' })
      .to(title, { clipPath: 'inset(56% 0 12% 0)', duration: 0.03, ease: 'none' })
      .to(title, {
        x: -2,
        skewX: -7,
        duration: 0.03,
        ease: 'none'
      })
      .to(redGhost, { x: -4, y: -1, duration: 0.03, ease: 'none' }, '<')
      .to(cyanGhost, { x: 4, y: 1, duration: 0.03, ease: 'none' }, '<')
      .to(title, {
        x: 0,
        skewX: 0,
        scale: 1,
        clipPath: 'inset(0% 0 0% 0)',
        filter: 'drop-shadow(0 0 18px rgba(34, 211, 238, 0.5))',
        duration: 0.06,
        ease: 'none'
      })
      .to([redGhost, cyanGhost], {
        opacity: 0,
        x: 0,
        y: 0,
        duration: 0.08,
        ease: 'none'
      }, '<');

    return () => {
      introTween.kill();
      gradientFlow.kill();
      glitchTimeline.kill();
    };
  }, []);

  const scrollToGames = () => {
    const element = document.getElementById('games');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRules = () => {
    const element = document.getElementById('rules');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Overlay Tint */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/45 via-sky-900/12 to-black/90" />

      {/* Cyber Atmosphere Layers */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_14%_18%,rgba(34,211,238,0.2),transparent_42%),radial-gradient(circle_at_86%_12%,rgba(167,139,250,0.2),transparent_46%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.14),transparent_55%)]" />
      <div className="absolute inset-0 z-0 opacity-30 bg-[linear-gradient(to_right,rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_42%,rgba(125,211,252,0.12),transparent_45%)]" />

      {/* Animated Glow Effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/14 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.24, 0.12],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/14 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.24, 0.12, 0.24],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          className="relative text-6xl md:text-8xl lg:text-9xl font-black mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span
            ref={titleRef}
            className="relative inline-block px-2 uppercase tracking-[0.1em] bg-[linear-gradient(110deg,#a5f3fc_0%,#22d3ee_28%,#60a5fa_52%,#a78bfa_75%,#e9d5ff_100%)] bg-[length:220%_100%] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.38)] will-change-transform"
          >
            BATTLEGRID
          </span>
          <span
            ref={glitchRedRef}
            className="pointer-events-none absolute inset-0 inline-block px-2 uppercase tracking-[0.1em] text-fuchsia-300/90 mix-blend-screen"
          >
            BATTLEGRID
          </span>
          <span
            ref={glitchCyanRef}
            className="pointer-events-none absolute inset-0 inline-block px-2 uppercase tracking-[0.1em] text-sky-300/90 mix-blend-screen"
          >
            BATTLEGRID
          </span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-3xl text-gray-300 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Technovation 4.0 — Mirai
        </motion.div>

        <motion.p
          className="text-2xl md:text-4xl text-sky-200 mb-12 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Enter the Ultimate Esports Arena
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-cyan-300 mb-2">₹12K</div>
            <div className="text-sm text-gray-400">Prize Pool</div>
          </div>
          <div className="w-px bg-cyan-500/35" />
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-sky-400 mb-2">5</div>
            <div className="text-sm text-gray-400">Tournaments</div>
          </div>
          <div className="w-px bg-cyan-500/35" />
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-violet-400 mb-2">3</div>
            <div className="text-sm text-gray-400">Days Event</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-8 sm:gap-10 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            onClick={scrollToGames}
            className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-violet-600 rounded-lg font-bold text-lg overflow-hidden shadow-[0_0_22px_rgba(99,102,241,0.35)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Trophy size={24} />
              Register Now
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-sky-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            onClick={scrollToRules}
            className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-bold text-lg hover:bg-cyan-500/10 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Swords size={24} />
            View Rules
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-14 flex justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.5 },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-cyan-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
