'use client'

import { motion } from 'framer-motion'
import { FileText, MessageSquare, Pencil, Cog, CheckCircle } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      icon: FileText,
      title: 'Заявка',
      description: 'Оставьте заявку на сайте или свяжитесь с нами напрямую',
    },
    {
      icon: MessageSquare,
      title: 'Консультация',
      description: 'Бесплатный выезд специалиста для замера и консультации',
    },
    {
      icon: Pencil,
      title: 'Проектирование',
      description: 'Разработка индивидуального проекта под ваши требования',
    },
    {
      icon: Cog,
      title: 'Производство',
      description: 'Изготовление камеры на собственном производстве',
    },
    {
      icon: CheckCircle,
      title: 'Монтаж',
      description: 'Установка, настройка и запуск холодильной камеры',
    },
  ]

  return (
    <section className="py-[120px] bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-[1280px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-[800px] mx-auto"
        >
          <h2 className="text-[56px] leading-tight font-bold mb-4 lg:text-[56px] md:text-[42px] sm:text-[36px]">
            Этапы работы
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Простой и прозрачный процесс от заявки до запуска
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-[2px] bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600" />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 relative overflow-x-auto lg:overflow-visible">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative min-w-[240px] lg:min-w-0"
              >
                <div className="bg-white p-6 rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 text-center h-full flex flex-col">
                  <div className="bg-blue-600 w-[60px] h-[60px] rounded-xl flex items-center justify-center mx-auto mb-4 relative z-10">
                    <step.icon className="text-white" size={28} />
                  </div>
                  <div className="absolute top-3 right-3 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://t.me/keml00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-blue-600 text-white h-[56px] px-8 rounded-2xl font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg text-[15px]"
          >
            Начать работу
          </a>
        </motion.div>
      </div>
    </section>
  )
}
