import { motion } from 'motion/react';
import { Users, Trophy, IndianRupee, Flame, Crosshair, Shield, Swords, Gamepad2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const REGISTER_URL = 'https://dsaii-submission-2.vercel.app/';

const games = [
  {
    id: 'bgmi',
    name: 'BGMI',
    fullName: 'Battlegrounds Mobile India',
    image: 'https://images.unsplash.com/photo-1616565441366-34a5fe33fe42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB1Ymd8ZW58MHx8MHx8fDA%3D',
    modes: [
      { name: 'Squad', players: '4 Players', fee: '₹200' },
      { name: 'Duo', players: '2 Players', fee: '₹120' }
    ],
    gradient: 'from-cyan-400 to-sky-600',
    icon: '🎮'
  },
  {
    id: 'freefire',
    name: 'Free Fire',
    fullName: 'Free Fire Battle Royale',
    image: 'https://wallpaperaccess.com/full/2075656.jpg',
    modes: [
      { name: 'Squad', players: '4 Players', fee: '₹200' },
      { name: 'Duo', players: '2 Players', fee: '₹120' }
    ],
    gradient: 'from-sky-400 to-blue-600',
    icon: '🔥'
  },
  {
    id: 'valorant',
    name: 'Valorant',
    fullName: 'Valorant Competitive',
    image: 'https://valorantstrike.com/wp-content/uploads/2020/07/Valorant-Wallpaper-Boys-Dark-Display.jpg',
    modes: [
      { name: '5v5', players: '5 Players', fee: '₹250' }
    ],
    gradient: 'from-blue-500 to-violet-600',
    icon: '🎯'
  }
];

export default function GamesSection() {
  const openRegister = () => {
    window.open(REGISTER_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="games" className="relative py-16 sm:py-24 z-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.1),transparent_45%),radial-gradient(circle_at_85%_0%,rgba(139,92,246,0.11),transparent_50%)]" />
        <motion.div
          className="absolute -top-20 left-1/4 w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-cyan-500/12 blur-2xl sm:blur-3xl"
          animate={{ opacity: [0.14, 0.3, 0.14], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-16 right-1/4 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-violet-500/12 blur-2xl sm:blur-3xl"
          animate={{ opacity: [0.18, 0.34, 0.18], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating background gaming icons */}
        <motion.div
          className="hidden sm:block absolute top-24 left-[6%] text-cyan-200/35 drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]"
          animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Gamepad2 size={34} className="md:w-11 md:h-11" />
        </motion.div>
        <motion.div
          className="hidden sm:block absolute top-40 right-[8%] text-sky-200/32 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]"
          animate={{ y: [0, 12, 0], rotate: [0, -7, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Crosshair size={30} className="md:w-10 md:h-10" />
        </motion.div>
        <motion.div
          className="hidden sm:block absolute bottom-28 left-[10%] text-cyan-100/28 drop-shadow-[0_0_10px_rgba(34,211,238,0.28)]"
          animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Swords size={28} className="md:w-9 md:h-9" />
        </motion.div>
        <motion.div
          className="hidden sm:block absolute bottom-20 right-[12%] text-violet-100/28 drop-shadow-[0_0_10px_rgba(167,139,250,0.28)]"
          animate={{ y: [0, 11, 0], rotate: [0, -9, 0] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Shield size={30} className="md:w-10 md:h-10" />
        </motion.div>
        <motion.div
          className="hidden sm:block absolute top-[46%] left-1/2 -translate-x-1/2 text-sky-100/24 drop-shadow-[0_0_12px_rgba(125,211,252,0.3)]"
          animate={{ y: [0, -16, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Trophy size={32} className="md:w-11 md:h-11" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-3 sm:mb-4 tracking-tight font-display uppercase">
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">
              Choose Your Battle
            </span>
          </h2>
          <p className="text-base sm:text-xl text-sky-100/80 font-gaming tracking-wide px-2">Live queues are up. Pick your arena and climb the bracket.</p>
        </motion.div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-neutral-950 via-black to-neutral-900 border border-cyan-500/20 rounded-[26px] overflow-hidden shadow-[0_0_22px_rgba(56,189,248,0.12)]">
                {/* Game Image */}
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black z-10" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/14 via-sky-500/6 to-transparent z-10" />
                  <ImageWithFallback
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full border border-cyan-300/25 bg-black/45 text-[11px] sm:text-xs font-bold tracking-wider text-cyan-200 uppercase">
                    <Flame size={14} className="text-cyan-300" />
                    Live Queue
                  </div>
                  {/* Floating Icon */}
                  <motion.div
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 text-4xl sm:text-5xl z-20 p-2 rounded-xl bg-black/35 border border-cyan-300/15 backdrop-blur-sm"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {game.icon}
                  </motion.div>

                  {/* Esports HUD Icons */}
                  <motion.div
                    className="absolute bottom-4 left-4 z-20 p-2 rounded-lg bg-black/35 border border-cyan-300/15 backdrop-blur-sm"
                    animate={{ y: [0, -3, 0], opacity: [0.85, 1, 0.85] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.1 }}
                  >
                    <Crosshair size={14} className="text-cyan-200" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-4 left-16 z-20 p-2 rounded-lg bg-black/35 border border-cyan-300/15 backdrop-blur-sm"
                    animate={{ y: [0, -4, 0], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.15 }}
                  >
                    {index % 2 === 0 ? (
                      <Shield size={14} className="text-cyan-200" />
                    ) : (
                      <Swords size={14} className="text-cyan-200" />
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 font-gaming">
                  <h3 className={`text-3xl font-black mb-2 bg-gradient-to-r ${game.gradient} bg-clip-text text-transparent tracking-tight font-display uppercase`}>
                    {game.name}
                  </h3>
                  <p className="text-gray-300/80 mb-6 text-sm tracking-wide">{game.fullName}</p>

                  {/* Modes */}
                  <div className="space-y-3 mb-6">
                    {game.modes.map((mode, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-black/32 rounded-[14px] border border-cyan-400/10 hover:border-cyan-400/25 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Users size={18} className="text-cyan-300" />
                          <div>
                            <div className="font-semibold">{mode.name}</div>
                            <div className="text-xs text-gray-500">{mode.players}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 font-bold text-sky-300">
                          <IndianRupee size={16} />
                          {mode.fee.replace('₹', '')}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Register Button */}
                  <motion.button
                    onClick={openRegister}
                    className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-600 rounded-[14px] font-bold text-white relative overflow-hidden group/btn shadow-[0_0_20px_rgba(99,102,241,0.35)] font-display uppercase tracking-wide"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Trophy size={18} />
                      Register Now
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.button>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-cyan-500/12 via-sky-500/16 to-violet-500/12 blur-xl -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

