'use client'

import { motion } from 'framer-motion'
import { Zap, Battery, Shield, Ruler, Factory, Truck } from 'lucide-react'

export default function Advantages() {
  const advantages = [
    {
      icon: Zap,
      title: 'Быстрый монтаж',
      description: 'Установка камеры от 3 до 7 дней в зависимости от сложности проекта',
    },
    {
      icon: Battery,
      title: 'Энергоэффективность',
      description: 'Современное оборудование с низким энергопотреблением и высоким КПД',
    },
    {
      icon: Shield,
      title: 'Надежные материалы',
      description: 'Сэндвич-панели с PIR утеплителем и качественное холодильное оборудование',
    },
    {
      icon: Ruler,
      title: 'Индивидуальные размеры',
      description: 'Проектирование камер любых размеров и конфигураций под ваши задачи',
    },
    {
      icon: Factory,
      title: 'Производство под заказ',
      description: 'Собственное производство позволяет контролировать качество на всех этапах',
    },
    {
      icon: Truck,
      title: 'Доставка по РФ',
      description: 'Организуем доставку и монтаж в любой регион России',
    },
  ]

  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[1280px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-[800px] mx-auto"
        >
          <h2 className="text-[56px] leading-tight font-bold mb-4 lg:text-[56px] md:text-[42px] sm:text-[36px]">
            Наши преимущества
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Почему выбирают нас
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50/50 to-white p-8 rounded-[18px] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 flex-shrink-0">
                <advantage.icon className="text-white" size={26} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {advantage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
