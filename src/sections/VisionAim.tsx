import React from 'react'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { OnnrevSymbolMark } from '@/components/shared/OnnrevLogo'

export const VisionAim: React.FC = () => {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="about"
      className="w-full bg-[#050507] text-white py-24 sm:py-32 md:py-40 border-t border-white/[0.08] relative z-20 select-none overflow-hidden"
      role="region"
      aria-label="ONNREV Aim & Vision"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#ef233c]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 text-left">
        
        {/* Top Coordinate Header */}
        <div className="flex items-center gap-3 mb-10">
          <OnnrevSymbolMark size={24} />
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#ef233c] uppercase font-semibold">
            // 04 OUR AIM
          </span>
        </div>

        {/* Section 18: Primary Aim Statement */}
        <div className="flex flex-col gap-8 pb-16 md:pb-20 border-b border-white/[0.1]">
          <motion.blockquote
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-medium text-[32px] sm:text-[46px] md:text-[56px] lg:text-[64px] leading-[1.05] text-white tracking-tight uppercase max-w-5xl"
          >
            "Build technology that makes businesses simpler, smarter and ready for tomorrow."
          </motion.blockquote>

          {/* Three Large Words: INNOVATION • INTELLIGENCE • IMPACT (Section 18) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-[12px] bg-black/40 border border-white/[0.08] flex flex-col gap-2">
              <span className="text-[10px] font-mono text-[#ef233c] tracking-widest uppercase">01 // PRINCIPLE</span>
              <span className="font-display font-bold text-[24px] sm:text-[28px] md:text-[32px] text-white tracking-tight">
                INNOVATION
              </span>
              <p className="font-sans text-[13.5px] text-zinc-400">
                Applied engineering designed to solve tangible operational bottlenecks.
              </p>
            </div>

            <div className="p-6 rounded-[12px] bg-black/40 border border-white/[0.08] flex flex-col gap-2">
              <span className="text-[10px] font-mono text-[#ef233c] tracking-widest uppercase">02 // PRINCIPLE</span>
              <span className="font-display font-bold text-[24px] sm:text-[28px] md:text-[32px] text-white tracking-tight">
                INTELLIGENCE
              </span>
              <p className="font-sans text-[13.5px] text-zinc-400">
                Autonomous and cognitive systems that eliminate latency and human error.
              </p>
            </div>

            <div className="p-6 rounded-[12px] bg-black/40 border border-white/[0.08] flex flex-col gap-2">
              <span className="text-[10px] font-mono text-[#ef233c] tracking-widest uppercase">03 // PRINCIPLE</span>
              <span className="font-display font-bold text-[24px] sm:text-[28px] md:text-[32px] text-white tracking-tight">
                IMPACT
              </span>
              <p className="font-sans text-[13.5px] text-zinc-400">
                Measurable resilience, high reliability, and sustained enterprise velocity.
              </p>
            </div>
          </div>
        </div>

        {/* Section 19: ABOUT ONNREV */}
        <div className="pt-16 md:pt-20 grid grid-cols-12 gap-y-8 lg:gap-x-12 items-center">
          <div className="col-span-12 lg:col-span-4 flex items-center gap-4">
            <OnnrevSymbolMark size={40} />
            <div className="flex flex-col gap-1">
              <span className="text-[10.5px] font-mono tracking-[0.25em] text-[#ef233c] uppercase font-semibold">
                // ABOUT ONNREV
              </span>
              <h3 className="font-display font-medium text-[28px] sm:text-[34px] text-white tracking-tight uppercase">
                THE COMPANY.
              </h3>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <p className="font-sans text-[16px] md:text-[18px] text-zinc-300 leading-relaxed max-w-[560px]">
              ONNREV is a technology-driven company that builds intelligent systems, digital experiences, automation and business solutions designed around real business needs.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-sans text-[13.5px] font-medium transition-all shrink-0 hover:border-[#ef233c]/60 group"
            >
              <span>DISCOVER ONNREV</span>
              <ArrowRight className="w-4 h-4 text-[#ef233c] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default VisionAim
