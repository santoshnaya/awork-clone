'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ProjectManagementSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[0.9] tracking-tight">
              <span className="text-gray-900 block">More than just</span>
              <span className="text-blue-500 block">Project management.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Keep an eye on all <span className="text-purple-500 font-semibold">projects</span> and{' '}
              <span className="text-purple-500 font-semibold">deadlines</span>.
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

          {/* Project Timeline Dashboard */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Navigation arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Dashboard mockup */}
            <div className="bg-white rounded-3xl shadow-2xl mx-auto max-w-6xl overflow-hidden border border-gray-200/50">
              {/* Dashboard header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">🤖</span>
                    </div>
                    <span className="font-semibold text-gray-900">awork</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      + Project
                    </button>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">List</span>
                      <span className="text-sm text-gray-400">Timeline</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                          <span className="text-xs">👩</span>
                        </div>
                        <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                          <span className="text-xs">👨</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline view */}
              <div className="p-6">
                {/* Week headers */}
                <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                  <span>w23</span>
                  <div className="flex space-x-12">
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                    <span>11</span>
                    <span>12</span>
                    <span>13</span>
                  </div>
                  <span>w24</span>
                  <div className="flex space-x-12">
                    <span>15</span>
                    <span>16</span>
                    <span>17</span>
                    <span>18</span>
                  </div>
                  <span>w25</span>
                </div>

                {/* Project timeline bars */}
                <div className="space-y-4">
                  {/* ACME Corporate DE - Rebranding */}
                  <div className="flex items-center">
                    <div className="w-48 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                        <span className="text-sm">💡</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">ACME Corporate DE</p>
                        <p className="font-semibold text-gray-900 text-sm">Rebranding</p>
                      </div>
                    </div>
                    <div className="flex-1 relative">
                      <div className="h-8 bg-green-100 rounded-lg relative overflow-hidden">
                        <div className="h-full bg-green-400 rounded-lg" style={{ width: '95%' }}></div>
                        <div className="absolute inset-0 flex items-center justify-between px-3">
                          <span className="text-xs text-green-800 font-medium">95%</span>
                          <span className="text-xs text-gray-600">today</span>
                        </div>
                      </div>
                      <div className="absolute right-0 top-0 flex items-center space-x-1">
                        <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
                        <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* NCSTN Services - Content audit */}
                  <div className="flex items-center">
                    <div className="w-48 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
                        <span className="text-sm">📋</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">NCSTN Services</p>
                        <p className="font-semibold text-gray-900 text-sm">Content audit</p>
                      </div>
                    </div>
                    <div className="flex-1 relative">
                      <div className="h-8 bg-red-100 rounded-lg relative overflow-hidden">
                        <div className="h-full bg-red-400 rounded-lg" style={{ width: '100%' }}></div>
                        <div className="absolute inset-0 flex items-center justify-between px-3">
                          <span className="text-xs text-red-800 font-medium">27. Nov</span>
                          <span className="text-xs text-red-800">Blocked</span>
                        </div>
                      </div>
                      <div className="absolute right-0 top-0 flex items-center space-x-1">
                        <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                        <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* TikTok & Ship Inc. - TikTok campaign */}
                  <div className="flex items-center">
                    <div className="w-48 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-sm">▶️</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">TikTok & Ship Inc.</p>
                        <p className="font-semibold text-gray-900 text-sm">TikTok campaign</p>
                      </div>
                    </div>
                    <div className="flex-1 relative">
                      <div className="h-8 bg-purple-100 rounded-lg relative overflow-hidden">
                        <div className="h-full bg-purple-400 rounded-lg" style={{ width: '70%' }}></div>
                        <div className="absolute inset-0 flex items-center justify-between px-3">
                          <span className="text-xs text-purple-800 font-medium">70%</span>
                          <span className="text-xs text-purple-800">25. Nov</span>
                        </div>
                      </div>
                      <div className="absolute right-0 top-0 flex items-center space-x-1">
                        <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* ACME Corporate DE - Documentation */}
                  <div className="flex items-center">
                    <div className="w-48 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                        <span className="text-sm">📄</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">ACME Corporate DE</p>
                        <p className="font-semibold text-gray-900 text-sm">Documentation</p>
                      </div>
                    </div>
                    <div className="flex-1 relative">
                      <div className="h-8 bg-green-100 rounded-lg relative overflow-hidden">
                        <div className="h-full bg-green-500 rounded-lg" style={{ width: '100%' }}></div>
                        <div className="absolute inset-0 flex items-center justify-end px-3">
                          <span className="text-xs text-green-800 font-medium">Done</span>
                        </div>
                      </div>
                      <div className="absolute right-0 top-0 flex items-center space-x-1">
                        <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating success indicator */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-green-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-white text-xl">✓</span>
            </motion.div>
          </motion.div>

          {/* Bottom testimonial */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
              </div>
              <p className="text-gray-900 font-semibold">
                More than <span className="text-blue-500">4,000 teams</span> love awork.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectManagementSection 