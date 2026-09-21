import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface CapabilityData {
  number: string
  title: string
  shortDesc: string
  focusTag: string
}

// ─── 1. AI & Technology (Concentric Neural Knowledge Network SVG) ────────────
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
      cx="120" cy="120" r="14"
      className="stroke-[#ef233c] stroke-[1] fill-none"
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
      cx={120}
      cy={120}
      r={2.5}
      className="fill-[#ef233c] stroke-none"
      animate={reducedMotion ? {} : {
        x: [0, 0, 65, 0],
        y: [0, -70, 0, 0],
      }}
      transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
    />
  </svg>
)

// ─── 2. Digital Experiences (User Interaction & Viewport Mesh SVG) ────────────
const DigitalExperiencesMesh: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg
    viewBox="0 0 240 240"
    className="w-full max-w-[240px] md:max-w-[280px] h-auto aspect-square fill-none stroke-white/20 stroke-[0.75] pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Screen frame representation */}
    <rect x="30" y="40" width="180" height="120" rx="8" className="stroke-white/30 fill-white/[0.02]" />
    <line x1="30" y1="65" x2="210" y2="65" className="stroke-white/20" />
    <circle cx="45" cy="52" r="3" className="fill-white/30" />
    <circle cx="55" cy="52" r="3" className="fill-white/30" />
    <circle cx="65" cy="52" r="3" className="fill-[#ef233c]" />

    {/* Dynamic UI Hierarchy Wireframes */}
    <rect x="45" y="80" width="60" height="65" rx="4" className="stroke-[#ef233c] fill-[#ef233c]/10" />
    <rect x="115" y="80" width="80" height="28" rx="3" className="stroke-white/30 fill-white/5" />
    <rect x="115" y="117" width="80" height="28" rx="3" className="stroke-white/30 fill-white/5" />

    {/* Floating interaction cursor */}
    <motion.g
      animate={reducedMotion ? {} : {
        x: [0, 45, 20, 0],
        y: [0, 20, 50, 0]
      }}
      transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
    >
      <polygon points="75,100 85,120 80,123 75,112 68,118" className="fill-white stroke-[#050507]" strokeWidth="1" />
      <circle cx="75" cy="100" r="10" className="stroke-[#ef233c]/60 fill-none" />
    </motion.g>

    <line x1="90" y1="160" x2="150" y2="160" className="stroke-white/20" />
    <path d="M100,160 L90,195 H150 L140,160" className="stroke-white/20" />
    <line x1="80" y1="195" x2="160" y2="195" className="stroke-white/40" />
  </svg>
)

// ─── 3. Business Solutions (Connected Operational Pipeline SVG) ──────────────
const BusinessSolutionsPipeline: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg
    viewBox="0 0 240 240"
    className="w-full max-w-[240px] md:max-w-[280px] h-auto aspect-square fill-none stroke-white/20 stroke-[0.75] pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20,60 H220 M20,120 H220 M20,180 H220" className="stroke-white/10" strokeDasharray="4 4" />
    <path d="M30,60 H80 L110,120 H130 L160,180 H210" className="stroke-white/30" />
    <path d="M30,120 H100 L120,60 H180 L200,120" className="stroke-white/30" />

    <rect x="70" y="52" width="16" height="16" rx="2" className="fill-[#0D1117] stroke-white/40 stroke-[1]" />
    <rect x="112" y="112" width="16" height="16" rx="2" className="fill-[#0D1117] stroke-[#ef233c] stroke-[1.5]" />
    <circle cx="120" cy="120" r="2.5" className="fill-[#ef233c]" />
    <rect x="172" y="52" width="16" height="16" rx="2" className="fill-[#0D1117] stroke-white/40 stroke-[1]" />

    <motion.circle
      cx={30}
      cy={60}
      r={2.5}
      className="fill-[#ef233c] stroke-none"
      animate={reducedMotion ? {} : {
        x: [0, 50, 80, 100, 130, 180],
        y: [0, 0, 60, 60, 120, 120]
      }}
      transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
    />
  </svg>
)

// ─── 4. Automation (Smarter Workflows & Feedback Loop SVG) ────────────────────
const AutomationLoop: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg
    viewBox="0 0 240 240"
    className="w-full max-w-[240px] md:max-w-[280px] h-auto aspect-square fill-none stroke-white/20 stroke-[0.75] pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="120" cy="120" r="60" className="stroke-white/20" strokeDasharray="6 6" />
    <circle cx="120" cy="120" r="85" className="stroke-[#ef233c]/30" />
    
    <rect x="110" y="30" width="20" height="20" rx="3" className="fill-[#050507] stroke-[#ef233c] stroke-[1.5]" />
    <rect x="195" y="110" width="20" height="20" rx="3" className="fill-[#050507] stroke-white/40" />
    <rect x="110" y="190" width="20" height="20" rx="3" className="fill-[#050507] stroke-white/40" />
    <rect x="25" y="110" width="20" height="20" rx="3" className="fill-[#050507] stroke-white/40" />

    <line x1="120" y1="50" x2="120" y2="190" className="stroke-white/10" />
    <line x1="45" y1="120" x2="195" y2="120" className="stroke-white/10" />

    <motion.g
      animate={reducedMotion ? {} : { rotate: 360 }}
      transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
      style={{ transformOrigin: '120px 120px' }}
    >
      <circle cx="205" cy="120" r="4" className="fill-[#ef233c] stroke-[#050507]" />
    </motion.g>
  </svg>
)

