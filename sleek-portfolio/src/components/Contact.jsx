import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  const [sent,setSent]=useState(false)
  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2 initial={{x:-20,opacity:0}} animate={{x:0,opacity:1}} className="text-3xl font-bold">Get in touch</motion.h2>
        <motion.form initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} className="mt-6 grid gap-4">
          <input placeholder="Name" className="p-3 rounded bg-slate-800/50 border border-slate-700" />
          <input placeholder="Email" className="p-3 rounded bg-slate-800/50 border border-slate-700" />
          <textarea placeholder="Tell me about your project" className="p-3 rounded bg-slate-800/50 border border-slate-700 h-32" />
          <div className="flex gap-4">
            <button type="button" onClick={()=>setSent(true)} className="px-6 py-3 bg-indigo-600 rounded-full">Send</button>
            <button type="reset" className="px-6 py-3 border rounded-full">Reset</button>
          </div>
          {sent && <div className="text-green-400">Thanks — I will reply shortly.</div>}
        </motion.form>
      </div>
    </section>
  )
}
