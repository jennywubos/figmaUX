'use client'

import { motion } from 'framer-motion'
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Globe,
  Cloud,
  Server,
  Database
} from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small projects and startups',
      features: [
        '2 vCPU, 4GB RAM',
        '50GB SSD Storage',
        '1TB Bandwidth',
        'Basic Monitoring',
        'Email Support',
        '99.9% Uptime SLA'
      ],
      notIncluded: [
        'Advanced Analytics',
        'Load Balancing',
        'Auto-scaling',
        'Priority Support'
      ],
      popular: false,
      color: 'border-gray-200',
      bgColor: 'bg-white'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '8 vCPU, 16GB RAM',
        '200GB SSD Storage',
        '5TB Bandwidth',
        'Advanced Monitoring',
        'Load Balancing',
        'Auto-scaling',
        'Priority Support',
        '99.95% Uptime SLA'
      ],
      notIncluded: [
        'Dedicated Support',
        'Custom SLAs'
      ],
      popular: true,
      color: 'border-cloud-blue',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50'
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large-scale applications',
      features: [
        '32 vCPU, 64GB RAM',
        '1TB SSD Storage',
        'Unlimited Bandwidth',
        'Advanced Analytics',
        'Global CDN',
        'Dedicated Support',
        'Custom SLAs',
        '99.99% Uptime SLA',
        'SLA Credits',
        'Custom Integrations'
      ],
      notIncluded: [],
      popular: false,
      color: 'border-gray-200',
      bgColor: 'bg-white'
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Simple, Transparent
            <span className="gradient-text"> Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Choose the perfect plan for your needs. Scale up or down anytime. 
            No hidden fees, no surprises.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl border-2 ${plan.color} ${plan.bgColor} p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cloud-blue to-cloud-purple text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-success-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature) => (
                  <div key={feature} className="flex items-center opacity-50">
                    <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                plan.popular 
                  ? 'btn-primary' 
                  : 'btn-secondary'
              }`}>
                {plan.popular ? 'Get Started' : 'Choose Plan'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Features Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="card"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Feature Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Starter</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Professional</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">Compute Resources</td>
                  <td className="py-4 px-6 text-center text-gray-600">2 vCPU, 4GB RAM</td>
                  <td className="py-4 px-6 text-center text-gray-600">8 vCPU, 16GB RAM</td>
                  <td className="py-4 px-6 text-center text-gray-600">32 vCPU, 64GB RAM</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">Storage</td>
                  <td className="py-4 px-6 text-center text-gray-600">50GB SSD</td>
                  <td className="py-4 px-6 text-center text-gray-600">200GB SSD</td>
                  <td className="py-4 px-6 text-center text-gray-600">1TB SSD</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">Bandwidth</td>
                  <td className="py-4 px-6 text-center text-gray-600">1TB</td>
                  <td className="py-4 px-6 text-center text-gray-600">5TB</td>
                  <td className="py-4 px-6 text-center text-gray-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">Uptime SLA</td>
                  <td className="py-4 px-6 text-center text-gray-600">99.9%</td>
                  <td className="py-4 px-6 text-center text-gray-600">99.95%</td>
                  <td className="py-4 px-6 text-center text-gray-600">99.99%</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">Support</td>
                  <td className="py-4 px-6 text-center text-gray-600">Email</td>
                  <td className="py-4 px-6 text-center text-gray-600">Priority</td>
                  <td className="py-4 px-6 text-center text-gray-600">Dedicated</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">Auto-scaling</td>
                  <td className="py-4 px-6 text-center">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 text-success-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 text-success-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-gray-900">Advanced Analytics</td>
                  <td className="py-4 px-6 text-center">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <X className="h-5 w-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 text-success-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a custom solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact our sales team for custom pricing and enterprise solutions. 
              We'll work with you to find the perfect fit for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Contact Sales</span>
              </button>
              <button className="btn-secondary">
                Start Free Trial
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 