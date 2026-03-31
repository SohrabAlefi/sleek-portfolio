import { motion } from 'framer-motion'

export default function ProjectCard({p}){
  return (
    <motion.a whileHover={{scale:1.02}} className="block bg-slate-800/50 p-5 rounded-lg border border-slate-700 hover:border-indigo-500" href={p.url} target="_blank" rel="noreferrer">
      <h3 className="text-lg font-semibold">{p.name}</h3>
      <p className="text-slate-300 mt-2">{p.desc}</p>
      <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
        <span className="px-2 py-1 bg-slate-700/40 rounded">{p.lang}</span>
        <span className="px-2 py-1 bg-slate-700/40 rounded">★ {p.stars}</span>
      </div>
    </motion.a>
  )
}
