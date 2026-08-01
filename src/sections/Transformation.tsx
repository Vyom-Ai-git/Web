import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface Stage {
  title: string
  headline: string
  desc: string
  elements: string[]
}

// ─── 1. Discover Artwork SVG (Organizational Alignment & Workshops) ────────
const DiscoverArtwork: React.FC<{ active: boolean; reducedMotion: boolean }> = ({ active: _active, reducedMotion }) => (
  <svg viewBox="0 0 240 180" className="w-full max-w-[280px] md:max-w-[340px] h-auto aspect-[4/3] stroke-[#1a1a1a]/20 fill-none stroke-[0.75] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    {/* Grid/Radar Circles */}
    <circle cx="120" cy="90" r="70" className="stroke-[#1a1a1a]/5" strokeDasharray="3 3" />
    <circle cx="120" cy="90" r="45" className="stroke-[#1a1a1a]/5" />

    {/* Connection lines */}
    <line x1="120" y1="90" x2="65" y2="60" className="stroke-[#1a1a1a]/15" />
    <line x1="120" y1="90" x2="175" y2="60" className="stroke-[#1a1a1a]/15" />
    <line x1="120" y1="90" x2="120" y2="150" className="stroke-[#1a1a1a]/15" />

    {/* Running dashes on connection tracks */}
    <motion.line
      x1="120" y1="90" x2="65" y2="60"
      className="stroke-[#8FBF3C] stroke-[1]"
      strokeDasharray="6 12"
      animate={!reducedMotion ? { strokeDashoffset: [30, 0] } : {}}
      transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
    />
    <motion.line
      x1="120" y1="90" x2="175" y2="60"
      className="stroke-[#8FBF3C] stroke-[1]"
      strokeDasharray="6 12"
      animate={!reducedMotion ? { strokeDashoffset: [-30, 0] } : {}}
      transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
    />

    {/* Stakeholder/Business Unit Nodes */}
    <motion.g
      animate={!reducedMotion ? { y: [0, -3, 0] } : {}}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
    >
      <circle cx="65" cy="60" r="8" className="fill-white stroke-[#1a1a1a]" />
      <circle cx="65" cy="60" r="2" className="fill-[#1a1a1a]" />
    </motion.g>

    <motion.g
      animate={!reducedMotion ? { y: [0, 3, 0] } : {}}
      transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
    >
      <circle cx="175" cy="60" r="10" className="fill-white stroke-[#1a1a1a]" />
      <circle cx="175" cy="60" r="3" className="fill-[#1a1a1a]" />
    </motion.g>

    <motion.g
      animate={!reducedMotion ? { y: [0, -2, 0] } : {}}
      transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut', delay: 0.2 }}
    >
      <circle cx="120" cy="150" r="9" className="fill-white stroke-[#1a1a1a]" />
      <circle cx="120" cy="150" r="2.5" className="fill-[#1a1a1a]" />
    </motion.g>

    {/* Center Opportunity Target Node */}
    <circle cx="120" cy="90" r="18" className="fill-white stroke-[#1a1a1a]/30" />
    <motion.circle
      cx="120" cy="90" r="24"
      className="stroke-[#8FBF3C] stroke-[1]"
      animate={!reducedMotion ? { scale: [0.95, 1.15, 0.95], opacity: [0.3, 0.8, 0.3] } : {}}
      transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
      style={{ transformOrigin: '120px 90px' }}
    />
    <circle cx="120" cy="90" r="4.5" className="fill-[#8FBF3C] stroke-none" />
  </svg>
)

