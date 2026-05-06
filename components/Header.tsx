'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const menuItems = ['Главная', 'О компании', 'Услуги', 'Проекты', 'Этапы', 'Контакты']

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200/50'
            : 'bg-white border-b border-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-[1280px] mx-auto px-8 h-[84px]">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600 tracking-tight">
              PROFHOLOD
            </div>

            {/* Center Menu - Desktop */}
            <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-[15px]"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Right Side: Phone + CTA */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+79000000000"
                className="hidden xl:flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Phone size={18} />
                <span className="font-semibold text-[15px]">+7 (900) 000-00-00</span>
              </a>
              <a
                href="https://t.me/keml00"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center justify-center bg-blue-600 text-white h-[56px] px-8 rounded-2xl font-semibold hover:bg-blue-700 transition-all hover:scale-105 text-[15px] whitespace-nowrap"
              >
                Получить расчет стоимости
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-[84px] right-0 bottom-0 w-full sm:w-80 bg-white z-40 lg:hidden shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <nav className="flex flex-col p-6 gap-1">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all font-medium text-base py-3 px-4 rounded-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="tel:+79000000000"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors py-3 px-4 mt-4 border-t border-gray-100"
                >
                  <Phone size={18} />
                  <span className="font-semibold text-[15px]">+7 (900) 000-00-00</span>
                </a>
                <a
                  href="https://t.me/keml00"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center bg-blue-600 text-white h-[56px] px-8 rounded-2xl font-semibold hover:bg-blue-700 transition-all mt-4"
                >
                  Получить расчет стоимости
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
