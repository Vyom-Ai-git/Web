import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import {
  ReactLogo, NextjsLogo, TypescriptLogo, PythonLogo, Openailogo, AnthropicLogo, GoogleaiLogo, MetaaiLogo,
  AwsLogo, AzureLogo, GooglecloudLogo, DockerLogo, KubernetesLogo, PostgresqlLogo, MongodbLogo, RedisLogo,
  SupabaseLogo, LangchainLogo, PineconeLogo, QdrantLogo, N8nLogo, VercelLogo, GithubLogo, NodejsLogo,
  GeminiLogo, TailwindLogo, ViteLogo, FastapiLogo, ExpressLogo, LanggraphLogo, TemporalLogo, CloudflareLogo
} from '@/components/shared/TechLogos'

interface MetricItem {
  value: number
  suffix: string
  label: string
}

interface CaseStudy {
  industry: string
  timeline: string
  badge: string
  challenge: string
  solution: string
  outcome: string
  impact: string
  techs: string[]
  arch: React.ReactNode
}

interface Principle {
  title: string
  desc: string
}

interface TechCategory {
  category: string
  items: { name: string; logo: React.ReactNode }[]
}

// ─── MINI ARCHITECTURE DIAGRAMS FOR CASE STUDIES ──────────────────────────────
const ManufacturingArchSvg: React.FC = () => (
  <svg viewBox="0 0 160 80" className="w-full max-w-[140px] h-auto stroke-current stroke-[0.75] fill-none opacity-75">
    <rect x="10" y="25" width="28" height="28" rx="2" className="stroke-white/30" />
    <text x="24" y="42" className="font-sans text-[7px] fill-white text-center" textAnchor="middle">ERP</text>
    <path d="M38,39 L62,39" className="stroke-white/30" />
    <rect x="62" y="25" width="28" height="28" rx="2" className="stroke-[#10B981] fill-[#10B981]/10" />
    <text x="76" y="42" className="font-sans text-[7px] fill-white text-center" textAnchor="middle">n8n</text>
    <circle cx="76" cy="48" r="1" className="fill-[#10B981]" />
    <path d="M90,39 L114,39" className="stroke-white/30" />
    <rect x="114" y="25" width="28" height="28" rx="2" className="stroke-white/30" />
    <text x="128" y="42" className="font-sans text-[7px] fill-white text-center" textAnchor="middle">DB</text>
  </svg>
)

const FinanceArchSvg: React.FC = () => (
  <svg viewBox="0 0 160 80" className="w-full max-w-[140px] h-auto stroke-current stroke-[0.75] fill-none opacity-75">
    <rect x="10" y="25" width="28" height="28" rx="2" className="stroke-white/30" />
    <text x="24" y="42" className="font-sans text-[7px] fill-white text-center" textAnchor="middle">DOCS</text>
    <path d="M38,39 L62,39" className="stroke-white/30" />
    <rect x="62" y="25" width="28" height="28" rx="2" className="stroke-[#10B981] fill-[#10B981]/10" />
    <text x="76" y="42" className="font-sans text-[7px] fill-white text-center" textAnchor="middle">RAG</text>
    <path d="M68,34 L84,44" className="stroke-[#10B981]/60" />
    <path d="M90,39 L114,39" className="stroke-white/30" />
    <rect x="114" y="25" width="28" height="28" rx="2" className="stroke-white/30" />
    <text x="128" y="42" className="font-sans text-[7px] fill-white text-center" textAnchor="middle">LLM</text>
  </svg>
)

const LogisticsArchSvg: React.FC = () => (
  <svg viewBox="0 0 160 80" className="w-full max-w-[140px] h-auto stroke-current stroke-[0.75] fill-none opacity-75">
    <rect x="10" y="25" width="28" height="28" rx="2" className="stroke-white/30" />
    <text x="24" y="42" className="font-sans text-[7px] fill-white text-center" textAnchor="middle">GPS</text>
    <path d="M38,39 L62,39" className="stroke-white/30" />
    <rect x="62" y="25" width="28" height="28" rx="2" className="stroke-[#10B981] fill-[#10B981]/10" />
    <text x="76" y="42" className="font-sans text-[7px] fill-white text-center" textAnchor="middle">REDIS</text>
    <path d="M90,39 L114,39" className="stroke-white/30" />
    <rect x="114" y="25" width="28" height="28" rx="2" className="stroke-white/30" />
    <text x="128" y="42" className="font-sans text-[7px] fill-white text-center" textAnchor="middle">AWS</text>
  </svg>
)

