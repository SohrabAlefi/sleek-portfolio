import React from 'react'
import { ReactLenis } from 'lenis/dist/lenis-react'
import { motion } from 'framer-motion'

// Light, 21st-style polished hero and header. Clean, roomy layout, refined typography.
export const SmoothScrollHero = () => {
  return (
    <div className="bg-white text-slate-900">
      <ReactLenis>
        <Nav />
        <Hero />
        <Featured />
      </ReactLenis>
    </div>
  )
}

const Nav = () => (
  <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-4 bg-white/60 backdrop-blur-md shadow-sm">
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-full bg-indigo-600 text-white flex items-center justify-center font-medium">SA</div>
      <span className="text-sm text-slate-700">Sohrab Ansari</span>
    </div>
    <div className="flex items-center gap-6">
      <a href="#work" className="text-sm text-slate-600 hover:text-slate-900">Work</a>
      <a href="#about" className="text-sm text-slate-600 hover:text-slate-900">About</a>
      <a href="#contact" className="text-sm text-indigo-600 hover:underline">Contact</a>
    </div>
  </nav>
)

const Hero = () => (
  <header className="min-h-screen flex items-center">
    <div className="max-w-6xl mx-auto px-8 py-28 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.05 }}>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Hi, I’m Sohrab — Product Designer & Frontend Engineer</h1>
          <p className="mt-5 text-lg text-slate-600 max-w-lg">I design and build accessible, performant interfaces with motion and design systems that scale. I ship production-ready frontends and collaborate closely with PMs and engineers.</p>

          <div className="mt-8 flex gap-4 items-center">
            <a className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600 text-white rounded-full shadow hover:shadow-lg transition" href="#contact">Hire me</a>
            <a className="inline-flex items-center gap-3 px-6 py-3 border border-slate-200 rounded-full hover:bg-slate-50 transition" href="#work">View work</a>
          </div>

          <div className="mt-6 text-sm text-slate-500">Available for freelance & full-time. Based in Pakistan (UTC+5).</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.12 }}>
          <div className="w-full rounded-2xl bg-white shadow-lg border border-slate-100 p-4">
            <img src="https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1600&auto=format&fit=crop" alt="work preview" className="rounded-lg w-full h-72 object-cover" />
            <div className="mt-4 grid grid-cols-3 gap-3">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" alt="thumb" className="rounded-md h-20 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop" alt="thumb" className="rounded-md h-20 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" alt="thumb" className="rounded-md h-20 w-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </header>
)

const Featured = () => (
  <section id="work" className="py-24 bg-gradient-to-b from-white to-slate-50">
    <div className="max-w-6xl mx-auto px-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Selected Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProjectCard title="Portfolio Revamp" desc="Design + Frontend" img="https://images.unsplash.com/photo-1512446816093-0a3f8f7e2d6b?q=80&w=1200&auto=format&fit=crop" />
        <ProjectCard title="Design System" desc="Component library & tokens" img="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" />
        <ProjectCard title="Motion Experiments" desc="Micro-interactions & transitions" img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" />
      </div>
    </div>
  </section>
)

const ProjectCard = ({ title, desc, img }) => (
  <a className="block group" href="#contact">
    <div className="rounded-xl overflow-hidden bg-white p-0 shadow hover:shadow-xl transition border border-slate-100">
      <img src={img} alt={title} className="w-full h-44 object-cover group-hover:scale-105 transition-transform" />
      <div className="p-4">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  </a>
)

export default SmoothScrollHero
