import React from 'react'
import { motion } from 'motion/react'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { OnnrevSymbolMark } from '@/components/shared/OnnrevLogo'

export const VisualHero: React.FC = () => {
  const reducedMotion = useReducedMotion()

  const transition = {
    duration: reducedMotion ? 0.2 : 0.8,
    ease: [0.16, 1, 0.3, 1] as const,
  }

  const scrollToExplore = () => {
    const el = document.getElementById('intro')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] md:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-black text-white select-none pt-32 md:pt-40 pb-12"
      role="region"
      aria-label="ONNREV Visual Hero"
    >
      {/* Background noir atmosphere with subtle red ambient light */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#160204] via-black to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#ef233c]/[0.08] rounded-full blur-[140px]" />
        <div className="absolute inset-0 technical-grid opacity-20 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)]" />
        
        {/* Kinetic 3D-feel Geometric Wireframe Mesh */}
        <div className="absolute right-[-10%] md:right-4 top-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] md:w-[620px] lg:w-[700px] h-[700px] pointer-events-none opacity-40 lg:opacity-75 flex items-center justify-center">
          <svg viewBox="0 0 400 400" className="w-full h-full fill-none select-none">
            <defs>
              <linearGradient id="heroRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef233c" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#d90429" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Concentric rotating orbital rings */}
            <motion.circle
              cx="200" cy="200" r="160"
              stroke="url(#heroRedGrad)"
              strokeWidth="0.75"
              strokeDasharray="6 6"
              animate={reducedMotion ? {} : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
              style={{ transformOrigin: '200px 200px' }}
            />
            <motion.ellipse
              cx="200" cy="200" rx="140" ry="60"
              stroke="#ef233c"
              strokeWidth="1"
              strokeOpacity="0.3"
              animate={reducedMotion ? {} : { rotate: -360 }}
              transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
              style={{ transformOrigin: '200px 200px' }}
            />
            <motion.ellipse
              cx="200" cy="200" rx="60" ry="140"
              stroke="#FFFFFF"
              strokeWidth="0.75"
              strokeOpacity="0.15"
              animate={reducedMotion ? {} : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
              style={{ transformOrigin: '200px 200px' }}
            />
            <polygon points="200,80 300,260 100,260" stroke="#ef233c" strokeWidth="0.75" strokeOpacity="0.35" />
            <polygon points="200,320 300,140 100,140" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.2" />
            {/* Pulsing Core Focus */}
            <circle cx="200" cy="200" r="4" fill="#ef233c" />
            <motion.circle
              cx="200" cy="200" r="18"
              stroke="#ef233c"
              strokeWidth="1"
              animate={reducedMotion ? {} : { scale: [1, 1.8, 1], opacity: [0.8, 0.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            />
          </svg>
        </div>

        {/* Giant subtle emblem watermark in the background */}
        <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 opacity-[0.10] pointer-events-none hidden lg:block">
          <OnnrevSymbolMark size={500} />
        </div>
      </div>

      {/* Top Telemetry Header Bar */}
      <div className="max-w-6xl w-full mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-2"
        >
          <OnnrevSymbolMark size={18} />
          <span className="text-xs font-mono font-medium text-white/80 tracking-wider uppercase">
            ONNREV // OFFICIAL DIGITAL PRESENCE
          </span>
        </motion.div>
      </div>

      {/* Main Punchy Dramatic Headline Composition (Passes the 5-Second Test) */}
      <div className="max-w-6xl w-full mx-auto px-6 md:px-12 relative z-10 my-auto py-12 text-left">
        <div className="max-w-[1050px] flex flex-col gap-6 md:gap-8">
          
          <motion.span
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
            className="text-[12px] font-mono tracking-[0.28em] text-[#ef233c] uppercase font-semibold"
          >
            // ENTERPRISE TECHNOLOGY & SYSTEMS
          </motion.span>

          {/* Master Headline: BUILDING WHAT MOVES TOMORROW */}
          <motion.h1
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
            className="font-display font-semibold text-[52px] sm:text-[76px] md:text-[96px] lg:text-[116px] leading-[0.93] tracking-tight text-white uppercase text-balance"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70">
              BUILDING WHAT
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">
              MOVES <span className="text-[#ef233c] inline-block relative">
                TOMORROW.
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-[#ef233c] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2.5" fill="none" />
                </svg>
              </span>
            </span>
          </motion.h1>

          {/* Short supporting text specified by master prompt */}
          <motion.p
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.3 }}
            className="font-sans text-[18px] md:text-[22px] text-zinc-400 font-light max-w-[640px] leading-relaxed"
          >
            Technology, design and solutions built for businesses ready for what's next.
          </motion.p>

          {/* Master CTAs: Explore Our Work & Start a Conversation */}
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.4 }}
            className="flex flex-wrap items-center gap-5 pt-4"
          >
            <a
              href="#work"
              className="shiny-cta-red group inline-flex items-center gap-3 text-white font-medium text-[14px]"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowRight className="w-4 h-4 text-[#ef233c] transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-sans text-[14px] font-medium transition-all"
            >
              START A CONVERSATION
            </a>
          </motion.div>

        </div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <div className="max-w-7xl w-full mx-auto px-8 md:px-16 lg:px-20 relative z-10">
        <div className="flex items-center justify-between border-t border-white/[0.08] pt-4 text-[11px] font-mono text-white/40">
          <span>ONNREV // 01 SHOWROOM</span>
          
          <button
            onClick={scrollToExplore}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer outline-none group"
            aria-label="Scroll down to introduction"
          >
            <span className="uppercase tracking-wider">DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default VisualHero
