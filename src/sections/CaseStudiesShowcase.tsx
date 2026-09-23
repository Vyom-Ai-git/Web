import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { CaseStudyModal } from '@/components/cases/CaseStudyModal'
import { VERIFIED_CASE_STUDIES } from '@/data/caseStudies'

// Visual Schematic Visualizers for Each Project
const LabOSVisual: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg viewBox="0 0 500 280" className="w-full h-full fill-none select-none">
    <rect width="500" height="280" rx="8" className="fill-[#08090c] stroke-white/10 stroke-[1]" />
    <path d="M40 70 H460 M40 140 H460 M40 210 H460" className="stroke-white/5 stroke-dasharray-[4_4]" />
    
    {/* Telemetry Nodes */}
    <rect x="60" y="45" width="110" height="50" rx="6" className="fill-black/80 stroke-white/20" />
    <text x="75" y="75" fill="#a1a1aa" fontSize="11" fontFamily="monospace">ACCESSIONING</text>
    <circle cx="155" cy="55" r="3" fill="#ef233c" />

    <line x1="170" y1="70" x2="230" y2="70" className="stroke-white/20" strokeWidth="1.5" />
    
    <rect x="230" y="45" width="120" height="50" rx="6" className="fill-black/80 stroke-[#ef233c]/60" />
    <text x="245" y="75" fill="#FFFFFF" fontSize="11" fontFamily="monospace">BARCODE AUDIT</text>

    <line x1="350" y1="70" x2="400" y2="70" className="stroke-white/20" strokeWidth="1.5" />

    <rect x="400" y="45" width="60" height="50" rx="6" className="fill-[#ef233c]/20 stroke-[#ef233c]" />
    <text x="415" y="75" fill="#ef233c" fontSize="10" fontFamily="monospace">DISPATCH</text>

    {/* Dynamic Flow Pulse */}
    <motion.circle
      cx="60"
      cy="70"
      r="4"
      fill="#ef233c"
      animate={reducedMotion ? {} : { cx: [60, 230, 430] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
    />

    {/* Micro Metrics Readout */}
    <rect x="60" y="160" width="380" height="85" rx="6" className="fill-black/40 stroke-white/10" />
    <text x="80" y="190" fill="#a1a1aa" fontSize="11" fontFamily="monospace">DATA LATENCY: &lt; 90 SECONDS TO ENCRYPTED REPORT</text>
    <text x="80" y="215" fill="#ef233c" fontSize="11" fontFamily="monospace">TENANCY: ISOLATED VPC // 100% SPECIMEN INTEGRITY</text>
  </svg>
)

const ManufacturingVisual: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg viewBox="0 0 500 280" className="w-full h-full fill-none select-none">
    <rect width="500" height="280" rx="8" className="fill-[#08090c] stroke-white/10 stroke-[1]" />
    
    {/* Grid Webhook Listener Mesh */}
    <circle cx="250" cy="140" r="80" className="stroke-white/10" strokeDasharray="4 4" />
    <circle cx="250" cy="140" r="110" className="stroke-white/5" />
    
    <motion.circle
      cx="250"
      cy="140"
      r="45"
      className="stroke-[#ef233c]/50"
      strokeWidth="1.5"
      animate={reducedMotion ? {} : { scale: [1, 1.15, 1], opacity: [0.3, 0.8, 0.3] }}
      transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
      style={{ transformOrigin: '250px 140px' }}
    />

    {/* Center Orchestration Core */}
    <rect x="210" y="115" width="80" height="50" rx="6" className="fill-black stroke-[#ef233c]" />
    <text x="225" y="145" fill="#FFFFFF" fontSize="11" fontFamily="monospace">EVENT MESH</text>

    {/* 4 Satellite Nodes */}
    <rect x="60" y="50" width="80" height="35" rx="4" className="fill-black/80 stroke-white/20" />
    <text x="75" y="72" fill="#a1a1aa" fontSize="10" fontFamily="monospace">ERP INGRESS</text>

    <rect x="360" y="50" width="80" height="35" rx="4" className="fill-black/80 stroke-white/20" />
    <text x="370" y="72" fill="#a1a1aa" fontSize="10" fontFamily="monospace">FLOOR DISPATCH</text>

    <rect x="60" y="195" width="80" height="35" rx="4" className="fill-black/80 stroke-white/20" />
    <text x="75" y="217" fill="#a1a1aa" fontSize="10" fontFamily="monospace">WAREHOUSE</text>

    <rect x="360" y="195" width="80" height="35" rx="4" className="fill-black/80 stroke-white/20" />
    <text x="375" y="217" fill="#a1a1aa" fontSize="10" fontFamily="monospace">QUEUE RETRY</text>

    <line x1="140" y1="67" x2="210" y2="125" className="stroke-white/20" />
    <line x1="360" y1="67" x2="290" y2="125" className="stroke-white/20" />
    <line x1="140" y1="212" x2="210" y2="155" className="stroke-white/20" />
    <line x1="360" y1="212" x2="290" y2="155" className="stroke-white/20" />
  </svg>
)

