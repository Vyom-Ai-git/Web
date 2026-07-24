import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface MetricItem {
  value: number
  suffix: string
  label: string
}

interface CaseStudy {
  industry: string
  challenge: string
  solution: string
  outcome: string
  techs: string[]
}

interface Principle {
  title: string
  desc: string
}

interface TechCategory {
  category: string
  items: string[]
}

// ─── COUNT-UP COMPONENT ──────────────────────────────────────────────────────
const CountUp: React.FC<{ value: number; suffix: string; active: boolean }> = ({ value, suffix, active }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const end = value
    const duration = 1500 // 1.5 seconds
    const startTime = performance.now()

    const updateCount = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = progress * (2 - progress) // Ease-out quad
      setCount(Math.floor(easeProgress * end))
      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }
    requestAnimationFrame(updateCount)
  }, [value, active])

  return (
    <span className="font-display font-medium text-[36px] md:text-[54px] lg:text-[62px] text-[#1a1a1a] leading-none tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export const Trust: React.FC = () => {
  const reducedMotion = useReducedMotion()
  const [metricsActive, setMetricsActive] = useState(false)
  const metricsRef = useRef<HTMLDivElement>(null)

  const metricsData: MetricItem[] = [
    { value: 24, suffix: '+', label: 'Enterprise Systems Delivered' },
    { value: 120, suffix: '+', label: 'Workflows Automated' },
    { value: 15, suffix: '+', label: 'AI Solutions Deployed' },
    { value: 8500, suffix: '+', label: 'Operational Hours Saved' }
  ]

  const caseStudies: CaseStudy[] = [
    {
      industry: 'Manufacturing Enterprise',
      challenge: 'Disconnected operational data and inventory tracking across multiple regional facilities.',
      solution: 'Unified intelligence platform integrating AI-driven monitoring, forecasting, and n8n workflow automation.',
      outcome: 'Improved operational visibility, accelerated resource routing, and faster executive decision-making.',
      techs: ['Agentic Systems', 'n8n', 'Python', 'PostgreSQL', 'Kubernetes']
    },
    {
      industry: 'Financial Services Platform',
      challenge: 'Slow context verification and high latency in customer document auditing compliance.',
      solution: 'Intelligent context-engineering engine automating security audits, extraction, and validation.',
      outcome: '80% reduction in manual indexing time and accelerated client onboarding speeds.',
      techs: ['LLM Platforms', 'RAG Systems', 'TypeScript', 'Redis', 'Google Cloud']
    },
    {
      industry: 'Logistics Network',
      challenge: 'Inefficient route updates and high coordination overhead between dispatchers and drivers.',
      solution: 'Real-time decision intelligence engine mapping traffic telemetry to warehouse dispatch systems.',
      outcome: 'Optimized dispatch schedules and a 15% reduction in monthly fuel overheads.',
      techs: ['Decision Intelligence', 'Docker', 'Temporal', 'Redis', 'AWS']
    }
  ]

  const principles: Principle[] = [
    {
      title: 'Business First',
      desc: 'Every technology decision must map directly to a commercial goal and measurable business outcomes.'
    },
    {
      title: 'Secure by Design',
      desc: 'Threat modeling, compartmentalized vectors, and enterprise data privacy are integrated into the core.'
    },
    {
      title: 'Human-Centered AI',
      desc: 'Systems are designed to augment human operations, maintaining human-in-the-loop validation triggers.'
    },
    {
      title: 'Measurable Value',
      desc: 'We define clear telemetry metrics to track operational output and ROI from day one.'
    },
    {
      title: 'Scalable Architecture',
      desc: 'Infrastructure scales naturally with expanding data loads without bloating technical debt.'
    },
    {
      title: 'Long-Term Partnership',
      desc: 'We focus on operational independence, transferring systems knowledge to your internal teams.'
    }
  ]

  const techEcosystem: TechCategory[] = [
    {
      category: 'Artificial Intelligence',
      items: ['LLM Platforms', 'AI Agents', 'RAG Systems', 'Vector Databases']
    },
    {
      category: 'Cloud',
      items: ['AWS', 'Azure', 'Google Cloud']
    },
    {
      category: 'Development',
      items: ['React', 'Next.js', 'TypeScript', 'Python']
    },
    {
      category: 'Data',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    {
      category: 'Automation',
      items: ['n8n', 'Temporal', 'Apache Airflow']
    },
    {
      category: 'Infrastructure',
      items: ['Docker', 'Kubernetes', 'Terraform']
    }
  ]

  const baseTransition = {
    duration: reducedMotion ? 0.2 : 0.8,
    ease: [0.16, 1, 0.3, 1] as const // ease-editorial
  }

  // Trigger metrics countup when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMetricsActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (metricsRef.current) {
      observer.observe(metricsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="trust" 
      className="w-full bg-[#EDEEF5] py-24 md:py-36 border-t border-black/[0.05] relative z-20 select-none overflow-hidden"
      role="region"
      aria-label="Vyoma Trust and Performance Layer"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 flex flex-col gap-28 md:gap-36">
        
        {/* ─── CHAPTER 01: IMPACT METRICS ───────────────────────────────────────── */}
        <div ref={metricsRef} className="grid grid-cols-12 gap-y-10 lg:gap-x-8 items-start">
          <motion.div 
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={baseTransition}
            className="col-span-12 lg:col-span-5 text-left flex flex-col gap-4"
          >
            <span className="text-[11px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
              Chapter 01 // Impact
            </span>
            <h2 className="font-display font-medium text-[32px] md:text-[44px] text-[#1a1a1a] tracking-tight leading-tight">
              Outcomes That Matter
            </h2>
            <p className="font-sans text-[14.5px] md:text-[15.5px] leading-relaxed text-[#8e8e8e] max-w-[420px]">
              Every engagement is measured by tangible business outcomes rather than feature delivery.
            </p>
          </motion.div>

          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-x-6 gap-y-8 text-left lg:pl-10">
            {metricsData.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...baseTransition, delay: idx * 0.05 }}
                className="flex flex-col gap-2 border-l border-black/[0.08] pl-5"
              >
                <CountUp value={metric.value} suffix={metric.suffix} active={metricsActive} />
                <span className="font-sans text-[12.5px] md:text-[13px] text-[#8e8e8e] leading-snug">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── CHAPTER 02: SELECTED ENGAGEMENTS ─────────────────────────────────── */}
        <div className="flex flex-col gap-12 text-left">
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={baseTransition}
            className="flex flex-col gap-3"
          >
            <span className="text-[11px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
              Chapter 02 // Engagements
            </span>
            <h2 className="font-display font-medium text-[32px] md:text-[44px] text-[#1a1a1a] tracking-tight">
              Representative Engagements
            </h2>
          </motion.div>

          {/* Cases list with alternating layouts */}
          <div className="flex flex-col gap-12">
            {caseStudies.map((caseStudy, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div 
                  key={caseStudy.industry}
                  className="border-t border-black/[0.05] pt-10"
                >
                  <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12 items-start">
                    
                    {/* Narrative columns */}
                    <motion.div
                      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-10%' }}
                      transition={baseTransition}
                      className={`col-span-12 lg:col-span-6 flex flex-col gap-5 ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <div className="text-[10px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
                        [{caseStudy.industry}]
                      </div>
                      
                      <div className="flex flex-col gap-3.5">
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[10px] font-sans font-bold tracking-widest text-[#1a1a1a] uppercase">Challenge</span>
                          <p className="font-sans text-[14px] md:text-[14.5px] leading-relaxed text-[#8e8e8e]">
                            {caseStudy.challenge}
                          </p>
                        </div>
                        
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[10px] font-sans font-bold tracking-widest text-[#1a1a1a] uppercase">Solution</span>
                          <p className="font-sans text-[14px] md:text-[14.5px] leading-relaxed text-[#8e8e8e]">
                            {caseStudy.solution}
                          </p>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <span className="text-[10px] font-sans font-bold tracking-widest text-[#1a1a1a] uppercase">Outcome</span>
                          <p className="font-sans text-[14px] md:text-[14.5px] leading-relaxed text-[#1a1a1a] font-medium">
                            • {caseStudy.outcome}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Metadata Technologies columns */}
                    <motion.div
                      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-10%' }}
                      transition={baseTransition}
                      className={`col-span-12 lg:col-span-5 flex flex-col gap-4 py-8 px-6 bg-white/20 border border-black/[0.03] rounded-[6px] shadow-soft ${
                        isEven ? 'lg:col-start-8 lg:order-2' : 'lg:col-start-2 lg:order-1'
                      }`}
                    >
                      <span className="text-[10px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
                        Applied Stack
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.techs.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2.5 py-1 rounded-[4px] border border-black/[0.04] bg-white/35 text-[12.5px] font-sans font-medium text-[#1a1a1a] cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ─── CHAPTER 03: DELIVERY PRINCIPLES ────────────────────────────────── */}
        <div className="flex flex-col gap-12 text-left">
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={baseTransition}
            className="flex flex-col gap-3"
          >
            <span className="text-[11px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
              Chapter 03 // Methodology
            </span>
            <h2 className="font-display font-medium text-[32px] md:text-[44px] text-[#1a1a1a] tracking-tight">
              How We Deliver
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: reducedMotion ? 0 : 0.05
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {principles.map((pr) => (
              <motion.div
                key={pr.title}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-2 p-5 rounded-[6px] border border-black/[0.03] bg-white/20 hover:border-black/10 transition-all duration-300 group"
              >
                <h3 className="font-display font-medium text-[16px] md:text-[18px] text-[#1a1a1a] tracking-tight relative pb-1 inline-block w-fit">
                  {pr.title}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#9fff00] transition-all duration-[var(--nav-transition)] group-hover:w-full" />
                </h3>
                <p className="font-sans text-[13px] md:text-[13.5px] leading-relaxed text-[#8e8e8e]">
                  {pr.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ─── CHAPTER 04: TECHNOLOGY ECOSYSTEM ─────────────────────────────────── */}
        <div className="flex flex-col gap-12 text-left">
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={baseTransition}
            className="flex flex-col gap-3"
          >
            <span className="text-[11px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
              Chapter 04 // Stack
            </span>
            <h2 className="font-display font-medium text-[32px] md:text-[44px] text-[#1a1a1a] tracking-tight">
              Built with Modern Technology
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techEcosystem.map((cat, idx) => (
              <motion.div
                key={cat.category}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...baseTransition, delay: idx * 0.05 }}
                className="flex flex-col gap-4 border-t border-black/[0.08] pt-5"
              >
                <span className="text-[10px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
                  {cat.category}
                </span>
                
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-[4px] bg-white/40 border border-black/[0.04] text-[13px] font-sans font-medium text-[#1a1a1a] hover:opacity-[var(--nav-hover-opacity)] hover:border-black/10 transition-all cursor-default select-none shadow-soft"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Trust
