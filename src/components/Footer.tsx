'use client'

import { motion } from 'framer-motion'


const Footer = () => {
  const footerLinks = {
    awork: [
      'Home',
      'Pricing',
      'Roadmap',
      'Integrations'
    ],
    About: [
      'About us',
      'Jobs',
      'Press',
      'Blog',
      'Partner program'
    ],
    Support: [
      'Webinars',
      'Community',
      'Help center',
      'Developer portal',
      'System status'
    ]
  }

  return (
    <>
      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* 3D Hand Illustration */}
            <motion.div
              className="flex justify-center mb-12"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Hand with watch */}
                <div className="w-40 h-56 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-3xl relative transform -rotate-12">
                  {/* Fingers */}
                  <div className="absolute -top-10 left-6 w-5 h-20 bg-yellow-600 rounded-full transform -rotate-12"></div>
                  <div className="absolute -top-12 left-12 w-5 h-22 bg-yellow-600 rounded-full transform rotate-3"></div>
                  <div className="absolute -top-10 left-18 w-5 h-20 bg-yellow-600 rounded-full transform rotate-12"></div>
                  <div className="absolute -top-8 left-24 w-5 h-16 bg-yellow-600 rounded-full transform rotate-20"></div>
                  
                  {/* Thumb */}
                  <div className="absolute top-12 -left-8 w-8 h-16 bg-yellow-600 rounded-full transform -rotate-45"></div>
                  
                  {/* Apple Watch */}
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-gray-800 rounded-xl">
                    <div className="w-14 h-14 bg-gray-900 rounded-xl m-1">
                      <div className="w-12 h-12 bg-gray-700 rounded-xl m-1 flex items-center justify-center">
                        <div className="w-8 h-8 bg-gray-600 rounded-lg"></div>
                      </div>
                    </div>
                    {/* Watch band */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-gray-600 rounded-t-xl"></div>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-gray-600 rounded-b-xl"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Content */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Organise your team
                <br />
                <span className="inline-flex space-x-2 items-center">
                  <span className="w-12 h-12 bg-yellow-400 rounded-full inline-flex items-center justify-center">
                    <span className="text-xs">👨</span>
                  </span>
                  <span className="w-12 h-12 bg-blue-400 rounded-full inline-flex items-center justify-center">
                    <span className="text-xs">👩</span>
                  </span>
                  <span className="w-12 h-12 bg-green-400 rounded-full inline-flex items-center justify-center">
                    <span className="text-xs">👨</span>
                  </span>
                </span>{' '}
                with awork
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Try it 14 days for free – no credit card required.
              </p>
            </motion.div>

            {/* Email Signup Form */}
            <motion.div
              className="max-w-lg mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 border-0 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
                />
                <motion.button
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">🚀</span>
                  Try now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {/* Logo and description */}
              <div className="md:col-span-1">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-white rounded-lg mr-3 flex items-center justify-center">
                    <span className="text-gray-900 text-sm">🤖</span>
                  </div>
                  <span className="text-xl font-bold">awork</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  We are fully compliant with the EU General Data Protection Regulation (GDPR) and guarantee ISO 27001 certified server locations in Europe.
                </p>
                
                {/* App Download Buttons */}
                <div className="space-y-3">
                  <div className="bg-gray-800 rounded-lg px-4 py-2 text-sm">
                    🍎 Download for Desktop
                  </div>
                  <div className="bg-gray-800 rounded-lg px-4 py-2 text-sm">
                    🍎 Download on the App Store
                  </div>
                  <div className="bg-gray-800 rounded-lg px-4 py-2 text-sm">
                    📱 GET IT ON Google Play
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold text-white mb-4">{category}</h3>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 pt-8">
              <div className="text-center text-gray-400 text-sm">
                <p>&copy; 2024 awork GmbH. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer 