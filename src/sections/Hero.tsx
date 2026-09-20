import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BackgroundVideo } from '@/components/ui/BackgroundVideo'
import { SignatureOrbital } from '@/components/ui/SignatureOrbital'
import { SearchExperience } from '@/components/ui/SearchExperience'
import { FloatingPill } from '@/components/ui/FloatingPill'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useExperienceMode } from '@/hooks/useExperienceMode'

export const Hero: React.FC = () => {
  const reducedMotion = useReducedMotion()
  const { mode } = useExperienceMode()

  const transition = {
    duration: reducedMotion ? 0.2 : 0.8,
    ease: [0.16, 1, 0.3, 1] as const, // ease-editorial
  }

  return (
    <section className="relative min-h-[92vh] md:min-h-[95vh] w-full flex flex-col items-center justify-start overflow-hidden bg-bg-base select-none pb-20">

      {/* Background clouds video with absolute positioning and linear gradient top feather */}
      <BackgroundVideo />

      {/* Hero content aligned in a 12-column grid */}
      <div className="max-w-7xl w-full mx-auto px-8 md:px-16 lg:px-20 relative z-10 grid grid-cols-12 gap-x-4 md:gap-x-8">

        {/* Content aligns to col-span-12 on mobile, col-span-10 starting at column 2 on desktop */}
        <div className="col-span-12 md:col-span-10 md:col-start-2 text-left pt-[18vh] md:pt-[22vh] flex flex-col gap-8 md:gap-10">

          {/* Subtitle Telemetry Tag */}
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="flex items-center gap-3"
          >
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0B0D13]/[0.05] border border-[#0B0D13]/[0.08] text-[10.5px] font-mono font-medium tracking-wider text-[#0B0D13] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              SYSTEMS ARCHITECTURE // EST. 2026
            </span>
          </motion.div>

          {/* Header Typography with slide-up fade */}
          <motion.h1
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="font-display font-medium text-[36px] md:text-[54px] lg:text-[66px] leading-[1.12] tracking-tight text-balance max-w-[960px] md:pr-12"
          >
            <span className="text-[#0B0D13]">ONNREV: Engineering resilient </span>
            <span className="text-[#64748B]">infrastructure and autonomous systems to scale your <SignatureOrbital /> enterprise operations.</span>
          </motion.h1>

          {/* Subtitle Focus Area (Syncs with Switcher) */}
          <div className="min-h-[20px] -mt-2 -mb-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={mode}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-[12px] md:text-[13.5px] font-semibold text-[#64748B] tracking-wide uppercase"
              >
                {mode === 'Enterprise' && 'Focus: Enterprise Strategy • Digital Transformation • Governance • Architecture'}
                {mode === 'Intelligence' && 'Focus: AI Agents • RAG • LLMs • Automation • Knowledge Systems'}
                {mode === 'Growth' && 'Focus: Marketing • Revenue • Performance • Customer Journey • Acquisition'}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Search Capsule Component with delayed slide-up animation */}
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.15 }}
            className="w-full mt-2"
          >
            <SearchExperience />
          </motion.div>

        </div>
      </div>

      {/* Floating mode switcher pill */}
      <FloatingPill />

      {/* Bottom Metadata aligned with the 12-column grid limits */}
      <div className="absolute bottom-8 left-0 w-full z-20 pointer-events-none">
        <div className="max-w-7xl w-full mx-auto px-8 md:px-16 lg:px-20 flex items-center justify-between text-[11px] font-mono font-medium text-[#64748B] uppercase tracking-[0.15em]">
          <span>2026 // ONNREV ARCHITECTURE</span>
          <span className="hidden sm:block text-right">
            Enterprise Intelligence • Autonomous Operations • Growth Infrastructure
          </span>
        </div>
      </div>

    </section>
  )
}

export default Hero
