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
      className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-8 relative overflow-hidden"
      role="main"
      aria-label="Page not found"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ef233c]/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className="flex flex-col items-center gap-6 max-w-[480px] relative z-10"
      >
        {/* Brand mark */}
        <a href="/" aria-label="ONNREV — back to home">
          <OnnrevLogo variant="full" height={54} color="#FFFFFF" accentColor="#ef233c" />
        </a>

        {/* Large editorial numeral */}
        <span className="font-display font-bold text-[120px] md:text-[160px] leading-none tracking-tight text-white/[0.05] select-none">
          404
        </span>

        <div className="flex flex-col gap-3 -mt-10">
          <h1 className="font-display font-medium text-[28px] md:text-[36px] text-white tracking-tight uppercase">
            Node Not Found
          </h1>
          <p className="font-sans text-[14.5px] leading-relaxed text-zinc-400">
            The requested architecture coordinate does not exist or has been recalibrated.
          </p>
        </div>

        <a
          href="/"
          className="mt-4 inline-flex items-center gap-2 bg-[#ef233c] hover:bg-[#d90429] text-white py-3 px-6 rounded-full font-sans text-[13px] font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-[#ef233c] focus-visible:ring-offset-2 shadow-[0_0_20px_rgba(239,35,60,0.35)]"
        >
          Return to ONNREV Home →
        </a>
      </motion.div>
    </section>
  )
}

export default NotFound
