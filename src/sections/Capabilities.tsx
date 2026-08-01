import React, { useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useExperienceMode } from '@/hooks/useExperienceMode'

interface CapabilityData {
  title: string
  overview: string
  focus: string[]
  outcomes: string[]
}

// ─── 1. Concentric Knowledge Network SVG ─────────────────────────────────────
const ConcentricKnowledgeNetwork: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg
    viewBox="0 0 240 240"
    className="w-full max-w-[200px] md:max-w-[240px] h-auto aspect-square fill-none stroke-white/20 stroke-[0.75] pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Concentric helper grids */}
    <circle cx="120" cy="120" r="35" strokeDasharray="2 2" className="stroke-white/5" />
    <circle cx="120" cy="120" r="70" strokeDasharray="2 2" className="stroke-white/5" />
    <circle cx="120" cy="120" r="105" className="stroke-white/5" />

    {/* Central Nucleus with slow pulse halo */}
    <circle cx="120" cy="120" r="4.5" className="fill-white stroke-none" />
    <motion.circle
      cx="120" cy="120" r="10"
      className="stroke-[#8FBF3C] stroke-[1] fill-none"
      animate={reducedMotion ? {} : { scale: [0.9, 1.8, 0.9], opacity: [0.1, 0.5, 0.1] }}
      transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
    />

    {/* Connected pathways */}
    <line x1="120" y1="120" x2="120" y2="50" className="stroke-white/20" />
    <line x1="120" y1="120" x2="185" y2="120" className="stroke-white/20" />
    <line x1="120" y1="120" x2="120" y2="190" className="stroke-white/20" />
    <line x1="120" y1="120" x2="55" y2="120" className="stroke-white/20" />

    <line x1="120" y1="50" x2="165" y2="75" className="stroke-white/20" />
    <line x1="185" y1="120" x2="165" y2="75" className="stroke-white/20" />
    <line x1="185" y1="120" x2="165" y2="165" className="stroke-white/20" />
    <line x1="120" y1="190" x2="165" y2="165" className="stroke-white/20" />
    <line x1="120" y1="190" x2="75" y2="165" className="stroke-white/20" />
    <line x1="55" y1="120" x2="75" y2="165" className="stroke-white/20" />
    <line x1="55" y1="120" x2="75" y2="75" className="stroke-white/20" />
    <line x1="120" y1="50" x2="75" y2="75" className="stroke-white/20" />

    {/* Nodes mapping the graph */}
    <g>
      <circle cx="120" cy="50" r="3.5" className="fill-[#0D1117] stroke-white stroke-[1]" />
      <circle cx="185" cy="120" r="3.5" className="fill-[#0D1117] stroke-white stroke-[1]" />
      <circle cx="120" cy="190" r="3.5" className="fill-[#0D1117] stroke-white stroke-[1]" />
      <circle cx="55" cy="120" r="3.5" className="fill-[#0D1117] stroke-white stroke-[1]" />

      <circle cx="165" cy="75" r="2.5" className="fill-white/30" />
      <circle cx="165" cy="165" r="2.5" className="fill-white/30" />
      <circle cx="75" cy="165" r="2.5" className="fill-white/30" />
      <circle cx="75" cy="75" r="2.5" className="fill-white/30" />
    </g>

    {/* Pulsing signal indicators */}
    <motion.circle
      cx="165" cy="75" r="6"
      className="stroke-[#8FBF3C] stroke-[1] fill-none"
      animate={reducedMotion ? {} : { scale: [1, 2.2, 1], opacity: [0.2, 0.8, 0.2] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
    />
    <motion.circle
      cx="75" cy="165" r="6"
      className="stroke-[#8FBF3C] stroke-[1] fill-none"
      animate={reducedMotion ? {} : { scale: [1, 2.2, 1], opacity: [0.2, 0.8, 0.2] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 2.0 }}
    />

    {/* Transmitting Signal Data Dot */}
    <motion.circle
      r={2}
      className="fill-[#8FBF3C] stroke-none"
      initial={{ cx: 120, cy: 120 }}
      animate={reducedMotion ? {} : {
        cx: [120, 120, 165, 185, 120],
        cy: [120, 50, 75, 120, 120],
      }}
      transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
    />
    <motion.circle
      r={2}
      className="fill-[#8FBF3C] stroke-none"
      initial={{ cx: 120, cy: 120 }}
      animate={reducedMotion ? {} : {
        cx: [120, 55, 75, 120, 120],
        cy: [120, 120, 165, 190, 120],
      }}
      transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1.5 }}
    />
  </svg>
)

