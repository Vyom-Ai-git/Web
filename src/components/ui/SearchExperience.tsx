import React, { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { useExperienceMode } from '@/hooks/useExperienceMode'
import { cn } from '@/lib/utils'

export const SearchExperience: React.FC = () => {
  const { mode } = useExperienceMode()
  const [query, setQuery] = useState('')
  const [typedPlaceholder, setTypedPlaceholder] = useState('')
  const [focusedIndex, setFocusedIndex] = useState<number>(-1)

  const placeholders = {
    Enterprise: 'Design an enterprise transformation roadmap...',
    Intelligence: 'Ask ONNREV about enterprise AI...',
    Growth: 'How can we accelerate revenue growth?',
  }

  const suggestions = {
    Enterprise: [
      'Assess legacy architecture',
      'Design strategy roadmap',
      'Create governance framework',
    ],
    Intelligence: [
      'Build RAG pipeline',
      'Design autonomous agents',
      'Compare LLM models',
    ],
    Growth: [
      'Optimize conversion flow',
      'Scale revenue loops',
      'Reduce acquisition costs',
    ],
  }

  // Typewriter effect for search placeholder on mode switch
  useEffect(() => {
    const text = placeholders[mode]
    let isCancelled = false
    let currentText = ''
    let idx = 0

    setTypedPlaceholder('')

    const type = () => {
      if (isCancelled) return
      if (idx < text.length) {
        currentText += text[idx]
        setTypedPlaceholder(currentText)
        idx++
        setTimeout(type, 25) // Typing speed (25ms per character)
      }
    }

    const startTimeout = setTimeout(type, 150)

    return () => {
      isCancelled = true
      clearTimeout(startTimeout)
    }
  }, [mode])

  // Reset focus index on mode switch
  useEffect(() => {
    setFocusedIndex(-1)
  }, [mode])

  const activeSuggestions = suggestions[mode] || []

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (activeSuggestions.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setFocusedIndex((prev) => (prev + 1 < activeSuggestions.length ? prev + 1 : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFocusedIndex((prev) => (prev - 1 >= 0 ? prev - 1 : activeSuggestions.length - 1))
    } else if (e.key === 'Enter') {
      if (focusedIndex >= 0 && focusedIndex < activeSuggestions.length) {
        e.preventDefault()
        setQuery(activeSuggestions[focusedIndex])
        setFocusedIndex(-1)
      }
    } else if (e.key === 'Escape') {
      e.preventDefault()
      setFocusedIndex(-1)
    }
  }

  return (
    <div className="w-full max-w-[540px] mx-auto md:mx-0 select-none pointer-events-auto">
      {/* Capsule Container with soft glow and borders interpolation */}
      <div className="bg-white rounded-[6px] border border-black/[0.06] p-1.5 pl-4 flex items-center shadow-soft w-full transition-all duration-300 focus-within:border-black/30 focus-within:ring-2 focus-within:ring-[#8FBF3C]/25 focus-within:shadow-[0_0_20px_rgba(143,191,60,0.12)]">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setFocusedIndex(-1)
          }}
          onKeyDown={handleKeyDown}
          placeholder={typedPlaceholder}
          className="w-full bg-transparent border-none outline-none font-sans text-body-base text-[#1a1a1a] placeholder-black/30 text-[14px] md:text-[15px]"
        />

        {/* Trailing action button with scale and arrow movement hover animations */}
        <button
          className="bg-[#1a1a1a] hover:bg-[#333] text-white w-9 h-9 rounded-full relative flex items-center justify-center transition-all duration-300 shrink-0 outline-none border-none cursor-pointer group hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#8FBF3C] focus-visible:ring-offset-2"
          aria-label="Submit search query"
        >
          <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Suggestion list */}
      <div className="mt-4 flex flex-wrap gap-2 justify-start min-h-[34px]">
        {activeSuggestions.map((suggestion, index) => {
          const isFocused = focusedIndex === index
          return (
            <button
              key={suggestion}
              onClick={() => {
                setQuery(suggestion)
                setFocusedIndex(-1)
              }}
              className={cn(
                "px-3 py-1.5 rounded-pill border transition-all duration-fast ease-gentle cursor-pointer text-[12px] font-sans hover:scale-[1.02]",
                isFocused
                  ? "bg-white border-black/20 text-[#1a1a1a] ring-1 ring-black/5 scale-[1.02]"
                  : "border-black/[0.05] bg-white/40 text-[#8e8e8e] hover:bg-white hover:border-black/10 hover:text-[#1a1a1a]"
              )}
            >
              {suggestion}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default SearchExperience
