import React from 'react'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export const TheStatement: React.FC = () => {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="statement"
      className="w-full bg-[#0B0D13] text-white py-24 sm:py-32 md:py-40 relative z-20 select-none overflow-hidden"
      role="region"
      aria-label="ONNREV Brand Statement"
    >
      {/* Precision architectural hairline background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:6rem_6rem]" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 relative z-10">
        
        {/* Editorial Section Coordinate */}
        <div className="flex items-center justify-between border-b border-white/[0.1] pb-6 mb-16 md:mb-24">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#10B981] uppercase">
            // [ 02 / 12 ] MANDATE
          </span>
          <span className="text-[11px] font-mono text-white/40 tracking-wider">
            SYSTEMS RIGOR OVER NOVELTY
          </span>
        </div>

        {/* Massive Editorial Manifesto Headline */}
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-8">
          <div className="col-span-12 lg:col-span-11">
            <motion.h2
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-medium text-[38px] sm:text-[54px] md:text-[68px] lg:text-[80px] leading-[1.08] tracking-tight text-white text-balance"
            >
              WE BUILD THE AUTONOMOUS INFRASTRUCTURE THAT TURNS COMPLEXITY INTO CERTAINTY.
            </motion.h2>
          </div>
        </div>

        {/* 3-Column Controlled Asymmetric Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-16 md:pt-24 border-t border-white/[0.1] mt-16 md:mt-24 text-left">
          
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-[11px] font-mono text-[#10B981] uppercase tracking-wider">
              01 // THE CHALLENGE
            </span>
            <p className="font-sans text-[14.5px] leading-relaxed text-white/70">
              Modern enterprises operate fragmented software silos where critical decisions stall in human handoffs and legacy friction.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-[11px] font-mono text-[#10B981] uppercase tracking-wider">
              02 // THE ONNREV PROTOCOL
            </span>
            <p className="font-sans text-[14.5px] leading-relaxed text-white/70">
              We engineer closed-loop intelligence: connecting strategy, automated event hooks, context vectors, and data pipelines into a single operating model.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-[11px] font-mono text-[#10B981] uppercase tracking-wider">
              03 // THE OUTCOME
            </span>
            <p className="font-sans text-[14.5px] leading-relaxed text-white/70">
              Measurable operational speed, protected margins, zero-loss transaction pipelines, and self-healing system reliability.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default TheStatement
