import { motion } from 'framer-motion'

const items = [
  {name:'Aisha', role:'PM at Acme', text:'Sohrab delivered great work on time and improved our onboarding funnel.'},
  {name:'Bilal', role:'CTO at StudioX', text:'Outstanding craftsmanship — thoughtful motion and performance.'}
]

export default function Testimonials(){
  return (
    <section className="py-24 bg-slate-900/40" id="testimonials">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 initial={{x:-20,opacity:0}} animate={{x:0,opacity:1}} className="text-3xl font-bold">Testimonials</motion.h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {items.map((it,i)=> (
            <motion.div key={i} initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} className="p-4 bg-slate-800/50 rounded">
              <div className="font-semibold">{it.name} <span className="text-sm text-zinc-400">— {it.role}</span></div>
              <p className="mt-2 text-slate-300">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
