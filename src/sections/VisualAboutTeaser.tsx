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
      className="w-full bg-[#050507] py-24 sm:py-32 border-t border-white/5 select-none text-left"
      role="region"
      aria-label="About ONNREV Teaser"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12 items-center">
          
          <div className="col-span-12 lg:col-span-4 flex items-center gap-4">
            <OnnrevSymbolMark size={48} />
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#ef233c] uppercase font-semibold">
                // ABOUT ONNREV
              </span>
              <h2 className="font-display font-medium text-[36px] sm:text-[46px] text-white tracking-tight uppercase">
                Quiet Confidence.
              </h2>
            </div>
          </div>

          {/* Under 40 words max as instructed */}
          <div className="col-span-12 lg:col-span-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <motion.p
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-sans text-[16px] md:text-[18px] text-zinc-300 leading-relaxed max-w-[560px]"
            >
              We are an enterprise systems studio engineering resilient digital infrastructure, sovereign context intelligence, and autonomous workflows. We build systems that perform under pressure.
            </motion.p>

            <a
              href="#conversion"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sans text-[13.5px] font-medium transition-all shrink-0 group hover:border-[#ef233c]/50"
            >
              <span>DISCOVER OUR STORY</span>
              <ArrowRight className="w-4 h-4 text-[#ef233c] transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default VisualAboutTeaser
