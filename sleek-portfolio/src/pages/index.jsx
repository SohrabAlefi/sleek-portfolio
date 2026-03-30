import Hero from '@/components/Hero'
import About from '@/components/About'
import Work from '@/components/Work'
import Contact from '@/components/Contact'

export default function Home(){
  return (
    <main className="bg-gray-900 text-slate-100 min-h-screen">
      <Hero />
      <About />
      <Work />
      <Contact />
    </main>
  )
}
