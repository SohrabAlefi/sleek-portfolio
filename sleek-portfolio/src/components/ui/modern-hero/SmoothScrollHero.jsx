import React from 'react'
import { ReactLenis } from 'lenis/dist/lenis-react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

export const SmoothScrollHero = () => {
  return (
    <div className="bg-gradient-to-b from-stone-900 via-neutral-900 to-black text-white">
      <ReactLenis>
        <Nav />
        <Hero />
        <Featured />
      </ReactLenis>
    </div>
  )
}

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg font-semibold">SA</div>
        <span className="text-sm text-zinc-300">Sohrab Ansari</span>
      </div>
      <div className="flex items-center gap-4">
        <a href="#work" className="text-sm text-zinc-300 hover:text-white">Work</a>
        <a href="#about" className="text-sm text-zinc-300 hover:text-white">About</a>
        <a
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 text-xs text-zinc-400 cursor-pointer hover:text-white"
        >
          Get in touch
          <FiArrowRight />
        </a>
      </div>
    </nav>
  )
}

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-28 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.05 }}>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Hi, I’m Sohrab — Product Designer & Frontend Engineer</h1>
            <p className="mt-4 text-lg text-zinc-300 max-w-xl">
              I design and build delightful interfaces with a focus on motion, accessibility and performance. I ship production-ready frontend code and craft design systems that scale.
            </p>

            <div className="mt-8 flex gap-4 items-center">
              <a className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full shadow hover:scale-105 transform transition" href="#contact">Hire me</a>
              <a className="inline-flex items-center gap-3 px-6 py-3 border border-zinc-700 rounded-full hover:bg-white/5 transition" href="#work">View work</a>
            </div>

            <div className="mt-6 text-sm text-zinc-400">
              Available for freelance & full-time. Based in Pakistan (UTC+5).
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }} className="relative">
            <div className="w-full rounded-2xl bg-gradient-to-tr from-zinc-800 to-neutral-900 p-6 shadow-lg">
              <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop" alt="work preview" className="rounded-lg w-full h-64 object-cover" />
              <div className="mt-4 grid grid-cols-3 gap-3">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" alt="thumb" className="rounded-md h-20 w-full object-cover" />
                <img src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop" alt="thumb" className="rounded-md h-20 w-full object-cover" />
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" alt="thumb" className="rounded-md h-20 w-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Featured = () => {
  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-slate-200">
        <h2 className="text-3xl font-bold mb-6">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard title="Portfolio Revamp" desc="Design + Frontend" img="https://images.unsplash.com/photo-1512446816093-0a3f8f7e2d6b?q=80&w=1200&auto=format&fit=crop" />
          <ProjectCard title="Design System" desc="Component library & tokens" img="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" />
          <ProjectCard title="Motion Experiments" desc="Micro-interactions & transitions" img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" />
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ title, desc, img }) => (
  <a className="block group" href="#contact">
    <div className="rounded-xl overflow-hidden bg-zinc-800/50 p-0 shadow hover:shadow-lg transition">
      <img src={img} alt={title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform" />
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-zinc-400">{desc}</p>
      </div>
    </div>
  </a>
)

export default SmoothScrollHero
