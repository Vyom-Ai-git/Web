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
            // THE PHILOSOPHY
          </span>
        </div>

        {/* Enormous Editorial Typography */}
        <motion.h2
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-medium text-[44px] sm:text-[64px] md:text-[84px] lg:text-[104px] leading-[0.96] tracking-tight uppercase max-w-[1100px]"
        >
          Precision in Every Detail.
        </motion.h2>

        {/* Short, elegant supporting line (under 15 words) */}
        <div className="pt-12 mt-12 border-t border-white/[0.1] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="font-sans text-[15px] md:text-[17px] text-white/60 max-w-[500px]">
            Engineering systems, not just software. Built for scale, verified by measurable telemetry.
          </p>

          <span className="text-[12px] font-mono text-white/30 tracking-widest uppercase">
            ESTABLISHED // 2026
          </span>
        </div>

      </div>
    </section>
  )
}

export default VisualStatement
