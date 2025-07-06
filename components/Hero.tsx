'use client'

import { motion } from 'framer-motion'
import { Figma, ArrowRight, Play, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-figma-blue text-sm font-medium mb-8"
          >
            <Star className="h-4 w-4 mr-2" />
            New: Advanced Figma Integration
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Design Better
            <span className="text-figma-blue"> UX</span>
            <br />
            with Figma
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Create stunning user experiences with our comprehensive design system and seamless Figma integration. 
            Build, prototype, and collaborate like never before.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button className="btn-primary flex items-center space-x-2 px-8 py-3 text-lg">
              <span>Start Designing</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="btn-secondary flex items-center space-x-2 px-8 py-3 text-lg">
              <Play className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-figma-blue mb-2">10K+</div>
              <div className="text-gray-600">Designers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-figma-purple mb-2">50K+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-figma-green mb-2">99%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 relative"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-figma-blue/20 to-figma-purple/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Figma className="h-8 w-8 text-figma-blue" />
                  <span className="text-lg font-semibold text-gray-900">FigmaUX Demo</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
                <div className="bg-gradient-to-br from-figma-blue/10 to-figma-purple/10 rounded-lg p-4">
                  <div className="text-center text-sm text-gray-600">
                    Interactive Design Preview
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 