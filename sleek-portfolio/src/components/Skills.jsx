import { motion } from 'framer-motion'

const skills = [
  ['React', 90],
  ['Next.js', 85],
  ['Tailwind', 80],
  ['Framer Motion', 75],
  ['Design Systems', 70],
]

export default function Skills(){
  return (
    <section className="py-24" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{x:-20,opacity:0}} animate={{x:0,opacity:1}} className="text-3xl font-bold">Skills</motion.h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {skills.map(([name,score],i)=> (
            <div key={i} className="p-4 bg-slate-800/40 rounded">
              <div className="flex items-center justify-between">
                <div className="font-semibold">{name}</div>
                <div className="text-sm text-zinc-400">{score}%</div>
              </div>
              <div className="mt-2 h-2 bg-zinc-700 rounded-full overflow-hidden">
                <div style={{width:`${score}%`}} className="h-full bg-indigo-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
