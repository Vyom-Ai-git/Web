import React from 'react'
import { motion } from 'motion/react'
import { BackgroundVideo } from '@/components/ui/BackgroundVideo'
import { SignatureOrbital } from '@/components/ui/SignatureOrbital'
import { SearchExperience } from '@/components/ui/SearchExperience'
import { FloatingPill } from '@/components/ui/FloatingPill'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export const Hero: React.FC = () => {
  const reducedMotion = useReducedMotion()

  const transition = {
    duration: reducedMotion ? 0.2 : 0.8,
    ease: [0.16, 1, 0.3, 1] as const, // ease-editorial
  }

  return (
    <section className="relative min-h-[110vh] sm:min-h-[140vh] w-full flex flex-col items-center justify-start overflow-hidden bg-bg-base select-none">
      
      {/* Background clouds video with absolute positioning and linear gradient top feather */}
      <BackgroundVideo />

      {/* Hero content aligned in a 12-column grid */}
      <div className="max-w-7xl w-full mx-auto px-8 md:px-16 lg:px-20 relative z-10 grid grid-cols-12 gap-x-4 md:gap-x-8">
        
        {/* Content aligns to col-span-12 on mobile, col-span-10 starting at column 2 on desktop */}
        <div className="col-span-12 md:col-span-10 md:col-start-2 text-left pt-[24vh] md:pt-[28vh] flex flex-col gap-8 md:gap-10">
          
          {/* Header Typography with slide-up fade */}
          <motion.h1
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="font-display font-medium text-[36px] md:text-[54px] lg:text-[68px] leading-[1.12] tracking-tight text-balance"
          >
            <span className="text-[#1a1a1a]">Engineering: Vyoma designs </span>
            <span className="text-[#8e8e8e]">infrastructure</span>
            <br />
            <span className="text-[#8e8e8e]">and systems to help you automate </span>
            <br />
            <span className="text-[#8e8e8e]">
              your <SignatureOrbital /> enterprise operations.
            </span>
          </motion.h1>

          {/* Search Capsule Component with delayed slide-up animation */}
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.15 }}
            className="w-full"
          >
            <SearchExperience />
          </motion.div>

        </div>
      </div>

      {/* Architectural Edge Anchors */}
      
      {/* Absolute middle right edge: floating modes capsule */}
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...transition, delay: 0.3 }}
        className="absolute top-1/2 right-8 -translate-y-1/2 z-30"
      >
        <FloatingPill />
      </motion.div>

      {/* Absolute bottom left corner */}
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.4 }}
        className="absolute bottom-8 left-8 md:left-16 lg:left-20 z-20 text-[11px] font-sans font-medium text-[#8e8e8e] uppercase tracking-[0.2em]"
      >
        2026
      </motion.div>

      {/* Absolute bottom right corner */}
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.4 }}
        className="absolute bottom-8 right-8 md:right-16 lg:right-20 z-20 text-[11px] font-sans font-medium text-[#8e8e8e] uppercase tracking-[0.15em] hidden sm:block text-right"
      >
        Enterprise Intelligence • Autonomous Operations • Growth Infrastructure
      </motion.div>

    </section>
  )
}

export default Hero
