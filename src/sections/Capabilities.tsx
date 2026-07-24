import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface CapabilityData {
  title: string
  overview: string
  focus: string[]
  outcomes: string[]
}

// ─── 1. Concentric Knowledge Network SVG ─────────────────────────────────────
const ConcentricKnowledgeNetwork: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg 
    viewBox="0 0 200 200" 
    className="w-full max-w-[200px] md:max-w-[240px] h-auto aspect-square stroke-[#1a1a1a]/30 fill-none pointer-events-none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="30" strokeWidth="0.75" className="stroke-[#1a1a1a]/10" />
    <circle cx="100" cy="100" r="60" strokeWidth="0.75" className="stroke-[#1a1a1a]/10" />
    <circle cx="100" cy="100" r="90" strokeWidth="0.75" className="stroke-[#1a1a1a]/10" />
    <circle cx="100" cy="100" r="3.5" className="fill-[#1a1a1a]" />
    
    <line x1="100" y1="100" x2="100" y2="10" strokeWidth="0.5" className="stroke-[#1a1a1a]/15" />
    <line x1="100" y1="100" x2="178" y2="145" strokeWidth="0.5" className="stroke-[#1a1a1a]/15" />
    <line x1="100" y1="100" x2="22" y2="145" strokeWidth="0.5" className="stroke-[#1a1a1a]/15" />

    <motion.g 
      animate={reducedMotion ? {} : { rotate: 360 }} 
      transition={{ repeat: Infinity, duration: 16, ease: 'linear' }} 
      style={{ transformOrigin: '100px 100px' }}
    >
      <circle cx="100" cy="40" r="3" className="fill-[#1a1a1a]" />
      <circle cx="100" cy="70" r="4.5" className="fill-[#9fff00] stroke-[#1a1a1a]/40" strokeWidth="0.5" />
    </motion.g>
    <motion.g 
      animate={reducedMotion ? {} : { rotate: -360 }} 
      transition={{ repeat: Infinity, duration: 24, ease: 'linear' }} 
      style={{ transformOrigin: '100px 100px' }}
    >
      <circle cx="100" cy="10" r="3.5" className="fill-[#1a1a1a]" />
    </motion.g>
  </svg>
)

// ─── 2. Connected Workflow Graph SVG ─────────────────────────────────────────
const ConnectedWorkflowGraph: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg 
    viewBox="0 0 200 200" 
    className="w-full max-w-[200px] md:max-w-[240px] h-auto aspect-square stroke-[#1a1a1a]/30 fill-none pointer-events-none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M30,30 L100,30 L100,100 L170,100 L170,170" strokeWidth="0.75" className="stroke-[#1a1a1a]/15" />
    <path d="M30,30 L30,100 L100,100 L100,170 M100,100 L170,30" strokeWidth="0.75" className="stroke-[#1a1a1a]/15" />
    
    <circle cx="30" cy="30" r="3.5" className="fill-[#1a1a1a]" />
    <circle cx="100" cy="30" r="3.5" className="fill-[#1a1a1a]" />
    <circle cx="30" cy="100" r="3.5" className="fill-[#1a1a1a]" />
    <circle cx="100" cy="100" r="4.5" className="fill-[#9fff00] stroke-[#1a1a1a]/40" strokeWidth="0.5" />
    <circle cx="170" cy="100" r="3.5" className="fill-[#1a1a1a]" />
    <circle cx="100" cy="170" r="3.5" className="fill-[#1a1a1a]" />
    <circle cx="170" cy="170" r="3.5" className="fill-[#1a1a1a]" />
    <circle cx="170" cy="30" r="3.5" className="fill-[#1a1a1a]" />

    <motion.circle
      cx="30" cy="30" r="2.2"
      className="fill-[#9fff00]"
      animate={reducedMotion ? {} : {
        cx: [30, 100, 100, 170],
        cy: [30, 30, 100, 100],
        opacity: [0, 1, 1, 0]
      }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
    />
  </svg>
)