export const Capabilities: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const reducedMotion = useReducedMotion()

  // 4 Core Capabilities strictly aligned with Section 11 of the master specification
  const capabilitiesData: CapabilityData[] = [
    {
      number: '01',
      title: 'AI & TECHNOLOGY',
      shortDesc: 'Intelligent systems built to solve real business problems.',
      focusTag: 'INTELLIGENT SYSTEMS',
    },
    {
      number: '02',
      title: 'DIGITAL EXPERIENCES',
      shortDesc: 'Websites and digital products designed around people.',
      focusTag: 'PRODUCT & INTERFACE',
    },
    {
      number: '03',
      title: 'BUSINESS SOLUTIONS',
      shortDesc: 'Technology that improves how businesses operate and grow.',
      focusTag: 'OPERATIONAL ENGINES',
    },
    {
      number: '04',
      title: 'AUTOMATION',
      shortDesc: 'Smarter workflows that reduce repetitive work.',
      focusTag: 'AUTONOMIC WORKFLOWS',
    },
  ]

  const renderVisualization = (index: number) => {
    switch (index) {
      case 0: return <ConcentricKnowledgeNetwork reducedMotion={reducedMotion} />
      case 1: return <DigitalExperiencesMesh reducedMotion={reducedMotion} />
      case 2: return <BusinessSolutionsPipeline reducedMotion={reducedMotion} />
      case 3: return <AutomationLoop reducedMotion={reducedMotion} />
      default: return null
    }
  }

  const activeData = capabilitiesData[activeIndex]

  return (
    <section
      id="services"
      className="w-full bg-[#050507] text-white py-24 sm:py-32 border-t border-white/[0.08] relative z-20 select-none overflow-hidden"
      role="region"
      aria-label="ONNREV What We Do"
    >
      {/* Background ambient red glow */}
      <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-[#ef233c]/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.1] pb-8 mb-16 gap-6 text-left">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#ef233c] uppercase font-semibold">
              // WHAT WE DO
            </span>
            <h2 className="font-display font-medium text-[36px] sm:text-[48px] md:text-[56px] text-white tracking-tight uppercase">
              CAPABILITIES.
            </h2>
          </div>
          <p className="font-sans text-[14px] md:text-[15px] text-zinc-400 max-w-[420px] text-left md:text-right">
            Select a capability to inspect its architectural foundation and engineered execution.
          </p>
        </div>

        {/* Visual-First Interactive List + Expanding Visual Viewport */}
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-12 items-center text-left">
          
          {/* Left Column: Editorial Rows (01 to 04) */}
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 md:gap-6">
                      <span className={`font-mono text-[13px] md:text-[15px] font-bold ${
                        isSelected ? 'text-[#ef233c]' : 'text-zinc-500'
                      }`}>
                        [{cap.number}]
                      </span>
                      <h3 className="font-display font-medium text-[22px] sm:text-[28px] md:text-[32px] text-white tracking-tight uppercase">
                        {cap.title}
                      </h3>
                    </div>

                    <ArrowRight className={`w-5 h-5 text-[#ef233c] transition-transform duration-300 ${
                      isSelected ? 'translate-x-1 opacity-100' : 'opacity-0 -translate-x-2'
                    }`} />
                  </div>

                  {/* Concise 1-sentence description appears when active */}
                  {isSelected && (
                    <motion.div
                      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.25 }}
                      className="pl-9 md:pl-12 flex flex-col gap-3 pt-1"
                    >
                      <p className="font-sans text-[15px] md:text-[16px] text-zinc-300 max-w-[540px] leading-relaxed">
                        {cap.shortDesc}
                      </p>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-[12px] font-mono tracking-wider text-[#ef233c] hover:text-white transition-colors uppercase pt-1"
                      >
                        <span>START A CONVERSATION</span>
                        <span>→</span>
                      </a>
                    </motion.div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right Column: Visual Schematic Frame */}
          <div className="col-span-12 lg:col-span-5 flex flex-col items-center justify-center p-8 bg-[#0a0c10] border border-white/[0.1] rounded-[16px] shadow-2xl relative">
            <div className="w-full flex items-center justify-between border-b border-white/[0.08] pb-3 mb-6 text-[10px] font-mono text-zinc-400 uppercase">
              <span>SYSTEM ARCHITECTURE</span>
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
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                CAPABILITY 0{activeIndex + 1} // TOPOLOGY
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Capabilities
