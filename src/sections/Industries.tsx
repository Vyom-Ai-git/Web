import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

interface SectorItem {
  id: string
  code: string
  name: string
  focus: string
  deliverables: string
}

export const Industries: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const sectors: SectorItem[] = [
    {
      id: 'healthcare',
      code: '01',
      name: 'HEALTHCARE',
      focus: 'Clinical Operating Systems & Patient Engagement',
      deliverables: 'Diagnostic accessioning pipelines, automated encrypted result delivery, and zero-leakage patient portals.',
    },
    {
      id: 'technology',
      code: '02',
      name: 'TECHNOLOGY',
      focus: 'High-Concurrency Platforms & Systems Architecture',
      deliverables: 'Custom backend microservices, resilient APIs, and low-latency cloud infrastructure.',
    },
    {
      id: 'financial-services',
      code: '03',
      name: 'FINANCIAL SERVICES',
      focus: 'Sovereign Context Pipelines & Regulatory Automation',
      deliverables: 'Isolated VPC data ingestion, zero-trust verification engines, and automated compliance indexing.',
    },
    {
      id: 'logistics',
      code: '04',
      name: 'LOGISTICS & SUPPLY CHAIN',
      focus: 'Algorithmic Telemetry & Route Recalculation',
      deliverables: 'Edge transit caching, real-time fleet synchronization, and automated warehouse loading dock coordination.',
    },
    {
      id: 'manufacturing',
      code: '05',
      name: 'MANUFACTURING',
      focus: 'Autonomic Operations & Industrial ERP Integration',
      deliverables: 'Event-driven shop-floor synchronization, automated discrepancy resolution, and multi-facility queues.',
    },
  ]

  return (
    <section
      id="industries"
      className="w-full bg-[#050507] text-white py-24 sm:py-32 border-t border-white/[0.08] relative z-20 select-none overflow-hidden"
      role="region"
      aria-label="ONNREV Industries"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.1] pb-8 mb-14 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#ef233c] uppercase font-semibold">
              // 06 INDUSTRIES
            </span>
            <h2 className="font-display font-medium text-[36px] sm:text-[48px] md:text-[56px] text-white tracking-tight uppercase">
              SECTORS WE SERVE.
            </h2>
          </div>
          <span className="text-[14px] font-sans text-zinc-400 tracking-normal text-left md:text-right max-w-[380px]">
            Engineering systems built for sectors where reliability, latency, and compliance are paramount.
          </span>
        </div>

        {/* Typographic List (Section 21: Use typography rather than cards) */}
        <div className="flex flex-col divide-y divide-white/[0.08]">
          {sectors.map((sec, idx) => {
            const isHovered = hoveredIndex === idx
            return (
              <div
                key={sec.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="py-8 sm:py-10 transition-colors duration-300 flex flex-col gap-4 group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className={`font-mono text-[14px] sm:text-[16px] font-bold transition-colors ${
                      isHovered ? 'text-[#ef233c]' : 'text-zinc-600'
                    }`}>
                      [{sec.code}]
                    </span>
                    <h3 className={`font-display font-medium text-[28px] sm:text-[40px] md:text-[50px] lg:text-[58px] uppercase tracking-tight transition-all duration-300 ${
                      isHovered ? 'text-white translate-x-1 sm:translate-x-2' : 'text-zinc-400 group-hover:text-white'
                    }`}>
                      {sec.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 pl-8 md:pl-0">
                    <span className="text-[12px] font-mono text-zinc-500 uppercase tracking-wider hidden sm:inline">
                      {sec.focus}
                    </span>
                    <ArrowUpRight className={`w-5 h-5 text-[#ef233c] transition-all duration-300 ${
                      isHovered ? 'translate-x-1 -translate-y-1 opacity-100' : 'opacity-30'
                    }`} />
                  </div>
                </div>

                {/* Subtext on hover / active */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isHovered ? 1 : 0.6,
                    height: isHovered ? 'auto' : 'auto',
                  }}
                  className="pl-8 sm:pl-12 flex flex-col md:flex-row md:items-center justify-between gap-2 text-zinc-400 font-sans text-[14px]"
                >
                  <p className="max-w-3xl leading-relaxed">
                    {sec.deliverables}
                  </p>
                  <span className="text-[11px] font-mono text-[#ef233c] uppercase tracking-widest shrink-0">
                    ONNREV SPEC // VERIFIED
                  </span>
                </motion.div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Industries
