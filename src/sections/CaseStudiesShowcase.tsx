import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ArrowRight } from 'lucide-react'

interface CaseStudyStory {
  id: string
  clientSector: string
  title: string
  timeline: string
  challenge: string
  solution: string
  execution: string[]
  outcomes: {
    primaryMetric: string
    primaryLabel: string
    secondaryMetrics: { before: string; after: string; label: string }[]
  }
  stack: string[]
  diagramType: 'pipeline' | 'rag' | 'telemetry'
}

export const CaseStudiesShowcase: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0)
  const reducedMotion = useReducedMotion()

  const caseStudies: CaseStudyStory[] = [
    {
      id: 'manufacturing',
      clientSector: 'INDUSTRIAL MANUFACTURING & LOGISTICS',
      title: 'Automated Regional Dispatch & Inventory Synchronization',
      timeline: '4 Months Production Rollout',
      challenge:
        'Disconnected operational inventory databases and fragmented warehouse routing created 4+ hour manual dispatch delays across 12 regional production facilities.',
      solution:
        'Engineered an event-driven workflow orchestration mesh using n8n and custom Python event listeners to bridge legacy ERP data directly to automated shop-floor routing queues.',
      execution: [
        'Audited legacy ERP data tables and batch synchronization bottlenecks',
        'Built automated fault-tolerant webhook listeners on Kubernetes nodes',
        'Deployed self-healing transaction queues resolving order conflicts automatically',
      ],
      outcomes: {
        primaryMetric: '+35%',
        primaryLabel: 'Operational Dispatch Speedup across all 12 regional facilities',
        secondaryMetrics: [
          { before: '4.2 hrs', after: '22 mins', label: 'Order-to-Dispatch Latency' },
          { before: '8.4%', after: '0.1%', label: 'Routing Conflict Errors' },
          { before: 'Manual Phone Logs', after: 'Automated Event Hooks', label: 'Dispatch Tracking' },
        ],
      },
      stack: ['Python', 'PostgreSQL', 'Kubernetes', 'n8n', 'Docker'],
      diagramType: 'pipeline',
    },
    {
      id: 'fintech',
      clientSector: 'FINANCIAL SERVICES & REGULATORY COMPLIANCE',
      title: 'Sovereign Context Engine for Real-Time KYC & PDF Audits',
      timeline: '3 Months Production Rollout',
      challenge:
        'Manual document auditing for regulatory onboarding took 72 hours per enterprise account, with high compliance latency and strict zero-data-leakage mandates.',
      solution:
        'Architected a sovereign RAG context-engineering pipeline inside dedicated client VPC nodes, performing multi-page vector indexing, cryptographic citation traces, and automated risk scoring.',
      execution: [
        'Designed isolated zero-knowledge embeddings store using Pinecone and Redis cache',
        'Engineered custom tabular extraction models for dense balance sheet scans',
        'Implemented immutable cryptographic verification logs for audit transparency',
      ],
      outcomes: {
        primaryMetric: '-80%',
        primaryLabel: 'Reduction in Compliance Verification Latency',
        secondaryMetrics: [
          { before: '72 hrs', after: '14 mins', label: 'Full Audit Verification Time' },
          { before: '14% False Flags', after: '0.4% False Flags', label: 'Manual Review Burden' },
          { before: 'Public API Risk', after: '100% Isolated VPC', label: 'Data Boundary Security' },
        ],
      },
      stack: ['React', 'TypeScript', 'Redis', 'OpenAI', 'Pinecone', 'FastAPI'],
      diagramType: 'rag',
    },
    {
      id: 'logistics',
      clientSector: 'SUPPLY CHAIN & FLEET OPERATIONS',
      title: 'Algorithmic Route Recalculation & Telemetry Stream Engine',
      timeline: '5 Months Production Rollout',
      challenge:
        'Nationwide carrier fleet suffered routing inefficiencies and driver coordination overhead due to intermittent cell telemetry and delayed dispatch updates.',
      solution:
        'Engineered an algorithmic route recalculation engine deployed across AWS edge nodes, backed by fast in-memory Redis synchronization and asynchronous offline worker queues.',
      execution: [
        'Developed fault-tolerant edge telemetry caching for intermittent mobile networks',
        'Integrated dynamic route optimization algorithms with real-time congestion feeds',
        'Created automated driver notification system synchronizing dock arrival times',
      ],
      outcomes: {
        primaryMetric: '-15%',
        primaryLabel: 'Monthly Fleet Fuel Consumption Reduction',
        secondaryMetrics: [
          { before: '180 miles/day/truck', after: '153 miles/day/truck', label: 'Average Deadhead Miles' },
          { before: '45 mins', after: '8 mins', label: 'Warehouse Dock Turnaround' },
          { before: 'Static Paper Routes', after: 'Dynamic Real-time Sync', label: 'Route Agility' },
        ],
      },
      stack: ['Python', 'Docker', 'Redis', 'AWS Cloud', 'FastAPI', 'PostgreSQL'],
      diagramType: 'telemetry',
    },
  ]

  const current = caseStudies[activeCase]

  return (
    <section
      id="projects"
      className="w-full bg-[#0B0D13] text-white py-24 sm:py-32 md:py-40 relative z-20 select-none overflow-hidden border-t border-white/[0.08]"
      role="region"
      aria-label="ONNREV Case Studies & Production Proof"
    >
      {/* Background blueprint grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 relative z-10">
        
        {/* Section Coordinate & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.1] pb-8 mb-14 gap-6">
          <div className="flex flex-col gap-2 text-left">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#10B981] uppercase">
              // PROJECTS & CASES
            </span>
            <h2 className="font-display font-medium text-[36px] sm:text-[48px] md:text-[56px] text-white tracking-tight uppercase">
              Proven Outcomes.
            </h2>
          </div>
          <span className="text-[13px] font-sans text-white/60 tracking-normal text-left md:text-right max-w-[380px]">
            Real production deployments measured by speed, accuracy, and operational return.
          </span>
        </div>

        {/* Case Study Selector Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {caseStudies.map((cs, idx) => {
            const isSelected = activeCase === idx
            return (
              <button
                key={cs.id}
                onClick={() => setActiveCase(idx)}
                className={`p-5 rounded-[10px] text-left transition-all duration-300 border cursor-pointer outline-none flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-white/10 border-[#ef233c] shadow-[0_0_20px_rgba(239,35,60,0.25)]'
                    : 'bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.05] text-white/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider text-[#ef233c] uppercase font-semibold">
                    CASE 0{idx + 1}
                  </span>
                  <span className="text-[14px] font-display font-semibold text-white">
                    {cs.outcomes.primaryMetric}
                  </span>
                </div>
                <span className="font-display font-medium text-[15px] text-white line-clamp-1">
                  {cs.title}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active Case Study Dossier Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[16px] border border-white/[0.12] bg-[#0a0c10] p-8 md:p-12 shadow-2xl text-left grid grid-cols-12 gap-y-10 lg:gap-x-12"
          >
            {/* Left 7 Columns: Storytelling, Challenge, Solution & Execution */}
            <div className="col-span-12 lg:col-span-7 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-[11px] font-mono text-white/50 uppercase">
                  <span className="text-[#ef233c] font-semibold">{current.clientSector}</span>
                  <span>•</span>
                  <span>{current.timeline}</span>
                </div>

                <h3 className="font-display font-medium text-[26px] md:text-[34px] text-white tracking-tight leading-tight">
                  {current.title}
                </h3>
              </div>

              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/[0.08]">
                <div className="flex flex-col gap-2">
                  <span className="text-[10.5px] font-mono tracking-widest text-zinc-400 uppercase">
                    [ THE FRICTION ]
                  </span>
                  <p className="font-sans text-[13.5px] leading-relaxed text-white/70">
                    {current.challenge}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[10.5px] font-mono tracking-widest text-[#ef233c] uppercase font-semibold">
                    [ ONNREV ARCHITECTURE ]
                  </span>
                  <p className="font-sans text-[13.5px] leading-relaxed text-white/70">
                    {current.solution}
                  </p>
                </div>
              </div>

              {/* Execution Protocol */}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono tracking-wider text-white uppercase">
                  Execution Highlights:
                </span>
                <ul className="flex flex-col gap-2">
                  {current.execution.map((step) => (
                    <li key={step} className="flex items-start gap-2.5 text-[13px] font-sans text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0 mt-2" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {current.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-[12px] font-mono text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Before vs After Metrics & Outcome Proof */}
            <div className="col-span-12 lg:col-span-5 bg-black/40 border border-white/[0.08] p-7 md:p-8 rounded-[12px] flex flex-col justify-between gap-8">
              
              {/* Primary Metric Banner */}
              <div className="flex flex-col gap-2 border-b border-white/[0.1] pb-6">
                <span className="text-[10.5px] font-mono tracking-widest text-white/50 uppercase">
                  PRIMARY VERIFIED OUTCOME
                </span>
                <span className="font-display font-semibold text-[54px] md:text-[64px] text-[#10B981] leading-none tracking-tight">
                  {current.outcomes.primaryMetric}
                </span>
                <span className="font-sans text-[13.5px] text-white/80">
                  {current.outcomes.primaryLabel}
                </span>
              </div>

              {/* Before vs After Telemetry Comparison */}
              <div className="flex flex-col gap-4">
                <span className="text-[10.5px] font-mono tracking-widest text-white/50 uppercase">
                  BEFORE VS. AFTER AUDIT
                </span>

                <div className="flex flex-col divide-y divide-white/[0.08]">
                  {current.outcomes.secondaryMetrics.map((item) => (
                    <div key={item.label} className="py-3 flex flex-col gap-1">
                      <span className="text-[11px] font-sans text-white/50">
                        {item.label}
                      </span>
                      <div className="flex items-center justify-between text-[13px] font-mono">
                        <span className="text-white/40 line-through">{item.before}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white/20" />
                        <span className="text-[#10B981] font-semibold">{item.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Link */}
              <a
                href="#conversion"
                className="w-full py-3.5 rounded-[8px] bg-white text-[#0B0D13] hover:bg-[#F0FDF4] font-sans text-[13px] font-bold text-center transition-colors flex items-center justify-center gap-2"
              >
                <span>Discuss Similar Engagement</span>
                <ArrowRight className="w-4 h-4 text-[#10B981]" />
              </a>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}

export default CaseStudiesShowcase
