import React from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { useExperienceMode } from '@/hooks/useExperienceMode'

export const FloatingPill: React.FC = () => {
  const modes = ['Enterprise', 'Intelligence', 'Growth'] as const
  const { mode: selectedMode, setMode } = useExperienceMode()

  return (
    <div 
      className="fixed bottom-6 right-6 lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto z-40 flex flex-row lg:flex-col gap-1.5 p-1 rounded-[18px] bg-white/20 border border-white/40 backdrop-blur-[12px] shadow-glass select-none pointer-events-auto"
      role="radiogroup"
      aria-label="Experience Mode Selector"
    >
      {modes.map((mode, idx) => {
        const isSelected = selectedMode === mode
        return (
          <button
            key={mode}
            onClick={() => setMode(mode)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault()
                const nextIndex = (idx + 1) % modes.length
                setMode(modes[nextIndex])
                const buttons = e.currentTarget.parentElement?.querySelectorAll('button')
                buttons?.[nextIndex]?.focus()
              } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault()
                const prevIndex = (idx - 1 + modes.length) % modes.length
                setMode(modes[prevIndex])
                const buttons = e.currentTarget.parentElement?.querySelectorAll('button')
                buttons?.[prevIndex]?.focus()
              }
            }}
            role="radio"
            aria-checked={isSelected}
            tabIndex={isSelected ? 0 : -1}
            className={cn(
              "relative px-3 py-2 lg:px-4 lg:py-2.5 rounded-[14px] text-[9.5px] lg:text-[10px] uppercase font-bold tracking-widest font-sans transition-colors duration-300 cursor-pointer outline-none border-none text-center lg:text-left w-24 lg:w-28",
              "focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-white/40",
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
