import React from 'react'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { VyomaLogo } from '@/components/shared/VyomaLogo'

export const NotFound: React.FC = () => {
  const reducedMotion = useReducedMotion()

  const transition = {
    duration: reducedMotion ? 0.2 : 0.8,
    ease: [0.16, 1, 0.3, 1] as const,
  }

  return (
    <section
      className="w-full min-h-screen bg-[#EDEEF5] flex flex-col items-center justify-center text-center px-8"
      role="main"
      aria-label="Page not found"
    >
      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className="flex flex-col items-center gap-6 max-w-[480px]"
      >
        {/* Brand mark */}
        <a href="/" aria-label="Vyom AI — back to home">
          <VyomaLogo variant="full" height={64} />
        </a>

        {/* Large editorial numeral */}
        <span className="font-display font-medium text-[120px] md:text-[160px] leading-none tracking-tight text-[#1a1a1a]/[0.06] select-none">
          404
        </span>

        <div className="flex flex-col gap-3 -mt-10">
          <h1 className="font-display font-medium text-[28px] md:text-[36px] text-[#1a1a1a] tracking-tight">
            This page doesn't exist — yet.
          </h1>
          <p className="font-sans text-[14.5px] leading-relaxed text-[#8e8e8e]">
            The page you're looking for may have moved, or may be part of something we're building next.
          </p>
        </div>

        <a
          href="/"
          className="mt-4 inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#333] text-white py-3 px-6 rounded-full font-sans text-[13px] font-bold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#9fff00] focus-visible:ring-offset-2"
        >
          Return to Vyoma →
        </a>
      </motion.div>
    </section>
  )
}

export default NotFound
