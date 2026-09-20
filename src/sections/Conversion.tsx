import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { OnnrevSymbolMark } from '@/components/shared/OnnrevLogo'

interface PathItem {
  id: string
  title: string
  desc: string
}

interface FaqItem {
  q: string
  a: string
}

export const Conversion: React.FC = () => {
  const [name, setName] = useState('')
  const [org, setOrg] = useState('')
  const [email, setEmail] = useState('')
  const [objective, setObjective] = useState('Explore Enterprise AI')
  const [timeline, setTimeline] = useState('1-3 months')
  const [context, setContext] = useState('')

  // Validation states
  const [nameError, setNameError] = useState('')
  const [orgError, setOrgError] = useState('')
  const [emailError, setEmailError] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const reducedMotion = useReducedMotion()

  const paths: PathItem[] = [
    {
      id: 'ai',
      title: 'Explore Enterprise AI',
      desc: 'Introduce agentic intelligence, system orchestrators, or model scoping into workflows.'
    },
    {
      id: 'ops',
      title: 'Modernize Operations',
      desc: 'Audit infrastructure, build system pipelines, and automate transactions.'
    },
    {
      id: 'growth',
      title: 'Accelerate Growth',
      desc: 'Refine product conversion loops, funnel architecture, and analytics feeds.'
    },
    {
      id: 'products',
      title: 'Build Digital Products',
      desc: 'Architect next-generation React web apps, core backends, or mobile products.'
    }
  ]

  const faqs: FaqItem[] = [
    {
      q: 'How does ONNREV scope enterprise engagements?',
      a: 'We begin with a structured 30-minute discovery call to map operational bottlenecks and core objectives. From there, we deliver a comprehensive system design specification and implementation roadmap detailing deliverables, tech stack alignments, and outcomes.'
    },
    {
      q: 'What is the typical team structure for a project?',
      a: 'Engagements are staffed by elite, multi-disciplinary squads comprising frontend engineers, systems architects, product designers, and motion architects. Every project has a dedicated engineering lead who maintains daily synchronization.'
    },
    {
      q: 'How do you handle integrations with legacy infrastructure?',
      a: 'Our systems architecture is built with an API-first approach, designing adapters and orchestrators to safely tap legacy core nodes, pipelines, and databases without breaking stability or compliance.'
    },
    {
      q: 'What SLAs apply to support and system performance?',
      a: 'We provide clear, tiered SLAs covering uptime, error resolution, response times, and ongoing optimization cycles. Typical response times for critical anomalies are under 2 hours, with continuous telemetry monitoring.'
    }
  ]

  const handlePathSelect = (title: string) => {
    setObjective(title)
  }

  const validateEmail = (val: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(val)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let valid = true

    if (!name.trim()) {
      setNameError('Name is required')
      valid = false
    } else {
      setNameError('')
    }

    if (!org.trim()) {
      setOrgError('Organization is required')
      valid = false
    } else {
      setOrgError('')
    }

    if (!email.trim()) {
      setEmailError('Email is required')
      valid = false
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid corporate email')
      valid = false
    } else {
      setEmailError('')
    }

    if (!valid) return

    setIsSubmitting(true)

    // Simulate enterprise database log
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setName('')
      setOrg('')
      setEmail('')
      setContext('')
    }, 1800)
  }

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx)
  }

  const baseTransition = {
    duration: reducedMotion ? 0.2 : 0.8,
    ease: [0.16, 1, 0.3, 1] as const
  }

  return (
    <section
      id="conversion"
      className="w-full bg-black py-16 sm:py-[100px] md:py-[130px] border-t border-white/5 relative z-20 select-none overflow-hidden"
      role="region"
      aria-label="ONNREV Executive Consultation Booking"
    >
      {/* Editorial lighting / Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#ef233c]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Background visual concentric orbits */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center z-0">
        <svg viewBox="0 0 400 400" className="w-[480px] h-[480px] stroke-white/5 fill-none">
          <circle cx="200" cy="200" r="160" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="120" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="80" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="40" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 md:px-12 grid grid-cols-12 gap-y-12 lg:gap-x-12 relative z-10 items-start">

        {/* LEFT COLUMN (Cols 1-7): Expectations & SLAs */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-8 text-left">

          {/* Editorial Intro */}
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={baseTransition}
            className="flex flex-col gap-3.5"
          >
            <div className="flex items-center gap-3">
              <OnnrevSymbolMark size={28} />
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#ef233c] uppercase font-semibold">
                // ENGAGEMENT
              </span>
            </div>
            <h2 className="font-display font-medium text-[42px] sm:text-[60px] md:text-[72px] leading-[0.98] text-white tracking-tight uppercase">
              Let's Talk.
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] text-zinc-400 max-w-[520px]">
              Tell us what you want to build or modernize. We'll map the architecture within 24 hours.
            </p>
          </motion.div>

          {/* Conversation Paths grid */}
          <div className="flex flex-col gap-3">
            <span className="text-[9.5px] font-sans font-bold tracking-widest text-zinc-400 uppercase">
              Select Engagement Path
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {paths.map((p) => {
                const isSelected = objective === p.title
                return (
                  <button
                    key={p.id}
                    onClick={() => handlePathSelect(p.title)}
                    className={`p-5 rounded-[8px] text-left border transition-all duration-300 cursor-pointer outline-none flex flex-col gap-2 ${isSelected
                        ? 'border-[#ef233c] bg-white/10 ring-1 ring-[#ef233c]/40 text-white shadow-[0_0_15px_rgba(239,35,60,0.2)]'
                        : 'border-white/[0.08] hover:border-white/20 bg-white/5 text-white/80'
                      }`}
                  >
                    <span className="font-display font-medium text-[15px] tracking-tight">
                      {p.title}
                    </span>
                    <span className="font-sans text-[12.5px] leading-snug opacity-75">
                      {p.desc}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* SLA expectations & Timeline panel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-[8px] border border-white/[0.08] bg-white/5 shadow-medium">
            <div className="flex flex-col gap-2.5 text-left border-b md:border-b-0 md:border-r border-white/[0.08] pb-4 md:pb-0 md:pr-6">
              <span className="text-[10px] font-sans font-bold tracking-widest text-white uppercase">
                Meeting SLA Parameters
              </span>
              <ul className="flex flex-col gap-2.5 list-none pl-0 font-sans text-[13px] text-white/70">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>SLA Response: Within 24 business hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>Discovery Duration: 30 minutes call</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>Initial Roadmap: Sent in 5-7 business days</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2.5 text-left md:pl-6">
              <span className="text-[10px] font-sans font-bold tracking-widest text-white uppercase">
                Process Overview
              </span>
              <div className="flex flex-col gap-2.5 mt-1">
                <div className="flex items-center gap-3 text-[12.5px] font-sans text-white/70">
                  <span className="font-mono text-[9px] bg-white/10 text-white px-1.5 py-0.5 rounded font-bold">01</span>
                  <span>Discovery & Strategic Scoping</span>
                </div>
                <div className="flex items-center gap-3 text-[12.5px] font-sans text-white/70">
                  <span className="font-mono text-[9px] bg-white/10 text-white px-1.5 py-0.5 rounded font-bold">02</span>
                  <span>System Architecture Spec & Proposal</span>
                </div>
                <div className="flex items-center gap-3 text-[12.5px] font-sans text-white/70">
                  <span className="font-mono text-[9px] bg-white/10 text-white px-1.5 py-0.5 rounded font-bold">03</span>
                  <span>Implementation Kickoff & Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Alternate contacts */}
          <div className="flex flex-wrap gap-4 text-[13px] font-sans font-bold text-white/50">
            <a href="mailto:contact@onnrev.com" className="hover:text-white hover-link-underline transition-colors lowercase">
              email: contact@onnrev.com
            </a>
            <span>•</span>
            <a href="#linkedin" className="hover:text-white hover-link-underline transition-colors lowercase">
              linkedin
            </a>
            <span>•</span>
            <a href="#calendar" className="hover:text-white hover-link-underline transition-colors lowercase">
              schedule on calendar
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN (Cols 8-12): Premium Glass Consultation Form */}
        <div className="col-span-12 lg:col-span-5 lg:col-start-8">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="consultation-form"
                onSubmit={handleSubmit}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
                transition={baseTransition}
                className="p-6 md:p-7 rounded-[12px] bg-white/5 border border-white/[0.08] backdrop-blur-[12px] shadow-glass text-left flex flex-col gap-4 relative z-10"
              >
                <div className="flex flex-col gap-1 border-b border-white/[0.08] pb-3">
                  <h3 className="font-display font-medium text-[20px] text-white tracking-tight">
                    Executive Consultation
                  </h3>
                  <span className="text-[11px] font-sans text-white/50">
                    Expected response within 24 business hours.
                  </span>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-[9.5px] font-sans font-bold tracking-widest text-white/60 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                      if (nameError) setNameError('')
                    }}
                    placeholder="Enter your name"
                    className={`input-dark w-full bg-[#0D1117]/80 border rounded-[6px] py-2.5 px-3.5 text-[13.5px] font-sans outline-none focus:bg-[#0D1117] focus:border-[#10B981]/60 focus:ring-1 focus:ring-[#10B981]/25 transition-all duration-300 text-white ${nameError ? 'border-red-500/60 bg-red-500/5 focus:ring-red-500/20' : 'border-white/[0.10]'
                      }`}
                  />
                  {nameError && (
                    <span className="text-[10.5px] font-sans text-red-500 leading-none mt-1">
                      ⚠️ {nameError}
                    </span>
                  )}
                </div>

                {/* Organization */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="org" className="text-[9.5px] font-sans font-bold tracking-widest text-white/60 uppercase">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="org"
                    value={org}
                    onChange={(e) => {
                      setOrg(e.target.value)
                      if (orgError) setOrgError('')
                    }}
                    placeholder="Enter organization name"
                    className={`input-dark w-full bg-[#0D1117]/80 border rounded-[6px] py-2.5 px-3.5 text-[13.5px] font-sans outline-none focus:bg-[#0D1117] focus:border-[#10B981]/60 focus:ring-1 focus:ring-[#10B981]/25 transition-all duration-300 text-white ${orgError ? 'border-red-500/60 bg-red-500/5 focus:ring-red-500/20' : 'border-white/[0.10]'
                      }`}
                  />
                  {orgError && (
                    <span className="text-[10.5px] font-sans text-red-500 leading-none mt-1">
                      ⚠️ {orgError}
                    </span>
                  )}
                </div>

                {/* Business Email */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-[9.5px] font-sans font-bold tracking-widest text-white/60 uppercase">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (emailError) setEmailError('')
                    }}
                    placeholder="name@organization.com"
                    className={`input-dark w-full bg-[#0D1117]/80 border rounded-[6px] py-2.5 px-3.5 text-[13.5px] font-sans outline-none focus:bg-[#0D1117] focus:border-[#10B981]/60 focus:ring-1 focus:ring-[#10B981]/25 transition-all duration-300 text-white ${emailError ? 'border-red-500/60 bg-red-500/5 focus:ring-red-500/20' : 'border-white/[0.10]'
                      }`}
                  />
                  {emailError && (
                    <span className="text-[10.5px] font-sans text-red-500 leading-none mt-1">
                      ⚠️ {emailError}
                    </span>
                  )}
                </div>

                {/* Objective */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="objective" className="text-[9.5px] font-sans font-bold tracking-widest text-white/60 uppercase">
                    Primary Objective
                  </label>
                  <select
                    id="objective"
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    className="input-dark w-full bg-[#0D1117]/80 border border-white/[0.10] rounded-[6px] py-2.5 px-3.5 text-[13.5px] font-sans outline-none focus:bg-[#0D1117] focus:border-[#10B981]/60 focus:ring-1 focus:ring-[#10B981]/25 transition-all duration-300 text-white cursor-pointer"
                  >
                    <option className="bg-[#0D1117] text-white" value="Explore Enterprise AI">Explore Enterprise AI</option>
                    <option className="bg-[#0D1117] text-white" value="Modernize Operations">Modernize Operations</option>
                    <option className="bg-[#0D1117] text-white" value="Accelerate Growth">Accelerate Growth</option>
                    <option className="bg-[#0D1117] text-white" value="Build Digital Products">Build Digital Products</option>
                  </select>
                </div>

                {/* Timeline */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="timeline" className="text-[9.5px] font-sans font-bold tracking-widest text-white/60 uppercase">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="input-dark w-full bg-[#0D1117]/80 border border-white/[0.10] rounded-[6px] py-2.5 px-3.5 text-[13.5px] font-sans outline-none focus:bg-[#0D1117] focus:border-[#10B981]/60 focus:ring-1 focus:ring-[#10B981]/25 transition-all duration-300 text-white cursor-pointer"
                  >
                    <option className="bg-[#0D1117] text-white" value="< 1 month">&lt; 1 month</option>
                    <option className="bg-[#0D1117] text-white" value="1-3 months">1-3 months</option>
                    <option className="bg-[#0D1117] text-white" value="3-6 months">3-6 months</option>
                    <option className="bg-[#0D1117] text-white" value="6+ months">6+ months</option>
                  </select>
                </div>

                {/* Optional Context */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="context" className="text-[9.5px] font-sans font-bold tracking-widest text-white/60 uppercase">
                    Optional Context
                  </label>
                  <textarea
                    id="context"
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                    placeholder="Briefly describe operational goals or constraints"
                    rows={3}
                    className="input-dark w-full bg-[#0D1117]/80 border border-white/[0.10] rounded-[6px] py-2.5 px-3.5 text-[13.5px] font-sans outline-none focus:bg-[#0D1117] focus:border-[#10B981]/60 focus:ring-1 focus:ring-[#10B981]/25 transition-all duration-300 text-white resize-none"
                  />
                </div>

                {/* Black glass primary CTA button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 self-end bg-black/40 hover:bg-black/60 border border-white/10 hover:border-white/20 disabled:bg-[#333] text-white py-3 rounded-pill font-sans text-[13px] font-bold transition-all duration-300 cursor-pointer outline-none shadow-soft text-center mt-2 group hover:scale-[1.02] active:scale-[0.97] disabled:scale-100 disabled:pointer-events-none flex items-center justify-center gap-1.5"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Logging consultation...</span>
                    </>
                  ) : (
                    <>
                      <span>Schedule Consultation</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                    </>
                  )}
                </button>

              </motion.form>
            ) : (
              <motion.div
                key="submission-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-[12px] bg-white/5 border border-[#10B981]/30 shadow-medium text-center flex flex-col items-center justify-center gap-4 min-h-[420px] relative z-10 backdrop-blur-md"
              >
                <div className="w-12 h-12 rounded-full bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/35 mb-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#10B981]" />
                </div>
                <h3 className="font-display font-medium text-[22px] text-white tracking-tight">
                  Consultation Logged
                </h3>
                <p className="font-sans text-[13.5px] leading-relaxed text-white/70 max-w-[280px]">
                  An executive transformation partner will contact you at your business email address within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2.5 rounded-pill border border-white/[0.08] hover:border-white/20 text-white font-sans text-[12px] font-bold bg-white/5 cursor-pointer outline-none hover:scale-[1.02] transition-transform"
                >
                  Return to form
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* ─── FREQUENT QUESTIONS (ACCORDION STACK) ──────────────────────────────── */}
      <div className="max-w-7xl w-full mx-auto px-8 md:px-16 lg:px-20 grid grid-cols-12 gap-x-4 md:gap-x-8 mt-24 md:mt-36 border-t border-white/[0.08] pt-20 text-left">

        {/* Accordion Intro details */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-3.5 mb-8 lg:mb-0">
          <span className="text-[10px] font-sans font-bold tracking-widest text-white/50 uppercase">
            Information
          </span>
          <h3 className="font-display font-medium text-[26px] md:text-[32px] text-white tracking-tight">
            Common Questions
          </h3>
          <p className="font-sans text-[13.5px] leading-relaxed text-white/50 max-w-[280px]">
            Key insights on how engagements are scoped, integrated, and optimized.
          </p>
        </div>

        {/* Accordion details stack */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-2">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx
            return (
              <div
                key={faq.q}
                className="border-b border-white/[0.08] pb-4"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-3.5 text-left border-none outline-none bg-transparent cursor-pointer flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-medium text-[16px] md:text-[17.5px] text-white tracking-tight leading-snug">
                    {faq.q}
                  </span>

                  {/* Indicator mark */}
                  <span className="text-[16px] font-mono text-white/40 select-none">
                    {isOpen ? '—' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-[13.5px] leading-relaxed text-white/70 pt-1 pb-4 pr-8">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Conversion
