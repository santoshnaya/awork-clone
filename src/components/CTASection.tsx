'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Phone, Calendar } from 'lucide-react'

const CTASection = () => {
  const supportOptions = [
    {
      title: 'Chat support',
      subtitle: 'Quick responses via live chat',
      icon: MessageCircle,
      buttonText: 'Start chat',
      buttonIcon: ArrowRight,
      color: 'bg-purple-50 border-purple-200',
      iconBg: 'bg-purple-500',
      buttonBg: 'bg-gray-900'
    },
    {
      title: 'Phone support',
      subtitle: 'Talk to us on the phone',
      icon: Phone,
      buttonText: 'Call us',
      buttonIcon: ArrowRight,
      color: 'bg-blue-50 border-blue-200',
      iconBg: 'bg-blue-500',
      buttonBg: 'bg-gray-900'
    },
    {
      title: 'Consulting',
      subtitle: 'Free demo and consultation',
      icon: Calendar,
      buttonText: 'Book appointment',
      buttonIcon: ArrowRight,
      color: 'bg-pink-50 border-pink-200',
      iconBg: 'bg-pink-500',
      buttonBg: 'bg-gray-900'
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 relative overflow-hidden">
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
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              <span className="text-purple-500">Easy-peasy,</span> get
              <br />
              started{' '}
              <span className="inline-flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-full inline-flex items-center justify-center mr-2">
                  <span className="text-white text-xs">✓</span>
                </span>
                <span className="w-8 h-8 bg-green-400 rounded-full inline-flex items-center justify-center">
                  <span className="text-xs">👨</span>
                </span>
              </span>{' '}
              <span className="text-blue-500">right away.</span>
            </h2>
          </motion.div>

          {/* Support Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl p-8 border-2 ${option.color} relative overflow-hidden text-center`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                {/* Icon */}
                <motion.div
                  className="mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 ${option.iconBg} rounded-2xl flex items-center justify-center mx-auto`}>
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600">
                    {option.subtitle}
                  </p>
                </div>

                {/* Button */}
                <motion.button
                  className={`${option.buttonBg} text-white px-6 py-3 rounded-full font-medium flex items-center mx-auto hover:bg-gray-800 transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <option.buttonIcon className="mr-2 h-4 w-4" />
                  {option.buttonText}
                </motion.button>

                {/* Decorative elements */}
                {index === 0 && (
                  <>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-100 rounded-full opacity-50"></div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-200 rounded-full opacity-30"></div>
                  </>
                )}
                {index === 1 && (
                  <>
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-100 rounded-full opacity-40"></div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-200 rounded-full opacity-60"></div>
                  </>
                )}
                {index === 2 && (
                  <>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-pink-100 rounded-full opacity-50"></div>
                    <div className="absolute -bottom-6 -left-6 w-18 h-18 bg-pink-200 rounded-full opacity-30"></div>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* Decorative 3D Hand */}
          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Hand with Apple Watch */}
              <div className="w-32 h-48 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-3xl relative transform rotate-12">
                {/* Fingers */}
                <div className="absolute -top-8 left-4 w-4 h-16 bg-yellow-600 rounded-full transform -rotate-12"></div>
                <div className="absolute -top-10 left-8 w-4 h-18 bg-yellow-600 rounded-full transform rotate-3"></div>
                <div className="absolute -top-8 left-12 w-4 h-16 bg-yellow-600 rounded-full transform rotate-12"></div>
                <div className="absolute -top-6 left-16 w-4 h-12 bg-yellow-600 rounded-full transform rotate-20"></div>
                
                {/* Thumb */}
                <div className="absolute top-8 -left-6 w-6 h-12 bg-yellow-600 rounded-full transform -rotate-45"></div>
                
                {/* Apple Watch */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gray-800 rounded-lg">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg m-1">
                    <div className="w-8 h-8 bg-gray-700 rounded-lg m-1"></div>
                  </div>
                  {/* Watch band */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-600 rounded-t-lg"></div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-600 rounded-b-lg"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection 