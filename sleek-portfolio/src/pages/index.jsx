import About from '@/components/About'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import SmoothScrollHero from '@/components/ui/modern-hero/SmoothScrollHero'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Testimonials from '@/components/Testimonials'

export default function Home(){
  return (
    <main className="bg-gray-900 text-slate-100 min-h-screen">
      <SmoothScrollHero />
      <About />
      <Experience />
      <Skills />
      <Testimonials />
      <Work />
      <Contact />
    </main>
  )
}
