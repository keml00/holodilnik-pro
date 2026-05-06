'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Алексей Иванов',
      company: 'Ресторан "Премьер"',
      rating: 5,
      text: 'Отличная работа! Установили камеру за 5 дней, все четко и профессионально. Температура держится идеально, оборудование работает тихо.',
    },
    {
      id: 2,
      name: 'Мария Петрова',
      company: 'Цветочный салон "Флора"',
      rating: 5,
      text: 'Заказывали камеру для цветов. Очень довольны результатом - цветы хранятся отлично, влажность и температура поддерживаются автоматически.',
    },
    {
      id: 3,
      name: 'Дмитрий Соколов',
      company: 'Мясокомбинат "Сибирь"',
      rating: 5,
      text: 'Сделали большую морозильную камеру под ключ. Качество материалов на высоте, монтаж выполнен профессионально. Рекомендуем!',
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
            Отзывы клиентов
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Что говорят о нас наши клиенты
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white p-8 rounded-[24px] shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col h-full"
            >
              <div className="absolute -top-3 -left-3 bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center">
                <Quote className="text-white" size={20} />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-[15px] flex-grow">
                {review.text}
              </p>

              <div className="border-t border-gray-100 pt-4 mt-auto">
                <div className="font-bold text-gray-900 text-[15px]">{review.name}</div>
                <div className="text-sm text-gray-600">{review.company}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-12 bg-white px-12 py-8 rounded-[24px] shadow-sm">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">4.9</div>
              <div className="flex gap-1 mb-2 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>
              <div className="text-sm text-gray-600 font-medium">Средняя оценка</div>
            </div>
            <div className="h-16 w-px bg-gray-200" />
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600 font-medium">Довольных клиентов</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
