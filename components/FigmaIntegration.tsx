'use client'

import { motion } from 'framer-motion'
import { Figma, Download, Share2, Code, Zap, CheckCircle } from 'lucide-react'

export default function FigmaIntegration() {
  const integrationFeatures = [
    {
      icon: Download,
      title: 'Export Components',
      description: 'Export your Figma components directly to React, Vue, or HTML with one click.',
      color: 'text-figma-blue'
    },
    {
      icon: Share2,
      title: 'Real-time Sync',
      description: 'Changes in Figma automatically sync to your development environment.',
      color: 'text-figma-green'
    },
    {
      icon: Code,
      title: 'Code Generation',
      description: 'Generate production-ready code from your Figma designs automatically.',
      color: 'text-figma-purple'
    },
    {
      icon: Zap,
      title: 'Design Tokens',
      description: 'Extract colors, typography, and spacing as design tokens for consistency.',
      color: 'text-figma-orange'
    }
  ]

  return (
    <section id="figma" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-figma-blue text-sm font-medium mb-6"
          >
            <Figma className="h-4 w-4 mr-2" />
            Seamless Figma Integration
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Connect Figma to your
            <span className="text-figma-blue"> development workflow</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Bridge the gap between design and development with our powerful Figma integration. 
            Export components, sync design tokens, and generate code automatically.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Integration Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {integrationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className={`p-3 rounded-lg bg-gray-50 ${feature.color}`}>
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
              </motion.div>
            ))}
          </motion.div>

          {/* Figma Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Figma-like Header */}
              <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Figma className="h-6 w-6 text-white" />
                  <span className="text-white font-medium">FigmaUX Integration</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Panel - Figma Design */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-figma-blue/20 to-figma-purple/20 rounded-lg p-4">
                      <div className="text-sm font-medium text-gray-900 mb-2">Button Component</div>
                      <div className="space-y-2">
                        <div className="h-8 bg-figma-blue rounded-lg"></div>
                        <div className="h-8 bg-gray-200 rounded-lg"></div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm font-medium text-gray-900 mb-2">Design Tokens</div>
                      <div className="space-y-1 text-xs text-gray-600">
                        <div>Primary: #18A0FB</div>
                        <div>Secondary: #8B5CF6</div>
                        <div>Success: #10B981</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Panel - Generated Code */}
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-300 mb-3">Generated React Code</div>
                    <div className="space-y-2 text-xs text-gray-400">
                      <div className="text-figma-blue">const Button = (&#123; children, variant &#125;) =&gt; &#123;</div>
                      <div className="ml-4 text-figma-green">const baseClasses = "px-4 py-2 rounded-lg"</div>
                      <div className="ml-4 text-figma-green">const variantClasses = variant === "primary" ? "bg-blue-500" : "bg-gray-200"</div>
                      <div className="ml-4">return (</div>
                      <div className="ml-8">&lt;button className=&#123;`&#123;baseClasses&#125; &#123;variantClasses&#125;`&#125;&gt;</div>
                      <div className="ml-12">&#123;children&#125;</div>
                      <div className="ml-8">&lt;/button&gt;</div>
                      <div className="ml-4">)</div>
                      <div>&#125;</div>
                    </div>
                  </div>
                </div>

                {/* Integration Status */}
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-green-800">Integration Active</span>
                  </div>
                  <div className="text-xs text-green-700 mt-1">Components synced successfully</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-figma-blue/10 to-figma-purple/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to connect your Figma workflow?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Install our Figma plugin and start exporting components in minutes. 
              No complex setup required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary flex items-center space-x-2">
                <Figma className="h-5 w-5" />
                <span>Install Figma Plugin</span>
              </button>
              <button className="btn-secondary">
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 