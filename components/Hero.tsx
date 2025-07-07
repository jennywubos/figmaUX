'use client'

import { motion } from 'framer-motion'
import { Cloud, ArrowRight, Play, Shield, Zap, Globe, Users } from 'lucide-react'

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
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-cloud-blue text-sm font-medium mb-8"
          >
            <Shield className="h-4 w-4 mr-2" />
            Enterprise-Grade Security & 99.9% Uptime
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Scale Your Business with
            <span className="gradient-text"> Cloud Platform</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Deploy, manage, and scale your applications with our comprehensive cloud infrastructure. 
            Built for developers, trusted by enterprises worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button className="btn-primary flex items-center space-x-2 px-8 py-3 text-lg">
              <span>Start Free Trial</span>
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
            className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cloud-blue mb-2">10M+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cloud-purple mb-2">50+</div>
              <div className="text-gray-600">Global Regions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success-500 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning-500 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </motion.div>
        </div>

        {/* Hero Image/Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 relative"
        >
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cloud-blue/20 to-cloud-purple/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-white/95 rounded-2xl shadow-2xl p-8 border border-gray-100">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-cloud-blue to-cloud-purple rounded-lg">
                    <Cloud className="h-6 w-6 text-white" />
                  </div>
                                     <span className="text-lg font-semibold text-gray-900">ZhengyanWU CloudPlatform Dashboard</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-warning-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-error-500 rounded-full"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Services Overview */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Services Overview</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                        <span className="text-sm">Compute Instances</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">12 Active</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                        <span className="text-sm">Database Clusters</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">5 Running</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                        <span className="text-sm">Load Balancers</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">3 Active</span>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Performance</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>CPU Usage</span>
                        <span className="font-medium">68%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-cloud-blue h-2 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Memory Usage</span>
                        <span className="font-medium">45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-success-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Storage Usage</span>
                        <span className="font-medium">82%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-warning-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Quick Actions</h3>
                  <div className="space-y-2">
                    <button className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-cloud-blue" />
                        <span className="text-sm">Deploy New Instance</span>
                      </div>
                    </button>
                    <button className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4 text-success-500" />
                        <span className="text-sm">Scale Resources</span>
                      </div>
                    </button>
                    <button className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-cloud-purple" />
                        <span className="text-sm">Manage Team</span>
                      </div>
                    </button>
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