import React from 'react'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { OnnrevSymbolMark } from '@/components/shared/OnnrevLogo'

export const VisualStatement: React.FC = () => {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="statement"
      className="w-full bg-[#050507] text-white py-28 sm:py-36 md:py-44 relative z-20 select-none overflow-hidden"
      role="region"
      aria-label="ONNREV Visual Statement"
    >
      {/* Precision architectural hairline background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:6rem_6rem]" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 relative z-10 text-left">
        
        {/* Label + Brand Mark without text */}
        <div className="flex items-center gap-3 mb-10">
          <OnnrevSymbolMark size={24} />
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#ef233c] uppercase font-semibold">
            // THE FOUNDATION
          </span>
        </div>

        {/* Master Visual Break: IDEAS → SYSTEMS → IMPACT */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 max-w-[1200px]"
        >
          <h2 className="font-display font-semibold text-[38px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[0.98] tracking-tight uppercase">
            <span>IDEAS</span>
            <span className="text-[#ef233c] mx-3 sm:mx-6 inline-block font-light">→</span>
            <span className="text-white">SYSTEMS</span>
            <span className="text-[#ef233c] mx-3 sm:mx-6 inline-block font-light">→</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-400">
              IMPACT
            </span>
          </h2>
        </motion.div>

        {/* Short, elegant supporting line */}
        <div className="pt-12 mt-12 border-t border-white/[0.1] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="font-sans text-[15px] md:text-[18px] text-zinc-400 max-w-[560px] leading-relaxed">
            Engineering real platforms that transform complex operational ideas into high-assurance digital systems.
          </p>

          <span className="text-[12px] font-mono text-zinc-500 tracking-widest uppercase">
            PRECISION ARCHITECTURE // ONNREV
          </span>
        </div>

      </div>
    </section>
  )
}

export default VisualStatement