// ─── 2. Connected Workflow Graph SVG ─────────────────────────────────────────
const ConnectedWorkflowGraph: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg
    viewBox="0 0 240 240"
    className="w-full max-w-[200px] md:max-w-[240px] h-auto aspect-square fill-none stroke-white/20 stroke-[0.75] pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Grid System */}
    <path d="M20,60 H220 M20,120 H220 M20,180 H220" className="stroke-white/5" strokeDasharray="4 4" />
    <path d="M60,20 V220 M120,20 V220 M180,20 V220" className="stroke-white/5" strokeDasharray="4 4" />

    {/* Connected Tracks */}
    <path d="M30,60 H80 L110,120 H130 L160,180 H210" className="stroke-white/20" />
    <path d="M30,120 H100 L120,60 H180 L200,120" className="stroke-white/20" />
    <path d="M30,180 H90 L120,120 H150 L180,60 H210" className="stroke-white/20" />

    {/* Stage Nodes */}
    <rect x="70" y="52" width="16" height="16" rx="2" className="fill-[#0D1117] stroke-white/30 stroke-[0.75]" />
    <circle cx="78" cy="60" r="1.5" className="fill-white" />

    <rect x="112" y="112" width="16" height="16" rx="2" className="fill-[#0D1117] stroke-[#8FBF3C] stroke-[1]" />
    <circle cx="120" cy="120" r="2" className="fill-[#8FBF3C]" />

    <rect x="172" y="52" width="16" height="16" rx="2" className="fill-[#0D1117] stroke-white/30 stroke-[0.75]" />
    <circle cx="180" cy="60" r="1.5" className="fill-white" />

    {/* Signal Packets glides */}
    <motion.circle
      r={2}
      className="fill-[#8FBF3C] stroke-none"
      initial={{ cx: 30, cy: 60 }}
      animate={reducedMotion ? {} : {
        cx: [30, 80, 110, 130, 160, 210],
        cy: [60, 60, 120, 120, 180, 180]
      }}
      transition={{ repeat: Infinity, duration: 4.5, ease: 'linear' }}
    />

    <motion.circle
      r={2}
      className="fill-white"
      initial={{ cx: 30, cy: 120 }}
      animate={reducedMotion ? {} : {
        cx: [30, 100, 120, 180, 200],
        cy: [120, 120, 60, 60, 120]
      }}
      transition={{ repeat: Infinity, duration: 3.5, ease: 'linear', delay: 1.0 }}
    />
  </svg>
)

