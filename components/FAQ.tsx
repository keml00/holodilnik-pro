'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Сколько времени занимает изготовление и монтаж?',
      answer: 'Изготовление камеры занимает от 7 до 14 дней в зависимости от размера и сложности. Монтаж выполняется за 3-7 дней.',
    },
    {
      question: 'Какая гарантия на холодильные камеры?',
      answer: 'Мы предоставляем гарантию 3 года на все оборудование и конструкцию. Также доступно сервисное обслуживание.',
    },
    {
      question: 'Можно ли заказать камеру нестандартных размеров?',
      answer: 'Да, мы производим камеры любых размеров и конфигураций под индивидуальные требования заказчика.',
    },
    {
      question: 'Какие температурные режимы доступны?',
      answer: 'Мы производим камеры с температурными режимами от +14°C до -35°C в зависимости от назначения.',
    },
    {
      question: 'Осуществляете ли доставку в регионы?',
      answer: 'Да, мы доставляем и монтируем холодильные камеры по всей территории России.',
    },
    {
      question: 'Нужно ли специальное помещение для установки?',
      answer: 'Камера может быть установлена в любом помещении с подходящими размерами. Наш специалист проведет замер и даст рекомендации.',
    },
  ]

  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[1000px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[56px] leading-tight font-bold mb-4 lg:text-[56px] md:text-[42px] sm:text-[36px]">
            Частые вопросы
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ответы на популярные вопросы о холодильных камерах
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-[18px] overflow-hidden hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-50/30 transition-colors"
              >
                <span className="text-[17px] font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-blue-600 flex-shrink-0" size={22} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed text-[15px] border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-blue-50/50 p-10 rounded-[24px]"
        >
          <p className="text-lg text-gray-700 mb-6 font-medium">
            Не нашли ответ на свой вопрос?
          </p>
          <a
            href="https://t.me/keml00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-blue-600 text-white h-[56px] px-8 rounded-2xl font-semibold hover:bg-blue-700 transition-all hover:scale-105 text-[15px]"
          >
            Задать вопрос специалисту
          </a>
        </motion.div>
      </div>
    </section>
  )
}
