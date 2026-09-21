import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ArrowRight, Check, Activity, Cpu, Layers } from 'lucide-react'

interface ProductSolution {
  id: string
  code: string
  name: string
  category: string
  description: string
  icon: React.ReactNode
  specs: { label: string; val: string }[]
  features: string[]
  applications: string[]
}

export const ProductsCatalogue: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)
  const reducedMotion = useReducedMotion()

  const solutions: ProductSolution[] = [
    {
      id: 'labos',
      code: 'PROD_01 // CORE',
      name: 'LabOS — Laboratory Operating & Engagement Platform',
      category: 'Diagnostic & Clinical Workflow Platform',
      description:
        'A comprehensive operating platform digitizing the laboratory lifecycle from patient registration to automated report verification, secure WhatsApp report delivery, and consent-controlled patient engagement.',
      icon: <Activity className="w-5 h-5 text-[#ef233c]" />,
      specs: [
        { label: 'Architecture', val: 'Multi-Tenant Microservices' },
        { label: 'Automation Engine', val: 'n8n Workflow Core' },
        { label: 'Delivery Layer', val: 'WhatsApp Business API' },
        { label: 'Compliance', val: 'Consent-Controlled Patient Engagement' },
      ],
      features: [
        'Centralized patient, test, sample, and result registry',
        'Automated encrypted report generation & WhatsApp delivery',
        'Patient-friendly AI report clarification assistance',
        'Multi-user granular role-based access control',
      ],
      applications: [
        'Independent diagnostic laboratories',
        'Multi-branch clinical networks',
        'Hospital outpatient sample tracking centers',
      ],
    },
    {
      id: 'autonomic-core',
      code: 'PROD_02 // INFRA',
      name: 'Autonomic Operations & Workflow Mesh',
      category: 'Event-Driven Background Processing Engine',
      description:
        'A high-concurrency orchestration mesh designed to replace human transaction handoffs with resilient, self-healing background event pipelines and asynchronous transaction coordinators.',
      icon: <Cpu className="w-5 h-5 text-[#ef233c]" />,
      specs: [
        { label: 'Runtime Core', val: 'Temporal.io + Docker Clusters' },
        { label: 'State Cache', val: 'In-Memory Redis Layers' },
        { label: 'Throughput', val: '100M+ Telemetry Events Daily' },
        { label: 'Fault Tolerance', val: 'Self-Healing Automated Retry Loops' },
      ],
      features: [
        'Deterministic execution with full state recovery',
        'Human-in-the-loop validation triggers',
        'Zero-latency ERP and database state synchronization',
        'Real-time anomaly telemetry alerts',
      ],
      applications: [
        'Industrial factory dispatch scheduling',
        'Distributed supply chain handoffs',
        'Complex multi-tier data pipeline reconciliation',
      ],
    },
    {
      id: 'sovereign-rag',
      code: 'PROD_03 // INTELLIGENCE',
      name: 'Sovereign Context & Document Intelligence Engine',
      category: 'Enterprise Knowledge & Regulatory Scanner',
      description:
        'Zero-trust retrieval-augmented generation platform providing secure vector search, audited context extraction, and high-accuracy compliance classification inside dedicated client VPC nodes.',
      icon: <Layers className="w-5 h-5 text-[#ef233c]" />,
      specs: [
        { label: 'Indexing Latency', val: 'Sub-10ms Semantic Lookup' },
        { label: 'Vector Store', val: 'Pinecone / Qdrant Dedicated' },
        { label: 'Security Boundary', val: 'Zero-Knowledge Client VPC Isolation' },
        { label: 'Audit Trail', val: 'Cryptographic Citation Traces' },
      ],
      features: [
        'Self-healing document verification pipeline',
        'Multi-page complex PDF and tabular context extraction',
        'Strict guardrails preventing hallucination or leakage',
        'Fine-tuned domain embeddings for legal & technical records',
      ],
      applications: [
        'Fintech credit and KYC compliance auditing',
        'Legal and technical contract risk classification',
        'Executive decision support knowledge bases',
      ],
    },
  ]

  const active = solutions[activeTab]

  return (
    <section
      id="products"
      className="w-full bg-[#050507] text-white py-24 sm:py-32 border-t border-white/5 relative z-20 select-none overflow-hidden"
      role="region"
      aria-label="ONNREV Solutions & Products Catalogue"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-14 gap-6">
          <div className="flex flex-col gap-2 text-left">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#ef233c] uppercase font-semibold">
              // SOLUTIONS & PLATFORMS
            </span>
            <h2 className="font-display font-medium text-[36px] sm:text-[48px] md:text-[56px] text-white tracking-tight uppercase">
              Engineered Platforms.
            </h2>
          </div>
          <p className="font-sans text-[15px] text-zinc-400 max-w-[420px] text-left md:text-right">
            Battle-tested software systems, proprietary orchestrators, and industry-grade platforms.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex flex-wrap gap-3 mb-10" role="tablist">
          {solutions.map((sol, idx) => {
            const isSelected = activeTab === idx
            return (
              <button
                key={sol.id}
                onClick={() => setActiveTab(idx)}
                role="tab"
                aria-selected={isSelected}
                className={`px-5 py-3 rounded-full font-sans text-[13.5px] font-medium transition-all duration-200 cursor-pointer outline-none border flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-white/10 border-[#ef233c] text-white shadow-[0_0_15px_rgba(239,35,60,0.25)]'
                    : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                }`}
              >
                <span>{sol.name.split('—')[0]}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-white/20 text-[#ef233c]' : 'bg-white/5 text-zinc-400'
                  }`}
                >
                  0{idx + 1}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active Product Detailed Editorial Presentation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0a0c10] rounded-[16px] border border-white/10 p-8 md:p-12 shadow-2xl text-left grid grid-cols-12 gap-y-10 lg:gap-x-12"
          >
            {/* Left 7 Columns: Product Name, Narrative & Features */}
            <div className="col-span-12 lg:col-span-7 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400">
                  <span className="text-[#ef233c] font-bold">{active.code}</span>
                  <span>•</span>
                  <span>{active.category}</span>
                </div>

                <h3 className="font-display font-medium text-[28px] md:text-[36px] text-white tracking-tight leading-tight">
                  {active.name}
                </h3>

                <p className="font-sans text-[15px] md:text-[16.5px] leading-relaxed text-zinc-300">
                  {active.description}
                </p>
              </div>

              {/* Core Features */}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <span className="text-[11px] font-mono tracking-wider text-white font-semibold uppercase">
                  Key Capabilities:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {active.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-[13.5px] font-sans text-zinc-300">
                      <Check className="w-4 h-4 text-[#ef233c] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="flex flex-col gap-2 pt-2">
                <span className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase">
                  Target Deployments:
                </span>
                <div className="flex flex-wrap gap-2">
                  {active.applications.map((app) => (
                    <span
                      key={app}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[12px] font-sans text-zinc-300"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Technical Specifications Panel & Intake CTA */}
            <div className="col-span-12 lg:col-span-5 bg-black text-white p-7 md:p-8 rounded-[12px] border border-white/10 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-white/[0.1] pb-3 text-[10.5px] font-mono text-white/50 uppercase">
                  <span>TECHNICAL ARCHITECTURE SPEC</span>
                  <span className="text-[#ef233c] font-semibold">VERIFIED</span>
                </div>

                <div className="flex flex-col divide-y divide-white/[0.08]">
                  {active.specs.map((spec) => (
                    <div key={spec.label} className="py-3 flex flex-col gap-0.5">
                      <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                        {spec.label}
                      </span>
                      <span className="text-[13.5px] font-sans font-medium text-white">
                        {spec.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-white/[0.1]">
                <a
                  href="#contact"
                  className="w-full py-3.5 rounded-full bg-[#ef233c] hover:bg-[#d90429] text-white font-sans text-[13.5px] font-bold text-center transition-all duration-200 shadow-[0_0_20px_rgba(239,35,60,0.3)] hover:shadow-[0_0_30px_rgba(239,35,60,0.5)] flex items-center justify-center gap-2 group"
                >
                  <span>Request Solution Dossier</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <span className="text-[10.5px] font-mono text-center text-white/40">
                  Custom deployment SLA delivered within 24 business hours.
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}

export default ProductsCatalogue