// ─── 3. Layered Pipeline Diagram SVG ─────────────────────────────────────────
const LayeredPipelineDiagram: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg
    viewBox="0 0 240 240"
    className="w-full max-w-[200px] md:max-w-[240px] h-auto aspect-square fill-none stroke-white/20 stroke-[0.75] pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Pipeline flow guidelines */}
    <path d="M40,40 L200,40 L160,110 L80,110 Z" className="stroke-white/10 fill-white/5" />
    <line x1="120" y1="20" x2="120" y2="40" className="stroke-white/30" />

    {/* Growth loops path (double circle track) */}
    <circle cx="120" cy="155" r="30" className="stroke-white/20" />
    <circle cx="120" cy="155" r="35" className="stroke-[#8FBF3C]/25" strokeDasharray="6 4" />
    <line x1="120" y1="110" x2="120" y2="120" className="stroke-white/20" />

    {/* Output conduit */}
    <path d="M150,155 H195 V195" className="stroke-white/20" />
    <circle cx="195" cy="195" r="3" className="fill-[#8FBF3C] stroke-none" />

    {/* Descending funnel dot */}
    <motion.circle
      cx="120"
      cy="20"
      r="2.5"
      className="fill-white"
      animate={reducedMotion ? {} : {
        cx: 120,
        cy: [20, 40, 110, 120],
        opacity: [0, 1, 1, 0]
      }}
      transition={{ repeat: Infinity, duration: 3.2, ease: 'easeIn' }}
    />

    {/* Loop motion */}
    <motion.g
      animate={reducedMotion ? {} : { rotate: 360 }}
      transition={{ repeat: Infinity, duration: 4.8, ease: 'linear' }}
      style={{ transformOrigin: '120px 155px' }}
    >
      <circle cx="150" cy="155" r="3.5" className="fill-[#8FBF3C] stroke-[#0D1117] stroke-[1]" />
    </motion.g>

    <motion.g
      animate={reducedMotion ? {} : { rotate: -360 }}
      transition={{ repeat: Infinity, duration: 8.5, ease: 'linear' }}
      style={{ transformOrigin: '120px 155px' }}
    >
      <circle cx="85" cy="155" r="2" className="fill-white/30" />
    </motion.g>
  </svg>
)

