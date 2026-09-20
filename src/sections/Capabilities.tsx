import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useExperienceMode } from '@/hooks/useExperienceMode'

interface CapabilityData {
  number: string
  title: string
  shortDesc: string
  focusTag: string
}

// ─── 1. Concentric Knowledge Network SVG ─────────────────────────────────────
const ConcentricKnowledgeNetwork: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg
    viewBox="0 0 240 240"
    className="w-full max-w-[240px] md:max-w-[280px] h-auto aspect-square fill-none stroke-white/20 stroke-[0.75] pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="120" cy="120" r="35" strokeDasharray="2 2" className="stroke-white/10" />
    <circle cx="120" cy="120" r="70" strokeDasharray="2 2" className="stroke-white/10" />
    <circle cx="120" cy="120" r="105" className="stroke-white/10" />

    <circle cx="120" cy="120" r="5" className="fill-white stroke-none" />
    <motion.circle
      cx="120" cy="120" r="12"
      className="stroke-[#10B981] stroke-[1] fill-none"
      animate={reducedMotion ? {} : { scale: [0.9, 1.8, 0.9], opacity: [0.2, 0.7, 0.2] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
    />

    <line x1="120" y1="120" x2="120" y2="50" className="stroke-white/30" />
    <line x1="120" y1="120" x2="185" y2="120" className="stroke-white/30" />
    <line x1="120" y1="120" x2="120" y2="190" className="stroke-white/30" />
    <line x1="120" y1="120" x2="55" y2="120" className="stroke-white/30" />

    <circle cx="120" cy="50" r="4" className="fill-[#0D1117] stroke-white stroke-[1.5]" />
    <circle cx="185" cy="120" r="4" className="fill-[#0D1117] stroke-white stroke-[1.5]" />
    <circle cx="120" cy="190" r="4" className="fill-[#0D1117] stroke-white stroke-[1.5]" />
    <circle cx="55" cy="120" r="4" className="fill-[#0D1117] stroke-white stroke-[1.5]" />

    <motion.circle
      r={2.5}
      className="fill-[#10B981] stroke-none"
      initial={{ cx: 120, cy: 120 }}
      animate={reducedMotion ? {} : {
        cx: [120, 120, 185, 120],
        cy: [120, 50, 120, 120],
      }}
      transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
    />
  </svg>
)

// ─── 2. Connected Workflow Graph SVG ─────────────────────────────────────────
const ConnectedWorkflowGraph: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg
    viewBox="0 0 240 240"
    className="w-full max-w-[240px] md:max-w-[280px] h-auto aspect-square fill-none stroke-white/20 stroke-[0.75] pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20,60 H220 M20,120 H220 M20,180 H220" className="stroke-white/10" strokeDasharray="4 4" />
    <path d="M30,60 H80 L110,120 H130 L160,180 H210" className="stroke-white/30" />
    <path d="M30,120 H100 L120,60 H180 L200,120" className="stroke-white/30" />

    <rect x="70" y="52" width="16" height="16" rx="2" className="fill-[#0D1117] stroke-white/40 stroke-[1]" />
    <rect x="112" y="112" width="16" height="16" rx="2" className="fill-[#0D1117] stroke-[#10B981] stroke-[1.5]" />
    <circle cx="120" cy="120" r="2.5" className="fill-[#10B981]" />
    <rect x="172" y="52" width="16" height="16" rx="2" className="fill-[#0D1117] stroke-white/40 stroke-[1]" />

    <motion.circle
      r={2.5}
      className="fill-[#10B981] stroke-none"
      animate={reducedMotion ? {} : {
        cx: [30, 80, 110, 130, 160, 210],
        cy: [60, 60, 120, 120, 180, 180]
      }}
      transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
    />
  </svg>
)

