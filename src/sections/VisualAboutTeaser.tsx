import React from 'react'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { OnnrevSymbolMark } from '@/components/shared/OnnrevLogo'

export const VisualAboutTeaser: React.FC = () => {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="about"
      className="w-full bg-black py-24 sm:py-32 border-t border-white/5 select-none text-left"
      role="region"
      aria-label="About ONNREV"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Section 15: OUR AIM */}
        <div className="border-b border-white/[0.08] pb-16 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <OnnrevSymbolMark size={24} />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#ef233c] uppercase font-semibold">
              // OUR AIM
            </span>
          </div>

          <motion.blockquote
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-medium text-[28px] sm:text-[38px] md:text-[46px] text-white tracking-tight leading-tight max-w-[960px] mb-8"
          >
            "Build technology that makes businesses simpler, smarter and ready for tomorrow."
          </motion.blockquote>

          <div className="flex flex-wrap items-center gap-6 sm:gap-12 text-[13px] sm:text-[15px] font-mono font-bold tracking-[0.2em] text-zinc-400 uppercase">
            <span className="text-white">INNOVATION</span>
            <span className="text-[#ef233c]">•</span>
            <span className="text-white">INTELLIGENCE</span>
            <span className="text-[#ef233c]">•</span>
            <span className="text-white">IMPACT</span>
          </div>
        </div>

        {/* Section 16: ABOUT ONNREV */}
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12 items-center">
          
          <div className="col-span-12 lg:col-span-4 flex items-center gap-4">
            <OnnrevSymbolMark size={44} />
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#ef233c] uppercase font-semibold">
                // ABOUT ONNREV
              </span>
              <h2 className="font-display font-medium text-[32px] sm:text-[40px] text-white tracking-tight uppercase">
                THE COMPANY.
              </h2>
            </div>
          </div>

          {/* Concise verified paragraph */}
          <div className="col-span-12 lg:col-span-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <motion.p
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-sans text-[16px] md:text-[18px] text-zinc-300 leading-relaxed max-w-[560px]"
            >
              ONNREV is a technology-driven company focused on building digital products, intelligent systems and business solutions built to perform under high operational concurrency.
            </motion.p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sans text-[13.5px] font-medium transition-all shrink-0 group hover:border-[#ef233c]/50"
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

export default VisualAboutTeaser
