'use client'

import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function DesignSystem() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const colors = [
    { name: 'Primary Blue', hex: '#18A0FB', class: 'bg-figma-blue' },
    { name: 'Purple', hex: '#8B5CF6', class: 'bg-figma-purple' },
    { name: 'Green', hex: '#10B981', class: 'bg-figma-green' },
    { name: 'Orange', hex: '#F59E0B', class: 'bg-figma-orange' },
    { name: 'Red', hex: '#EF4444', class: 'bg-figma-red' },
  ]

  const copyToClipboard = async (text: string, colorName: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedColor(colorName)
      setTimeout(() => setCopiedColor(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <section id="design-system" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Comprehensive
            <span className="text-figma-blue"> Design System</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Built with consistency and scalability in mind. Our design system ensures your products look and feel amazing across all platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Color Palette */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Color Palette</h3>
            <div className="space-y-4">
              {colors.map((color) => (
                <div key={color.name} className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg ${color.class} shadow-md`}></div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{color.name}</div>
                    <div className="text-sm text-gray-600">{color.hex}</div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(color.hex, color.name)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    {copiedColor === color.name ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-600" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Typography</h3>
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">Heading 1</div>
                <div className="text-sm text-gray-600">48px / Bold / Inter</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 mb-2">Heading 2</div>
                <div className="text-sm text-gray-600">24px / Semibold / Inter</div>
              </div>
              <div>
                <div className="text-lg font-medium text-gray-900 mb-2">Body Large</div>
                <div className="text-sm text-gray-600">18px / Medium / Inter</div>
              </div>
              <div>
                <div className="text-base text-gray-900 mb-2">Body Regular</div>
                <div className="text-sm text-gray-600">16px / Regular / Inter</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-2">Caption</div>
                <div className="text-sm text-gray-600">14px / Regular / Inter</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Component Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Component Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Buttons */}
            <div className="card">
              <h4 className="font-semibold text-gray-900 mb-4">Buttons</h4>
              <div className="space-y-3">
                <button className="btn-primary w-full">Primary Button</button>
                <button className="btn-secondary w-full">Secondary Button</button>
              </div>
            </div>

            {/* Input Fields */}
            <div className="card">
              <h4 className="font-semibold text-gray-900 mb-4">Input Fields</h4>
              <div className="space-y-3">
                <input 
                  type="text" 
                  placeholder="Enter your email" 
                  className="input-field"
                />
                <input 
                  type="password" 
                  placeholder="Enter your password" 
                  className="input-field"
                />
              </div>
            </div>

            {/* Cards */}
            <div className="card">
              <h4 className="font-semibold text-gray-900 mb-4">Cards</h4>
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-sm font-medium text-blue-900">Info Card</div>
                  <div className="text-xs text-blue-700 mt-1">This is an example card</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-sm font-medium text-green-900">Success Card</div>
                  <div className="text-xs text-green-700 mt-1">Operation completed</div>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="card">
              <h4 className="font-semibold text-gray-900 mb-4">Badges</h4>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">New</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Beta</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 