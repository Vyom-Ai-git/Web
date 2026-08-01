import React from 'react'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface Principle {
  title: string
  desc: string
}

export const Philosophy: React.FC = () => {
  const reducedMotion = useReducedMotion()

  const principles: Principle[] = [
    {
      title: 'Strategic Thinking',
      desc: 'Every engagement begins with understanding business objectives before selecting technology.'
    },
    {
      title: 'Intelligence by Design',
      desc: 'AI is embedded where it creates measurable value, not where it creates novelty.'
    },
    {
      title: 'Scalable Architecture',
      desc: 'Solutions are designed to evolve with the organization rather than solve only today\'s problems.'
    },
    {
      title: 'Measurable Impact',
      desc: 'Every system should improve efficiency, decision-making, customer experience, or revenue through clear outcomes.'
    }
  ]

  const baseTransition = {
    duration: reducedMotion ? 0.2 : 0.8,
    ease: [0.16, 1, 0.3, 1] as const // ease-editorial
  }

  return (
    <section
      id="philosophy"
      className="w-full bg-[#EDEEF5] py-16 sm:py-[100px] md:py-[130px] relative z-20 select-none overflow-hidden"
      role="region"
      aria-label="Vyom Corporate Philosophy"
    >
      <div className="max-w-7xl w-full mx-auto px-8 md:px-16 lg:px-20 grid grid-cols-12 gap-y-12 lg:gap-x-8 items-center">

        {/* LEFT COLUMN (Cols 1-7): Editorial Philosophy Narrative & Principles Grid */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-10 text-left">

          {/* Headline & Description */}
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={baseTransition}
            className="flex flex-col gap-5"
          >
            <span className="text-[11px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
              Unified Approach
            </span>
            <h2 className="font-display font-medium text-[36px] md:text-[50px] lg:text-[56px] leading-[1.12] text-[#1a1a1a] tracking-tight text-balance">
              Engineering Systems, Not Just Software
            </h2>
            <p className="font-sans text-[15px] md:text-[17px] leading-relaxed text-[#8e8e8e] max-w-[620px] text-balance">
              Technology creates value only when it becomes part of the way an organization thinks, operates, and grows. Vyom designs intelligent systems that connect strategy, automation, data, and human expertise into a unified operating model.
            </p>
          </motion.div>

          {/* 2x2 Principles Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: reducedMotion ? 0 : 0.08
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6"
          >
            {principles.map((pr) => (
              <motion.div
                key={pr.title}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
                className="flex flex-col gap-2 border-l border-black/[0.08] pl-4"
              >
                <h4 className="font-display font-medium text-[16px] md:text-[18px] text-[#1a1a1a] tracking-tight">
                  {pr.title}
                </h4>
                <p className="font-sans text-[13px] md:text-[14px] leading-relaxed text-[#8e8e8e]">
                  {pr.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* RIGHT COLUMN (Cols 9-12): Concentric Orbital Diagram (Visual connected system) */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={baseTransition}
          className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-center justify-center pointer-events-none"
        >
          {/* Orbital Diagram SVG */}
          <svg
            viewBox="0 0 240 240"
            className="w-full max-w-[260px] md:max-w-[280px] h-auto aspect-square select-none opacity-85"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 3 Concentric orbits */}
            <circle cx="120" cy="120" r="40" className="stroke-[#1a1a1a]/10 fill-none" strokeWidth="1" />
            <circle cx="120" cy="120" r="75" className="stroke-[#1a1a1a]/10 fill-none" strokeWidth="1" />
            <circle cx="120" cy="120" r="110" className="stroke-[#1a1a1a]/10 fill-none" strokeWidth="1" />

            {/* Center anchor nucleus */}
            <circle cx="120" cy="120" r="4" className="fill-[#1a1a1a]" />

            {/* Orbiting nodes with slow GPU animations */}
            <motion.g
              animate={reducedMotion ? {} : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
              style={{ transformOrigin: '120px 120px' }}
            >
              <circle cx="160" cy="120" r="3.5" className="fill-[#1a1a1a]" />
            </motion.g>

            <motion.g
              animate={reducedMotion ? {} : { rotate: -360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              style={{ transformOrigin: '120px 120px' }}
            >
              <circle cx="120" cy="45" r="3.5" className="fill-[#1a1a1a]" />
            </motion.g>

            <motion.g
              animate={reducedMotion ? {} : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: 35, ease: 'linear' }}
              style={{ transformOrigin: '120px 120px' }}
            >
              <circle cx="225" cy="120" r="4.5" className="fill-[#8FBF3C] stroke-[#1a1a1a]/40" strokeWidth="0.5" />
            </motion.g>
          </svg>
        </motion.div>

      </div>
    </section>
  )
}

export default Philosophy
