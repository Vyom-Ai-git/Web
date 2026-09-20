import React from 'react'
import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { SignatureOrbital } from '@/components/ui/SignatureOrbital'
import { BackgroundVideo } from '@/components/ui/BackgroundVideo'

export const OpeningFrame: React.FC = () => {
  const reducedMotion = useReducedMotion()

  const transition = {
    duration: reducedMotion ? 0.2 : 0.9,
    ease: [0.16, 1, 0.3, 1] as const,
  }

  const scrollToNext = () => {
    const el = document.getElementById('statement')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="opening-frame"
      className="relative min-h-[96vh] md:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#F7F8FA] select-none pt-28 md:pt-36 pb-12"
      role="region"
      aria-label="ONNREV Opening Frame"
    >
      {/* Background cinematic atmosphere */}
      <BackgroundVideo />

      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Top Telemetry Header Bar */}
      <div className="max-w-7xl w-full mx-auto px-8 md:px-16 lg:px-20 relative z-10">
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex flex-wrap items-center justify-between border-b border-[#0B0D13]/[0.08] pb-4 text-[11px] font-mono tracking-widest text-[#64748B] uppercase"
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[#0B0D13] font-semibold">ONNREV DIGITAL FLAGSHIP</span>
            <span className="text-[#94A3B8]">•</span>
            <span>SYSTEMS ARCHITECTURE</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>COORDINATES: 2026 // GLOBAL OPS</span>
            <span className="text-[#10B981]">STATUS: OPERATIONAL</span>
          </div>
        </motion.div>
      </div>

      {/* Main Dramatic Headline Composition */}
      <div className="max-w-7xl w-full mx-auto px-8 md:px-16 lg:px-20 relative z-10 my-auto py-12">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 items-end">
          
          <div className="col-span-12 lg:col-span-10 text-left flex flex-col gap-6 md:gap-8">
            <motion.span
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.1 }}
              className="text-[12px] font-mono font-medium tracking-[0.25em] text-[#64748B] uppercase"
            >
              // Precision Has Aesthetics
            </motion.span>

            <motion.h1
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.2 }}
              className="font-display font-medium text-[42px] sm:text-[60px] md:text-[76px] lg:text-[88px] leading-[1.04] tracking-tight text-[#0B0D13] text-balance max-w-[1050px]"
            >
              Engineering the systems that make modern enterprises <SignatureOrbital /> resilient, autonomous, and scalable.
            </motion.h1>

            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-[#0B0D13]/[0.08]"
            >
              <p className="md:col-span-8 font-sans text-[16px] md:text-[19px] leading-relaxed text-[#475569] max-w-[700px]">
                ONNREV designs and implements enterprise intelligence architecture, autonomous workflow orchestration, and growth systems for organizations operating in high-demand environments.
              </p>

              <div className="md:col-span-4 flex items-center md:justify-end gap-3">
                <a
                  href="#capabilities"
                  className="px-6 py-3 rounded-full bg-[#0B0D13] text-white font-sans text-[13.5px] font-medium hover:bg-[#1E293B] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm flex items-center gap-2"
                >
                  <span>Explore Architecture</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Frame Cue & Exploration Telemetry */}
      <div className="max-w-7xl w-full mx-auto px-8 md:px-16 lg:px-20 relative z-10">
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: 0.45 }}
          className="flex items-center justify-between pt-6 border-t border-[#0B0D13]/[0.08]"
        >
          <div className="flex items-center gap-4 text-[12px] font-mono text-[#64748B]">
            <span className="text-[#0B0D13] font-bold">[ 01 / 12 ]</span>
            <span className="hidden sm:inline">ARRIVAL VIEWPORT</span>
          </div>

          <button
            onClick={scrollToNext}
            className="flex items-center gap-2 text-[12px] font-mono tracking-wider text-[#0B0D13] hover:text-[#10B981] transition-colors cursor-pointer outline-none group"
            aria-label="Scroll down to statement"
          >
            <span>DISCOVER THE VISION</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default OpeningFrame
