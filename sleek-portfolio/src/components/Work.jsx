import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

export default function Work(){
  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-slate-900/60">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.1}} className="text-3xl font-bold">Selected Work</motion.h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p,i)=> (
            <ProjectCard key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
