import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface Stage {
  title: string
  desc: string
  elements: string[]
}

// ─── 1. Discover Visual SVG (Disconnected nodes connecting) ──────────────────
const DiscoverVisual: React.FC<{ active: boolean; reducedMotion: boolean }> = ({ active, reducedMotion }) => (
  <svg viewBox="0 0 200 200" className="w-full max-w-[180px] h-auto aspect-square stroke-[#1a1a1a]/30 fill-none pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="50" r="3.5" className="fill-[#1a1a1a]" />
    <circle cx="150" cy="40" r="3.5" className="fill-[#1a1a1a]" />
    <circle cx="80" cy="110" r="3.5" className="fill-[#1a1a1a]" />
    <circle cx="160" cy="140" r="3.5" className="fill-[#1a1a1a]" />
    <circle cx="50" cy="160" r="3.5" className="fill-[#1a1a1a]" />
    
    <motion.line
      x1="40" y1="50" x2="80" y2="110"
      strokeWidth="0.75"
      className="stroke-[#1a1a1a]"
      animate={active && !reducedMotion ? { strokeDashoffset: [40, 0], opacity: [0, 1] } : { opacity: 0 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      strokeDasharray="40"
    />
    <motion.line
      x1="150" y1="40" x2="80" y2="110"
      strokeWidth="0.75"
      className="stroke-[#9fff00]"
      animate={active && !reducedMotion ? { strokeDashoffset: [80, 0], opacity: [0, 1] } : { opacity: 0 }}
      transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.2 }}
      strokeDasharray="80"
    />
    <motion.line
      x1="80" y1="110" x2="160" y2="140"
      strokeWidth="0.75"
      className="stroke-[#1a1a1a]"
      animate={active && !reducedMotion ? { strokeDashoffset: [90, 0], opacity: [0, 1] } : { opacity: 0 }}
      transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.4 }}
      strokeDasharray="90"
    />
    <motion.line
      x1="80" y1="110" x2="50" y2="160"
      strokeWidth="0.75"
      className="stroke-[#1a1a1a]"
      animate={active && !reducedMotion ? { strokeDashoffset: [60, 0], opacity: [0, 1] } : { opacity: 0 }}
      transition={{ duration: 1.0, ease: 'easeInOut', delay: 0.6 }}
      strokeDasharray="60"
    />
  </svg>
)

// ─── 2. Design Visual SVG (Blueprint lines forming) ──────────────────────────
const DesignVisual: React.FC<{ active: boolean; reducedMotion: boolean }> = ({ active, reducedMotion }) => (
  <svg viewBox="0 0 200 200" className="w-full max-w-[180px] h-auto aspect-square stroke-[#1a1a1a]/30 fill-none pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,40 H200 M0,80 H200 M0,120 H200 M0,160 H200 M40,0 V200 M80,0 V200 M120,0 V200 M160,0 V200" className="stroke-[#1a1a1a]/5" strokeWidth="0.5" />
    
    <motion.rect
      x="30" y="30" width="140" height="140"
      strokeWidth="0.75"
      className="stroke-[#1a1a1a]"
      animate={active && !reducedMotion ? { strokeDashoffset: [560, 0] } : { strokeDashoffset: 560 }}
      transition={{ duration: 1.8, ease: 'easeInOut' }}
      strokeDasharray="560"
    />
    <motion.circle
      cx="100" cy="100" r="50"
      strokeWidth="0.75"
      className="stroke-[#9fff00]"
      animate={active && !reducedMotion ? { strokeDashoffset: [315, 0] } : { strokeDashoffset: 315 }}
      transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
      strokeDasharray="315"
    />
  </svg>
)

