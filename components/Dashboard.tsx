'use client'

import { motion } from 'framer-motion'
import { 
  Activity, 
  Server, 
  Database, 
  Globe, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  DollarSign
} from 'lucide-react'

export default function Dashboard() {
  const metrics = [
    {
      title: 'Active Instances',
      value: '24',
      change: '+12%',
      trend: 'up',
      icon: Server,
      color: 'text-cloud-blue',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Database Connections',
      value: '1,234',
      change: '+8%',
      trend: 'up',
      icon: Database,
      color: 'text-success-500',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Global Traffic',
      value: '2.4TB',
      change: '+15%',
      trend: 'up',
      icon: Globe,
      color: 'text-cloud-purple',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Monthly Cost',
      value: '$1,847',
      change: '-3%',
      trend: 'down',
      icon: DollarSign,
      color: 'text-warning-500',
      bgColor: 'bg-orange-50'
    }
  ]

  const recentActivity = [
    {
      action: 'New instance deployed',
      service: 'web-server-01',
      time: '2 minutes ago',
      status: 'success',
      icon: CheckCircle
    },
    {
      action: 'Database backup completed',
      service: 'prod-db-cluster',
      time: '15 minutes ago',
      status: 'success',
      icon: CheckCircle
    },
    {
      action: 'High CPU usage detected',
      service: 'app-server-03',
      time: '1 hour ago',
      status: 'warning',
      icon: AlertTriangle
    },
    {
      action: 'Load balancer scaled',
      service: 'lb-frontend',
      time: '2 hours ago',
      status: 'success',
      icon: CheckCircle
    }
  ]

  return (
    <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Real-time
            <span className="gradient-text"> Dashboard</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Monitor your cloud infrastructure in real-time. Get insights into performance, 
            costs, and resource utilization at a glance.
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
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
                    metric.trend === 'up' ? 'text-success-500' : 'text-error-500'
                  }`}>
                    <TrendingUp className={`h-4 w-4 mr-1 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                    {metric.change}
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${metric.bgColor} ${metric.color}`}>
                  <metric.icon className="h-6 w-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resource Usage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Resource Usage</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>CPU Usage</span>
                    <span className="font-medium">68%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-cloud-blue h-3 rounded-full transition-all duration-500" style={{ width: '68%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Memory Usage</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-success-500 h-3 rounded-full transition-all duration-500" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Storage Usage</span>
                    <span className="font-medium">82%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-warning-500 h-3 rounded-full transition-all duration-500" style={{ width: '82%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Network Usage</span>
                    <span className="font-medium">34%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-cloud-purple h-3 rounded-full transition-all duration-500" style={{ width: '34%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`p-1 rounded-full ${
                      activity.status === 'success' ? 'bg-success-100' : 'bg-warning-100'
                    }`}>
                      <activity.icon className={`h-4 w-4 ${
                        activity.status === 'success' ? 'text-success-500' : 'text-warning-500'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.service}</p>
                      <p className="text-xs text-gray-400 flex items-center mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="p-4 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200">
                <Server className="h-6 w-6 text-cloud-blue mb-2" />
                <p className="font-medium text-gray-900">Deploy Instance</p>
                <p className="text-sm text-gray-600">Launch new compute resources</p>
              </button>
              <button className="p-4 text-left bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200">
                <Database className="h-6 w-6 text-success-500 mb-2" />
                <p className="font-medium text-gray-900">Create Database</p>
                <p className="text-sm text-gray-600">Set up managed database</p>
              </button>
              <button className="p-4 text-left bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200">
                <Globe className="h-6 w-6 text-cloud-purple mb-2" />
                <p className="font-medium text-gray-900">Scale Resources</p>
                <p className="text-sm text-gray-600">Adjust capacity as needed</p>
              </button>
              <button className="p-4 text-left bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors duration-200">
                <Users className="h-6 w-6 text-warning-500 mb-2" />
                <p className="font-medium text-gray-900">Manage Team</p>
                <p className="text-sm text-gray-600">Add or remove team members</p>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 