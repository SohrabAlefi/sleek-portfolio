import { motion } from 'framer-motion'

export default function About(){
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 initial={{x:-30,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.1}} className="text-3xl font-bold">About</motion.h2>
        <motion.p initial={{x:-30,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.2}} className="mt-4 text-slate-300">
          I build modern web apps with an emphasis on motion, accessibility, and polished UI. I collaborate across product and engineering to ship delightful experiences.
        </motion.p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.3}} className="bg-slate-800/60 p-6 rounded-lg">
            <h3 className="font-semibold">Motion</h3>
            <p className="mt-2 text-slate-300">Micro-interactions, gestures, page transitions, and performance-minded animations using Framer Motion.</p>
          </motion.div>
          <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.4}} className="bg-slate-800/60 p-6 rounded-lg">
            <h3 className="font-semibold">Design Systems</h3>
            <p className="mt-2 text-slate-300">Component libraries, tokens, accessible patterns, and scalable UI architecture.</p>
          </motion.div>
          <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.5}} className="bg-slate-800/60 p-6 rounded-lg">
            <h3 className="font-semibold">Engineering</h3>
            <p className="mt-2 text-slate-300">Type-safe code, performance budgets, and observability for frontend systems.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
