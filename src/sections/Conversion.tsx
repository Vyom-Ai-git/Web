import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { OnnrevSymbolMark } from '@/components/shared/OnnrevLogo'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const Conversion: React.FC = () => {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [requirement, setRequirement] = useState('')
  const [phone, setPhone] = useState('')

  // Validation states
  const [nameError, setNameError] = useState('')
  const [companyError, setCompanyError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [requirementError, setRequirementError] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const reducedMotion = useReducedMotion()

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

    if (!company.trim()) {
      setCompanyError('Company is required')
      valid = false
    } else {
      setCompanyError('')
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

    if (!requirement.trim()) {
      setRequirementError('Project requirement is required')
      valid = false
    } else {
      setRequirementError('')
    }

    if (!valid) return

    setIsSubmitting(true)

    // Simulate enterprise database log
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setName('')
      setCompany('')
      setEmail('')
      setPhone('')
      setRequirement('')
    }, 1200)
  }

  const baseTransition = {
    duration: reducedMotion ? 0.2 : 0.6,
    ease: [0.16, 1, 0.3, 1] as const,
  }

  return (
    <section
      id="contact"
      className="w-full bg-[#050507] py-20 sm:py-28 md:py-36 border-t border-white/5 relative z-20 select-none overflow-hidden"
      role="region"
      aria-label="ONNREV Contact"
    >
      {/* Editorial lighting / Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#ef233c]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto px-6 md:px-12 grid grid-cols-12 gap-y-12 lg:gap-x-12 relative z-10 items-start">

        {/* LEFT COLUMN (Cols 1-6): Section 19 Headline & Expectations */}
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-8 text-left">

          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={baseTransition}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <OnnrevSymbolMark size={28} />
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#ef233c] uppercase font-semibold">
                // 07 CONTACT
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-mono text-[14px] md:text-[16px] text-zinc-400 uppercase tracking-widest font-semibold">
                HAVE AN IDEA?
              </span>
              <h2 className="font-display font-semibold text-[38px] sm:text-[52px] md:text-[62px] leading-[0.98] text-white tracking-tight uppercase">
                LET'S BUILD WHAT'S NEXT.
              </h2>
            </div>

            <p className="font-sans text-[16px] md:text-[18px] text-zinc-400 max-w-[500px] leading-relaxed">
              Tell us what you're working on. Let's explore what we can build together.
            </p>
          </motion.div>

          {/* Operational parameters */}
          <div className="p-6 rounded-[10px] border border-white/[0.08] bg-black/40 flex flex-col gap-4">
            <span className="text-[10.5px] font-mono font-semibold tracking-wider text-white uppercase">
              // ENGAGEMENT DISCIPLINE
            </span>
            <ul className="flex flex-col gap-3 list-none pl-0 font-sans text-[13.5px] text-zinc-300">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ef233c]" />
                <span>Executive Response: Within 24 business hours</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ef233c]" />
                <span>Discovery & Architecture scoping call: 30 minutes</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ef233c]" />
                <span>Zero manufacturing of claims or metrics</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[13px] font-mono text-zinc-500">
            <a href="mailto:contact@onnrev.com" className="hover:text-white transition-colors">
              contact@onnrev.com
            </a>
            <span>//</span>
            <a href="https://linkedin.com/company/onnrev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN (Cols 7-12): Short, Concise Contact Form (Section 20) */}
        <div className="col-span-12 lg:col-span-6">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
                transition={baseTransition}
                className="p-7 md:p-8 rounded-[14px] bg-[#0a0c10] border border-white/[0.1] shadow-2xl text-left flex flex-col gap-4 relative z-10"
              >
                <div className="flex flex-col gap-1 border-b border-white/[0.08] pb-3">
                  <h3 className="font-display font-medium text-[20px] text-white tracking-tight uppercase">
                    Start a Conversation
                  </h3>
                  <span className="text-[12px] font-sans text-zinc-400">
                    Expected response within 24 business hours.
                  </span>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-[10px] font-mono font-semibold tracking-wider text-zinc-400 uppercase">
                    Your Name *
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
                    className={`w-full bg-[#050507] border rounded-[8px] py-2.5 px-3.5 text-[14px] font-sans outline-none focus:border-[#ef233c] focus:ring-1 focus:ring-[#ef233c]/40 transition-all text-white ${
                      nameError ? 'border-red-500/60 bg-red-500/5' : 'border-white/10'
                    }`}
                  />
                  {nameError && (
                    <span className="text-[11px] font-sans text-red-500 mt-0.5">
                      {nameError}
                    </span>
                  )}
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="company" className="text-[10px] font-mono font-semibold tracking-wider text-zinc-400 uppercase">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value)
                      if (companyError) setCompanyError('')
                    }}
                    placeholder="Enter your company name"
                    className={`w-full bg-[#050507] border rounded-[8px] py-2.5 px-3.5 text-[14px] font-sans outline-none focus:border-[#ef233c] focus:ring-1 focus:ring-[#ef233c]/40 transition-all text-white ${
                      companyError ? 'border-red-500/60 bg-red-500/5' : 'border-white/10'
                    }`}
                  />
                  {companyError && (
                    <span className="text-[11px] font-sans text-red-500 mt-0.5">
                      {companyError}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-[10px] font-mono font-semibold tracking-wider text-zinc-400 uppercase">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (emailError) setEmailError('')
                    }}
                    placeholder="name@company.com"
                    className={`w-full bg-[#050507] border rounded-[8px] py-2.5 px-3.5 text-[14px] font-sans outline-none focus:border-[#ef233c] focus:ring-1 focus:ring-[#ef233c]/40 transition-all text-white ${
                      emailError ? 'border-red-500/60 bg-red-500/5' : 'border-white/10'
                    }`}
                  />
                  {emailError && (
                    <span className="text-[11px] font-sans text-red-500 mt-0.5">
                      {emailError}
                    </span>
                  )}
                </div>

                {/* Optional Phone */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="phone" className="text-[10px] font-mono font-semibold tracking-wider text-zinc-400 uppercase">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#050507] border border-white/10 rounded-[8px] py-2.5 px-3.5 text-[14px] font-sans outline-none focus:border-[#ef233c] focus:ring-1 focus:ring-[#ef233c]/40 transition-all text-white"
                  />
                </div>

                {/* Project / Requirement */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="requirement" className="text-[10px] font-mono font-semibold tracking-wider text-zinc-400 uppercase">
                    Project / Requirement *
                  </label>
                  <textarea
                    id="requirement"
                    value={requirement}
                    onChange={(e) => {
                      setRequirement(e.target.value)
                      if (requirementError) setRequirementError('')
                    }}
                    placeholder="Tell us about what you are building or modernizing..."
                    rows={3}
                    className={`w-full bg-[#050507] border rounded-[8px] py-2.5 px-3.5 text-[14px] font-sans outline-none focus:border-[#ef233c] focus:ring-1 focus:ring-[#ef233c]/40 transition-all text-white resize-none ${
                      requirementError ? 'border-red-500/60 bg-red-500/5' : 'border-white/10'
                    }`}
                  />
                  {requirementError && (
                    <span className="text-[11px] font-sans text-red-500 mt-0.5">
                      {requirementError}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3.5 rounded-full bg-[#ef233c] hover:bg-[#d90429] text-white font-sans text-[13.5px] font-semibold uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(239,35,60,0.35)] hover:shadow-[0_0_30px_rgba(239,35,60,0.6)] cursor-pointer outline-none active:scale-98 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Sending inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 rounded-[14px] bg-[#0a0c10] border border-white/[0.1] text-left flex flex-col items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#ef233c]/15 border border-[#ef233c]/40 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#ef233c]" />
                </div>
                <h3 className="font-display font-medium text-[24px] text-white tracking-tight uppercase">
                  Inquiry Received.
                </h3>
                <p className="font-sans text-[15px] text-zinc-300 leading-relaxed max-w-[440px]">
                  Thank you for reaching out. An ONNREV systems lead will review your project requirements and respond within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-[12px] font-mono font-semibold text-[#ef233c] hover:text-white transition-colors uppercase tracking-wider"
                >
                  Send another message →
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

export default Conversion
