'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Product', hasDropdown: true },
    { name: 'Why awork?', hasDropdown: false },
    { name: 'Pricing', hasDropdown: false },
    { name: 'Resources', hasDropdown: true },
    { name: 'About us', hasDropdown: false }
  ]

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              <span className="inline-flex items-center">
                <div className="w-8 h-8 bg-gray-900 rounded-lg mr-2 flex items-center justify-center">
                  <span className="text-white text-sm">🤖</span>
                </div>
                awork
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>
              </div>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">🇬🇧</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              Login
            </button>
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-purple-700 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">→</span>
              Start free trial
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="lg:hidden bg-white border-t"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                className="block w-full text-left text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t">
              <button className="block w-full text-left text-gray-600 mb-4">
                Login
              </button>
              <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-full">
                Start free trial
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header 