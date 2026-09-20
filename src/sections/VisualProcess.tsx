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

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: 'DISCOVER',
      statement: 'We analyze operational friction, legacy databases, and target objectives.',
    },
    {
      num: '02',
      title: 'CREATE',
      statement: 'We engineer custom system architectures and autonomous event models.',
    },
    {
      num: '03',
      title: 'DELIVER',
      statement: 'We deploy secure platforms into production with verified SLAs.',
    },
    {
      num: '04',
      title: 'SUPPORT',
      statement: 'We provide continuous operational intelligence, monitoring, and scaling.',
    },
  ]

  return (
    <section
      id="process"
      className="w-full bg-[#0B0D13] text-white py-24 sm:py-32 border-t border-white/[0.08] relative z-20 select-none overflow-hidden"
      role="region"
      aria-label="ONNREV Process"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 relative z-10 text-left">
        
        {/* Label + Big Statement */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.1] pb-8 mb-16 gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#ef233c] uppercase font-semibold">
              // HOW WE WORK
            </span>
            <h2 className="font-display font-medium text-[36px] sm:text-[48px] md:text-[56px] text-white tracking-tight uppercase">
              The Process.
            </h2>
          </div>
          <span className="text-[12px] font-mono text-zinc-400 uppercase tracking-widest">
            FOUR RIGOROUS PHASES
          </span>
        </div>

        {/* 4 Steps Grid — 1 Sentence Each */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((st, idx) => (
            <motion.div
              key={st.num}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col justify-between p-7 bg-[#0a0c10] border border-white/10 rounded-[12px] shadow-2xl hover:border-[#ef233c]/60 transition-colors"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <span className="font-mono text-[14px] font-bold text-[#ef233c]">
                    [{st.num}]
                  </span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                    PHASE
                  </span>
                </div>

                <div className="flex flex-col gap-2.5">
                  <h3 className="font-display font-semibold text-[22px] text-white tracking-tight">
                    {st.title}
                  </h3>
                  <p className="font-sans text-[13.5px] leading-relaxed text-white/70">
                    {st.statement}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/40">
                <span>STAGE COMPLETE</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#10B981]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default VisualProcess
