import Hero from '@/components/Hero'
import About from '@/components/About'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import SmoothScrollHero from '@/components/ui/modern-hero/SmoothScrollHero'

export default function Home(){
  return (
    <main className="bg-gray-900 text-slate-100 min-h-screen">
      {/* 21st modern hero injected here */}
      <SmoothScrollHero />
      <Hero />
      <About />
      <Work />
      <Contact />
    </main>
  )
}
