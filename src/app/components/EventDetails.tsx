import { motion } from 'motion/react';
import { Calendar, Users, Clock, Zap } from 'lucide-react';

export default function EventDetails() {
  const eventInfo = [
    {
      icon: Calendar,
      title: 'Event Dates',
      value: '3–5 April 2026',
      gradient: 'from-cyan-500 to-sky-500'
    },
    {
      icon: Users,
      title: 'Organized By',
      value: 'DSAII Club ⚡',
      gradient: 'from-sky-500 to-blue-500'
    },
    {
      icon: Clock,
      title: 'Format',
      value: 'Online Tournament',
      gradient: 'from-blue-500 to-violet-500'
    }
  ];

  const timeline = [
    { day: 'Day 1', date: 'April 3', events: ['BGMI Qualifiers', 'Free Fire Qualifiers'] },
    { day: 'Day 2', date: 'April 4', events: ['Valorant Matches', 'BGMI/FF Semi-Finals'] },
    { day: 'Day 3', date: 'April 5', events: ['Grand Finals', 'Prize Distribution'] }
  ];

  return (
    <section id="event" className="relative py-24 z-10">
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
              Event Details
            </span>
          </h2>
          <p className="text-xl text-gray-400">Mark your calendars for the biggest esports event</p>
        </motion.div>

        {/* Event Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {eventInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-gray-900 to-black border border-cyan-500/12 rounded-xl p-6 text-center relative overflow-hidden">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  {/* Icon */}
                  <motion.div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-r ${info.gradient} mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-sm text-gray-400 mb-2 uppercase tracking-wider">{info.title}</h3>
                  <p className="text-xl font-bold text-white">{info.value}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black mb-2">
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-500 bg-clip-text text-transparent">
                Event Timeline
              </span>
            </h3>
            <p className="text-gray-400">3 Days of Non-Stop Action</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/70 via-sky-500/70 to-violet-500/70 transform -translate-x-1/2 hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <div className="inline-block bg-gradient-to-br from-gray-900 to-black border border-cyan-500/12 rounded-xl p-6 hover:border-cyan-500/25 transition-colors">
                      <div className="text-sm text-cyan-300 font-semibold mb-1">{item.day}</div>
                      <div className="text-2xl font-black mb-3">{item.date}</div>
                      <div className="space-y-2">
                        {item.events.map((event, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-gray-300 justify-center md:justify-start"
                          >
                            <Zap className="w-4 h-4 text-sky-300" />
                            <span>{event}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Circle Marker */}
                  <div className="relative z-10">
                    <motion.div
                      className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 border-4 border-black"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-cyan-500/8 to-violet-500/8 border border-cyan-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">⚠️</div>
            <h4 className="text-xl font-bold mb-2 text-cyan-300">Important Notice</h4>
            <p className="text-gray-300">
              Room codes and match schedules will be shared in the official group only.
              Make sure to join the group after registration!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
