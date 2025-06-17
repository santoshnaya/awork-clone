'use client'

import { motion } from 'framer-motion'

const SimplicitySection = () => {
  const companyLogos = [
    { name: 'think', logo: 'think' },
    { name: 'EnBW', logo: '—EnBW' },
    { name: 'Content Fleet', logo: 'CF Content Fleet' },
    { name: 'pilot', logo: 'pilot' },
    { name: 'fischer Appelt', logo: 'fischerAppelt' },
    { name: 'Viva con Agua', logo: '🌊' },
    { name: 'STRÖER', logo: 'STRÖER' },
    { name: 'Wiesbaden', logo: 'WIESBADEN 🏛️' }
  ]

  const features = [
    {
      title: 'Automations',
      description: 'If + Task is assigned to Client',
      icon: '👤',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Workload Overview',
      description: 'Oh, Carla is overbooked',
      user: 'Carla',
      avatar: '👩',
      icon: '📊',
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      title: 'Calendar Integration',
      description: 'Rebranding AC. Brand review',
      date: 'July',
      time: '16:00',
      icon: '📅',
      color: 'bg-purple-50 border-purple-200'
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Company Logos Banner */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-sm border border-gray-200/50 mx-auto max-w-fit">
              <div className="flex items-center space-x-2">
                <motion.button
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-200 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">→</span>
                  Why awork
                </motion.button>
                <span className="text-gray-700 text-sm">Find out why 4,000 teams chose awork.</span>
              </div>
            </div>
          </motion.div>

          {/* Company Logos Grid */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center opacity-60">
              {companyLogos.map((company, index) => (
                <motion.div
                  key={index}
                  className="text-gray-600 font-medium text-sm text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.6, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {company.logo}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              So <span className="text-purple-500">simple</span> that everyone
              <br />
              really <span className="inline-flex space-x-2 items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full inline-flex items-center justify-center">
                  <span className="text-xs">👨</span>
                </span>
                <span className="w-8 h-8 bg-blue-400 rounded-full inline-flex items-center justify-center">
                  <span className="text-xs">👩</span>
                </span>
                <span className="w-8 h-8 bg-green-400 rounded-full inline-flex items-center justify-center">
                  <span className="text-xs">👨</span>
                </span>
              </span> <span className="text-blue-500">uses it.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Just click through the tool.
            </p>
            <div className="flex items-center justify-center mt-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">👩</span>
              </div>
              <div>
                <p className="text-sm text-gray-900 font-medium">Lisa</p>
                <p className="text-sm text-gray-600">Project Lead</p>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl p-6 border-2 ${feature.color} relative overflow-hidden`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="relative z-10">
                  <div className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                    {feature.title}
                  </div>
                  
                  {feature.title === 'Automations' && (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">👤</span>
                        </div>
                        <span className="text-sm text-gray-700">If + Task is assigned to Client</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">🔄</span>
                        </div>
                        <span className="text-sm text-gray-700">If + Project status set to done</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">⏰</span>
                        </div>
                        <span className="text-sm text-gray-700">If + Project budget is reached</span>
                      </div>
                    </div>
                  )}

                  {feature.title === 'Workload Overview' && (
                    <div className="space-y-3">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-white">👩</span>
                        </div>
                        <div className="text-lg font-semibold text-gray-900">Design</div>
                        <div className="text-sm text-gray-600">Carla</div>
                        <div className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs font-medium mt-2 inline-block">
                          -4h
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.title === 'Calendar Integration' && (
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-500">July</span>
                          <div className="flex space-x-1">
                            <span className="text-xs">Tu.</span>
                            <span className="text-xs">We.</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-xs text-center mb-2">
                          <span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span>
                        </div>
                        <div className="bg-blue-100 rounded p-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span>16:00</span>
                            <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                              Connect Calendars
                            </button>
                          </div>
                          <div className="text-gray-700 mt-1">
                            Rebranding AC.<br />Brand review
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SimplicitySection 