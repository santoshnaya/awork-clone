'use client'

import { motion } from 'framer-motion'

const CollaborationSection = () => {
  const features = [
    {
      title: 'Less crisis mode',
      description: 'Stay ahead of deadlines',
      color: 'bg-pink-100',
      textColor: 'text-pink-800',
      position: 'top-20 left-8'
    },
    {
      title: 'Innovation',
      description: 'More room for creativity',
      color: 'bg-yellow-100',
      textColor: 'text-yellow-800',
      position: 'top-32 right-16'
    },
    {
      title: 'Focus',
      description: 'Fewer meetings and emails',
      color: 'bg-blue-100',
      textColor: 'text-blue-800',
      position: 'bottom-32 left-12'
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Designed for
              <br />
              <span className="text-purple-500">happy</span>{' '}
              <span className="inline-flex space-x-2 items-center">
                <span className="w-8 h-8 bg-yellow-400 rounded-full inline-flex items-center justify-center">
                  <span className="text-xs">👨</span>
                </span>
                <span className="w-8 h-8 bg-blue-400 rounded-full inline-flex items-center justify-center">
                  <span className="text-xs">👩</span>
                </span>
                <span className="w-8 h-8 bg-green-400 rounded-full inline-flex items-center justify-center">
                  <span className="text-xs">👨</span>
                </span>
              </span>{' '}
              <span className="text-blue-500">collaboration</span>
            </h2>
          </motion.div>

          {/* Floating Feature Cards */}
          <div className="relative h-96 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`absolute ${feature.position} ${feature.color} rounded-2xl p-6 shadow-lg border-2 border-opacity-20 max-w-xs`}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="text-center">
                  {feature.title === 'Innovation' && (
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-white text-lg">💡</span>
                      </div>
                    </div>
                  )}
                  
                  {feature.title === 'Less crisis mode' && (
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-white text-lg">🚫</span>
                      </div>
                    </div>
                  )}

                  {feature.title === 'Focus' && (
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-white text-lg">🎯</span>
                      </div>
                    </div>
                  )}

                  <h3 className={`text-lg font-bold ${feature.textColor} mb-2`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm ${feature.textColor} opacity-80`}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Central character */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-32 h-40 bg-gradient-to-br from-gray-700 to-gray-900 rounded-t-full relative">
                <div className="absolute top-4 left-6 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute top-4 right-6 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-pink-400 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-gray-800 rounded-b-lg"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-900 rounded-full"></div>
                {/* Arms */}
                <div className="absolute left-0 top-12 w-6 h-20 bg-gray-700 rounded-full transform -rotate-12"></div>
                <div className="absolute right-0 top-12 w-6 h-20 bg-gray-700 rounded-full transform rotate-12"></div>
                {/* Hair */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-orange-400 rounded-t-full"></div>
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute top-8 left-1/4 w-8 h-8 bg-purple-400 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-8 right-1/4 w-6 h-6 bg-green-400 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-1/3 right-8 w-4 h-4 bg-yellow-400 rounded-full"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2.8, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollaborationSection 