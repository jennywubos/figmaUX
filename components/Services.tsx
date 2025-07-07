'use client'

import { motion } from 'framer-motion'
import { 
  Server, 
  Database, 
  Globe, 
  Shield, 
  Zap, 
  Cloud,
  Cpu,
  HardDrive,
  Network,
  Lock
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Server,
      title: 'Compute Services',
      description: 'Scalable virtual machines and containers for any workload. Deploy applications with ease.',
      features: ['Auto-scaling', 'Load balancing', 'Container orchestration'],
      color: 'text-cloud-blue',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Database,
      title: 'Database Services',
      description: 'Managed databases with high availability, automatic backups, and global distribution.',
      features: ['Auto-scaling', 'Point-in-time recovery', 'Multi-region replication'],
      color: 'text-success-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Globe,
      title: 'Networking',
      description: 'Global content delivery, load balancing, and secure networking infrastructure.',
      features: ['Global CDN', 'DDoS protection', 'Private networking'],
      color: 'text-cloud-purple',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance certifications and advanced threat protection.',
      features: ['SOC 2 Type II', 'GDPR compliant', 'Advanced encryption'],
      color: 'text-warning-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: HardDrive,
      title: 'Storage Solutions',
      description: 'High-performance block storage, object storage, and file systems for any data need.',
      features: ['99.99% availability', 'Automatic backups', 'Global replication'],
      color: 'text-error-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: Zap,
      title: 'Serverless Computing',
      description: 'Run code without managing servers. Pay only for the compute time you consume.',
      features: ['Auto-scaling', 'Event-driven', 'Pay-per-use'],
      color: 'text-cloud-blue',
      bgColor: 'bg-blue-50'
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Complete Cloud
            <span className="gradient-text"> Infrastructure</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Everything you need to build, deploy, and scale your applications in the cloud. 
            From compute to storage, we've got you covered.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-hover group"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${service.bgColor} ${service.color} group-hover:scale-110 transition-transform duration-200`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-cloud-blue rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
          <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Deploy your first application in minutes. No credit card required for the free tier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary flex items-center space-x-2">
                <Cloud className="h-5 w-5" />
                <span>Deploy Now</span>
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