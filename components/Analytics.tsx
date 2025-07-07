'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  BarChart3, 
  PieChart,
  LineChart,
  Globe,
  Server,
  Database,
  Users
} from 'lucide-react'

export default function Analytics() {
  const analyticsData = [
    {
      title: 'Total Requests',
      value: '2.4M',
      change: '+12.5%',
      trend: 'up',
      icon: Activity,
      color: 'text-cloud-blue'
    },
    {
      title: 'Response Time',
      value: '45ms',
      change: '-8.2%',
      trend: 'down',
      icon: TrendingDown,
      color: 'text-success-500'
    },
    {
      title: 'Error Rate',
      value: '0.02%',
      change: '-15.3%',
      trend: 'down',
      icon: TrendingDown,
      color: 'text-success-500'
    },
    {
      title: 'Active Users',
      value: '12.8K',
      change: '+5.7%',
      trend: 'up',
      icon: Users,
      color: 'text-cloud-purple'
    }
  ]

  const chartData = [
    { name: 'Compute', value: 45, color: '#0066FF' },
    { name: 'Storage', value: 25, color: '#10B981' },
    { name: 'Network', value: 20, color: '#7C3AED' },
    { name: 'Database', value: 10, color: '#F59E0B' }
  ]

  const performanceData = [
    { time: '00:00', cpu: 45, memory: 60, network: 30 },
    { time: '04:00', cpu: 52, memory: 65, network: 35 },
    { time: '08:00', cpu: 78, memory: 80, network: 55 },
    { time: '12:00', cpu: 85, memory: 85, network: 70 },
    { time: '16:00', cpu: 92, memory: 90, network: 80 },
    { time: '20:00', cpu: 75, memory: 75, network: 60 },
    { time: '24:00', cpu: 50, memory: 62, network: 32 }
  ]

  return (
    <section id="analytics" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Advanced
            <span className="gradient-text"> Analytics</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Deep insights into your application performance, user behavior, and infrastructure metrics. 
            Make data-driven decisions with real-time analytics.
          </motion.p>
        </div>

        {/* Analytics Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {analyticsData.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  <div className={`flex items-center text-sm mt-1 ${
                    metric.trend === 'up' ? 'text-success-500' : 'text-success-500'
                  }`}>
                    <metric.icon className="h-4 w-4 mr-1" />
                    {metric.change}
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-gray-50 ${metric.color}`}>
                  <metric.icon className="h-6 w-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Resource Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Resource Distribution</h3>
              <div className="space-y-4">
                {chartData.map((item, index) => (
                  <div key={item.name} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 min-w-0 flex-1">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm font-medium text-gray-900">{item.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-500" 
                          style={{ 
                            width: `${item.value}%`, 
                            backgroundColor: item.color 
                          }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900 w-8">{item.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Performance Trends */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance Trends (24h)</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>CPU Usage</span>
                  <span>Memory Usage</span>
                  <span>Network I/O</span>
                </div>
                <div className="relative h-32">
                  {/* Chart Lines */}
                  <svg className="w-full h-full" viewBox="0 0 300 120">
                    {/* CPU Line */}
                    <polyline
                      fill="none"
                      stroke="#0066FF"
                      strokeWidth="2"
                      points={performanceData.map((d, i) => `${(i * 300) / 6},${120 - (d.cpu * 120) / 100}`).join(' ')}
                    />
                    {/* Memory Line */}
                    <polyline
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2"
                      points={performanceData.map((d, i) => `${(i * 300) / 6},${120 - (d.memory * 120) / 100}`).join(' ')}
                    />
                    {/* Network Line */}
                    <polyline
                      fill="none"
                      stroke="#7C3AED"
                      strokeWidth="2"
                      points={performanceData.map((d, i) => `${(i * 300) / 6},${120 - (d.network * 120) / 100}`).join(' ')}
                    />
                  </svg>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  {performanceData.map((d, i) => (
                    <span key={i}>{d.time}</span>
                  ))}
                </div>
                <div className="flex items-center space-x-4 text-xs">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-0.5 bg-cloud-blue"></div>
                    <span>CPU</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-0.5 bg-success-500"></div>
                    <span>Memory</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-0.5 bg-cloud-purple"></div>
                    <span>Network</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Geographic Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Geographic Distribution</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cloud-blue mb-2">45%</div>
                <div className="text-sm text-gray-600">North America</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-cloud-blue h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success-500 mb-2">28%</div>
                <div className="text-sm text-gray-600">Europe</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-success-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cloud-purple mb-2">18%</div>
                <div className="text-sm text-gray-600">Asia Pacific</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-cloud-purple h-2 rounded-full" style={{ width: '18%' }}></div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning-500 mb-2">9%</div>
                <div className="text-sm text-gray-600">Other Regions</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-warning-500 h-2 rounded-full" style={{ width: '9%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get deeper insights with advanced analytics
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Unlock powerful analytics features with our enterprise plan. 
              Custom dashboards, real-time alerts, and advanced reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Upgrade to Pro</span>
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