// ─── 3. Layered Pipeline Diagram SVG ─────────────────────────────────────────
const LayeredPipelineDiagram: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg 
    viewBox="0 0 200 200" 
    className="w-full max-w-[200px] md:max-w-[240px] h-auto aspect-square stroke-[#1a1a1a]/30 fill-none pointer-events-none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="10" y1="50" x2="190" y2="50" strokeWidth="0.75" className="stroke-[#1a1a1a]/15" />
    <line x1="10" y1="100" x2="190" y2="100" strokeWidth="0.75" className="stroke-[#1a1a1a]/15" />
    <line x1="10" y1="150" x2="190" y2="150" strokeWidth="0.75" className="stroke-[#1a1a1a]/15" />
    
    <path d="M50,50 L50,150 M150,50 L150,150 M100,100 L100,150" strokeWidth="0.5" className="stroke-[#1a1a1a]/10" />

    <motion.circle
      cx="10" cy="50" r="3"
      className="fill-[#1a1a1a]"
      animate={reducedMotion ? {} : { cx: [10, 190] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
    />
    <motion.circle
      cx="190" cy="100" r="4.5"
      className="fill-[#9fff00] stroke-[#1a1a1a]/40"
      strokeWidth="0.5"
      animate={reducedMotion ? {} : { cx: [190, 10] }}
      transition={{ repeat: Infinity, duration: 4.5, ease: 'linear' }}
    />
    <motion.circle
      cx="10" cy="150" r="3"
      className="fill-[#1a1a1a]"
      animate={reducedMotion ? {} : { cx: [10, 190] }}
      transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
    />
  </svg>
)

// ─── 4. Expanding Conversion Funnel SVG ──────────────────────────────────────
const ExpandingConversionFunnel: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg 
    viewBox="0 0 200 200" 
    className="w-full max-w-[200px] md:max-w-[240px] h-auto aspect-square stroke-[#1a1a1a]/30 fill-none pointer-events-none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="40,30 160,30 130,80 70,80" strokeWidth="0.75" className="stroke-[#1a1a1a]/15" />
    <polygon points="70,85 130,85 110,130 90,130" strokeWidth="0.75" className="stroke-[#1a1a1a]/15" />
    <polygon points="90,135 110,135 105,170 95,170" strokeWidth="0.75" className="stroke-[#1a1a1a]/15" />
    
    <line x1="100" y1="20" x2="100" y2="180" strokeWidth="0.5" strokeDasharray="3 3" className="stroke-[#1a1a1a]/15" />

    <motion.circle
      cx="100" cy="20" r="4.2"
      className="fill-[#9fff00] stroke-[#1a1a1a]/40"
      strokeWidth="0.5"
      animate={reducedMotion ? {} : {
        cy: [20, 175],
        scale: [1, 0.6]
      }}
      transition={{ repeat: Infinity, duration: 2.5, ease: 'easeIn' }}
    />
  </svg>
)

// ─── 5. Orbiting Organizational Ecosystem SVG ───────────────────────────────
const OrbitingOrganizationalEcosystem: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg 
    viewBox="0 0 200 200" 
    className="w-full max-w-[200px] md:max-w-[240px] h-auto aspect-square stroke-[#1a1a1a]/30 fill-none pointer-events-none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="100" cy="100" rx="90" ry="45" strokeWidth="0.75" className="stroke-[#1a1a1a]/10" />
    <ellipse cx="100" cy="100" rx="60" ry="25" strokeWidth="0.75" className="stroke-[#1a1a1a]/10" />
    <circle cx="100" cy="100" r="10" strokeWidth="0.5" className="stroke-[#1a1a1a]/10" />

    <circle cx="100" cy="100" r="3.5" className="fill-[#1a1a1a]" />

    <motion.g 
      animate={reducedMotion ? {} : { rotate: 360 }} 
      transition={{ repeat: Infinity, duration: 18, ease: 'linear' }} 
      style={{ transformOrigin: '100px 100px' }}
    >
      <circle cx="190" cy="100" r="4.8" className="fill-[#9fff00] stroke-[#1a1a1a]/40" strokeWidth="0.5" />
    </motion.g>
    
    <motion.g 
      animate={reducedMotion ? {} : { rotate: -360 }} 
      transition={{ repeat: Infinity, duration: 12, ease: 'linear' }} 
      style={{ transformOrigin: '100px 100px' }}
    >
      <circle cx="160" cy="100" r="3" className="fill-[#1a1a1a]" />
    </motion.g>
  </svg>
)

export const Capabilities: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const reducedMotion = useReducedMotion()
  const mobileNavRef = useRef<HTMLDivElement>(null)

  const capabilitiesList = [
    'Enterprise Intelligence Architecture',
    'Autonomous Operations',
    'Growth Infrastructure',
    'Revenue Acceleration Systems',
    'Business Transformation'
  ]

  const capabilitiesData: CapabilityData[] = [
    {
      title: 'Enterprise Intelligence Architecture',
      overview: 'Design AI-enabled decision systems that connect knowledge, context, and executive insight into scalable business intelligence.',
      focus: ['Executive AI Strategy', 'Knowledge Architecture', 'Decision Intelligence', 'Agentic Systems', 'Context Engineering'],
      outcomes: ['Faster executive decision-making', 'Reduced operational friction', 'Connected organizational knowledge', 'Scalable AI adoption']
    },
    {
      title: 'Autonomous Operations',
      overview: 'Engineer workflow orchestrators, self-healing event hooks, and automated background transaction pipelines that synchronize data layers and optimize operational performance autonomously.',
      focus: ['Workflow Orchestration', 'Enterprise Automation', 'Process Intelligence', 'Human-in-the-Loop Systems', 'Operational Excellence'],
      outcomes: ['Increased process efficiency', 'Reduced error rates', 'Unified data syncing', 'Human-in-the-loop validation']
    },
    {
      title: 'Growth Infrastructure',
      overview: 'Structure optimized conversion paths, real-time behavioral analytics feeds, and advanced experimentation frameworks to systematically eliminate funnel friction and accelerate margins.',
      focus: ['Revenue Architecture', 'Conversion Engineering', 'Customer Journey Systems', 'Behavioral Analytics', 'Growth Experimentation'],
      outcomes: ['Optimized conversion funnels', 'Enhanced retention rates', 'Data-driven investments', 'Growth loop acceleration']
    },
    {
      title: 'Revenue Acceleration Systems',
      overview: 'Design high-throughput demand generation systems, algorithmic attribution models, and performance telemetry to scale conversions without bloating advertising overhead.',
      focus: ['Demand Generation', 'Performance Intelligence', 'Creative Intelligence', 'Attribution Modeling', 'Acquisition Systems'],
      outcomes: ['Higher advertising ROI', 'Precise customer attribution', 'Performance-focused campaigns', 'Predictable pipeline growth']
    },
    {
      title: 'Business Transformation',
      overview: 'Advising executive boards on digital transformation pathways, software audits, and architectural engineering specs to modernize legacy clusters and scale organizations.',
      focus: ['Digital Transformation', 'Executive Advisory', 'Innovation Strategy', 'Market Expansion', 'Organizational Evolution'],
      outcomes: ['Modernized legacy networks', 'Audited compliance structures', 'Strategic growth roadmap', 'Future-ready organization']
    }
  ]

  // Keyboard navigation handler
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setActiveIndex(index)
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : capabilitiesList.length - 1))
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      setActiveIndex((prev) => (prev < capabilitiesList.length - 1 ? prev + 1 : 0))
    }
  }

  // Scroll active mobile nav item into view
  useEffect(() => {
    if (mobileNavRef.current) {
      const activeChild = mobileNavRef.current.children[activeIndex] as HTMLElement
      if (activeChild) {
        mobileNavRef.current.scrollTo({
          left: activeChild.offsetLeft - 48,
          behavior: 'smooth'
        })
      }
    }
  }, [activeIndex])

  const renderVisualization = (index: number) => {
    switch (index) {
      case 0: return <ConcentricKnowledgeNetwork reducedMotion={reducedMotion} />
      case 1: return <ConnectedWorkflowGraph reducedMotion={reducedMotion} />
      case 2: return <LayeredPipelineDiagram reducedMotion={reducedMotion} />
      case 3: return <ExpandingConversionFunnel reducedMotion={reducedMotion} />
      case 4: return <OrbitingOrganizationalEcosystem reducedMotion={reducedMotion} />
      default: return null
    }
  }

  const activeData = capabilitiesData[activeIndex]

  return (
    <section 
      id="capabilities" 
      className="w-full bg-[#EDEEF5] py-24 md:py-36 border-t border-black/[0.05] relative z-20 select-none"
      role="region"
      aria-label="Capabilities Portfolio Explorer"
    >
      {/* Editorial Introduction */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 grid grid-cols-12 gap-x-4 md:gap-x-8 mb-20 md:mb-28">
        <div className="col-span-12 md:col-span-10 md:col-start-2 text-left flex flex-col gap-4">
          <span className="text-[11px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
            Ecosystem Architecture
          </span>
          <h2 className="font-display font-medium text-[36px] md:text-[50px] lg:text-[56px] leading-[1.12] text-[#1a1a1a] tracking-tight">
            Building Intelligent Systems for Modern Enterprises
          </h2>
          <p className="font-sans text-[15px] md:text-[16.5px] leading-relaxed text-[#8e8e8e] max-w-[680px]">
            Every organization is unique, but the challenges are often connected. Vyoma designs integrated systems that combine artificial intelligence, automation, data, growth, and strategy into a unified enterprise operating model.
          </p>
        </div>
      </div>

      {/* Explorer Grid */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 grid grid-cols-12 gap-y-10 lg:gap-x-8 items-start">
        
        {/* DESKTOP SIDEBAR / TABLET HORIZONTAL CONTROLS (Cols 1-4) */}
        <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-28 z-30">
          
          {/* Desktop view (Vertical stack, sticky) */}
          <div className="hidden lg:flex flex-col gap-3.5 text-left border-l border-black/[0.05] pl-6">
            {capabilitiesList.map((cap, idx) => {
              const isSelected = activeIndex === idx
              return (
                <button
                  key={cap}
                  onClick={() => setActiveIndex(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  tabIndex={0}
                  role="tab"
                  aria-selected={isSelected}
                  className="relative group w-full text-left py-1 outline-none border-none bg-transparent cursor-pointer"
                >
                  {/* Left accent indicator line */}
                  {isSelected && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute -left-[26px] top-0 bottom-0 w-[2px] bg-[#9fff00]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className={`font-sans text-[15px] leading-tight block transition-all duration-300 ${
                    isSelected 
                      ? 'text-[#1a1a1a] font-medium opacity-100' 
                      : 'text-[#8e8e8e] font-normal opacity-70 group-hover:opacity-100 group-hover:text-[#1a1a1a]'
                  }`}>
                    {cap}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Tablet view (Segmented row tabs, horizontal) */}
          <div className="hidden md:flex lg:hidden items-center justify-between p-1 rounded-[8px] bg-white/35 border border-black/[0.05] shadow-soft overflow-x-auto w-full gap-1">
            {capabilitiesList.map((cap, idx) => {
              const isSelected = activeIndex === idx
              return (
                <button
                  key={cap}
                  onClick={() => setActiveIndex(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  role="tab"
                  aria-selected={isSelected}
                  className={`flex-1 text-center py-2 px-3 rounded-[6px] text-[12px] font-sans transition-all cursor-pointer border-none outline-none ${
                    isSelected 
                      ? 'bg-white text-[#1a1a1a] font-medium shadow-sm' 
                      : 'bg-transparent text-[#8e8e8e] hover:text-[#1a1a1a]'
                  }`}
                >
                  {cap.split(' ')[0]}
                </button>
              )
            })}
          </div>

          {/* Mobile view (Horizontal swipe buttons container) */}
          <div className="flex md:hidden items-center justify-between w-full gap-2 bg-white/20 p-1 border border-black/[0.05] rounded-[8px]">
            <button
              onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : capabilitiesList.length - 1))}
              className="p-2 border-none outline-none bg-white rounded-[6px] shadow-sm shrink-0 cursor-pointer"
              aria-label="Previous Capability"
            >
              <ChevronLeft className="w-4 h-4 text-[#1a1a1a]" />
            </button>
            
            <div 
              ref={mobileNavRef}
              className="flex-1 flex overflow-x-hidden scroll-smooth items-center px-2 select-none"
            >
              <span className="w-full text-center font-display font-medium text-[14.5px] text-[#1a1a1a] whitespace-nowrap block truncate">
                {capabilitiesList[activeIndex]}
              </span>
            </div>

            <button
              onClick={() => setActiveIndex((prev) => (prev < capabilitiesList.length - 1 ? prev + 1 : 0))}
              className="p-2 border-none outline-none bg-white rounded-[6px] shadow-sm shrink-0 cursor-pointer"
              aria-label="Next Capability"
            >
              <ChevronRight className="w-4 h-4 text-[#1a1a1a]" />
            </button>
          </div>

        </div>

        {/* ACTIVE CONTENT PANEL (Cols 6-12) */}
        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -12, filter: 'blur(4px)' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-left"
            >
              {/* Left Content text details */}
              <div className="flex flex-col gap-6.5">
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-medium text-[24px] md:text-[28px] text-[#1a1a1a] tracking-tight leading-tight">
                    {activeData.title}
                  </h3>
                  <p className="font-sans text-[14px] md:text-[15px] leading-relaxed text-[#8e8e8e]">
                    {activeData.overview}
                  </p>
                </div>

                <hr className="border-black/[0.05] w-full" />

                {/* Core Focus columns */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
                    Core Focus
                  </span>
                  <ul className="flex flex-col gap-1.5 list-none pl-0">
                    {activeData.focus.map((f) => (
                      <li key={f} className="font-sans text-[13px] md:text-[13.5px] text-[#1a1a1a] flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#9fff00] rounded-full shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="border-black/[0.05] w-full" />

                {/* Business Outcomes columns */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
                    Business Outcomes
                  </span>
                  <ul className="flex flex-col gap-1.5 list-none pl-0">
                    {activeData.outcomes.map((o) => (
                      <li key={o} className="font-sans text-[13.5px] text-[#8e8e8e] leading-tight">
                        • {o}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Right Content visualization graphics box */}
              <div className="w-full flex items-center justify-center py-10 bg-white/20 border border-black/[0.03] rounded-[8px] h-64 md:h-80 select-none shadow-soft">
                {renderVisualization(activeIndex)}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

export default Capabilities
