import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Catalog from '@/components/Catalog'
import Advantages from '@/components/Advantages'
import Process from '@/components/Process'
import Cases from '@/components/Cases'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Catalog />
      <Advantages />
      <Process />
      <Cases />
      <Reviews />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
