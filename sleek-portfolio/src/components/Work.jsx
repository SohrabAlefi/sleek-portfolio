import { motion } from 'framer-motion'

const projects = [
  {title:'Aurora Dashboard',desc:'Design system + dashboard with real-time charts',tags:['React','Next','Tailwind'],link:'#'},
  {title:'Studio Landing',desc:'Marketing site with heavy motion and Lottie flows',tags:['Next','Framer Motion'],link:'#'},
  {title:'Commerce UI Kit',desc:'Reusable components for e-commerce experiences',tags:['React','Design System'],link:'#'}
]

export default function Work(){
  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-slate-900/60">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.1}} className="text-3xl font-bold">Selected Work</motion.h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p,i)=> (
            <motion.a key={i} href={p.link} initial={{y:20,opacity:0}} whileHover={{scale:1.02}} animate={{y:0,opacity:1}} transition={{delay:0.15 + i*0.05}} className="block bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-indigo-500">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-300">{p.desc}</p>
              <div className="mt-4 flex gap-2 text-xs text-slate-400">{p.tags.map(t=> <span key={t} className="px-2 py-1 bg-slate-700/40 rounded">{t}</span>)}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
