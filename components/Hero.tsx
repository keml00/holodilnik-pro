'use client'

import { motion } from 'framer-motion'
import { Shield, Thermometer, Factory, Clock } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const features = [
    { icon: Shield, text: 'Гарантия 3 года' },
    { icon: Thermometer, text: 'Любой температурный режим' },
    { icon: Factory, text: 'Собственное производство' },
    { icon: Clock, text: 'Изготовление от 7 дней' },
  ]

  return (
    <section className="pt-[140px] pb-[120px] bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[72px] leading-[0.95] font-bold mb-8 max-w-[700px] lg:text-[72px] md:text-[56px] sm:text-[38px]">
              ХОЛОДИЛЬНЫЕ КАМЕРЫ{' '}
              <span className="text-blue-600">ПОД КЛЮЧ</span>
            </h1>
            <p className="text-lg text-gray-600 leading-[1.7] mb-12 max-w-[560px]">
              Проектирование, производство и монтаж холодильных камер любой сложности.
              Индивидуальные решения для вашего бизнеса.
            </p>

            {/* Features Grid 2x2 */}
            <div className="grid grid-cols-2 gap-5 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white p-5 rounded-[18px] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-white" size={20} />
                  </div>
                  <span className="text-sm font-medium text-gray-700 leading-tight">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://t.me/keml00"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 text-white h-[56px] px-8 rounded-2xl font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg text-[15px]"
              >
                Рассчитать стоимость
              </a>
              <a
                href="#cases"
                className="inline-flex items-center justify-center bg-white text-blue-600 h-[56px] px-8 rounded-2xl font-semibold hover:bg-gray-50 transition-all border-2 border-blue-600 text-[15px]"
              >
                Смотреть проекты
              </a>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl">
              <Image
                src="https://profholod.ru/upload/dev2fun.imagecompress/webp/iblock/e10/hinfradkult4zqh6d5zzy3s7pyx39moz/refrigerating-chamber.webp"
                alt="Холодильная камера"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