// ─── 2. Design Artwork SVG (System Architecture Blueprint) ──────────────────
const DesignArtwork: React.FC<{ active: boolean; reducedMotion: boolean }> = ({ active: _active, reducedMotion }) => (
  <svg viewBox="0 0 240 180" className="w-full max-w-[280px] md:max-w-[340px] h-auto aspect-[4/3] stroke-[#1a1a1a]/25 fill-none stroke-[0.75] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    {/* Blueprint horizontal/vertical grids */}
    <path d="M20,45 L220,145 M20,135 L220,35" className="stroke-[#1a1a1a]/5" />
    <circle cx="120" cy="90" r="60" className="stroke-[#1a1a1a]/5" />

    {/* Cloud & Data blueprint layer */}
    <g className="opacity-95">
      {/* Outer architecture shield */}
      <polygon points="120,25 190,60 190,130 120,165 50,130 50,60" className="stroke-[#1a1a1a] fill-white/5" />

      {/* Internal AI database stack */}
      <polygon points="120,55 160,75 120,95 80,75" className="stroke-[#1a1a1a] fill-white/10" />
      <polygon points="120,70 160,90 120,110 80,90" className="stroke-[#1a1a1a] fill-white/10" />
      <polygon points="120,85 160,105 120,125 80,105" className="stroke-[#8FBF3C] stroke-[1.25] fill-white/10" />
    </g>

    {/* Radiating AI integrations flow */}
    <motion.circle
      cx="120" cy="90" r="42"
      className="stroke-[#8FBF3C]/30"
      animate={!reducedMotion ? { scale: [0.9, 1.15, 0.9], opacity: [0.2, 0.6, 0.2] } : {}}
      transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      style={{ transformOrigin: '120px 90px' }}
    />
  </svg>
)

// ─── 3. Build Artwork SVG (Engineering Pipelines & Code Assemblies) ──────────
const BuildArtwork: React.FC<{ active: boolean; reducedMotion: boolean }> = ({ active, reducedMotion }) => (
  <svg viewBox="0 0 240 180" className="w-full max-w-[280px] md:max-w-[340px] h-auto aspect-[4/3] stroke-[#1a1a1a]/25 fill-none stroke-[0.75] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30,140 H210" className="stroke-[#1a1a1a]/15" />

    {/* Engineering pipelines conveyor belt track */}
    <g>
      <rect x="50" y="70" width="140" height="40" rx="6" className="stroke-[#1a1a1a] fill-white/5" />
      <circle cx="70" cy="90" r="10" className="stroke-[#1a1a1a]/30" />
      <circle cx="170" cy="90" r="10" className="stroke-[#1a1a1a]/30" />

      {/* Assembly loops gears */}
      <motion.circle
        cx="120" cy="90" r="12"
        className="stroke-[#8FBF3C] stroke-[1.5]"
        animate={!reducedMotion ? { rotate: 360 } : {}}
        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
        strokeDasharray="4 4"
        style={{ transformOrigin: '120px 90px' }}
      />
    </g>

    {/* Containers/Packages flowing */}
    <motion.rect
      x="80" y="50" width="22" height="15" rx="1.5"
      className="fill-white stroke-[#1a1a1a]"
      animate={active && !reducedMotion ? { x: [60, 140] } : {}}
      transition={{ repeat: Infinity, duration: 4.5, ease: 'linear' }}
    />
    <motion.rect
      x="120" y="50" width="22" height="15" rx="1.5"
      className="fill-white stroke-[#8FBF3C] stroke-[1.25]"
      animate={active && !reducedMotion ? { x: [100, 180] } : {}}
      transition={{ repeat: Infinity, duration: 4.5, ease: 'linear', delay: 2.25 }}
    />
  </svg>
)

