import { motion } from 'motion/react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, Shield, Target, Gamepad2, Crosshair } from 'lucide-react';

const rulesData = [
  {
    id: 'general',
    title: 'General Rules',
    icon: Shield,
    color: 'purple',
    rules: [
      'All matches are conducted online — players must use their own devices',
      'IGN & Game UID must match registration exactly — mismatch = disqualification',
      'All players must be online at least 15 minutes before match time',
      'Late entry beyond 5 minutes of room creation = disqualification',
      'Use of hacks, cheats, exploits, or third-party tools = permanent ban',
      'Teaming or collusion with opponents = all involved teams disqualified',
      'Final scoreboard screenshot must be submitted within 5 minutes after match end',
      'Organizer\'s decision is final and binding',
      'Any toxic or abusive behavior = disqualification'
    ]
  },
  {
    id: 'freefire',
    title: 'Free Fire Rules & Points',
    icon: Target,
    color: 'orange',
    sections: [
      {
        subtitle: 'Squad Mode (₹200)',
        points: [
          'Team Size: 4 players',
          'Mode: Battle Royale (BR) — Classic Mode (TPP)',
          'Map: Random each round',
          'Platform: Mobile only (NO emulators)',
          'Room Type: Custom Room',
          'All players must join before match start',
          'No restarts for disconnections'
        ]
      },
      {
        subtitle: 'Duo Mode (₹120)',
        points: [
          'Team Size: 2 players',
          'Mode: Battle Royale (BR) — Classic Mode (TPP)',
          'Same rules as Squad'
        ]
      },
      {
        subtitle: 'Point System',
        points: [
          '🥇 1st — 12 pts',
          '🥈 2nd — 9 pts',
          '🥉 3rd — 8 pts',
          '4th — 7 pts | 5th — 6 pts | 6th — 5 pts',
          '7th — 4 pts | 8th — 3 pts | 9th — 2 pts | 10th — 1 pt',
          '🔫 Per kill — +1 pt',
          'Tiebreakers: 1) Higher total kills 2) Better placement in last match'
        ]
      }
    ]
  },
  {
    id: 'bgmi',
    title: 'BGMI Rules & Points',
    icon: Gamepad2,
    color: 'red',
    sections: [
      {
        subtitle: 'Squad Mode (₹200)',
        points: [
          'Team Size: 4 players',
          'Mode: Battle Royale (BR) — Classic Mode (TPP)',
          'Map Pool: Erangel / Miramar / Sanhok / Vikendi',
          'Version: BGMI India only (PUBG Mobile not allowed)',
          'Platform: Android & iOS only (NO emulators)',
          'Room Type: Custom Room',
          'All players must join before match start',
          'No restarts for disconnections'
        ]
      },
      {
        subtitle: 'Duo Mode (₹120)',
        points: [
          'Team Size: 2 players',
          'Mode: Battle Royale (BR) — Classic Mode (TPP)',
          'Same rules as Squad'
        ]
      },
      {
        subtitle: 'Point System',
        points: [
          '🥇 1st — 15 pts | 🥈 2nd — 12 pts | 🥉 3rd — 10 pts',
          '4th — 8 pts | 5th — 6 pts | 6th — 4 pts | 7th — 2 pts',
          '8th–12th — 1 pt | 13th–16th — 0 pts',
          '🔫 Per kill — +1 pt',
          'Tiebreakers: 1) Higher total kills 2) Better placement in last match'
        ]
      }
    ]
  },
  {
    id: 'valorant',
    title: 'Valorant Rules',
    icon: Crosshair,
    color: 'pink',
    rules: [
      'Format: 5v5 (Mumbai Server)',
      'Agents: All allowed',
      'No substitutes allowed',
      'Map Pool: Ascent / Bind / Haven / Lotus / Pearl',
      'Qualifiers: Best of 1 (Spike Rush — First to 4)',
      'Semi-Finals: Best of 1 (Standard — First to 13)',
      'Grand Final: Best of 3 (Standard Mode)',
      'No pauses without organizer approval',
      'No restarts for disconnections',
      'Overtime follows standard Valorant rules',
      'Entry Fee: ₹250'
    ]
  }
];

const colorClasses = {
  purple: {
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/8',
    text: 'text-cyan-300',
    hover: 'hover:border-cyan-500/35'
  },
  orange: {
    border: 'border-sky-500/20',
    bg: 'bg-sky-500/8',
    text: 'text-sky-300',
    hover: 'hover:border-sky-500/35'
  },
  red: {
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/8',
    text: 'text-blue-300',
    hover: 'hover:border-blue-500/35'
  },
  pink: {
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/8',
    text: 'text-violet-300',
    hover: 'hover:border-violet-500/35'
  }
};

export default function RulesSection() {
  return (
    <section id="rules" className="relative py-24 z-10">
      <div className="container mx-auto px-4">
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
              Tournament Rules
            </span>
          </h2>
          <p className="text-xl text-gray-400">Know the battlefield. Master the rules.</p>
        </motion.div>

        {/* Accordion */}
        <Accordion.Root type="single" collapsible className="space-y-4 max-w-5xl mx-auto">
          {rulesData.map((section, index) => {
            const colors = colorClasses[section.color as keyof typeof colorClasses];
            const Icon = section.icon;

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Accordion.Item
                  value={section.id}
                  className={`border ${colors.border} ${colors.hover} rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm transition-all`}
                >
                  <Accordion.Trigger className="w-full p-6 flex items-center justify-between group hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 ${colors.bg} rounded-lg`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-left">{section.title}</h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 ${colors.text} transition-transform duration-300 group-data-[state=open]:rotate-180`}
                    />
                  </Accordion.Trigger>

                  <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                    <div className="p-6 pt-0 space-y-6">
                      {section.rules && (
                        <ul className="space-y-3">
                          {section.rules.map((rule, idx) => (
                            <li key={idx} className="flex gap-3">
                              <span className={`${colors.text} mt-1`}>▸</span>
                              <span className="text-gray-300">{rule}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.sections && section.sections.map((subsection, idx) => (
                        <div key={idx} className={`p-4 ${colors.bg} rounded-lg border ${colors.border}`}>
                          <h4 className={`font-bold mb-3 ${colors.text} text-lg`}>
                            {subsection.subtitle}
                          </h4>
                          <ul className="space-y-2">
                            {subsection.points.map((point, pidx) => (
                              <li key={pidx} className="flex gap-3">
                                <span className={`${colors.text} mt-1`}>•</span>
                                <span className="text-gray-300 text-sm">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            );
          })}
        </Accordion.Root>
      </div>
    </section>
  );
}