// ─── 3. Build Visual SVG (Modules assembling cube) ───────────────────────────
const BuildVisual: React.FC<{ active: boolean; reducedMotion: boolean }> = ({ active, reducedMotion }) => (
  <svg viewBox="0 0 200 200" className="w-full max-w-[180px] h-auto aspect-square stroke-[#1a1a1a]/30 fill-none pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <motion.g
      animate={active && !reducedMotion ? { x: [20, 0], y: [10, 0], opacity: [0.3, 1] } : { opacity: 0.3 }}
      transition={{ duration: 1.0, ease: 'easeOut' }}
    >
      <polygon points="100,30 140,50 100,70 60,50" strokeWidth="0.75" className="stroke-[#1a1a1a] fill-white/20" />
    </motion.g>

    <motion.g
      animate={active && !reducedMotion ? { x: [-15, 0], y: [-15, 0], opacity: [0.3, 1] } : { opacity: 0.3 }}
      transition={{ duration: 1.0, ease: 'easeOut', delay: 0.2 }}
    >
      <polygon points="60,60 100,80 100,130 60,110" strokeWidth="0.75" className="stroke-[#1a1a1a] fill-white/20" />
    </motion.g>

    <motion.g
      animate={active && !reducedMotion ? { x: [15, 0], y: [-15, 0], opacity: [0.3, 1] } : { opacity: 0.3 }}
      transition={{ duration: 1.0, ease: 'easeOut', delay: 0.4 }}
    >
      <polygon points="100,80 140,60 140,110 100,130" strokeWidth="0.75" className="stroke-[#9fff00] fill-white/20" />
    </motion.g>
  </svg>
)

