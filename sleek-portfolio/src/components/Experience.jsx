import { motion } from 'framer-motion'

export default function Experience(){
  return (
    <section className="py-24" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial={{x:-20,opacity:0}} animate={{x:0,opacity:1}} className="text-3xl font-bold">Experience</motion.h2>
        <div className="mt-8 space-y-4">
          <ExperienceItem title="Senior Frontend Engineer" company="Acme Labs" period="2022 — Present" />
          <ExperienceItem title="Product Designer" company="StudioX" period="2019 — 2022" />
          <ExperienceItem title="UI Engineer" company="Freelance" period="2017 — 2019" />
        </div>
      </div>
    </section>
  )
}

const ExperienceItem = ({title,company,period}) => (
  <motion.div initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} className="p-4 bg-slate-800/50 rounded">
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-semibold">{title}</h4>
        <div className="text-sm text-zinc-400">{company}</div>
      </div>
      <div className="text-xs text-zinc-500">{period}</div>
    </div>
  </motion.div>
)
