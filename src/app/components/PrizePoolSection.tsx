import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Trophy, Medal, Award } from 'lucide-react';

const prizeData = [
  {
    game: 'Valorant',
    icon: '🎯',
    color: 'from-blue-500 to-violet-600',
    prizes: [
      { position: '🥇 Winner', amount: 2000 },
      { position: '🥈 Runner-up', amount: 1000 }
    ]
  },
  {
    game: 'BGMI Squad',
    icon: '🎮',
    color: 'from-cyan-500 to-sky-600',
    prizes: [
      { position: '🥇 Winner', amount: 2000 },
      { position: '🥈 Runner-up', amount: 1000 }
    ]
  },
  {
    game: 'BGMI Duo',
    icon: '🎮',
    color: 'from-cyan-400 to-blue-500',
    prizes: [
      { position: '🥇 Winner', amount: 1000 },
      { position: '🥈 Runner-up', amount: 500 }
    ]
  },
  {
    game: 'Free Fire Squad',
    icon: '🔥',
    color: 'from-sky-500 to-indigo-600',
    prizes: [
      { position: '🥇 Winner', amount: 2000 },
      { position: '🥈 Runner-up', amount: 1000 }
    ]
  },
  {
    game: 'Free Fire Duo',
    icon: '🔥',
    color: 'from-sky-400 to-blue-500',
    prizes: [
      { position: '🥇 Winner', amount: 1000 },
      { position: '🥈 Runner-up', amount: 500 }
    ]
  }
];

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function PrizePoolSection() {
  return (
    <section id="prizes" className="relative py-24 z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/8 via-transparent to-violet-900/8" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-500 bg-clip-text text-transparent">
              Prize Pool
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">Compete for glory and rewards</p>

          {/* Total Prize Pool */}
          <motion.div
            className="inline-block"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 blur-2xl opacity-25" />
              <div className="relative bg-gradient-to-r from-cyan-600/10 to-violet-600/10 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm">
                <Trophy className="w-16 h-16 text-cyan-300 mx-auto mb-4" />
                <div className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                  ₹<AnimatedCounter value={12000} />
                </div>
                <div className="text-gray-400 mt-2 text-lg">Total Prize Money</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Prize Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {prizeData.map((tournament, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-black border border-cyan-500/12 rounded-xl p-6 overflow-hidden">
                {/* Background Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tournament.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon */}
                <motion.div
                  className="text-5xl mb-4 text-center"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {tournament.icon}
                </motion.div>

                {/* Game Name */}
                <h3 className={`text-2xl font-black text-center mb-6 bg-gradient-to-r ${tournament.color} bg-clip-text text-transparent`}>
                  {tournament.game}
                </h3>

                {/* Prizes */}
                <div className="space-y-3">
                  {tournament.prizes.map((prize, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-cyan-500/10 hover:border-cyan-500/20 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-2">
                        {idx === 0 ? (
                          <Medal className="w-5 h-5 text-cyan-300" />
                        ) : (
                          <Award className="w-5 h-5 text-gray-400" />
                        )}
                        <span className="font-semibold">{prize.position}</span>
                      </div>
                        <div className="text-xl font-bold text-sky-300">
                        ₹{prize.amount.toLocaleString()}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Border Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none bg-gradient-to-r ${tournament.color} blur-xl -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