// ─── 4. Optimize Visual SVG (Chaotic wave stabilizing) ───────────────────────
const OptimizeVisual: React.FC<{ active: boolean; reducedMotion: boolean }> = ({ active, reducedMotion }) => (
  <svg viewBox="0 0 200 200" className="w-full max-w-[180px] h-auto aspect-square stroke-[#1a1a1a]/30 fill-none pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="100" x2="180" y2="100" strokeWidth="0.5" strokeDasharray="3 3" className="stroke-[#1a1a1a]/20" />
    
    <motion.path
      strokeWidth="1"
      className="stroke-[#1a1a1a]"
      animate={active && !reducedMotion ? {
        d: [
          "M20,130 L40,60 L60,140 L80,50 L100,120 L120,80 L140,110 L160,95 L180,100",
          "M20,110 L40,90 L60,110 L80,95 L100,105 L120,98 L140,102 L160,99 L180,100",
          "M20,100 L40,100 L60,100 L80,100 L100,100 L120,100 L140,100 L160,100 L180,100"
        ]
      } : { d: "M20,130 L40,60 L60,140 L80,50 L100,120 L120,80 L140,110 L160,95 L180,100" }}
      transition={{ duration: 3.5, ease: 'easeInOut' }}
    />

    <motion.path
      strokeWidth="1"
      className="stroke-[#9fff00]"
      animate={active && !reducedMotion ? {
        d: [
          "M20,70 L40,140 L60,60 L80,150 L100,80 L120,120 L140,90 L160,105 L180,100",
          "M20,90 L40,110 L60,90 L80,105 L100,95 L120,102 L140,98 L160,101 L180,100",
          "M20,100 L40,100 L60,100 L80,100 L100,100 L120,100 L140,100 L160,100 L180,100"
        ]
      } : { d: "M20,70 L40,140 L60,60 L80,150 L100,80 L120,120 L140,90 L160,105 L180,100" }}
      transition={{ duration: 4.0, ease: 'easeInOut', delay: 0.2 }}
    />
  </svg>
)

// ─── 5. Scale Visual SVG (Expanding orbits) ──────────────────────────────────
const ScaleVisual: React.FC<{ active: boolean; reducedMotion: boolean }> = ({ active, reducedMotion }) => (
  <svg viewBox="0 0 200 200" className="w-full max-w-[180px] h-auto aspect-square stroke-[#1a1a1a]/30 fill-none pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="10" strokeWidth="0.5" className="stroke-[#1a1a1a]/10" />
    <circle cx="100" cy="100" r="30" strokeWidth="0.5" className="stroke-[#1a1a1a]/10" />
    <circle cx="100" cy="100" r="60" strokeWidth="0.5" className="stroke-[#1a1a1a]/10" />
    <circle cx="100" cy="100" r="3" className="fill-[#1a1a1a]" />

    <motion.g
      animate={active && !reducedMotion ? { scale: [0.5, 1.1, 1], opacity: [0.2, 1] } : { scale: 0.5, opacity: 0.2 }}
      transition={{ duration: 1.8, ease: 'easeOut' }}
      style={{ transformOrigin: '100px 100px' }}
    >
      <circle cx="100" cy="100" r="80" strokeWidth="0.75" className="stroke-[#9fff00]" />
      <circle cx="100" cy="20" r="4.5" className="fill-[#9fff00] stroke-[#1a1a1a]/40" strokeWidth="0.5" />
    </motion.g>
  </svg>
)

export const Transformation: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0)
  const reducedMotion = useReducedMotion()
  const stageRefs = useRef<(HTMLDivElement | null)[]>([])

  const stagesList = ['Discover', 'Design', 'Build', 'Optimize', 'Scale']

  const stagesData: Stage[] = [
    {
      title: 'Discover',
      desc: 'Understand the organization’s goals, constraints, workflows, and opportunities through collaborative discovery and executive alignment.',
      elements: ['Stakeholder Workshops', 'Business Assessment', 'Operational Analysis', 'Opportunity Mapping']
    },
    {
      title: 'Design',
      desc: 'Translate business understanding into a scalable architecture that integrates intelligence, automation, and growth strategies.',
      elements: ['Enterprise Architecture', 'AI Strategy', 'Process Design', 'Experience Mapping']
    },
    {
      title: 'Build',
      desc: 'Engineer secure, scalable systems that integrate seamlessly with existing operations while preparing for future growth.',
      elements: ['Platform Engineering', 'AI Integration', 'Automation Systems', 'Data Infrastructure']
    },
    {
      title: 'Optimize',
      desc: 'Continuously measure performance, refine workflows, and improve outcomes using operational intelligence and feedback loops.',
      elements: ['Analytics', 'Performance Monitoring', 'Continuous Improvement', 'Experimentation']
    },
    {
      title: 'Scale',
      desc: 'Expand capabilities across teams, markets, and business units while maintaining operational excellence and strategic alignment.',
      elements: ['Growth Enablement', 'Organizational Adoption', 'Governance', 'Long-term Partnership']
    }
  ]

  // Intersection Observer scroll spy hook
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'))
            setActiveStage(index)
          }
        })
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0.1
      }
    )

    stageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      stageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  const renderVisual = (index: number, active: boolean) => {
    switch (index) {
      case 0: return <DiscoverVisual active={active} reducedMotion={reducedMotion} />
      case 1: return <DesignVisual active={active} reducedMotion={reducedMotion} />
      case 2: return <BuildVisual active={active} reducedMotion={reducedMotion} />
      case 3: return <OptimizeVisual active={active} reducedMotion={reducedMotion} />
      case 4: return <ScaleVisual active={active} reducedMotion={reducedMotion} />
      default: return null
    }
  }

  // Smooth scroll handler for nav clicks
  const scrollToStage = (idx: number) => {
    const element = stageRefs.current[idx]
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  return (
    <section 
      id="transformation" 
      className="w-full bg-[#EDEEF5] py-24 md:py-36 border-t border-black/[0.05] relative z-20 select-none"
      role="region"
      aria-label="Vyoma Transformation Journey Roadmap"
    >
      {/* Section Introduction */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 grid grid-cols-12 gap-x-4 md:gap-x-8 mb-20 md:mb-28">
        <div className="col-span-12 md:col-span-10 md:col-start-2 text-left flex flex-col gap-4">
          <span className="text-[11px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
            Transformation Journey
          </span>
          <h2 className="font-display font-medium text-[36px] md:text-[50px] lg:text-[56px] leading-[1.12] text-[#1a1a1a] tracking-tight">
            Every Transformation Begins with Understanding
          </h2>
          <p className="font-sans text-[15px] md:text-[16.5px] leading-relaxed text-[#8e8e8e] max-w-[680px]">
            Sustainable innovation starts with clarity. Every engagement follows a structured progression that aligns business goals, operational realities, technology, and measurable outcomes into a unified transformation roadmap.
          </p>
        </div>
      </div>

      {/* Main Journey Container */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 grid grid-cols-12 gap-y-12 lg:gap-x-8 items-start relative">
        
        {/* DESKTOP STICKY LEFT COLUMN (Cols 1-4) */}
        <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-[30vh] z-30 flex flex-col gap-6 select-none text-left pl-6 relative">
          
          {/* Vertical progress tracker line */}
          <div className="absolute left-[7px] top-4 bottom-4 w-[2px] bg-black/[0.05]">
            <motion.div
              className="w-full bg-[#9fff00]"
              animate={{ height: `${(activeStage / 4) * 100}%` }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              style={{ transformOrigin: 'top' }}
            />
          </div>

          {/* Desktop list items */}
          <div className="flex flex-col gap-5">
            {stagesList.map((stg, idx) => {
              const isActive = activeStage === idx
              return (
                <button
                  key={stg}
                  onClick={() => scrollToStage(idx)}
                  className="w-full text-left outline-none border-none bg-transparent cursor-pointer flex items-center gap-6"
                >
                  <span className={`w-4 h-4 rounded-full border-[2px] transition-all flex items-center justify-center shrink-0 ${
                    isActive 
                      ? 'border-[#9fff00] bg-white' 
                      : 'border-black/[0.15] bg-transparent hover:border-black/35'
                  }`}>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#9fff00]" />}
                  </span>
                  
                  <span className={`font-sans text-[15.5px] leading-none transition-all duration-300 ${
                    isActive 
                      ? 'text-[#1a1a1a] font-medium opacity-100' 
                      : 'text-[#8e8e8e] font-normal opacity-60 hover:opacity-100'
                  }`}>
                    {stg}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Tablet view: Horizontal segment progress headers */}
          <div className="hidden md:flex lg:hidden items-center justify-between p-1 rounded-[8px] bg-white/35 border border-black/[0.05] shadow-soft w-full mt-4 gap-1">
            {stagesList.map((stg, idx) => {
              const isActive = activeStage === idx
              return (
                <button
                  key={stg}
                  onClick={() => scrollToStage(idx)}
                  className={`flex-1 text-center py-2 px-3 rounded-[6px] text-[12px] font-sans transition-all cursor-pointer border-none outline-none ${
                    isActive 
                      ? 'bg-white text-[#1a1a1a] font-medium shadow-sm' 
                      : 'bg-transparent text-[#8e8e8e] hover:text-[#1a1a1a]'
                  }`}
                >
                  {stg}
                </button>
              )
            })}
          </div>

        </div>

        {/* RIGHT STACK COLUMN (Cols 6-12) */}
        <div className="col-span-12 lg:col-span-7 lg:col-start-6 flex flex-col gap-[15vh] lg:gap-[25vh]">
          {stagesData.map((stg, idx) => {
            const isActive = activeStage === idx
            return (
              <div
                key={stg.title}
                ref={(el) => { stageRefs.current[idx] = el }}
                data-index={idx}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[50vh] transition-opacity duration-[var(--nav-transition)] text-left"
                style={{ opacity: isActive ? 1 : 0.4 }}
              >
                {/* Content Panel */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#8e8e8e]">
                      STAGE 0{idx + 1}
                    </span>
                    <h3 className="font-display font-medium text-[26px] md:text-[32px] text-[#1a1a1a] tracking-tight">
                      {stg.title}
                    </h3>
                    <p className="font-sans text-[14px] md:text-[15px] leading-relaxed text-[#8e8e8e]">
                      {stg.desc}
                    </p>
                  </div>

                  <hr className="border-black/[0.05] w-full" />

                  {/* Supporting metadata lists */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
                      Supporting Focus
                    </span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {stg.elements.map((el) => (
                        <span 
                          key={el}
                          className="px-2.5 py-1 rounded-[4px] border border-black/[0.04] bg-white/20 text-[#1a1a1a] font-sans text-[12.5px] cursor-default select-none"
                        >
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* SVG Visual Panel */}
                <div className="w-full flex items-center justify-center py-8 bg-white/20 border border-black/[0.03] rounded-[8px] h-56 md:h-64 shadow-soft">
                  {renderVisual(idx, isActive)}
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Transformation