const FintechVisual: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg viewBox="0 0 500 280" className="w-full h-full fill-none select-none">
    <rect width="500" height="280" rx="8" className="fill-[#08090c] stroke-white/10 stroke-[1]" />
    
    {/* Tabular Vector Layers */}
    <rect x="50" y="50" width="180" height="180" rx="6" className="fill-black/60 stroke-white/20" />
    <text x="70" y="80" fill="#a1a1aa" fontSize="11" fontFamily="monospace">UNSTRUCTURED CHARTER</text>
    <path d="M70 100 H200 M70 125 H200 M70 150 H160 M70 175 H190 M70 200 H140" className="stroke-white/15 stroke-[1.5]" />

    <line x1="230" y1="140" x2="280" y2="140" className="stroke-[#ef233c]" strokeWidth="2" strokeDasharray="4 4" />

    <rect x="280" y="50" width="170" height="180" rx="6" className="fill-black/60 stroke-[#ef233c]/60" />
    <text x="300" y="80" fill="#ef233c" fontSize="11" fontFamily="monospace">SOVEREIGN RAG</text>
    <motion.rect
      x="300"
      y="100"
      width="130"
      height="30"
      rx="4"
      className="fill-[#ef233c]/15 stroke-[#ef233c]/40"
      animate={reducedMotion ? {} : { opacity: [0.7, 1, 0.7] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
    />
    <text x="315" y="120" fill="#FFFFFF" fontSize="10" fontFamily="monospace">ZERO-LEAK VECTOR</text>
    <rect x="300" y="145" width="130" height="30" rx="4" className="fill-white/5 stroke-white/20" />
    <text x="315" y="165" fill="#a1a1aa" fontSize="10" fontFamily="monospace">SIGNED CITATION</text>
    <rect x="300" y="190" width="130" height="25" rx="4" className="fill-white/5 stroke-white/10" />
    <text x="315" y="207" fill="#a1a1aa" fontSize="9" fontFamily="monospace">AUDIT HASH: OK</text>
  </svg>
)

const LogisticsVisual: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => (
  <svg viewBox="0 0 500 280" className="w-full h-full fill-none select-none">
    <rect width="500" height="280" rx="8" className="fill-[#08090c] stroke-white/10 stroke-[1]" />
    
    {/* Route corridor map simulation */}
    <path d="M50 200 Q 150 60 250 180 T 450 80" className="stroke-white/20 stroke-[1.5]" fill="none" />
    <path d="M50 200 Q 150 60 250 180 T 450 80" className="stroke-[#ef233c]/40 stroke-[3]" strokeDasharray="6 8" fill="none" />

    <circle cx="50" cy="200" r="6" className="fill-white" />
    <circle cx="250" cy="180" r="5" className="fill-white/60" />
    <circle cx="450" cy="80" r="6" className="fill-[#ef233c]" />

    {/* Moving vehicle telemetry marker */}
    <motion.circle
      cx="50"
      cy="200"
      r="4"
      fill="#ef233c"
      animate={reducedMotion ? {} : {
        cx: [50, 150, 250, 350, 450],
        cy: [200, 110, 180, 140, 80],
      }}
      transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
    />

    <rect x="60" y="40" width="170" height="40" rx="4" className="fill-black/80 stroke-white/10" />
    <text x="75" y="65" fill="#a1a1aa" fontSize="10" fontFamily="monospace">TRANSIT: 1,200 CONCURRENT ASSETS</text>
  </svg>
)

export const CaseStudiesShowcase: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)
  const reducedMotion = useReducedMotion()

  const projects = VERIFIED_CASE_STUDIES
  const current = projects[activeProject]

  const openModal = (index: number) => {
    setModalIndex(index)
    setIsModalOpen(true)
  }

  const renderVisual = (index: number) => {
    switch (index) {
      case 0: return <LabOSVisual reducedMotion={reducedMotion} />
      case 1: return <ManufacturingVisual reducedMotion={reducedMotion} />
      case 2: return <FintechVisual reducedMotion={reducedMotion} />
      case 3: return <LogisticsVisual reducedMotion={reducedMotion} />
      default: return null
    }
  }

  return (
    <>
      <section
        id="work"
        className="w-full bg-black text-white py-24 sm:py-32 md:py-40 relative z-20 select-none overflow-hidden border-t border-white/[0.08]"
        role="region"
        aria-label="ONNREV Selected Work"
      >
        {/* Precision blueprint hairline grid */}
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Section Coordinate & Header (Section 16) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.1] pb-8 mb-14 gap-6">
            <div className="flex flex-col gap-2 text-left">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#ef233c] uppercase font-semibold">
                // 03 SELECTED WORK
              </span>
              <h2 className="font-display font-medium text-[36px] sm:text-[48px] md:text-[56px] text-white tracking-tight uppercase">
                SELECTED WORK.
              </h2>
            </div>
            <span className="text-[14px] font-sans text-zinc-400 tracking-normal text-left md:text-right max-w-[400px]">
              Verified engineering systems and digital platforms built to solve mission-critical operational challenges.
            </span>
          </div>

          {/* Project Selector Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {projects.map((proj, idx) => {
              const isSelected = activeProject === idx
              return (
                <button
                  key={proj.id}
                  onClick={() => setActiveProject(idx)}
                  className={`p-5 rounded-[12px] text-left transition-all duration-300 border cursor-pointer outline-none flex flex-col justify-between gap-4 ${
                    isSelected
                      ? 'border-[#ef233c] bg-white/10 shadow-[0_0_20px_rgba(239,35,60,0.15)] ring-1 ring-[#ef233c]/40'
                      : 'border-white/[0.08] hover:border-white/25 bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-wider text-[#ef233c] uppercase font-semibold">
                      {proj.code}
                    </span>
                    <span className="text-[14px] font-display font-semibold text-white">
                      {proj.metric}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-display font-medium text-[15px] text-white line-clamp-1">
                      {proj.title}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400 line-clamp-1">
                      {proj.industry}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active Project Card with Large Visual Centerpiece (Section 16) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[16px] border border-white/[0.12] bg-[#0a0c10] p-7 sm:p-10 md:p-12 shadow-2xl text-left grid grid-cols-12 gap-y-10 lg:gap-x-12"
            >
              {/* Left Column: Project Overview & What We Built */}
              <div className="col-span-12 lg:col-span-6 flex flex-col justify-between gap-8">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400 uppercase">
                    <span className="text-[#ef233c] font-semibold">{current.industry}</span>
                    <span>//</span>
                    <span>{current.code}</span>
                  </div>

                  <h3 className="font-display font-medium text-[26px] md:text-[34px] text-white tracking-tight leading-tight uppercase">
                    {current.title}
                  </h3>

                  <p className="font-sans text-[15px] md:text-[16px] text-zinc-300 leading-relaxed max-w-[560px]">
                    {current.subtitle}
                  </p>
                </div>

                {/* Challenge & Solution Summary */}
                <div className="grid grid-cols-1 gap-4 pt-4 border-t border-white/[0.08]">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-mono tracking-widest text-[#ef233c] uppercase font-semibold">
                      THE SOLUTION
                    </span>
                    <p className="font-sans text-[13.5px] leading-relaxed text-zinc-300">
                      {current.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {current.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-[12px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Inspect Case Study Modal CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => openModal(activeProject)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 font-sans text-[13px] font-bold transition-all shadow-md cursor-pointer group"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-[#ef233c] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Large Visual Centerpiece (Section 16) */}
              <div className="col-span-12 lg:col-span-6 flex flex-col justify-between gap-6">
                {/* Visual Schematic Frame */}
                <div
                  onClick={() => openModal(activeProject)}
                  className="w-full aspect-[16/10] bg-black/60 border border-white/10 rounded-[12px] p-3 flex items-center justify-center cursor-pointer relative group overflow-hidden"
                >
                  {renderVisual(activeProject)}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#ef233c]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-full bg-black/90 border border-[#ef233c] text-[12px] font-mono text-white flex items-center gap-2">
                      <span>Click to Expand Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#ef233c]" />
                    </span>
                  </div>
                </div>

                {/* Outcome Stats Box */}
                <div className="p-5 rounded-[10px] bg-black/50 border border-white/[0.08] flex items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                      VERIFIED OUTCOME
                    </span>
                    <span className="font-sans text-[13px] text-zinc-300">
                      {current.metricLabel}
                    </span>
                  </div>
                  <span className="font-display font-semibold text-[36px] text-[#ef233c] leading-none shrink-0 pl-4">
                    {current.metric}
                  </span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* View All Work / Bottom CTA bar (Section 16) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-10 mt-8 border-t border-white/[0.08] gap-4">
            <span className="text-[12px] font-mono text-zinc-500 uppercase tracking-wider">
              SHOWING {projects.length} OF {projects.length} VERIFIED PRODUCTION CASES
            </span>

            <button
              onClick={() => openModal(0)}
              className="inline-flex items-center gap-2 text-[13.5px] font-mono font-semibold text-[#ef233c] hover:text-white transition-colors group cursor-pointer"
            >
              <span>VIEW ALL WORK →</span>
            </button>
          </div>

        </div>
      </section>

      {/* Dedicated Project Case Study Modal (Section 17) */}
      <CaseStudyModal
        isOpen={isModalOpen}
        activeCaseIndex={modalIndex}
        onClose={() => setIsModalOpen(false)}
        onSelectCase={(idx) => setModalIndex(idx)}
      />
    </>
  )
}

export default CaseStudiesShowcase
