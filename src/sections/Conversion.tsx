import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { track } from '@/lib/analytics'

interface PathOption {
  id: string
  title: string
  desc: string
}

interface ExpectationStep {
  step: string
  title: string
}

interface FAQItem {
  q: string
  a: string
}

export const Conversion: React.FC = () => {
  const reducedMotion = useReducedMotion()
  
  // Form State
  const [name, setName] = useState('')
  const [org, setOrg] = useState('')
  const [email, setEmail] = useState('')
  const [objective, setObjective] = useState('Explore Enterprise AI')
  const [timeline, setTimeline] = useState('1-3 months')
  const [context, setContext] = useState('')
  
  // Interaction States
  const [submitted, setSubmitted] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const paths: PathOption[] = [
    {
      id: 'ai',
      title: 'Explore Enterprise AI',
      desc: 'Evaluate where AI can create measurable business value.'
    },
    {
      id: 'ops',
      title: 'Modernize Operations',
      desc: 'Identify opportunities to improve efficiency through automation and intelligent workflows.'
    },
    {
      id: 'growth',
      title: 'Accelerate Growth',
      desc: 'Design systems that improve customer acquisition, retention, and revenue performance.'
    },
    {
      id: 'product',
      title: 'Build Digital Products',
      desc: 'Plan scalable digital platforms, AI experiences, and enterprise applications.'
    }
  ]

  const expectations: ExpectationStep[] = [
    { step: '01', title: 'Initial Discovery Conversation' },
    { step: '02', title: 'Strategic Assessment' },
    { step: '03', title: 'Solution Roadmap' },
    { step: '04', title: 'Collaborative Planning' }
  ]

  const faqs: FAQItem[] = [
    {
      q: 'What types of organizations do you work with?',
      a: 'We partner primarily with mid-market and enterprise organizations seeking to build operational leverage, modernize legacy workflows, and deploy intelligent AI capabilities.'
    },
    {
      q: 'How long do transformation engagements typically last?',
      a: 'Engagement lengths vary based on scope, but initial discovery and solution roadmaps are typically completed in 4 to 6 weeks, with active systems engineering rolling out in 3 to 6 months.'
    },
    {
      q: 'Can Vyoma work with existing technology stacks?',
      a: 'Yes. We engineer systems that integrate seamlessly with your existing cloud clusters, data storage models, and legacy APIs to prevent operational disruption.'
    },
    {
      q: 'Do you provide long-term support?',
      a: 'Yes. We focus on building operational independence, providing dedicated support parameters, documentation handoffs, and ongoing optimization reviews.'
    }
  ]

  // Path selection updates primary objective select field
  const handlePathSelect = (title: string) => {
    setObjective(title)
  }

  const validateEmail = (val: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!val) {
      return 'Business email is required'
    }
    if (!regex.test(val)) {
      return 'Please enter a valid business email'
    }
    return ''
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const error = validateEmail(email)
    if (error) {
      setEmailError(error)
      return
    }
    
    // Clear validation
    setEmailError('')
    setSubmitted(true)
    track.formSubmit('executive_consultation')
    
    // Clear inputs
    setName('')
    setOrg('')
    setEmail('')
    setContext('')
  }

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx)
  }

  const baseTransition = {
    duration: reducedMotion ? 0.2 : 0.8,
    ease: [0.16, 1, 0.3, 1] as const // ease-editorial
  }

  return (
    <section 
      id="conversion" 
      className="w-full bg-[#EDEEF5] py-24 md:py-36 border-t border-black/[0.05] relative z-20 select-none overflow-hidden"
      role="region"
      aria-label="Vyoma Executive Consultation Booking"
    >
      {/* Background visual concentric orbits */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center z-0">
        <svg viewBox="0 0 400 400" className="w-[480px] h-[480px] stroke-[#1a1a1a]/10 fill-none">
          <circle cx="200" cy="200" r="160" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="120" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="80" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="40" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl w-full mx-auto px-8 md:px-16 lg:px-20 grid grid-cols-12 gap-y-16 lg:gap-x-12 relative z-10 items-start">
        
        {/* LEFT COLUMN (Cols 1-7): Intro, Paths, Steps, Alternates */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-14 text-left">
          
          {/* Editorial Intro */}
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={baseTransition}
            className="flex flex-col gap-4"
          >
            <span className="text-[11px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
              Next Stage
            </span>
            <h2 className="font-display font-medium text-[36px] md:text-[50px] lg:text-[56px] leading-[1.12] text-[#1a1a1a] tracking-tight">
              Let's Design What's Next
            </h2>
            <p className="font-sans text-[15px] md:text-[16.5px] leading-relaxed text-[#8e8e8e] max-w-[560px]">
              Every transformation begins with a conversation. Whether you're exploring enterprise AI, modernizing operations, or building entirely new digital capabilities, we'll help you define the right path forward.
            </p>
          </motion.div>

          {/* Conversation Paths grid */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
              Select Engagement Path
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {paths.map((p) => {
                const isSelected = objective === p.title
                return (
                  <button
                    key={p.id}
                    onClick={() => handlePathSelect(p.title)}
                    className={`p-5 rounded-[6px] text-left border transition-all duration-300 bg-white/20 cursor-pointer outline-none flex flex-col gap-2 ${
                      isSelected 
                        ? 'border-[#9fff00] shadow-soft bg-white/40' 
                        : 'border-black/[0.03] hover:border-black/10'
                    }`}
                  >
                    <span className="font-display font-medium text-[15px] text-[#1a1a1a] tracking-tight">
                      {p.title}
                    </span>
                    <span className="font-sans text-[12.5px] leading-snug text-[#8e8e8e]">
                      {p.desc}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Expectation Panel */}
          <div className="flex flex-col gap-4 border-t border-black/[0.05] pt-10">
            <span className="text-[10px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
              After You Reach Out
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {expectations.map((ex) => (
                <div key={ex.step} className="flex flex-col gap-1">
                  <span className="text-[11px] font-mono font-bold text-[#1a1a1a]">
                    STAGE {ex.step}
                  </span>
                  <span className="font-sans text-[12.5px] leading-snug text-[#8e8e8e]">
                    {ex.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Alternate contacts */}
          <div className="flex flex-wrap gap-4 text-[13px] font-sans font-bold text-[#8e8e8e]">
            <a href="mailto:contact@vyoma.com" className="hover:text-[#1a1a1a] hover-link-underline transition-colors lowercase">
              email: contact@vyoma.com
            </a>
            <span>•</span>
            <a href="#linkedin" className="hover:text-[#1a1a1a] hover-link-underline transition-colors lowercase">
              linkedin
            </a>
            <span>•</span>
            <a href="#calendar" className="hover:text-[#1a1a1a] hover-link-underline transition-colors lowercase">
              schedule on calendar
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN (Cols 8-12): Consultation Form */}
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
                className="p-8 rounded-[8px] bg-white/35 border border-black/[0.05] shadow-medium text-left flex flex-col gap-5.5 relative z-10"
              >
                <div className="flex flex-col gap-1 border-b border-black/[0.05] pb-4">
                  <h3 className="font-display font-medium text-[20px] text-[#1a1a1a] tracking-tight">
                    Executive Consultation
                  </h3>
                  <span className="text-[11px] font-sans text-[#8e8e8e]">
                    Expected response within 24 business hours.
                  </span>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-sans font-bold tracking-widest text-[#1a1a1a] uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-white/40 border border-black/[0.05] rounded-[4px] py-2 px-3 text-[13.5px] font-sans outline-none focus:border-black/20 focus:bg-white/60 transition-all text-[#1a1a1a]"
                  />
                </div>

                {/* Organization */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="org" className="text-[10px] font-sans font-bold tracking-widest text-[#1a1a1a] uppercase">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="org"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    required
                    placeholder="Enter organization name"
                    className="w-full bg-white/40 border border-black/[0.05] rounded-[4px] py-2 px-3 text-[13.5px] font-sans outline-none focus:border-black/20 focus:bg-white/60 transition-all text-[#1a1a1a]"
                  />
                </div>

                {/* Business Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-sans font-bold tracking-widest text-[#1a1a1a] uppercase">
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
                    required
                    placeholder="name@organization.com"
                    className={`w-full bg-white/40 border rounded-[4px] py-2 px-3 text-[13.5px] font-sans outline-none focus:bg-white/60 transition-all text-[#1a1a1a] ${
                      emailError ? 'border-red-500 focus:border-red-500' : 'border-black/[0.05] focus:border-black/20'
                    }`}
                  />
                  {emailError && (
                    <span className="text-[11px] font-sans text-red-500 leading-none mt-1">
                      {emailError}
                    </span>
                  )}
                </div>

                {/* Objective */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="objective" className="text-[10px] font-sans font-bold tracking-widest text-[#1a1a1a] uppercase">
                    Primary Objective
                  </label>
                  <select
                    id="objective"
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    className="w-full bg-white/40 border border-black/[0.05] rounded-[4px] py-2 px-3 text-[13.5px] font-sans outline-none focus:border-black/20 focus:bg-white/60 transition-all text-[#1a1a1a]"
                  >
                    <option value="Explore Enterprise AI">Explore Enterprise AI</option>
                    <option value="Modernize Operations">Modernize Operations</option>
                    <option value="Accelerate Growth">Accelerate Growth</option>
                    <option value="Build Digital Products">Build Digital Products</option>
                  </select>
                </div>

                {/* Timeline */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="timeline" className="text-[10px] font-sans font-bold tracking-widest text-[#1a1a1a] uppercase">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-white/40 border border-black/[0.05] rounded-[4px] py-2 px-3 text-[13.5px] font-sans outline-none focus:border-black/20 focus:bg-white/60 transition-all text-[#1a1a1a]"
                  >
                    <option value="< 1 month">&lt; 1 month</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                  </select>
                </div>

                {/* Optional Context */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="context" className="text-[10px] font-sans font-bold tracking-widest text-[#1a1a1a] uppercase">
                    Optional Context
                  </label>
                  <textarea
                    id="context"
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                    placeholder="Briefly describe operational goals or constraints"
                    rows={3}
                    className="w-full bg-white/40 border border-black/[0.05] rounded-[4px] py-2 px-3 text-[13.5px] font-sans outline-none focus:border-black/20 focus:bg-white/60 transition-all text-[#1a1a1a] resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-[#1A1A1A] hover:bg-[#333] text-white py-3.5 px-6 rounded-pill font-sans text-[13px] font-bold transition-colors cursor-pointer outline-none border-none shadow-soft text-center mt-2"
                >
                  Schedule an Executive Consultation →
                </button>

              </motion.form>
            ) : (
              <motion.div
                key="submission-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-[8px] bg-white/35 border border-[#9fff00]/30 shadow-medium text-center flex flex-col items-center justify-center gap-4 min-h-[420px] relative z-10 backdrop-blur-md"
              >
                <div className="w-12 h-12 rounded-full bg-[#9fff00]/15 flex items-center justify-center border border-[#9fff00]/35 mb-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#9fff00]" />
                </div>
                <h3 className="font-display font-medium text-[22px] text-[#1a1a1a] tracking-tight">
                  Consultation Logged
                </h3>
                <p className="font-sans text-[13.5px] leading-relaxed text-[#8e8e8e] max-w-[280px]">
                  An executive transformation partner will contact you at your business email address within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2.5 rounded-pill border border-black/[0.08] hover:border-black/20 text-[#1a1a1a] font-sans text-[12px] font-bold bg-white/50 cursor-pointer outline-none"
                >
                  Return to form
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* ─── FREQUENT QUESTIONS (ACCORDION STACK) ──────────────────────────────── */}
      <div className="max-w-7xl w-full mx-auto px-8 md:px-16 lg:px-20 grid grid-cols-12 gap-x-4 md:gap-x-8 mt-24 md:mt-36 border-t border-black/[0.05] pt-20 text-left">
        
        {/* Accordion Intro details */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-3.5 mb-8 lg:mb-0">
          <span className="text-[10px] font-sans font-bold tracking-widest text-[#8e8e8e] uppercase">
            Information
          </span>
          <h3 className="font-display font-medium text-[26px] md:text-[32px] text-[#1a1a1a] tracking-tight">
            Common Questions
          </h3>
          <p className="font-sans text-[13.5px] leading-relaxed text-[#8e8e8e] max-w-[280px]">
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
                className="border-b border-black/[0.05] pb-4"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-3.5 text-left border-none outline-none bg-transparent cursor-pointer flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-medium text-[16px] md:text-[17.5px] text-[#1a1a1a] tracking-tight leading-snug">
                    {faq.q}
                  </span>
                  
                  {/* Indicator mark */}
                  <span className="text-[16px] font-mono text-[#8e8e8e] select-none">
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
                      <p className="font-sans text-[13.5px] leading-relaxed text-[#8e8e8e] pt-1 pb-4 pr-8">
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
