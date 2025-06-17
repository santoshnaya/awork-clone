'use client'

import { motion } from 'framer-motion'

const CoreBusinessSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Animated Characters and Elements */}
          <motion.div
            className="relative h-96 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Left character */}
            <motion.div
              className="absolute left-0 top-0"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-32 h-40 bg-gradient-to-br from-purple-400 to-purple-600 rounded-t-full relative">
                <div className="absolute top-4 left-6 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute top-4 right-6 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-purple-700 rounded-b-lg"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-purple-800 rounded-full"></div>
                {/* Arms */}
                <div className="absolute left-0 top-12 w-6 h-20 bg-purple-500 rounded-full transform -rotate-12"></div>
                <div className="absolute right-0 top-12 w-6 h-20 bg-purple-500 rounded-full transform rotate-12"></div>
              </div>
            </motion.div>

            {/* Second character with device */}
            <motion.div
              className="absolute left-1/4 top-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-28 h-36 bg-gradient-to-br from-blue-400 to-blue-600 rounded-t-full relative">
                <div className="absolute top-3 left-5 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute top-3 right-5 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-12 bg-blue-700 rounded-b-lg"></div>
                {/* Device in hand */}
                <div className="absolute -right-8 top-8 w-12 h-16 bg-blue-100 rounded-lg border-2 border-blue-300">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mx-auto mt-2"></div>
                </div>
              </div>
            </motion.div>

            {/* Central purple spiral */}
            <motion.div
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-48 h-48 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-full opacity-80"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-full opacity-60"></div>
                <div className="absolute inset-8 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-full opacity-40"></div>
              </div>
            </motion.div>

            {/* Timer widget */}
            <motion.div
              className="absolute right-1/4 top-4 bg-purple-600 text-white px-6 py-3 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-4 bg-white rounded-sm"></div>
                  <div className="w-2 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-sm font-mono">00:02:15</span>
              </div>
            </motion.div>

            {/* Right character */}
            <motion.div
              className="absolute right-0 top-12"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-32 h-40 bg-gradient-to-br from-gray-800 to-black rounded-t-full relative">
                <div className="absolute top-4 left-6 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute top-4 right-6 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-orange-400 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-gray-900 rounded-b-lg"></div>
                {/* Headphones */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-8 border-4 border-gray-700 rounded-t-full"></div>
              </div>
            </motion.div>

            {/* Project status indicators */}
            <motion.div
              className="absolute bottom-16 left-8 bg-white rounded-lg shadow-lg p-3 border border-gray-200"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">👩</span>
                </div>
                <div>
                  <p className="text-xs text-purple-600 font-medium">Review</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-16 right-8 bg-white rounded-lg shadow-lg p-3 border border-gray-200"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">27. Nov</span>
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                  <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-xs text-red-600 font-medium">Blocked</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[0.9] tracking-tight">
              <span className="text-gray-900">The </span><span className="text-purple-500">core</span><span className="text-gray-900"> of your</span>
              <br />
              <span className="text-blue-500">project business.</span>
            </h2>
          </motion.div>

          {/* Bottom testimonial */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-900 font-medium mb-4">Lisa</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CoreBusinessSection 