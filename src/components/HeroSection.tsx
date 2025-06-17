'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="pt-20 lg:pt-28 pb-12 lg:pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Notification Banner */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-200/50">
            <div className="flex items-center text-sm">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium mr-3">
                New
              </span>
              <span className="text-gray-700">awork Docs for seamless documentation</span>
              <ArrowRight className="ml-2 h-4 w-4 text-gray-500" />
            </div>
          </div>
        </motion.div>

        {/* Main Hero Content */}
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-16 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-gray-900 mb-2">Organise</div>
            <div className="mb-2">
              <span className="text-blue-500">your</span>{' '}
              <span className="text-gray-900">project</span>
            </div>
            <div className="text-gray-900 mb-2">business</div>
            <div className="text-purple-500">efficiently.</div>
          </motion.h1>

          {/* Hero Image/Mockup */}
          <motion.div
            className="relative mt-8 mb-16 px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Main dashboard mockup */}
            <div className="bg-white rounded-xl shadow-xl mx-auto max-w-3xl overflow-hidden border border-gray-200/50">
              {/* Dashboard header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">🤖</span>
                    </div>
                    <span className="font-semibold text-gray-900">awork</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-xs">👩</span>
                    </div>
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-xs">👨</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6">
                {/* Project cards */}
                <div className="space-y-4">
                  {/* ACME Corporate DE - Rebranding */}
                  <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                          <span className="text-sm">💡</span>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">ACME Corporate DE</p>
                          <p className="font-semibold text-gray-900">Rebranding</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                          95%
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Team avatars and project info */}
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
                      <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                      <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                      <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
                    </div>
                    <p className="text-sm text-gray-600">Lisa - Project Lead</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements around the mockup */}
            <motion.div
              className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200/50"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            </motion.div>

            <motion.div
              className="absolute -top-8 -right-8 bg-white rounded-lg shadow-lg p-3 border border-gray-200/50"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 left-8 bg-white rounded-lg shadow-lg p-3 border border-gray-200/50"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2.8, repeat: Infinity }}
            >
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 