// ─── 4. Optimize Artwork SVG (Operational Analytics & KPI Monitors) ──────────
const OptimizeArtwork: React.FC<{ active: boolean; reducedMotion: boolean }> = ({ active, reducedMotion }) => (
  <svg viewBox="0 0 240 180" className="w-full max-w-[280px] md:max-w-[340px] h-auto aspect-[4/3] stroke-[#1a1a1a]/25 fill-none stroke-[0.75] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    {/* Analytics Grid */}
    <rect x="40" y="30" width="160" height="110" rx="3" className="stroke-[#1a1a1a] fill-white/5" />
    <line x1="40" y1="85" x2="200" y2="85" className="stroke-[#1a1a1a]/10" />
    <line x1="120" y1="30" x2="120" y2="140" className="stroke-[#1a1a1a]/10" />

    {/* Continuous operational loops */}
    <motion.path
      d="M50,115 C80,115 90,55 120,55 C150,55 160,115 190,115"
      className="stroke-[#1a1a1a]"
      animate={active && !reducedMotion ? {
        d: [
          "M50,115 C80,115 90,55 120,55 C150,55 160,115 190,115",
          "M50,90 C80,60 90,110 120,110 C150,110 160,60 190,90",
          "M50,115 C80,115 90,55 120,55 C150,55 160,115 190,115"
        ]
      } : {}}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* Optimization Target Trend Line */}
    <motion.path
      d="M50,125 Q120,105 190,55"
      className="stroke-[#8FBF3C] stroke-[1.5]"
      animate={active && !reducedMotion ? { pathLength: [0, 1] } : {}}
      transition={{ duration: 2, ease: 'easeOut' }}
    />

    {/* Live KPI monitoring pulse */}
    <motion.circle
      cx="190" cy="55" r="5"
      className="fill-[#8FBF3C] stroke-none"
      animate={!reducedMotion ? { scale: [1, 2, 1], opacity: [0.8, 0, 0.8] } : {}}
      transition={{ repeat: Infinity, duration: 2.2, ease: 'easeOut' }}
    />
    <circle cx="190" cy="55" r="1.5" className="fill-white stroke-none" />
  </svg>
)

// ─── 5. Scale Artwork SVG (Global Cloud Expansion Hub) ──────────────────────
const ScaleArtwork: React.FC<{ active: boolean; reducedMotion: boolean }> = ({ active: _active, reducedMotion }) => (
  <svg viewBox="0 0 240 180" className="w-full max-w-[280px] md:max-w-[340px] h-auto aspect-[4/3] stroke-[#1a1a1a]/25 fill-none stroke-[0.75] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    {/* Global expansion concentric lines */}
    <circle cx="120" cy="90" r="64" className="stroke-[#1a1a1a]/15" />
    <path d="M56,90 H184 M120,26 V154" className="stroke-[#1a1a1a]/10" strokeDasharray="3 3" />

    {/* Latitude / Longitude arcs */}
    <path d="M66,60 C80,75 100,90 120,90 C140,90 160,75 174,60" className="stroke-[#1a1a1a]/10" />
    <path d="M66,120 C80,105 100,90 120,90 C140,90 160,105 174,120" className="stroke-[#1a1a1a]/10" />

    {/* Connected Platform regional hubs */}
    <g>
      <circle cx="70" cy="65" r="6" className="fill-white stroke-[#1a1a1a]" />
      <circle cx="70" cy="65" r="1.5" className="fill-[#1a1a1a]" />
    </g>
    <g>
      <circle cx="170" cy="115" r="6" className="fill-white stroke-[#1a1a1a]" />
      <circle cx="170" cy="115" r="1.5" className="fill-[#1a1a1a]" />
    </g>

    {/* Active Scale Core node (US region) */}
    <motion.g
      animate={!reducedMotion ? { y: [0, -3, 0] } : {}}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
    >
      <circle cx="120" cy="45" r="8" className="fill-[#8FBF3C] stroke-white stroke-[1.25]" />
      <circle cx="120" cy="45" r="2.5" className="fill-[#1a1a1a]" />
    </motion.g>

    {/* Connectivity rays / orbital wave */}
    <motion.circle
      cx="120" cy="90" r="48"
      className="stroke-[#8FBF3C]/30"
      animate={!reducedMotion ? { scale: [1, 1.4, 1], opacity: [0.1, 0.6, 0.1] } : {}}
      transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      style={{ transformOrigin: '120px 90px' }}
    />
  </svg>
)

