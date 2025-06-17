'use client'

import { motion } from 'framer-motion'
import { Calendar, Plus, Search, Clock, ArrowRight } from 'lucide-react'

const PlanningSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              The only tool that
              <br />
              makes <span className="text-purple-500">planning</span>
              <br />
              actually work.
            </h2>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            className="relative mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Floating Action Buttons */}
            <motion.div
              className="absolute -top-8 left-8 z-20"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-lg p-2 border border-gray-200">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  Connect calendar
                </button>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-4 right-12 z-20"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-lg p-2 border border-gray-200">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                  <Plus className="mr-2 h-4 w-4" />
                  Project
                </button>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-16 right-4 z-20"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-lg p-2 border border-gray-200 flex items-center">
                <Clock className="mr-2 h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-600">40h</span>
              </div>
            </motion.div>

            {/* Main Dashboard */}
            <div className="bg-white rounded-2xl shadow-2xl mx-auto max-w-6xl overflow-hidden border border-gray-200/50">
              {/* Dashboard Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">🤖</span>
                    </div>
                    <span className="font-semibold text-gray-900">awork</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <button className="text-sm text-gray-600 hover:text-gray-900">⏰</button>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column - Tasks */}
                  <div className="lg:col-span-2 space-y-4">
                    {/* Today tasks */}
                    <div className="bg-pink-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900 flex items-center">
                          <span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
                          today
                        </h3>
                        <span className="text-sm text-gray-500">In Progress</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white">👨</span>
                          </div>
                          <span className="text-sm text-gray-700">Review design mockups</span>
                        </div>
                      </div>
                    </div>

                    {/* Done tasks */}
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900 flex items-center">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                          Done
                        </h3>
                      </div>
                      <div className="text-sm text-gray-600">All tasks completed ✓</div>
                    </div>
                  </div>

                  {/* Right Column - Project Info */}
                  <div className="space-y-4">
                    {/* New Project Card */}
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <button className="w-full text-left">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-blue-900">📁 New Project</span>
                          <ArrowRight className="h-4 w-4 text-blue-600" />
                        </div>
                      </button>
                    </div>

                    {/* Progress indicator */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-medium text-gray-900">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>

                    {/* Timer */}
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-center justify-center">
                        <div className="bg-purple-500 text-white px-4 py-2 rounded-full flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          <span className="font-mono text-sm">0:42</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -bottom-8 left-12 bg-white rounded-lg shadow-lg p-3 border border-gray-200"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-200 inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Start for free
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PlanningSection 