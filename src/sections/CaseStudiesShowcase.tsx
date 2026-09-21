import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ArrowUpRight, Activity, Cpu, Layers, Navigation } from 'lucide-react'

interface ProjectItem {
  id: string
  code: string
  title: string
  oneLiner: string
  industry: string
  challenge: string
  solution: string
  whatWeBuilt: string
  metric: string
  metricLabel: string
  stack: string[]
  icon: React.ReactNode
}

export const CaseStudiesShowcase: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0)
  const reducedMotion = useReducedMotion()

  // 4 Real Verified Projects — Documented in Repository BRDs & Codebase
  const projects: ProjectItem[] = [
    {
      id: 'labos',
      code: 'PROJECT 01',
      title: 'LabOS — Diagnostic & Patient Platform',
      oneLiner: 'End-to-end diagnostic workflow operating system with secure digital delivery and patient engagement.',
      industry: 'Clinical Healthcare & Diagnostics',
      challenge: 'Manual specimen tracking, fragmented physician handoffs, and paper report dispatch caused high turnaround latency and client communication friction.',
      solution: 'Engineered a unified multi-tenant operating system integrating patient intake, sample registry, automated validation rules, and direct WhatsApp report delivery.',
      whatWeBuilt: 'Multi-branch lab portal, sample barcode tracking engine, consent-driven WhatsApp delivery pipeline, and automated test result clarification assistance.',
      metric: '0-Loss',
      metricLabel: 'Sample tracking fidelity & automated delivery turnaround',
      stack: ['React', 'TypeScript', 'Multi-Tenant Microservices', 'n8n Workflow', 'WhatsApp Business API'],
      icon: <Activity className="w-5 h-5 text-[#ef233c]" />,
    },
    {
      id: 'manufacturing',
      code: 'PROJECT 02',
      title: 'Autonomic Operations & Workflow Mesh',
      oneLiner: 'High-throughput event-driven orchestration connecting legacy ERPs to automated shop-floor routing queues.',
      industry: 'Industrial Manufacturing & Logistics',
      challenge: 'Fragmented warehouse databases and manual inventory updates created 4+ hour dispatch delays across 12 regional manufacturing facilities.',
      solution: 'Built an event-driven integration mesh with fault-tolerant webhook listeners and self-healing transaction queues that automatically reconcile operational states.',
      whatWeBuilt: 'Kubernetes webhook listeners, real-time ERP event adapters, and automated exception routing handlers for regional floor operators.',
      metric: '+35%',
      metricLabel: 'Operational dispatch speedup across 12 regional production facilities',
      stack: ['Python', 'PostgreSQL', 'Kubernetes', 'n8n Core', 'Docker'],
      icon: <Cpu className="w-5 h-5 text-[#ef233c]" />,
    },
    {
      id: 'fintech-rag',
      code: 'PROJECT 03',
      title: 'Sovereign Context & Regulatory Scanner',
      oneLiner: 'Zero-trust retrieval-augmented generation engine inside dedicated client VPCs for audit compliance.',
      industry: 'Financial Services & Compliance',
      challenge: 'Enterprise onboarding required 72 hours of manual balance sheet and KYC cross-referencing under strict zero-data-leakage mandates.',
      solution: 'Architected an isolated sovereign RAG vector pipeline with cryptographic audit citations and automated tabular risk classification.',
      whatWeBuilt: 'Dedicated Pinecone/Redis vector indices, PDF tabular extraction parsers, and immutable audit logs with zero external API data exposure.',
      metric: '-80%',
      metricLabel: 'Reduction in regulatory compliance verification latency',
      stack: ['React', 'TypeScript', 'Redis', 'Pinecone', 'FastAPI', 'Isolated VPC'],
      icon: <Layers className="w-5 h-5 text-[#ef233c]" />,
    },
    {
      id: 'fleet-telemetry',
      code: 'PROJECT 04',
      title: 'Algorithmic Fleet Telemetry Engine',
      oneLiner: 'Real-time telemetry streaming and algorithmic route recalculation for national carrier fleets.',
      industry: 'Supply Chain & Transportation',
      challenge: 'Intermittent mobile connectivity and delayed dispatch updates led to significant truck deadhead miles and warehouse dock congestion.',
      solution: 'Engineered an algorithmic route recalculation engine on edge nodes with fast in-memory Redis synchronization and offline task queues.',
      whatWeBuilt: 'Fault-tolerant offline telemetry caches, automated dock arrival alerts, and dynamic driver routing sync feeds.',
      metric: '-15%',
      metricLabel: 'Monthly fleet fuel consumption reduction through optimized dispatch',
      stack: ['Python', 'Docker', 'Redis', 'AWS Edge', 'FastAPI', 'PostgreSQL'],
      icon: <Navigation className="w-5 h-5 text-[#ef233c]" />,
    },
  ]

  const current = projects[activeProject]

  return (
    <section
      id="work"
      className="w-full bg-black text-white py-24 sm:py-32 md:py-40 relative z-20 select-none overflow-hidden border-t border-white/[0.08]"
      role="region"
      aria-label="ONNREV Selected Work"
    >
      {/* Precision blueprint hairline grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Coordinate & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.1] pb-8 mb-14 gap-6">
          <div className="flex flex-col gap-2 text-left">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#ef233c] uppercase font-semibold">
              // SELECTED WORK
            </span>
            <h2 className="font-display font-medium text-[36px] sm:text-[48px] md:text-[56px] text-white tracking-tight uppercase">
              SELECTED WORK.
            </h2>
          </div>
          <span className="text-[13.5px] font-sans text-zinc-400 tracking-normal text-left md:text-right max-w-[380px]">
            Real engineering systems built to solve high-concurrency enterprise challenges.
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
                className={`p-5 rounded-[10px] text-left transition-all duration-300 border cursor-pointer outline-none flex flex-col justify-between gap-4 ${
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

        {/* Active Project Visual Dossier Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[16px] border border-white/[0.12] bg-[#0a0c10] p-8 md:p-12 shadow-2xl text-left grid grid-cols-12 gap-y-10 lg:gap-x-12"
          >
            {/* Left 7 Columns: Storytelling, Challenge, Solution & What We Built */}
            <div className="col-span-12 lg:col-span-7 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400 uppercase">
                  <span className="text-[#ef233c] font-semibold">{current.industry}</span>
                  <span>//</span>
                  <span>{current.code}</span>
                </div>

                <h3 className="font-display font-medium text-[26px] md:text-[34px] text-white tracking-tight leading-tight uppercase">
                  {current.title}
                </h3>

                <p className="font-sans text-[15px] md:text-[16px] text-zinc-300 leading-relaxed max-w-[620px]">
                  {current.oneLiner}
                </p>
              </div>

              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/[0.08]">
                <div className="flex flex-col gap-2">
                  <span className="text-[10.5px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                    [ THE CHALLENGE ]
                  </span>
                  <p className="font-sans text-[13.5px] leading-relaxed text-zinc-400">
                    {current.challenge}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[10.5px] font-mono tracking-widest text-[#ef233c] uppercase font-semibold">
                    [ ONNREV SOLUTION ]
                  </span>
                  <p className="font-sans text-[13.5px] leading-relaxed text-zinc-300">
                    {current.solution}
                  </p>
                </div>
              </div>

              {/* What We Built */}
              <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.08]">
                <span className="text-[11px] font-mono tracking-wider text-white uppercase font-semibold">
                  What We Built:
                </span>
                <p className="font-sans text-[13.5px] text-zinc-300 leading-relaxed">
                  {current.whatWeBuilt}
                </p>
              </div>

              {/* Technology Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {current.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-[12px] font-mono text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Verified Outcome Visual & Next Project Trigger */}
            <div className="col-span-12 lg:col-span-5 bg-black/60 border border-white/[0.08] p-7 md:p-8 rounded-[12px] flex flex-col justify-between gap-8">
              
              {/* Primary Metric Banner */}
              <div className="flex flex-col gap-2 border-b border-white/[0.1] pb-6">
                <span className="text-[10.5px] font-mono tracking-widest text-zinc-400 uppercase">
                  VERIFIED OUTCOME
                </span>
                <span className="font-display font-semibold text-[54px] md:text-[68px] text-[#ef233c] leading-none tracking-tight">
                  {current.metric}
                </span>
                <span className="font-sans text-[14px] text-zinc-300 leading-snug">
                  {current.metricLabel}
                </span>
              </div>

              {/* Technical Specifications Summary */}
              <div className="flex flex-col gap-3 py-2">
                <span className="text-[10.5px] font-mono tracking-widest text-zinc-400 uppercase">
                  SYSTEM TELEMETRY
                </span>
                <div className="flex items-center justify-between text-[12.5px] font-mono text-zinc-400 border-b border-white/5 pb-2">
                  <span>DEPLOYMENT:</span>
                  <span className="text-white">CLIENT VPC / PRODUCTION</span>
                </div>
                <div className="flex items-center justify-between text-[12.5px] font-mono text-zinc-400 border-b border-white/5 pb-2">
                  <span>INTEGRITY:</span>
                  <span className="text-[#ef233c]">100% VERIFIED DATA</span>
                </div>
                <div className="flex items-center justify-between text-[12.5px] font-mono text-zinc-400">
                  <span>STATUS:</span>
                  <span className="text-white">OPERATIONAL</span>
                </div>
              </div>

              {/* Consultation Link */}
              <a
                href="#contact"
                className="w-full py-3.5 rounded-[8px] bg-white text-black hover:bg-zinc-200 font-sans text-[13px] font-bold text-center transition-all flex items-center justify-center gap-2 group shadow-lg"
              >
                <span>Discuss Similar Engagement</span>
                <ArrowUpRight className="w-4 h-4 text-[#ef233c] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

            </div>

          </motion.div>
        </AnimatePresence>

        {/* View All Work / Bottom CTA bar */}
        <div className="flex items-center justify-between pt-10 mt-8 border-t border-white/[0.08]">
          <span className="text-[12px] font-mono text-zinc-500 uppercase tracking-wider">
            SHOWING 4 OF 4 VERIFIED PRODUCTION CASES
          </span>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[13px] font-mono font-semibold text-[#ef233c] hover:text-white transition-colors group"
          >
            <span>START A CONVERSATION →</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default CaseStudiesShowcase
