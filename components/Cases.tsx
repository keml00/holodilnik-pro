'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Calendar } from 'lucide-react'

export default function Cases() {
  const cases = [
    {
      id: 1,
      title: 'Холодильная камера для ресторана',
      location: 'Москва',
      date: '2026',
      description: 'Среднетемпературная камера 20 м³ для хранения продуктов',
      image: 'https://profholod.ru/upload/dev2fun.imagecompress/webp/iblock/e10/hinfradkult4zqh6d5zzy3s7pyx39moz/refrigerating-chamber.webp',
    },
    {
      id: 2,
      title: 'Морозильная камера для склада',
      location: 'Санкт-Петербург',
      date: '2026',
      description: 'Низкотемпературная камера 50 м³ для заморозки мяса',
      image: 'https://profholod.ru/upload/dev2fun.imagecompress/webp/iblock/dad/kv8udwt2x0ex16ruqpjjou0vj65qr24v/refrigerating-chamber.webp',
    },
    {
      id: 3,
      title: 'Камера шоковой заморозки',
      location: 'Казань',
      date: '2025',
      description: 'Камера для пищевого производства с быстрой заморозкой',
      image: 'https://profholod.ru/upload/dev2fun.imagecompress/webp/iblock/2a9/1v62iida3mk820pzac479i8apjm1vn31/refrigerating-chamber.webp',
    },
    {
      id: 4,
      title: 'Модульная камера для цветов',
      location: 'Екатеринбург',
      date: '2025',
      description: 'Цветочная камера с точным контролем температуры',
      image: 'https://profholod.ru/upload/dev2fun.imagecompress/webp/iblock/08a/d4cb7302dacce8af6b7fdc4e58ce9602.webp',
    },
  ]

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Наши проекты
          </h2>
          <p className="text-xl text-gray-600">
            Реализованные объекты по всей России
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={caseItem.image}
                  alt={caseItem.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {caseItem.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{caseItem.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{caseItem.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  {caseItem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
