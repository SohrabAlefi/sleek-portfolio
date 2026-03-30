import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-black opacity-90" />
      <div className="relative max-w-6xl mx-auto px-6 py-32">
        <motion.h1 initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.1}} className="text-5xl font-extrabold leading-tight">
          Sohrab Ansari
        </motion.h1>
        <motion.p initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2}} className="mt-4 max-w-2xl text-lg text-slate-300">
          Product Designer • Frontend Engineer • Motion & Interaction
        </motion.p>
        <motion.div initial={{opacity:0,scale:0.98}} animate={{opacity:1,scale:1}} transition={{delay:0.4}} className="mt-8 flex gap-4 items-center">
          <a className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full shadow-lg hover:scale-105 transform transition" href="#contact">Hire me</a>
          <a className="inline-flex items-center gap-3 px-6 py-3 border border-slate-700 rounded-full hover:bg-white/5 transition" href="#work">View work</a>
        </motion.div>
      </div>
    </section>
  )
}
