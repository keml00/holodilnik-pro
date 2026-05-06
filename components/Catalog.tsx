'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Catalog() {
  const products = [
    {
      id: 1,
      name: 'Среднетемпературные холодильные камеры',
      temp: '0...+8°C',
      description: 'Для хранения и охлаждения продуктов питания, лекарственных средств, вин',
      price: 'От 70 512 ₽',
      image: 'https://profholod.ru/upload/dev2fun.imagecompress/webp/iblock/dad/kv8udwt2x0ex16ruqpjjou0vj65qr24v/refrigerating-chamber.webp',
    },
    {
      id: 2,
      name: 'Морозильные камеры',
      temp: '-18...-25°C',
      description: 'Для заморозки и хранения замороженных продуктов питания',
      price: 'От 85 000 ₽',
      image: 'https://profholod.ru/upload/dev2fun.imagecompress/webp/iblock/dad/kv8udwt2x0ex16ruqpjjou0vj65qr24v/refrigerating-chamber.webp',
    },
    {
      id: 3,
      name: 'Камеры шоковой заморозки',
      temp: '-25...-35°C',
      description: 'Для пищевых производств с быстрой заморозкой продукции',
      price: 'От 285 000 ₽',
      image: 'https://profholod.ru/upload/dev2fun.imagecompress/webp/iblock/2a9/1v62iida3mk820pzac479i8apjm1vn31/refrigerating-chamber.webp',
    },
    {
      id: 4,
      name: 'Модульные камеры на эксцентриковых замках',
      temp: 'По запросу',
      description: 'Быстрый монтаж, точные типоразмеры, без фасонных элементов',
      price: 'От 95 000 ₽',
      image: 'https://profholod.ru/upload/dev2fun.imagecompress/webp/iblock/e3b/qp3vcrrl4sof02mqukxnijspg3efmha8/modulnaya-kamera.webp',
    },
    {
      id: 5,
      name: 'Камеры для цветов',
      temp: '+2...+8°C',
      description: 'Для хранения цветов и букетов в оптимальных условиях',
      price: 'От 78 000 ₽',
      image: 'https://profholod.ru/upload/dev2fun.imagecompress/webp/iblock/08a/d4cb7302dacce8af6b7fdc4e58ce9602.webp',
    },
    {
      id: 6,
      name: 'Холодильные камеры с солнечными панелями',
      temp: 'По запросу',
      description: 'Автономные камеры с экономией до 30% расходов на охлаждение',
      price: 'По запросу',
      image: 'https://profholod.ru/upload/dev2fun.imagecompress/webp/iblock/4a8/u1gjv7bf60w25wfnmj17aug1qqtwfhfl/Cold_room_SP_rgb3.webp',
    },
    {
      id: 7,
      name: 'Камеры для мяса',
      temp: '0...+4°C',
      description: 'Специализированные камеры для хранения и созревания мяса с контролем влажности',
      price: 'От 82 000 ₽',
      image: 'https://profholod.ru/upload/dev2fun.imagecompress/webp/iblock/dad/kv8udwt2x0ex16ruqpjjou0vj65qr24v/refrigerating-chamber.webp',
    },
  ]

  return (
    <section className="py-[120px] bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-[1280px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-[800px] mx-auto"
        >
          <h2 className="text-[56px] leading-tight font-bold mb-4 lg:text-[56px] md:text-[42px] sm:text-[36px]">
            Каталог холодильных камер
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Широкий выбор решений для любых задач
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-[280px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={280}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {product.temp}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2 text-[15px] leading-relaxed flex-grow">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </span>
                  <a
                    href="https://t.me/keml00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white h-[48px] px-6 rounded-2xl font-semibold hover:bg-blue-700 transition-all group-hover:gap-3 text-[14px]"
                  >
                    Заказать
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
