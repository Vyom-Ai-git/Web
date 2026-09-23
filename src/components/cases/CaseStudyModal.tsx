import React, { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { VERIFIED_CASE_STUDIES, type CaseStudyData } from '@/data/caseStudies'

interface CaseStudyModalProps {
  isOpen: boolean
  activeCaseIndex: number
  onClose: () => void
  onSelectCase: (index: number) => void
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  isOpen,
  activeCaseIndex,
  onClose,
  onSelectCase,
}) => {
  const reducedMotion = useReducedMotion()
  const activeCase: CaseStudyData = VERIFIED_CASE_STUDIES[activeCaseIndex] || VERIFIED_CASE_STUDIES[0]

  const handleNext = useCallback(() => {
    onSelectCase((activeCaseIndex + 1) % VERIFIED_CASE_STUDIES.length)
  }, [activeCaseIndex, onSelectCase])

  const handlePrev = useCallback(() => {
    onSelectCase((activeCaseIndex - 1 + VERIFIED_CASE_STUDIES.length) % VERIFIED_CASE_STUDIES.length)
  }, [activeCaseIndex, onSelectCase])

  // Keyboard navigation & scroll locking
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'ArrowLeft') {
        handlePrev()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose, handleNext, handlePrev])

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 select-none overflow-y-auto"
        >
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer -z-10"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-5xl bg-[#08090c] border border-white/15 rounded-[16px] shadow-[0_25px_80px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto relative text-white text-left flex flex-col"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#08090c]/95 backdrop-blur-md border-b border-white/10 px-6 sm:px-10 py-5 flex items-center justify-between z-20">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono tracking-widest text-[#ef233c] uppercase font-semibold">
                  {activeCase.code}
                </span>
                <span className="text-zinc-600">//</span>
                <span className="text-[11px] font-mono text-zinc-400 uppercase">
                  {activeCase.industry}
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-4">
                {/* Prev / Next triggers */}
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer outline-none"
                  aria-label="Previous Case Study"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-mono text-zinc-500">
                  {activeCaseIndex + 1} / {VERIFIED_CASE_STUDIES.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer outline-none"
                  aria-label="Next Case Study"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="w-[1px] h-5 bg-white/10 mx-1" />

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/5 hover:bg-[#ef233c]/20 hover:text-[#ef233c] text-zinc-400 transition-colors cursor-pointer outline-none"
                  aria-label="Close Case Study Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-10 md:p-12 flex flex-col gap-10">
              {/* Title & Verified Metric Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-white/10 pb-8">
                <div className="flex flex-col gap-3 max-w-2xl">
                  <h2
                    id="case-study-title"
                    className="font-display font-medium text-[28px] sm:text-[38px] md:text-[44px] text-white tracking-tight uppercase leading-tight"
                  >
                    {activeCase.title}
                  </h2>
                  <p className="font-sans text-[16px] md:text-[18px] text-zinc-300 leading-relaxed">
                    {activeCase.subtitle}
                  </p>
                </div>

                <div className="bg-black/60 border border-white/10 rounded-[12px] p-5 sm:p-6 flex flex-col gap-1 shrink-0 min-w-[200px]">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                    PRIMARY OUTCOME
                  </span>
                  <span className="font-display font-bold text-[44px] text-[#ef233c] leading-none">
                    {activeCase.metric}
                  </span>
                  <span className="font-sans text-[12.5px] text-zinc-400 leading-snug">
                    {activeCase.metricLabel}
                  </span>
                </div>
              </div>

              {/* The Problem vs The Solution (Section 17) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3 p-6 rounded-[12px] bg-white/[0.02] border border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-zinc-500" />
                    <span className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase font-semibold">
                      THE PROBLEM
                    </span>
                  </div>
                  <p className="font-sans text-[14.5px] text-zinc-300 leading-relaxed">
                    {activeCase.problem}
                  </p>
                </div>

                <div className="flex flex-col gap-3 p-6 rounded-[12px] bg-[#ef233c]/[0.03] border border-[#ef233c]/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ef233c]" />
                    <span className="text-[11px] font-mono tracking-wider text-[#ef233c] uppercase font-semibold">
                      THE ONNREV SOLUTION
                    </span>
                  </div>
                  <p className="font-sans text-[14.5px] text-zinc-200 leading-relaxed">
                    {activeCase.solution}
                  </p>
                </div>
              </div>

              {/* What We Built (Section 17: Visual-heavy & concrete) */}
              <div className="flex flex-col gap-4">
                <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                  // WHAT WE BUILT
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activeCase.whatWeBuilt.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-[10px] bg-black/40 border border-white/[0.08] flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#ef233c] shrink-0 mt-0.5" />
                      <span className="font-sans text-[13.5px] text-zinc-300 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Chips (Section 17) */}
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                  // RELEVANT TECHNOLOGIES
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {activeCase.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[12.5px] font-mono text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Outcomes (Section 17: Zero fake claims) */}
              <div className="flex flex-col gap-4 p-6 rounded-[12px] bg-black border border-white/10">
                <span className="text-[11px] font-mono tracking-widest text-[#ef233c] uppercase font-semibold">
                  // VERIFIED OPERATIONAL OUTCOMES
                </span>
                <ul className="flex flex-col gap-2.5 pl-0 list-none font-sans text-[13.5px] text-zinc-300">
                  {activeCase.verifiedOutcome.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#ef233c] font-mono font-bold">[{idx + 1}]</span>
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Next Project Trigger & CTA (Section 17) */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
                <button
                  onClick={handleNext}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-[13px] uppercase tracking-wider transition-all cursor-pointer group"
                >
                  <span>NEXT PROJECT</span>
                  <ArrowRight className="w-4 h-4 text-[#ef233c] transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="#contact"
                  onClick={onClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#ef233c] hover:bg-[#d90429] text-white font-sans text-[13.5px] font-semibold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(239,35,60,0.35)]"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default CaseStudyModal