// ─── 4. Expanding Conversion Funnel SVG ──────────────────────────────────────
const ExpandingConversionFunnel: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg
    viewBox="0 0 240 240"
    className="w-full max-w-[200px] md:max-w-[240px] h-auto aspect-square fill-none stroke-white/20 stroke-[0.75] pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Grid lines */}
    <path d="M30,40 H210 M30,80 H210 M30,120 H210 M30,160 H210 M30,200 H210" className="stroke-white/5" />
    <path d="M30,40 V200 M90,40 V200 M150,40 V200 M210,40 V200" className="stroke-white/5" />

    {/* Metric Telemetry Chart Lines */}
    <motion.path
      d="M30,180 Q75,160 110,120 T170,90 T210,50"
      strokeWidth="1.25"
      className="stroke-white"
      animate={reducedMotion ? {} : {
        pathLength: [0, 1]
      }}
      transition={{ duration: 4.0, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' }}
    />

    <motion.path
      d="M30,195 Q75,185 110,150 T170,110 T210,65"
      strokeWidth="1"
      className="stroke-[#8FBF3C]"
      animate={reducedMotion ? {} : {
        pathLength: [0, 1]
      }}
      transition={{ duration: 4.8, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop', delay: 0.5 }}
    />

    {/* Interactive focal circles */}
    <circle cx="110" cy="120" r="3.5" className="fill-[#0D1117] stroke-white stroke-[1]" />
    <motion.circle
      cx="110" cy="120" r="6"
      className="stroke-[#8FBF3C] stroke-[1] fill-none"
      animate={reducedMotion ? {} : { scale: [1, 2], opacity: [0.6, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
    />

    <circle cx="210" cy="50" r="3.5" className="fill-[#0D1117] stroke-[#8FBF3C] stroke-[1.5]" />
    <motion.circle
      cx="210" cy="50" r="6.5"
      className="stroke-[#8FBF3C] stroke-[1] fill-none"
      animate={reducedMotion ? {} : { scale: [1, 2], opacity: [0.6, 0] }}
      transition={{ repeat: Infinity, duration: 2.2, ease: 'easeOut', delay: 0.3 }}
    />

    {/* Micro Bar charts overlay in corner */}
    <rect x="35" y="50" width="6" height="15" className="fill-white/10 stroke-none" />
    <rect x="45" y="45" width="6" height="20" className="fill-[#8FBF3C]/30 stroke-none" />
    <rect x="55" y="38" width="6" height="27" className="fill-[#8FBF3C]/80 stroke-none" />
  </svg>
)

// ─── 5. Orbiting Organizational Ecosystem SVG ───────────────────────────────
const OrbitingOrganizationalEcosystem: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg
    viewBox="0 0 240 240"
    className="w-full max-w-[200px] md:max-w-[240px] h-auto aspect-square fill-none stroke-white/20 stroke-[0.75] pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Core Center Nucleus */}
    <circle cx="120" cy="120" r="6" className="fill-white stroke-none" />
    <motion.circle
      cx="120" cy="120" r="12"
      className="stroke-[#8FBF3C]/50 stroke-[0.75]"
      animate={reducedMotion ? {} : { scale: [1, 1.4, 1], opacity: [0.2, 0.6, 0.2] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
    />

    {/* Perspective elliptical orbits */}
    <ellipse cx="120" cy="120" rx="95" ry="32" className="stroke-white/10" style={{ transform: 'rotate(-20deg)', transformOrigin: '120px 120px' }} />
    <ellipse cx="120" cy="120" rx="80" ry="24" className="stroke-white/10" style={{ transform: 'rotate(20deg)', transformOrigin: '120px 120px' }} />
    <circle cx="120" cy="120" r="45" className="stroke-white/10" />

    {/* Connected orbiting department nodes */}
    <motion.g
      animate={reducedMotion ? {} : { rotate: 360 }}
      transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      style={{ transformOrigin: '120px 120px' }}
    >
      <circle cx="215" cy="120" r="3.5" className="fill-[#0D1117] stroke-white stroke-[1]" />
    </motion.g>

    <motion.g
      animate={reducedMotion ? {} : { rotate: -360 }}
      transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
      style={{ transformOrigin: '120px 120px' }}
    >
      <circle cx="200" cy="120" r="3.5" className="fill-white/30" />
    </motion.g>

    <motion.g
      animate={reducedMotion ? {} : { rotate: 360 }}
      transition={{ repeat: Infinity, duration: 9, ease: 'linear' }}
      style={{ transformOrigin: '120px 120px' }}
    >
      <circle cx="165" cy="120" r="4.5" className="fill-[#8FBF3C] stroke-white stroke-[1]" />
    </motion.g>
  </svg>
)

export const Capabilities: React.FC = () => {
  const { activeCapabilityIdx: activeIndex, setActiveCapabilityIdx: setActiveIndex } = useExperienceMode()
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
      setActiveIndex(index > 0 ? index - 1 : capabilitiesList.length - 1)
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      setActiveIndex(index < capabilitiesList.length - 1 ? index + 1 : 0)
    }
  }

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
      className="w-full bg-[#0D1117] py-16 sm:py-[100px] md:py-[130px] border-t border-white/[0.08] relative z-20 select-none overflow-hidden"
      role="region"
      aria-label="Capabilities Portfolio Explorer"
    >
      {/* Soft Radial Glow / Editorial lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#8FBF3C]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Editorial Introduction */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 grid grid-cols-12 gap-x-4 md:gap-x-8 mb-20 md:mb-28 relative z-10">
        <div className="col-span-12 md:col-span-10 md:col-start-2 text-left flex flex-col gap-4">
          <span className="text-[11px] font-sans font-bold tracking-widest text-white/50 uppercase">
            Ecosystem Architecture
          </span>
          <h2 className="font-display font-medium text-[36px] md:text-[50px] lg:text-[56px] leading-[1.12] text-white tracking-tight">
            Building Intelligent Systems for Modern Enterprises
          </h2>
          <p className="font-sans text-[15px] md:text-[16.5px] leading-relaxed text-white/70 max-w-[680px]">
            Every organization is unique, but the challenges are often connected. Vyom designs integrated systems that combine artificial intelligence, automation, data, growth, and strategy into a unified enterprise operating model.
          </p>
        </div>
      </div>

      {/* Explorer Grid */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 grid grid-cols-12 gap-y-10 lg:gap-x-8 items-start relative z-10">

        {/* DESKTOP SIDEBAR / TABLET HORIZONTAL CONTROLS (Cols 1-4) */}
        <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-24 z-30">

          {/* Desktop view (Vertical stack, sticky) */}
          <div className="hidden lg:flex flex-col gap-3.5 text-left border-l border-white/[0.08] pl-6">
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
                      className="absolute -left-[26px] top-0 bottom-0 w-[2px] bg-[#8FBF3C]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className={`font-sans text-[15px] block transition-all duration-300 ${isSelected
                      ? 'text-white font-medium opacity-100'
                      : 'text-white/40 font-normal opacity-70 group-hover:opacity-100 group-hover:text-white'
                    }`}>
                    {cap}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Tablet view (Segmented row tabs, horizontal) */}
          <div className="hidden md:flex lg:hidden items-center justify-between p-1 rounded-[8px] bg-white/5 border border-white/[0.08] shadow-soft overflow-x-auto w-full gap-1">
            {capabilitiesList.map((cap, idx) => {
              const isSelected = activeIndex === idx
              return (
                <button
                  key={cap}
                  onClick={() => setActiveIndex(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  role="tab"
                  aria-selected={isSelected}
                  className={`flex-1 text-center py-2 px-3 rounded-[6px] text-[12px] font-sans transition-all cursor-pointer border-none outline-none ${isSelected
                      ? 'bg-white/10 text-white font-medium shadow-sm'
                      : 'bg-transparent text-white/50 hover:text-white'
                    }`}
                >
                  {cap.split(' ')[0]}
                </button>
              )
            })}
          </div>

          {/* Mobile view (Horizontal swipe buttons container) */}
          <div className="flex md:hidden items-center justify-between w-full gap-2 bg-white/5 p-1 border border-white/[0.08] rounded-[8px]">
            <button
              onClick={() => setActiveIndex(activeIndex > 0 ? activeIndex - 1 : capabilitiesList.length - 1)}
              className="p-2 border-none outline-none bg-white/10 rounded-[6px] shadow-sm shrink-0 cursor-pointer"
              aria-label="Previous Capability"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>

            <div
              ref={mobileNavRef}
              className="flex-1 flex overflow-x-hidden scroll-smooth items-center px-2 select-none"
            >
              <span className="w-full text-center font-display font-medium text-[14.5px] text-white whitespace-nowrap block truncate">
                {capabilitiesList[activeIndex]}
              </span>
            </div>

            <button
              onClick={() => setActiveIndex(activeIndex < capabilitiesList.length - 1 ? activeIndex + 1 : 0)}
              className="p-2 border-none outline-none bg-white/10 rounded-[6px] shadow-sm shrink-0 cursor-pointer"
              aria-label="Next Capability"
            >
              <ChevronRight className="w-4 h-4 text-white" />
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
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-medium text-[24px] md:text-[28px] text-white tracking-tight leading-tight">
                    {activeData.title}
                  </h3>
                  <p className="font-sans text-[14px] md:text-[15px] leading-relaxed text-white/70">
                    {activeData.overview}
                  </p>
                </div>

                <hr className="border-white/[0.08] w-full" />

                {/* Core Focus columns */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] font-sans font-bold tracking-widest text-white/40 uppercase">
                    Core Focus
                  </span>
                  <ul className="flex flex-col gap-1.5 list-none pl-0">
                    {activeData.focus.map((f) => (
                      <li key={f} className="font-sans text-[13px] md:text-[13.5px] text-white/90 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#8FBF3C] rounded-full shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="border-white/[0.08] w-full" />

                {/* Business Outcomes columns */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] font-sans font-bold tracking-widest text-white/40 uppercase">
                    Business Outcomes
                  </span>
                  <ul className="flex flex-col gap-1.5 list-none pl-0">
                    {activeData.outcomes.map((o) => (
                      <li key={o} className="font-sans text-[13.5px] text-white/70 leading-tight">
                        • {o}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Right Content visualization graphics box */}
              <div className="w-full flex items-center justify-center py-10 bg-white/5 border border-white/[0.08] rounded-[8px] h-64 md:h-80 select-none shadow-soft">
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
