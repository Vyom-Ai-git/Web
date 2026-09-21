import React from 'react'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ArrowUpRight } from 'lucide-react'
import { OnnrevSymbolMark } from '@/components/shared/OnnrevLogo'

export const VisualShowcase: React.FC = () => {
  const reducedMotion = useReducedMotion()

  return (
    <section
      id="visual-showcase"
      className="w-full bg-[#090B10] py-24 sm:py-32 md:py-36 text-white relative z-20 select-none overflow-hidden border-t border-white/[0.08]"
      role="region"
      aria-label="ONNREV Visual Architecture Showcase"
    >
      {/* Precision grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-15 bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 relative z-10">
        
        {/* Showcase Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.1] pb-6 mb-12 gap-4">
          <div className="flex flex-col gap-2 text-left">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#ef233c] uppercase font-semibold">
              // [ 05 / 12 ] VISUAL SHOWCASE
            </span>
            <h2 className="font-display font-medium text-[32px] md:text-[44px] text-white tracking-tight">
              Architectural Rigor in Action
            </h2>
          </div>
          <span className="text-[12px] font-mono text-zinc-400 tracking-wider text-left md:text-right">
            LIVE SYSTEM SCHEMATICS & INGESTION TELEMETRY
          </span>
        </div>

        {/* Cinematic Viewport Frame */}
        <div className="w-full rounded-[16px] border border-white/[0.12] bg-[#07090e] p-6 md:p-10 relative overflow-hidden shadow-2xl">
          
          {/* Subtle radial ambient accent */}
          <div className="absolute -right-20 -top-20 w-[400px] h-[400px] bg-[#ef233c]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Frame Telemetry Header */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/[0.08] pb-4 mb-8 text-[11px] font-mono text-white/60">
            <div className="flex items-center gap-3">
              <OnnrevSymbolMark size={20} />
              <span className="text-white font-semibold">INFRASTRUCTURE TELEMETRY CONSOLE</span>
              <span className="text-white/30">//</span>
              <span className="text-red-400">CLUSTER: PRODUCTION_US_EAST</span>
            </div>
            <div className="flex items-center gap-4">
              <span>LATENCY: 8.4ms</span>
              <span className="text-[#ef233c] font-semibold">UPTIME: 99.99%</span>
            </div>
          </div>

          {/* Schematic Diagram & Overlay Visuals */}
          <div className="grid grid-cols-12 gap-y-8 lg:gap-x-8 items-center">
            
            {/* Left: Vector Schematic Illustration */}
            <div className="col-span-12 lg:col-span-8 flex items-center justify-center p-4 md:p-8 bg-black/40 rounded-[10px] border border-white/[0.06]">
              <svg
                viewBox="0 0 600 300"
                className="w-full h-auto max-h-[360px] stroke-white/20 fill-none select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Horizontal flow highways */}
                <line x1="40" y1="75" x2="560" y2="75" strokeWidth="0.75" strokeDasharray="4 4" className="stroke-white/10" />
                <line x1="40" y1="150" x2="560" y2="150" strokeWidth="1" className="stroke-white/15" />
                <line x1="40" y1="225" x2="560" y2="225" strokeWidth="0.75" strokeDasharray="4 4" className="stroke-white/10" />

                {/* Vertical node dividers */}
                <line x1="160" y1="40" x2="160" y2="260" strokeWidth="0.75" className="stroke-white/10" />
                <line x1="300" y1="40" x2="300" y2="260" strokeWidth="0.75" className="stroke-white/10" />
                <line x1="440" y1="40" x2="440" y2="260" strokeWidth="0.75" className="stroke-white/10" />

                {/* Core Ingestion Stage Box */}
                <rect x="60" y="115" width="100" height="70" rx="6" className="fill-[#090B10] stroke-white/30" />
                <text x="110" y="145" textAnchor="middle" className="fill-white font-mono text-[10px]">INGRESS</text>
                <text x="110" y="162" textAnchor="middle" className="fill-[#ef233c] font-mono text-[8.5px]">100M EVENTS/D</text>

                {/* Cognitive Core Engine Box */}
                <rect x="250" y="95" width="100" height="110" rx="6" className="fill-[#090B10] stroke-[#ef233c]" strokeWidth="1.5" />
                <text x="300" y="135" textAnchor="middle" className="fill-white font-mono text-[11px] font-bold">COGNITIVE CORE</text>
                <text x="300" y="152" textAnchor="middle" className="fill-[#ef233c] font-mono text-[8.5px]">RAG VECTOR PIPELINE</text>
                <circle cx="300" cy="180" r="4" className="fill-[#ef233c]" />

                {/* Autonomous Output Stage Box */}
                <rect x="440" y="115" width="100" height="70" rx="6" className="fill-[#090B10] stroke-white/30" />
                <text x="490" y="145" textAnchor="middle" className="fill-white font-mono text-[10px]">DISPATCH</text>
                <text x="490" y="162" textAnchor="middle" className="fill-[#ef233c] font-mono text-[8.5px]">SUB-10MS LATENCY</text>

                {/* Animated data packet dots */}
                <motion.circle
                  cx={160}
                  cy={150}
                  r={3}
                  className="fill-[#ef233c]"
                  animate={reducedMotion ? {} : { x: [0, 90] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                />
                <motion.circle
                  cx={350}
                  cy={150}
                  r={3}
                  className="fill-white"
                  animate={reducedMotion ? {} : { x: [0, 90] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'linear', delay: 1 }}
                />
              </svg>
            </div>

            {/* Right: Technical Metadata Dossier */}
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-between gap-6 text-left">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-mono tracking-widest text-[#ef233c] uppercase font-semibold">
                  ACTIVE PLATFORM SPECIFICATION
                </span>
                <h3 className="font-display font-medium text-[22px] text-white tracking-tight leading-snug">
                  High-Throughput Autonomous Orchestration Mesh
                </h3>
                <p className="font-sans text-[13.5px] leading-relaxed text-zinc-300">
                  Custom-engineered execution boundaries coordinating model inference, asynchronous background tasks, and zero-knowledge data synchronization.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-white/[0.08]">
                <div className="flex items-center justify-between text-[12px] font-mono text-zinc-400">
                  <span>DEPLOYMENT:</span>
                  <span className="text-white">DEDICATED CLIENT VPC</span>
                </div>
                <div className="flex items-center justify-between text-[12px] font-mono text-zinc-400">
                  <span>STATE MANAGEMENT:</span>
                  <span className="text-white">TEMPORAL + REDIS</span>
                </div>
                <div className="flex items-center justify-between text-[12px] font-mono text-zinc-400">
                  <span>AUDIT TRACE:</span>
                  <span className="text-[#ef233c]">100% CRYPTOGRAPHIC LOG</span>
                </div>
              </div>

              <a
                href="#work"
                className="inline-flex items-center gap-2 text-[13px] font-mono text-[#ef233c] hover:text-white transition-colors group mt-2"
              >
                <span>INSPECT PRODUCTION METRICS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default VisualShowcase
