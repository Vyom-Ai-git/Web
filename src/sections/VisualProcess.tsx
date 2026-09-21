import React from 'react'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ArrowRight } from 'lucide-react'

interface ProcessStep {
  num: string
  title: string
  statement: string
}

export const VisualProcess: React.FC = () => {
  const reducedMotion = useReducedMotion()

  // 4 Steps strictly aligned with Section 17 of the Master Prompt
  const steps: ProcessStep[] = [
    {
      num: '01',
      title: 'UNDERSTAND',
      statement: 'Understand the problem before building.',
    },
    {
      num: '02',
      title: 'DESIGN',
      statement: 'Turn ideas into clear experiences.',
    },
    {
      num: '03',
      title: 'BUILD',
      statement: 'Engineer the right technology.',
    },
    {
      num: '04',
      title: 'EVOLVE',
      statement: 'Improve and scale what we create.',
    },
  ]

  return (
    <section
      id="process"
      className="w-full bg-[#050507] text-white py-24 sm:py-32 border-t border-white/[0.08] relative z-20 select-none overflow-hidden"
      role="region"
      aria-label="ONNREV How We Build"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 text-left">
        
        {/* Label + Big Statement */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.1] pb-8 mb-16 gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#ef233c] uppercase font-semibold">
              // HOW WE BUILD
            </span>
            <h2 className="font-display font-medium text-[36px] sm:text-[48px] md:text-[56px] text-white tracking-tight uppercase">
              HOW WE BUILD.
            </h2>
          </div>
          <span className="text-[12px] font-mono text-zinc-500 uppercase tracking-widest">
            FOUR RIGOROUS STAGES
          </span>
        </div>

        {/* 4 Steps Grid — 1 Sentence Each */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <motion.div
              key={st.num}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col justify-between p-7 bg-[#0a0c10] border border-white/10 rounded-[12px] shadow-2xl hover:border-[#ef233c]/60 transition-colors group"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <span className="font-mono text-[14px] font-bold text-[#ef233c]">
                    [{st.num}]
                  </span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                    STAGE
                  </span>
                </div>

                <div className="flex flex-col gap-2.5">
                  <h3 className="font-display font-semibold text-[22px] text-white tracking-tight uppercase group-hover:text-white transition-colors">
                    {st.title}
                  </h3>
                  <p className="font-sans text-[14px] leading-relaxed text-zinc-400">
                    {st.statement}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>STAGE COMPLETE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#ef233c] transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default VisualProcess