// ─── 3. Layered Pipeline Diagram SVG ─────────────────────────────────────────
const LayeredPipelineDiagram: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg
    viewBox="0 0 240 240"
    className="w-full max-w-[240px] md:max-w-[280px] h-auto aspect-square fill-none stroke-white/20 stroke-[0.75] pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M40,40 L200,40 L160,110 L80,110 Z" className="stroke-white/20 fill-white/5" />
    <circle cx="120" cy="155" r="32" className="stroke-white/20" />
    <circle cx="120" cy="155" r="38" className="stroke-[#10B981]/40" strokeDasharray="4 4" />
    <line x1="120" y1="110" x2="120" y2="123" className="stroke-white/30" />

    <motion.g
      animate={reducedMotion ? {} : { rotate: 360 }}
      transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
      style={{ transformOrigin: '120px 155px' }}
    >
      <circle cx="152" cy="155" r="3.5" className="fill-[#10B981] stroke-[#0D1117]" />
    </motion.g>
  </svg>
)

// ─── 4. Expanding Conversion Funnel SVG ──────────────────────────────────────
const ExpandingConversionFunnel: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg
    viewBox="0 0 240 240"
    className="w-full max-w-[240px] md:max-w-[280px] h-auto aspect-square fill-none stroke-white/20 stroke-[0.75] pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M30,50 H210 M30,100 H210 M30,150 H210 M30,200 H210" className="stroke-white/10" />
    <motion.path
      d="M30,180 Q75,160 110,120 T170,90 T210,50"
      strokeWidth="1.5"
      className="stroke-white"
    />
    <circle cx="210" cy="50" r="4" className="fill-[#0D1117] stroke-[#10B981] stroke-[2]" />
    <motion.circle
      cx="210" cy="50" r="8"
      className="stroke-[#10B981] stroke-[1] fill-none"
      animate={reducedMotion ? {} : { scale: [1, 1.8], opacity: [0.7, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
    />
  </svg>
)

// ─── 5. Orbiting Organizational Ecosystem SVG ───────────────────────────────
const OrbitingOrganizationalEcosystem: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg
    viewBox="0 0 240 240"
    className="w-full max-w-[240px] md:max-w-[280px] h-auto aspect-square fill-none stroke-white/20 stroke-[0.75] pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="120" cy="120" r="6" className="fill-white stroke-none" />
    <ellipse cx="120" cy="120" rx="95" ry="32" className="stroke-white/15" style={{ transform: 'rotate(-20deg)', transformOrigin: '120px 120px' }} />
    <ellipse cx="120" cy="120" rx="80" ry="24" className="stroke-white/15" style={{ transform: 'rotate(20deg)', transformOrigin: '120px 120px' }} />

    <motion.g
      animate={reducedMotion ? {} : { rotate: 360 }}
      transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
      style={{ transformOrigin: '120px 120px' }}
    >
      <circle cx="165" cy="120" r="4.5" className="fill-[#10B981] stroke-white stroke-[1]" />
    </motion.g>
  </svg>
)

export const Capabilities: React.FC = () => {
  const { activeCapabilityIdx: activeIndex, setActiveCapabilityIdx: setActiveIndex } = useExperienceMode()
  const reducedMotion = useReducedMotion()

  // Maximum 15–20 words per capability description as instructed
  const capabilitiesData: CapabilityData[] = [
    {
      number: '01',
      title: 'Enterprise Intelligence Architecture',
      shortDesc: 'AI decision systems connecting knowledge, context vectors, and executive insight into scalable operating intelligence.',
      focusTag: 'COGNITIVE ARCHITECTURE',
    },
    {
      number: '02',
      title: 'Autonomous Operations',
      shortDesc: 'Automated workflow orchestrators, transaction pipelines, and self-healing hooks that synchronize enterprise data layers.',
      focusTag: 'EVENT ORCHESTRATION',
    },
    {
      number: '03',
      title: 'Growth Infrastructure',
      shortDesc: 'High-throughput conversion architecture, real-time analytics telemetry, and experimentation engines to scale commercial margins.',
      focusTag: 'REVENUE TELEMETRY',
    },
    {
      number: '04',
      title: 'Revenue Acceleration Systems',
      shortDesc: 'Algorithmic attribution modeling, demand generation infrastructure, and acquisition pipelines engineered to maximize return.',
      focusTag: 'PERFORMANCE ENGINE',
    },
    {
      number: '05',
      title: 'Business Transformation',
      shortDesc: 'Executive architectural audits, legacy systems modernization, and strategic roadmaps for scaling operational maturity.',
      focusTag: 'STRATEGIC EVOLUTION',
    },
  ]

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
      className="w-full bg-[#0B0D13] text-white py-24 sm:py-32 border-t border-white/[0.08] relative z-20 select-none overflow-hidden"
      role="region"
      aria-label="ONNREV Capabilities"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 relative z-10">
        
        {/* Section Header: Label + Big Statement (Passes 5-Second Test) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.1] pb-8 mb-16 gap-6 text-left">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#10B981] uppercase">
              // CAPABILITIES
            </span>
            <h2 className="font-display font-medium text-[36px] sm:text-[48px] md:text-[56px] text-white tracking-tight uppercase">
              Built to Perform.
            </h2>
          </div>
          <p className="font-sans text-[15px] text-white/60 max-w-[420px] text-left md:text-right">
            Hover or select an engineering discipline to inspect its architectural framework.
          </p>
        </div>

        {/* Visual-First Interactive List + Expanding Visual Viewport */}
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12 items-center text-left">
          
          {/* Left Column (Cols 1-7): Interactive List (01 to 05) */}
          <div className="col-span-12 lg:col-span-7 flex flex-col divide-y divide-white/[0.08]" role="tablist">
            {capabilitiesData.map((cap, idx) => {
              const isSelected = activeIndex === idx
              return (
                <div
                  key={cap.number}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  role="tab"
                  aria-selected={isSelected}
                  className={`py-6 md:py-8 transition-all duration-300 cursor-pointer outline-none flex flex-col gap-3 group ${
                    isSelected ? 'opacity-100' : 'opacity-40 hover:opacity-80'
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-4 md:gap-6">
                      <span className={`font-mono text-[13px] md:text-[15px] font-bold ${
                        isSelected ? 'text-[#ef233c]' : 'text-white/40'
                      }`}>
                        [{cap.number}]
                      </span>
                      <h3 className="font-display font-medium text-[22px] sm:text-[28px] md:text-[32px] text-white tracking-tight">
                        {cap.title}
                      </h3>
                    </div>

                    <ArrowRight className={`w-4 h-4 text-[#ef233c] transition-transform duration-300 ${
                      isSelected ? 'translate-x-1 opacity-100' : 'opacity-0 -translate-x-2'
                    }`} />
                  </div>

                  {/* 15-word short explanation appears when active */}
                  {isSelected && (
                    <motion.div
                      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.25 }}
                      className="pl-9 md:pl-12 flex flex-col gap-3"
                    >
                      <p className="font-sans text-[14px] md:text-[15px] text-white/70 max-w-[540px] leading-relaxed">
                        {cap.shortDesc}
                      </p>
                      <a
                        href="#conversion"
                        className="inline-flex items-center gap-2 text-[12px] font-mono tracking-wider text-[#ef233c] hover:text-white transition-colors"
                      >
                        <span>EXPLORE ARCHITECTURE</span>
                        <span>→</span>
                      </a>
                    </motion.div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right Column (Cols 8-12): Visual Schematic Frame */}
          <div className="col-span-12 lg:col-span-5 flex flex-col items-center justify-center p-8 bg-[#090b10] border border-white/[0.1] rounded-[16px] shadow-2xl relative">
            <div className="w-full flex items-center justify-between border-b border-white/[0.08] pb-3 mb-6 text-[10px] font-mono text-white/40 uppercase">
              <span>ACTIVE SYSTEM SCHEMATIC</span>
              <span className="text-[#ef233c] font-semibold">{activeData.focusTag}</span>
            </div>

            <div className="w-full aspect-square flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {renderVisualization(activeIndex)}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="w-full pt-4 mt-4 border-t border-white/[0.08] text-center">
              <span className="text-[11px] font-mono text-white/50">
                DISCIPLINE 0{activeIndex + 1} // REAL-TIME TOPOLOGY
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Capabilities
