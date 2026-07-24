import React, { useState } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

export const FloatingPill: React.FC = () => {
  const modes = ['Enterprise', 'Intelligence', 'Growth'] as const
  const [selectedMode, setSelectedMode] = useState<typeof modes[number]>('Intelligence')

  return (
    <div 
      className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-1.5 p-1 rounded-[18px] bg-white/20 border border-white/40 backdrop-blur-[12px] shadow-glass select-none pointer-events-auto"
      role="radiogroup"
      aria-label="Experience Mode Selector"
    >
      {modes.map((mode) => {
        const isSelected = selectedMode === mode
        return (
          <button
            key={mode}
            onClick={() => setSelectedMode(mode)}
            role="radio"
            aria-checked={isSelected}
            className={cn(
              "relative px-4 py-2.5 rounded-[14px] text-[10px] uppercase font-bold tracking-widest font-sans transition-colors duration-300 cursor-pointer outline-none border-none text-left w-28",
              isSelected ? "text-primary" : "text-primary/45 hover:text-primary/80"
            )}
          >
            {isSelected && (
              <motion.div
                layoutId="active-pill-bg"
                className="absolute inset-0 bg-white/70 rounded-[14px] shadow-soft z-0"
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 28
                }}
              />
            )}
            <span className="relative z-10">{mode}</span>
          </button>
        )
      })}
    </div>
  )
}

export default FloatingPill
