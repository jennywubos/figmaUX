'use client'

import { motion } from 'framer-motion'
import { 
  Palette, 
  Users, 
  Zap, 
  Shield, 
  Smartphone, 
  Globe,
  CheckCircle
} from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Palette,
      title: 'Design System',
      description: 'Comprehensive design tokens, components, and guidelines for consistent UX across all platforms.',
      color: 'text-figma-blue'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Real-time collaboration with your team using advanced commenting and version control.',
      color: 'text-figma-purple'
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Create interactive prototypes in minutes with our intuitive drag-and-drop interface.',
      color: 'text-figma-orange'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SSO, audit logs, and granular permission controls.',
      color: 'text-figma-green'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Design for all devices with automatic responsive breakpoints and preview modes.',
      color: 'text-figma-red'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Lightning-fast loading times with our global content delivery network.',
      color: 'text-figma-blue'
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Everything you need for
            <span className="text-figma-blue"> exceptional UX</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Powerful features designed to streamline your design workflow and create amazing user experiences.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors duration-200 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-figma-blue/10 to-figma-purple/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to transform your design workflow?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of designers who are already creating amazing experiences with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Start Free Trial</span>
              </button>
              <button className="btn-secondary">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 