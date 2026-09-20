import React from 'react'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { CheckCircle2, ShieldCheck, Cpu, Globe2 } from 'lucide-react'

export const BusinessAtAGlance: React.FC = () => {
  const reducedMotion = useReducedMotion()

  const blocks = [
    {
      index: '01',
      tag: 'WHO WE ARE',
      title: 'Enterprise AI & Autonomous Systems Studio',
      description:
        'ONNREV is an elite engineering and transformation consultancy specializing in high-assurance digital infrastructure, cognitive workflow automation, and enterprise growth architecture.',
      icon: <Cpu className="w-5 h-5 text-[#10B981]" />,
      facts: [
        'Dedicated senior systems architecture squads',
        'Direct compiler & platform engineering rigor',
        'Zero-trust data security protocols',
      ],
    },
    {
      index: '02',
      tag: 'WHAT WE DO',
      title: 'Architecture, Automation & Context Engines',
      description:
        'We design, build, and deploy end-to-end intelligent systems: from LLM context indexing and sovereign fine-tuning to real-time industrial telemetry and transaction automation.',
      icon: <ShieldCheck className="w-5 h-5 text-[#10B981]" />,
      facts: [
        'Enterprise Intelligence Architecture',
        'Autonomous Operations & Event Orchestration',
        'Revenue & Growth Telemetry Infrastructure',
      ],
    },
    {
      index: '03',
      tag: 'WHERE WE OPERATE',
      title: 'High-Demand Regulated & Industrial Sectors',
      description:
        'Operating across critical modern verticals where system failure or latency is unacceptable: industrial manufacturing, financial compliance, logistics fleets, and clinical laboratories.',
      icon: <Globe2 className="w-5 h-5 text-[#10B981]" />,
      facts: [
        'Industrial Manufacturing & Logistics Facilities',
        'Fintech Compliance & Audit Platforms',
        'Nationwide Supply Chain & Fleet Telemetry',
      ],
    },
    {
      index: '04',
      tag: 'WHAT WE DELIVER',
      title: 'Measurable Commercial & Operational Output',
      description:
        'We replace vanity metrics with verified operational performance. Every system deployment is governed by explicit latency, accuracy, throughput, and margin outcomes.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#10B981]" />,
      facts: [
        '24+ Enterprise Systems Delivered in Production',
        '120+ Workflows Automated Autonomously',
        '8,500+ Operational Hours Saved to date',
      ],
    },
  ]

  return (
    <section
      id="at-a-glance"
      className="w-full bg-[#F7F8FA] py-24 sm:py-32 border-t border-[#0B0D13]/[0.06] relative z-20 select-none overflow-hidden"
      role="region"
      aria-label="ONNREV Business At A Glance"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#0B0D13]/[0.08] pb-8 mb-16 md:mb-20 gap-6">
          <div className="flex flex-col gap-2 text-left">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#64748B] uppercase">
              // [ 03 / 12 ] AT A GLANCE
            </span>
            <h2 className="font-display font-medium text-[32px] md:text-[46px] text-[#0B0D13] tracking-tight">
              Business at a Glance
            </h2>
          </div>
          <p className="font-sans text-[14.5px] text-[#64748B] max-w-[420px] text-left md:text-right">
            An overview of the company's identity, technical disciplines, operational sectors, and verified commercial delivery.
          </p>
        </div>

        {/* 4-Part Editorial Dossier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {blocks.map((b, idx) => (
            <motion.div
              key={b.index}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[12px] p-7 border border-[#0B0D13]/[0.08] shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between border-b border-[#0B0D13]/[0.06] pb-3">
                  <span className="font-mono text-[14px] font-bold text-[#0B0D13]">
                    [{b.index}]
                  </span>
                  <span className="text-[10px] font-mono tracking-wider text-[#10B981] font-semibold uppercase">
                    {b.tag}
                  </span>
                </div>

                <div className="flex flex-col gap-2.5">
                  <h3 className="font-display font-medium text-[19px] text-[#0B0D13] leading-snug tracking-tight">
                    {b.title}
                  </h3>
                  <p className="font-sans text-[13px] leading-relaxed text-[#64748B]">
                    {b.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#0B0D13]/[0.06] flex flex-col gap-2">
                {b.facts.map((fact) => (
                  <div key={fact} className="flex items-start gap-2 text-[12px] font-sans text-[#334155]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0 mt-1.5" />
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BusinessAtAGlance
