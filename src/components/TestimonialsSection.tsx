'use client'

import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

const TestimonialsSection = () => {
  const faqs = [
    'Who is awork built for?',
    "What's special about awork?",
    'Who is behind awork?',
    'Where is my data stored?',
    'How much does awork cost?',
    'For which tool is awork can alternative?',
    'Are there any other planning resources from awork?'
  ]

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* FAQ Heading */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Frequently <span className="text-blue-500">asked</span>
              <br />
              <span className="inline-flex items-center">
                <span className="w-12 h-12 bg-blue-500 rounded-full inline-flex items-center justify-center mr-4">
                  <span className="text-white text-lg">?</span>
                </span>
                <span className="text-blue-500">questions</span>
              </span>{' '}
              & <span className="inline-flex items-center">
                <span className="w-12 h-12 bg-green-500 rounded-full inline-flex items-center justify-center mr-2">
                  <span className="text-white text-lg">✓</span>
                </span>
                <span className="text-green-500">answers</span>
              </span>
            </h2>
          </motion.div>

          {/* FAQ List */}
          <motion.div
            className="max-w-3xl mx-auto mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors cursor-pointer group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {faq}
                    </h3>
                    <Plus className="h-6 w-6 text-gray-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 