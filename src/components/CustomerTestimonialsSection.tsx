'use client'

import { motion } from 'framer-motion'
import { Star, X } from 'lucide-react'

const CustomerTestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Mike Krenzien',
      role: 'Project Manager at Digital Apes',
      avatar: '👨',
      avatarBg: 'bg-blue-500',
      review: "I've been a project manager for over 14 years, and it feels like I've been searching for a proper digital solution for just as long. We now found that solution with awork.",
      platform: 'OMR',
      verified: true
    },
    {
      name: 'Simon Miller',
      role: 'Founder/CEO at smarterPresence',
      avatar: '👨',
      avatarBg: 'bg-yellow-500',
      review: "The efficient workflows and project-related communications facilitated by awork are undoubtedly the best.",
      platform: 'OMR',
      verified: true
    },
    {
      name: 'Swea von Mende',
      role: 'CEO at von Mende',
      avatar: '👩',
      avatarBg: 'bg-purple-500',
      review: "My team is truly excited about awork. We've tested other tools and were not as happy, but now we've found genuine relief and support for everyone.",
      platform: 'YouTube',
      verified: true
    },
    {
      name: 'Stefan Kessels',
      role: 'CEO at foxwork',
      avatar: '👨',
      avatarBg: 'bg-green-500',
      review: "We chose awork because it offers a wealth of features, outshining all the free project management tools while remaining highly flexible. Additionally, it was important to us that our tool of choice receives regular updates.",
      platform: 'OMR',
      verified: true
    },
    {
      name: 'Ulrike Grunwald',
      role: 'Customer Success at Opheo Solutions',
      avatar: '👩',
      avatarBg: 'bg-pink-500',
      review: "awork is incredibly intuitive to use. Everyone gets the hang of it right away and enjoys working with it.",
      platform: 'YouTube',
      verified: true
    },
    {
      name: 'Bernhard Hinsken',
      role: 'Chief Awareness Officer at Surikata',
      avatar: '👨',
      avatarBg: 'bg-orange-500',
      review: "Just had a chat with @awork's support. That's what I call customer-oriented work - very, very good. And the tool is just as capable!",
      platform: 'X',
      verified: true
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Trusted by more than
              <br />
              <span className="text-purple-400">4,000 project teams</span>{' '}
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
                <span className="w-12 h-12 bg-pink-400 rounded-full inline-flex items-center justify-center">
                  <span className="text-xs">👩</span>
                </span>
              </span>
            </h2>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                {/* Platform Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 ${testimonial.avatarBg} rounded-full flex items-center justify-center`}>
                      <span className="text-white text-xs">{testimonial.avatar}</span>
                    </div>
                    <div className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-medium">
                      {testimonial.platform}
                    </div>
                  </div>
                  {testimonial.platform === 'X' && (
                    <X className="h-4 w-4 text-gray-400" />
                  )}
                  {testimonial.platform === 'YouTube' && (
                    <div className="w-4 h-4 bg-red-600 rounded-sm flex items-center justify-center">
                      <span className="text-white text-xs">▶</span>
                    </div>
                  )}
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 ${testimonial.avatarBg} rounded-full flex items-center justify-center`}>
                    <span className="text-white">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {testimonial.review}
                </p>

                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Decorative elements for some cards */}
                {index === 0 && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
                )}
                {index === 2 && (
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500 rounded-full opacity-30"></div>
                )}
                {index === 4 && (
                  <div className="absolute -top-1 -left-1 w-4 h-4 bg-pink-500 rounded-full opacity-40"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerTestimonialsSection 