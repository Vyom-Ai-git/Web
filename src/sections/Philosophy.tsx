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
      desc: 'Every engagement begins with understanding commercial objectives and operational constraints before selecting technology.'
    },
    {
      title: 'Intelligence by Design',
      desc: 'AI and autonomous models are embedded where they create measurable compound value, not where they create novelty.'
    },
    {
      title: 'Scalable Architecture',
      desc: 'Solutions are engineered to evolve with expanding organizational scale rather than solve only transient symptoms.'
    },
    {
      title: 'Measurable Impact',
      desc: 'Every system is bounded by clear telemetry: accelerated throughput, reduced manual friction, and protected margins.'
    }
  ]

  const baseTransition = {
    duration: reducedMotion ? 0.2 : 0.8,
    ease: [0.16, 1, 0.3, 1] as const // ease-editorial
  }

  return (
    <section
      id="philosophy"
      className="w-full bg-[#F6F7F9] py-16 sm:py-[100px] md:py-[120px] relative z-20 select-none overflow-hidden border-t border-[#0B0D13]/[0.06]"
      role="region"
      aria-label="ONNREV Corporate Philosophy"
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
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#64748B] uppercase">
              // [ 11 / 12 ] ABOUT & ENGINEERING RIGOR
            </span>
            <h2 className="font-display font-medium text-[36px] md:text-[50px] lg:text-[56px] leading-[1.12] text-[#0B0D13] tracking-tight text-balance">
              Engineering Systems, Not Just Software
            </h2>
            <p className="font-sans text-[15px] md:text-[17px] leading-relaxed text-[#64748B] max-w-[620px] text-balance">
              Technology creates enduring value only when it becomes part of the way an organization thinks, operates, and scales. ONNREV designs resilient intelligent systems that connect executive strategy, autonomous workflows, data layers, and human expertise into a unified enterprise operating model.
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
                className="flex flex-col gap-2 border-l-2 border-[#0B0D13]/[0.1] pl-4 hover:border-[#10B981] transition-colors"
              >
                <h3 className="font-display font-medium text-[16px] md:text-[18px] text-[#0B0D13] tracking-tight">
                  {pr.title}
                </h3>
                <p className="font-sans text-[13px] md:text-[14px] leading-relaxed text-[#64748B]">
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
            className="w-full max-w-[260px] md:max-w-[280px] h-auto aspect-square select-none opacity-90"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 3 Concentric orbits */}
            <circle cx="120" cy="120" r="40" className="stroke-[#0B0D13]/10 fill-none" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="120" cy="120" r="75" className="stroke-[#0B0D13]/10 fill-none" strokeWidth="1" />
            <circle cx="120" cy="120" r="110" className="stroke-[#0B0D13]/10 fill-none" strokeWidth="1" strokeDasharray="4 2" />

            {/* Center anchor nucleus */}
            <circle cx="120" cy="120" r="4" className="fill-[#0B0D13]" />

            {/* Orbiting nodes with slow animations */}
            <motion.g
              animate={reducedMotion ? {} : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
              style={{ transformOrigin: '120px 120px' }}
            >
              <circle cx="160" cy="120" r="3.5" className="fill-[#0B0D13]" />
            </motion.g>

            <motion.g
              animate={reducedMotion ? {} : { rotate: -360 }}
              transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
              style={{ transformOrigin: '120px 120px' }}
            >
              <circle cx="120" cy="45" r="3.5" className="fill-[#0B0D13]/70" />
            </motion.g>

            <motion.g
              animate={reducedMotion ? {} : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
              style={{ transformOrigin: '120px 120px' }}
            >
              <circle cx="225" cy="120" r="4.5" className="fill-[#10B981] stroke-[#0B0D13]/30" strokeWidth="0.75" />
            </motion.g>
          </svg>
        </motion.div>

      </div>
    </section>
  )
}

export default Philosophy
