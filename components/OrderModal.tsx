'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'
import { useState } from 'react'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  productName?: string
}

export default function OrderModal({ isOpen, onClose, productName }: OrderModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: productName || '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Формируем сообщение для Telegram
    const message = `Новая заявка!\n\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nПродукт: ${formData.product || 'Не указан'}`
    const telegramUrl = `https://t.me/keml00?text=${encodeURIComponent(message)}`
    window.open(telegramUrl, '_blank')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Content */}
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Send className="text-blue-600" size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Оставьте заявку</h3>
                <p className="text-gray-600">
                  Мы свяжемся с вами в течение 15 минут
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:outline-none transition-colors"
                  >
                    <option value="">Выберите тип камеры</option>
                    <option>Среднетемпературная камера</option>
                    <option>Морозильная камера</option>
                    <option>Камера шоковой заморозки</option>
                    <option>Модульная камера</option>
                    <option>Камера для цветов</option>
                    <option>Камера с солнечными панелями</option>
                    <option>Камера для мяса</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  Отправить заявку в Telegram
                  <Send size={18} />
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
