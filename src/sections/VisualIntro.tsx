import React from 'react'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { OnnrevSymbolMark } from '@/components/shared/OnnrevLogo'

export const VisualIntro: React.FC = () => {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="intro"
      className="w-full bg-[#050507] py-20 sm:py-28 border-y border-white/5 select-none text-left relative overflow-hidden"
      role="region"
      aria-label="ONNREV Introduction"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12 items-center">
          
          {/* Label + Emblem mark without text */}
          <div className="col-span-12 lg:col-span-3 flex items-center gap-3.5">
            <OnnrevSymbolMark size={32} />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#ef233c] uppercase font-semibold">
              // ONNREV IN BRIEF
            </span>
          </div>

          {/* 1 strong sentence (under 25 words) + Quick Action */}
          <div className="col-span-12 lg:col-span-9 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <motion.p
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-medium text-[26px] sm:text-[34px] md:text-[40px] text-white tracking-tight leading-snug max-w-[760px]"
            >
              We design autonomous systems and intelligent infrastructure for organizations where latency and downtime are unacceptable.
            </motion.p>

            <a
              href="#about"
              className="inline-flex items-center gap-2 text-[13.5px] font-mono font-semibold text-zinc-300 hover:text-[#ef233c] transition-colors group shrink-0"
            >
              <span>ABOUT ONNREV</span>
              <ArrowRight className="w-4 h-4 text-[#ef233c] transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default VisualIntro
