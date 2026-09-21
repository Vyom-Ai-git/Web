import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Factory, Landmark, Truck, Activity, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface IndustryData {
  id: string
  title: string
  tagline: string
  icon: React.ReactNode
  capabilities: string[]
  solutions: string[]
  applications: string[]
  featuredCase: {
    title: string
    metric: string
    stack: string
  }
}

export const Industries: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const reducedMotion = useReducedMotion()

  const industries: IndustryData[] = [
    {
      id: 'manufacturing',
      title: 'Industrial Manufacturing',
      tagline: 'Synchronizing physical production floors with autonomous operational data layers.',
      icon: <Factory className="w-5 h-5 text-[#ef233c]" />,
      capabilities: [
        'Autonomous Operations',
        'Process Intelligence',
        'ERP Workflow Orchestration',
        'Predictive Maintenance Triggers',
      ],
      solutions: [
        'Multi-facility dispatch automation',
        'Real-time ERP to shop-floor telemetry synchronization',
        'Automated inventory discrepancy resolution',
      ],
      applications: [
        'Regional manufacturing plants',
        'Industrial parts distribution centers',
        'Assembly line dispatch coordination',
      ],
      featuredCase: {
        title: 'Manufacturing Enterprise Deployment',
        metric: '35% Dispatch Speedup across regional facilities',
        stack: 'Python • PostgreSQL • Kubernetes • n8n',
      },
    },
    {
      id: 'financial-services',
      title: 'Financial Services & Fintech',
      tagline: 'High-assurance cognitive pipelines engineered for zero-trust regulatory environments.',
      icon: <Landmark className="w-5 h-5 text-[#ef233c]" />,
      capabilities: [
        'Enterprise Intelligence Architecture',
        'Sovereign Context Engineering',
        'Audit Trail Automation',
        'Zero-Knowledge Data Routing',
      ],
      solutions: [
        'Self-healing document verification pipeline',
        'Automated compliance document extraction & indexing',
        'Secure multi-tier client identity validation',
      ],
      applications: [
        'Institutional credit verification',
        'Fintech onboarding compliance',
        'Automated regulatory filing preparation',
      ],
      featuredCase: {
        title: 'Fintech Compliance Platform',
        metric: '80% Reduction in Compliance Audit Latency',
        stack: 'React • TypeScript • Redis • OpenAI',
      },
    },
    {
      id: 'logistics',
      title: 'Supply Chain & Logistics',
      tagline: 'Algorithmic routing engines and event-driven telemetry for distributed fleet networks.',
      icon: <Truck className="w-5 h-5 text-[#ef233c]" />,
      capabilities: [
        'Growth Infrastructure',
        'Event-Driven Ingestion',
        'Algorithmic Telemetry Engines',
        'Edge Synchronization',
      ],
      solutions: [
        'Dynamic route recalculation under intermittent network connectivity',
        'Automated warehouse dock scheduling & handoffs',
        'Real-time fleet consumption and routing telemetry',
      ],
      applications: [
        'Cross-country freight networks',
        'Cold-chain transport monitoring',
        'Last-mile delivery orchestration',
      ],
      featuredCase: {
        title: 'National Logistics Network',
        metric: '15% Monthly Fuel Cost Reduction',
        stack: 'Python • Docker • Redis • AWS',
      },
    },
    {
      id: 'healthcare-lab',
      title: 'Clinical & Laboratory Systems',
      tagline: 'Digital lab operating foundations and consent-controlled communication systems.',
      icon: <Activity className="w-5 h-5 text-[#ef233c]" />,
      capabilities: [
        'Digital Product Architecture',
        'Workflow Automation',
        'AI Explanation Systems',
        'Secure Messaging Infrastructure',
      ],
      solutions: [
        'End-to-end sample and report lifecycle digitization',
        'Automated encrypted report delivery via WhatsApp platform',
        'Patient-friendly AI report clarification without medical diagnosis claims',
      ],
      applications: [
        'Multi-branch clinical laboratories',
        'Pathology sample tracking networks',
        'Direct-to-patient digital health portals',
      ],
      featuredCase: {
        title: 'LabOS Platform Architecture',
        metric: 'Zero-loss sample tracking & automated digital delivery',
        stack: 'React • TypeScript • n8n • Multi-Tenant Core',
      },
    },
  ]

  const active = industries[selectedIdx]

  return (
    <section
      id="industries"
      className="w-full bg-black py-16 sm:py-[100px] md:py-[120px] border-t border-white/5 relative z-20 select-none overflow-hidden"
      role="region"
      aria-label="ONNREV Industry Practice Sectors"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 mb-16 md:mb-20">
          <div className="col-span-12 lg:col-span-8 text-left flex flex-col gap-4">
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#ef233c] uppercase">
              // INDUSTRIES
            </span>
            <h2 className="font-display font-medium text-[36px] sm:text-[48px] md:text-[56px] leading-[1.05] text-white tracking-tight uppercase">
              Sectors We Serve.
            </h2>
            <p className="font-sans text-[15px] leading-relaxed text-zinc-400 max-w-[580px]">
              Operational advantage engineered for demanding regulatory, industrial, and clinical realities.
            </p>
          </div>
        </div>

        {/* Industry Explorer Layout */}
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-10 items-start">

          {/* Left: Interactive Industry Navigation Tabs (Cols 1-4) */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-2.5" role="tablist">
            {industries.map((ind, idx) => {
              const isSelected = selectedIdx === idx
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIdx(idx)}
                  role="tab"
                  aria-selected={isSelected}
                  className={`p-4 md:p-5 rounded-[10px] text-left transition-all duration-300 border flex items-start gap-3.5 cursor-pointer outline-none ${
                    isSelected
                      ? 'bg-white/10 border-[#ef233c] shadow-lg translate-x-1'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/5 hover:border-white/10 text-zinc-400'
                  }`}
                >
                  <div
                    className={`p-2 rounded-md transition-colors ${
                      isSelected ? 'bg-[#ef233c]/20 text-[#ef233c]' : 'bg-white/5 text-zinc-400'
                    }`}
                  >
                    {ind.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span
                      className={`font-display font-medium text-[16px] tracking-tight ${
                        isSelected ? 'text-white' : 'text-zinc-400'
                      }`}
                    >
                      {ind.title}
                    </span>
                    <span className="text-[12px] font-sans text-zinc-500 line-clamp-1">
                      {ind.tagline}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: Selected Industry Detail Dossier (Cols 5-12) */}
          <div className="col-span-12 lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0a0c10] rounded-[14px] border border-white/10 p-7 md:p-9 shadow-2xl text-left flex flex-col gap-8 text-white"
              >
                {/* Dossier Header */}
                <div className="flex flex-col gap-2 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ef233c]" />
                    <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                      Sector Practice Dossier
                    </span>
                  </div>
                  <h3 className="font-display font-medium text-[24px] md:text-[28px] text-white tracking-tight">
                    {active.title}
                  </h3>
                  <p className="font-sans text-[14.5px] leading-relaxed text-zinc-400">
                    {active.tagline}
                  </p>
                </div>

                {/* 2-Column Core Architecture Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  {/* Operational Solutions */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[10.5px] font-mono font-semibold tracking-wider text-white uppercase">
                      // Engineered Solutions
                    </span>
                    <ul className="flex flex-col gap-2.5">
                      {active.solutions.map((sol) => (
                        <li key={sol} className="flex items-start gap-2.5 text-[13.5px] font-sans text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-[#ef233c] shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Target Applications */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[10.5px] font-mono font-semibold tracking-wider text-white uppercase">
                      // Primary Applications
                    </span>
                    <ul className="flex flex-col gap-2.5">
                      {active.applications.map((app) => (
                        <li key={app} className="flex items-start gap-2.5 text-[13.5px] font-sans text-zinc-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ef233c] shrink-0 mt-2" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Core Capability Chips */}
                <div className="flex flex-col gap-2.5 pt-2">
                  <span className="text-[10.5px] font-mono font-semibold tracking-wider text-zinc-400 uppercase">
                    Integrated ONNREV Disciplines:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {active.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[12px] font-sans font-medium text-zinc-300"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Featured Verified Case Study Footer Card */}
                <div className="p-4 md:p-5 rounded-[10px] bg-black border border-white/10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9.5px] font-mono tracking-widest text-[#ef233c] uppercase font-semibold">
                      Verified Engagement Proof
                    </span>
                    <span className="font-display font-medium text-[15px]">
                      {active.featuredCase.title}
                    </span>
                    <span className="text-[13px] text-zinc-400">
                      {active.featuredCase.metric}
                    </span>
                  </div>

                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-sans font-medium text-[#ef233c] hover:text-white transition-colors group shrink-0"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Industries
