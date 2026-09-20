import React from 'react'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { OnnrevLogo } from '@/components/shared/OnnrevLogo'

export const NotFound: React.FC = () => {
  const reducedMotion = useReducedMotion()

  const transition = {
    duration: reducedMotion ? 0.2 : 0.8,
    ease: [0.16, 1, 0.3, 1] as const,
  }

  return (
    <section
      className="w-full min-h-screen bg-[#F6F7F9] flex flex-col items-center justify-center text-center px-8"
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
        <a href="/" aria-label="ONNREV — back to home">
          <OnnrevLogo variant="full" height={54} color="#0B0D13" accentColor="#10B981" />
        </a>

        {/* Large editorial numeral */}
        <span className="font-display font-medium text-[120px] md:text-[160px] leading-none tracking-tight text-[#0B0D13]/[0.05] select-none">
          404
        </span>

        <div className="flex flex-col gap-3 -mt-10">
          <h1 className="font-display font-medium text-[28px] md:text-[36px] text-[#0B0D13] tracking-tight">
            System Node Not Found
          </h1>
          <p className="font-sans text-[14.5px] leading-relaxed text-[#64748B]">
            The requested architecture coordinate does not exist or has been recalibrated.
          </p>
        </div>

        <a
          href="/"
          className="mt-4 inline-flex items-center gap-2 bg-[#0B0D13] hover:bg-[#1E293B] text-white py-3 px-6 rounded-full font-sans text-[13px] font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
        >
          Return to ONNREV Home →
        </a>
      </motion.div>
    </section>
  )
}

export default NotFound
