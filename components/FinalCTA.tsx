'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-[100px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[56px] leading-tight font-bold text-white mb-6 lg:text-[56px] md:text-[42px] sm:text-[36px]">
            Готовы начать проект?
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-[700px] mx-auto leading-relaxed">
            Получите бесплатную консультацию и расчет стоимости холодильной камеры под ваши требования
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://t.me/keml00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 h-[56px] px-8 rounded-2xl font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl text-[15px]"
            >
              Получить расчет
              <ArrowRight size={20} />
            </a>
            <a
              href="tel:+79000000000"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white h-[56px] px-8 rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/20 text-[15px]"
            >
              <Phone size={20} />
              Позвонить
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-[20px] border border-white/10"
            >
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Техподдержка</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-[20px] border border-white/10"
            >
              <div className="text-4xl font-bold text-white mb-2">3 года</div>
              <div className="text-gray-400 text-sm">Гарантия</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-[20px] border border-white/10"
            >
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400 text-sm">Проектов</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-[1280px] mx-auto px-8 mt-24 pt-16 border-t border-white/10">
        <div className="grid md:grid-cols-3 gap-12 text-gray-400 mb-12">
          <div>
            <div className="text-2xl font-bold text-white mb-4">PROFHOLOD</div>
            <p className="text-sm leading-relaxed">
              Производство и монтаж холодильных камер под ключ
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-[15px]">Контакты</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+79000000000" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={16} />
                <span>+7 (900) 000-00-00</span>
              </a>
              <a href="mailto:keml00@icloud.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} />
                <span>keml00@icloud.com</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-[15px]">Режим работы</h4>
            <div className="text-sm space-y-2">
              <p>Пн-Пт: 9:00 - 18:00</p>
              <p>Сб-Вс: по договоренности</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          © 2026 PROFHOLOD. Все права защищены.
        </div>
      </div>
    </section>
  )
}
