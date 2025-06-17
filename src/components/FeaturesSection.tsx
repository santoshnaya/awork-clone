'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      title: "Deliver all projects on time.",
      description: "Keep track of deadlines and ensure nothing falls through the cracks.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Handle last minute requests fast.",
      description: "Quickly adapt to changing requirements and urgent tasks.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Be ready to report on the team's workload.",
      description: "Get comprehensive insights into your team's capacity and progress.",
      gradient: "from-pink-500 to-red-600"
    }
  ]

  const teamMembers = [
    { name: "Lisa", bg: "bg-blue-500", isActive: true },
    { name: "John", bg: "bg-yellow-500", isActive: false },
    { name: "Mike", bg: "bg-green-500", isActive: false },
    { name: "Sarah", bg: "bg-purple-500", isActive: false }
  ]

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 mb-4">Lisa</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Project Management
            </h2>
          </motion.div>

          {/* Features Grid */}
          <div className="space-y-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {feature.title.split(' ').map((word, wordIndex) => {
                    if (word === 'projects' || word === 'requests' || word === "team's") {
                      return (
                        <span key={wordIndex} className="text-purple-500">
                          {word}{' '}
                        </span>
                      )
                    }
                    if (word === 'minute' || word === 'workload.') {
                      return (
                        <span key={wordIndex} className="text-purple-500">
                          {word}{' '}
                        </span>
                      )
                    }
                    return word + ' '
                  })}
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Learn more
            </motion.button>
          </motion.div>

          {/* Team Member Navigation */}
          <motion.div
            className="flex items-center justify-center space-x-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {teamMembers.map((member) => (
              <motion.button
                key={member.name}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  member.bg
                } ${member.isActive ? 'ring-4 ring-blue-200 scale-110' : 'hover:scale-105'}`}
                whileHover={{ scale: member.isActive ? 1.1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white text-sm font-medium">
                  {member.name.charAt(0)}
                </span>
              </motion.button>
            ))}
            
            {/* Right arrow */}
            <motion.button
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="h-5 w-5 text-gray-600" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection 