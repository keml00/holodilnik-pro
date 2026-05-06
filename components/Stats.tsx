'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Award, Clock, Headphones } from 'lucide-react'

export default function Stats() {
  const stats = [
    { icon: TrendingUp, value: '10+', label: 'лет на рынке' },
    { icon: Award, value: '500+', label: 'реализованных проектов' },
    { icon: Clock, value: '100%', label: 'соблюдение сроков' },
    { icon: Headphones, value: '24/7', label: 'техническая поддержка' },
  ]

  return (
    <section className="py-[70px] bg-white">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-gray-50/50 p-8 rounded-[20px] hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center">
                  <stat.icon className="text-white" size={24} />
                </div>
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
