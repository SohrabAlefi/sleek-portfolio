import React, { useRef } from 'react'
import { ReactLenis } from 'lenis/dist/lenis-react'
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { SiSpacex } from 'react-icons/si'
import { FiArrowRight } from 'react-icons/fi'

const SECTION_HEIGHT = 1500

export const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-950 text-white">
      <ReactLenis>
        <Nav />
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  )
}

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      <SiSpacex className="text-3xl mix-blend-difference" />
      <button
        onClick={() => {
          document.getElementById('launch-schedule')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        LAUNCH SCHEDULE
        <FiArrowRight />
      </button>
    </nav>
  )
}

const Hero = () => {
  return (
    <div style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }} className="relative w-full">
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  )
}

const CenterImage = () => {
  const { scrollY } = useScroll()
  const clip1 = useTransform(scrollY, [0, 1500], [25, 0])
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100])
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`
  const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ['170%', '100%'])
  const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 0])

  return (
    <motion.div
      className="sticky top-0 h-screen w-full bg-center bg-no-repeat"
      style={{ clipPath, backgroundSize, opacity, backgroundImage: `url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop)` }}
    />
  )
}

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop" alt="space" start={-200} end={200} className="w-1/3" />
      <ParallaxImg src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop" alt="launch" start={200} end={-250} className="mx-auto w-2/3" />
      <ParallaxImg src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop" alt="sat" start={-200} end={200} className="ml-auto w-1/3" />
      <ParallaxImg src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop" alt="orbit" start={0} end={-500} className="ml-24 w-5/12" />
    </div>
  )
}

const ParallaxImg = ({ className, alt, src, start = -200, end = 200 }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: [`${start}px end`, `end ${end * -1}px`] })
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85])
  const y = useTransform(scrollYProgress, [0, 1], [start, end])
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`

  return (
    <motion.div ref={ref} style={{ opacity, transform }} className={`${className} inline-block p-2`}>
      <img src={src} alt={alt} className="rounded-lg shadow-lg w-full h-auto object-cover" />
    </motion.div>
  )
}

const Schedule = () => {
  return (
    <section id="launch-schedule" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-slate-200">
        <h2 className="text-3xl font-bold mb-6">Launch Schedule</h2>
        <div className="space-y-4">
          <div className="p-4 bg-slate-800/60 rounded">June 2026 — Project Alpha</div>
          <div className="p-4 bg-slate-800/60 rounded">August 2026 — Studio Release</div>
          <div className="p-4 bg-slate-800/60 rounded">December 2026 — Open Source Toolkit</div>
        </div>
      </div>
    </section>
  )
}

export default SmoothScrollHero