export const Transformation: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const reducedMotion = useReducedMotion()

  const stagesList = ['Discover', 'Design', 'Build', 'Optimize', 'Scale']

  const stagesData: Stage[] = [
    {
      title: 'Discover',
      headline: 'Understanding Before Transformation',
      desc: 'Every successful transformation begins by understanding people, operations, systems, data and business constraints before technology decisions are made.',
      elements: ['Executive Workshops', 'Business Discovery', 'Stakeholder Alignment', 'Opportunity Mapping']
    },
    {
      title: 'Design',
      headline: 'Architecting Intelligent Systems',
      desc: 'Translate business understanding into a scalable architecture that integrates intelligence, automation, and growth strategies.',
      elements: ['Enterprise Architecture', 'AI Strategy', 'Process Design', 'Experience Mapping']
    },
    {
      title: 'Build',
      headline: 'Engineering Reliable Intelligence',
      desc: 'Engineer secure, scalable systems that integrate seamlessly with existing operations while preparing for future growth.',
      elements: ['Platform Engineering', 'AI Integration', 'Automation Systems', 'Data Infrastructure']
    },
    {
      title: 'Optimize',
      headline: 'Continuous Operational Intelligence',
      desc: 'Continuously measure performance, refine workflows, and improve outcomes using operational intelligence and feedback loops.',
      elements: ['Analytics', 'Performance Monitoring', 'Continuous Improvement', 'Experimentation']
    },
    {
      title: 'Scale',
      headline: 'Scaling Enterprise Transformation',
      desc: 'Expand capabilities across teams, markets, and business units while maintaining operational excellence and strategic alignment.',
      elements: ['Growth Enablement', 'Organizational Adoption', 'Governance', 'Long-term Partnership']
    }
  ]

  const handleNext = (manual = false) => {
    setCurrentStage((prev) => {
      if (prev + 1 < stagesList.length) {
        return prev + 1
      }
      return manual ? prev : 0 // Auto-play loops back
    })
  }

  const handlePrev = () => {
    setCurrentStage((prev) => (prev - 1 >= 0 ? prev - 1 : prev))
  }

  // Auto-play timer (8 seconds)
  useEffect(() => {
    if (isPaused || reducedMotion) return
    const interval = setInterval(() => {
      handleNext(false)
    }, 8000)
    return () => clearInterval(interval)
  }, [currentStage, isPaused, reducedMotion])

  // Keyboard navigation listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        handleNext(true)
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        handlePrev()
      } else if (e.key === 'Home') {
        e.preventDefault()
        setCurrentStage(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        setCurrentStage(stagesList.length - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentStage])

  // Touch swipe detection
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      handleNext(true)
    } else if (isRightSwipe) {
      handlePrev()
    }
  }

  const renderVisual = (index: number) => {
    switch (index) {
      case 0: return <DiscoverArtwork active={index === currentStage} reducedMotion={reducedMotion} />
      case 1: return <DesignArtwork active={index === currentStage} reducedMotion={reducedMotion} />
      case 2: return <BuildArtwork active={index === currentStage} reducedMotion={reducedMotion} />
      case 3: return <OptimizeArtwork active={index === currentStage} reducedMotion={reducedMotion} />
      case 4: return <ScaleArtwork active={index === currentStage} reducedMotion={reducedMotion} />
      default: return null
    }
  }

  return (
    <section
      id="transformation"
      className="w-full bg-[#EDEEF5] py-16 sm:py-[100px] md:py-[130px] border-t border-black/[0.05] relative z-20 select-none overflow-hidden"
      role="region"
      aria-label="Vyom Transformation Journey Roadmap"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Blueprint Architectural Grid background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* Top Chapter Label & Editorial Heading */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 grid grid-cols-12 gap-x-4 md:gap-x-8 mb-12 md:mb-16 relative z-10">
        <div className="col-span-12 md:col-span-10 md:col-start-2 text-left flex flex-col gap-4">
          <span className="text-[11px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
            CHAPTER 03 // Transformation Journey
          </span>
          <h2 className="font-display font-medium text-[36px] md:text-[50px] lg:text-[56px] leading-[1.12] text-[#1a1a1a] tracking-tight">
            Every Transformation Begins with Understanding
          </h2>
        </div>
      </div>

      {/* Presentation Keynote Frame */}
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="max-w-5xl mx-auto px-8 md:px-16 relative z-10 flex flex-col items-center gap-10"
      >
        {/* Large Premium Illustration Box */}
        <div className="w-full max-w-xl aspect-[1.8/1] flex items-center justify-center py-6 bg-white/20 border border-black/[0.03] rounded-[16px] shadow-soft relative overflow-hidden backdrop-blur-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full flex items-center justify-center"
            >
              {renderVisual(currentStage)}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stage Content Details */}
        <div className="w-full max-w-2xl text-center flex flex-col gap-6" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-6"
            >
              {/* Stage Title & Headline */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#8e8e8e] uppercase">
                  STAGE 0{currentStage + 1} — {stagesData[currentStage].title}
                </span>
                <h3 className="font-display font-medium text-[26px] md:text-[34px] text-[#1a1a1a] tracking-tight">
                  {stagesData[currentStage].headline}
                </h3>
              </div>

              {/* Stage Description */}
              <p className="font-sans text-[15px] md:text-[16px] leading-relaxed text-[#6B7280] max-w-xl text-center text-balance">
                {stagesData[currentStage].desc}
              </p>

              <hr className="border-black/[0.05] w-24 mx-auto" />

              {/* Supporting Focus Chips */}
              <div className="flex flex-col items-center gap-3">
                <span className="text-[10px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
                  Supporting Focus
                </span>
                <div className="flex flex-wrap gap-2 justify-center max-w-lg mt-1">
                  {stagesData[currentStage].elements.map((el, idx) => (
                    <motion.span
                      key={el}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                      className="px-3 py-1 rounded-[4px] border border-black/[0.04] bg-white/30 text-[#1a1a1a] font-sans text-[12.5px] cursor-default select-none shadow-sm"
                    >
                      {el}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation centered */}
        <div className="flex items-center justify-center gap-8 mt-6 w-full max-w-xs relative z-20">
          <button
            onClick={handlePrev}
            disabled={currentStage === 0}
            aria-label="Previous keynote slide"
            className="w-10 h-10 rounded-full border border-black/[0.08] bg-white/30 disabled:bg-transparent disabled:opacity-20 disabled:pointer-events-none hover:bg-white/60 hover:border-black/20 shadow-soft active:scale-[0.95] focus-visible:ring-2 focus-visible:ring-black transition-all duration-300 cursor-pointer flex items-center justify-center group outline-none"
          >
            <span className="text-[16px] font-bold text-[#1a1a1a] transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
          </button>

          <div className="font-mono text-[14px] text-[#1a1a1a] font-bold select-none min-w-[50px] text-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentStage}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                0{currentStage + 1}
              </motion.span>
            </AnimatePresence>
            <span className="text-[#8e8e8e] text-[12px] font-normal"> / 05</span>
          </div>

          <button
            onClick={() => handleNext(true)}
            disabled={currentStage === stagesList.length - 1}
            aria-label="Next keynote slide"
            className="w-10 h-10 rounded-full border border-black/[0.08] bg-white/30 disabled:bg-transparent disabled:opacity-20 disabled:pointer-events-none hover:bg-white/60 hover:border-black/20 shadow-soft active:scale-[0.95] focus-visible:ring-2 focus-visible:ring-black transition-all duration-300 cursor-pointer flex items-center justify-center group outline-none"
          >
            <span className="text-[16px] font-bold text-[#1a1a1a] transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </button>
        </div>

      </div>
    </section>
  )
}

export default Transformation