// ─── COUNT-UP COMPONENT ──────────────────────────────────────────────────────
const CountUp: React.FC<{ value: number; suffix: string; active: boolean; reducedMotion: boolean }> = ({ value, suffix, active, reducedMotion }) => {
  const [count, setCount] = useState(reducedMotion ? value : 0)

  useEffect(() => {
    if (reducedMotion) {
      setCount(value)
      return
    }
    if (!active) return
    const end = value
    const duration = 1500
    const startTime = performance.now()

    const updateCount = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = progress * (2 - progress)
      setCount(Math.floor(easeProgress * end))
      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }
    requestAnimationFrame(updateCount)
  }, [value, active, reducedMotion])

  return (
    <span className="font-display font-medium text-[36px] md:text-[54px] lg:text-[62px] text-white leading-none tracking-tight">
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
      timeline: '4 Months Timeline',
      badge: 'Industrial Logistics',
      challenge: 'Disconnected operational inventory and routing flows causing delays across regional facilities.',
      solution: 'Unified intelligence database platform integrating n8n automation and custom forecasting algorithms.',
      outcome: 'Unified regional pipeline operations, accelerated scheduling, and faster audit resolutions.',
      impact: '35% Operational Dispatch Speedup',
      techs: ['Python', 'PostgreSQL', 'Kubernetes', 'n8n'],
      arch: <ManufacturingArchSvg />
    },
    {
      industry: 'Financial Services Platform',
      timeline: '3 Months Timeline',
      badge: 'Fintech Compliance',
      challenge: 'Slow context indexing and high compliance latency in customer document verification pipelines.',
      solution: 'Secure RAG context-engineering scanner auditing PDF extractions and user validation paths.',
      outcome: 'Eliminated manual indexing delays, establishing self-healing document validation layers.',
      impact: '80% Reduction in Audit Latency',
      techs: ['React', 'TypeScript', 'Redis', 'OpenAI'],
      arch: <FinanceArchSvg />
    },
    {
      industry: 'Logistics Network',
      timeline: '5 Months Timeline',
      badge: 'Supply Chain Operations',
      challenge: 'Inefficient route tracking and driver coordination overhead under unstable cell telemetry.',
      solution: 'Algorithmic route optimization engine running on AWS, backed by fast Redis memory layers.',
      outcome: 'Automated warehouse dispatch syncing, stabilizing driver telemetry routing checks.',
      impact: '15% Monthly Fuel Cost Reduction',
      techs: ['Python', 'Docker', 'Redis', 'AWS'],
      arch: <LogisticsArchSvg />
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
      items: [
        { name: 'OpenAI', logo: <Openailogo size={20} /> },
        { name: 'Anthropic', logo: <AnthropicLogo size={20} /> },
        { name: 'Google AI', logo: <GoogleaiLogo size={20} /> },
        { name: 'Meta AI', logo: <MetaaiLogo size={20} /> },
        { name: 'Gemini', logo: <GeminiLogo size={20} /> },
        { name: 'LangChain', logo: <LangchainLogo size={20} /> },
      ]
    },
    {
      category: 'Frontend',
      items: [
        { name: 'React', logo: <ReactLogo size={20} /> },
        { name: 'Next.js', logo: <NextjsLogo size={20} /> },
        { name: 'TypeScript', logo: <TypescriptLogo size={20} /> },
        { name: 'Tailwind CSS', logo: <TailwindLogo size={20} /> },
        { name: 'Vite', logo: <ViteLogo size={20} /> },
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Python', logo: <PythonLogo size={20} /> },
        { name: 'Node.js', logo: <NodejsLogo size={20} /> },
        { name: 'FastAPI', logo: <FastapiLogo size={20} /> },
        { name: 'Express', logo: <ExpressLogo size={20} /> },
      ]
    },
    {
      category: 'Cloud',
      items: [
        { name: 'Amazon Web Services', logo: <AwsLogo size={20} /> },
        { name: 'Microsoft Azure', logo: <AzureLogo size={20} /> },
        { name: 'Google Cloud', logo: <GooglecloudLogo size={20} /> },
      ]
    },
    {
      category: 'Databases',
      items: [
        { name: 'PostgreSQL', logo: <PostgresqlLogo size={20} /> },
        { name: 'MongoDB', logo: <MongodbLogo size={20} /> },
        { name: 'Redis', logo: <RedisLogo size={20} /> },
        { name: 'Supabase', logo: <SupabaseLogo size={20} /> },
      ]
    },
    {
      category: 'Automation',
      items: [
        { name: 'n8n', logo: <N8nLogo size={20} /> },
        { name: 'LangGraph', logo: <LanggraphLogo size={20} /> },
        { name: 'Temporal', logo: <TemporalLogo size={20} /> },
        { name: 'Pinecone', logo: <PineconeLogo size={20} /> },
        { name: 'Qdrant', logo: <QdrantLogo size={20} /> },
      ]
    },
    {
      category: 'Infrastructure',
      items: [
        { name: 'Docker', logo: <DockerLogo size={20} /> },
        { name: 'Kubernetes', logo: <KubernetesLogo size={20} /> },
        { name: 'GitHub', logo: <GithubLogo size={20} /> },
        { name: 'Vercel', logo: <VercelLogo size={20} /> },
        { name: 'Cloudflare', logo: <CloudflareLogo size={20} /> },
      ]
    }
  ]

  const baseTransition = {
    duration: reducedMotion ? 0.2 : 0.8,
    ease: [0.16, 1, 0.3, 1] as const
  }

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
    <>
      <section
        id="proof"
        className="w-full bg-black py-16 sm:py-[100px] md:py-[130px] border-t border-white/5 relative z-20 select-none overflow-hidden"
        role="region"
        aria-label="ONNREV Trust and Performance Layer"
      >
        {/* Soft Radial Glow / Editorial lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#ef233c]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-28 md:gap-36 relative z-10">

          <div ref={metricsRef} className="grid grid-cols-12 gap-y-10 lg:gap-x-8 items-start">
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={baseTransition}
              className="col-span-12 lg:col-span-5 text-left flex flex-col gap-4"
            >
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#ef233c] uppercase font-semibold">
                // [ 08 / 12 ] PROOF & PERFORMANCE TELEMETRY
              </span>
              <h2 className="font-display font-medium text-[32px] md:text-[44px] text-white tracking-tight leading-tight">
                Outcomes That Matter
              </h2>
              <p className="font-sans text-[14.5px] md:text-[15.5px] leading-relaxed text-zinc-400 max-w-[420px]">
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
                  className="flex flex-col gap-2 border-l border-white/[0.12] pl-5"
                >
                  <CountUp value={metric.value} suffix={metric.suffix} active={metricsActive} reducedMotion={reducedMotion} />
                  <span className="font-sans text-[12.5px] md:text-[13px] text-white/70 leading-snug">
                    {metric.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div id="success-stories" className="flex flex-col gap-12 text-left">
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={baseTransition}
              className="flex flex-col gap-3"
            >
              <span className="text-[11px] font-sans font-bold tracking-widest text-white/50 uppercase">
                Chapter 02 // Engagements
              </span>
              <h2 className="font-display font-medium text-[32px] md:text-[44px] text-white tracking-tight">
                Representative Engagements
              </h2>
            </motion.div>

            <div className="flex flex-col gap-12">
              {caseStudies.map((caseStudy, idx) => {
                const isEven = idx % 2 === 0
                return (
                  <div
                    key={caseStudy.industry}
                    className="border-t border-white/[0.08] pt-10"
                  >
                    <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12 items-center">

                      <motion.div
                        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-10%' }}
                        transition={baseTransition}
                        className={`col-span-12 lg:col-span-7 flex flex-col gap-5 ${isEven ? 'lg:order-1' : 'lg:order-2'
                          }`}
                      >
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                          <span className="text-[12px] font-sans font-bold tracking-wider text-white uppercase">
                            {caseStudy.industry}
                          </span>
                          <span className="text-white/40 text-[10px]">•</span>
                          <span className="px-2 py-0.5 rounded-[4px] bg-white/5 border border-white/[0.08] text-[10px] font-sans font-bold tracking-wider text-white uppercase">
                            {caseStudy.badge}
                          </span>
                          <span className="text-white/40 text-[10px]">•</span>
                          <span className="text-[10.5px] font-sans text-white/50 uppercase font-bold tracking-wider">
                            {caseStudy.timeline}
                          </span>
                        </div>

                        <div className="flex flex-col gap-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-[9.5px] font-sans font-bold tracking-widest text-white/50 uppercase">Business Challenge</span>
                            <p className="font-sans text-[14px] md:text-[14.5px] leading-relaxed text-white/70">
                              {caseStudy.challenge}
                            </p>
                          </div>

                          <div className="flex flex-col gap-1">
                            <span className="text-[9.5px] font-sans font-bold tracking-widest text-white/50 uppercase">Solution</span>
                            <p className="font-sans text-[14px] md:text-[14.5px] leading-relaxed text-white/70">
                              {caseStudy.solution}
                            </p>
                          </div>

                          <div className="flex flex-col gap-1.5">
                            <span className="text-[9.5px] font-sans font-bold tracking-widest text-white/50 uppercase">Outcome & Impact</span>
                            <p className="font-sans text-[14px] md:text-[14.5px] leading-relaxed text-white/70 mb-1">
                              {caseStudy.outcome}
                            </p>
                            <span className="font-sans text-[12.5px] text-[#0D1117] font-bold bg-[#10B981] px-3 py-1.5 rounded-[4px] border border-[#10B981]/20 w-fit shadow-sm">
                              Impact: {caseStudy.impact}
                            </span>
                          </div>

                          <div className="flex flex-col gap-2">
                            <span className="text-[9.5px] font-sans font-bold tracking-widest text-white/50 uppercase">Technologies Deployed</span>
                            <div className="flex flex-wrap gap-1.5">
                              {caseStudy.techs.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 rounded-[4px] border border-white/[0.08] bg-white/5 text-[11px] font-sans font-semibold text-white/90"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-10%' }}
                        transition={baseTransition}
                        className={`col-span-12 lg:col-span-4 flex flex-col gap-4 py-8 px-6 bg-white/5 border border-white/[0.08] rounded-[6px] shadow-soft items-center justify-center ${isEven ? 'lg:col-start-9 lg:order-2' : 'lg:col-start-2 lg:order-1'
                          }`}
                      >
                        <span className="text-[10px] font-sans font-bold tracking-widest text-white/40 uppercase self-start">
                          System Architecture Preview
                        </span>
                        <div className="w-full flex justify-center py-4 bg-white/5 rounded border border-white/[0.04]">
                          {caseStudy.arch}
                        </div>
                      </motion.div>

                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col gap-12 text-left">
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={baseTransition}
              className="flex flex-col gap-3"
            >
              <span className="text-[11px] font-sans font-bold tracking-widest text-white/50 uppercase">
                Chapter 03 // Methodology
              </span>
              <h2 className="font-display font-medium text-[32px] md:text-[44px] text-white tracking-tight">
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
                  className="flex flex-col gap-2 p-5 rounded-[6px] border border-white/[0.08] bg-white/5 hover:border-white/20 transition-all duration-300 group"
                >
                  <h3 className="font-display font-medium text-[16px] md:text-[18px] text-white tracking-tight relative pb-1 inline-block w-fit">
                    {pr.title}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#10B981] transition-all duration-[var(--nav-transition)] group-hover:w-full" />
                  </h3>
                  <p className="font-sans text-[13px] md:text-[13.5px] leading-relaxed text-white/70">
                    {pr.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* Chapter 04 // Stack (Noir Dark Tech Matrix) */}
      <section
        id="technology"
        className="w-full bg-[#050507] py-16 sm:py-[100px] md:py-[130px] border-t border-white/5 relative z-20 select-none overflow-hidden text-left"
        role="region"
        aria-label="ONNREV Partner Technology Wall"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-12">
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={baseTransition}
            className="flex flex-col gap-3"
          >
            <span className="text-[11px] font-mono font-semibold tracking-widest text-[#ef233c] uppercase">
              Chapter 04 // Stack
            </span>
            <h2 className="font-display font-medium text-[32px] md:text-[44px] text-white tracking-tight">
              Ecosystem Technologies
            </h2>
          </motion.div>

          <div className="flex flex-col border-t border-white/10 mt-8">
            {techEcosystem.map((cat, idx) => (
              <motion.div
                key={cat.category}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...baseTransition, delay: idx * 0.05 }}
                className="grid grid-cols-12 gap-y-4 lg:gap-x-8 items-center border-b border-white/10 py-10 text-left"
              >
                <div className="col-span-12 lg:col-span-3 text-left">
                  <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                    {cat.category}
                  </span>
                </div>

                <div className="col-span-12 lg:col-span-9 flex flex-row overflow-x-auto scrollbar-none gap-x-6 lg:gap-x-8 lg:flex-wrap lg:overflow-x-visible lg:gap-y-4 py-1">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      title={item.name}
                      tabIndex={0}
                      aria-label={`${item.name} technology integration`}
                      className="flex items-center gap-3 py-2.5 px-4 h-11 rounded-[8px] bg-white/[0.03] border border-white/5 transition-all duration-200 hover:border-[#ef233c]/40 hover:bg-white/[0.06] hover:-translate-y-0.5 group cursor-pointer relative select-none opacity-85 hover:opacity-100 outline-none shrink-0 lg:shrink"
                    >
                      <div className="flex items-center justify-center shrink-0 w-5 h-5 text-zinc-300">
                        {item.logo}
                      </div>
                      <span className="font-sans text-[13px] font-medium text-zinc-300 tracking-tight transition-all duration-200 group-hover:text-white">
                        {item.name}
                      </span>
                      <span className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-[#ef233c] scale-x-0 transition-transform duration-200 origin-left group-hover:scale-x-100" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Trust
