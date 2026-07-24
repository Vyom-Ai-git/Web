import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export const SearchExperience: React.FC = () => {
  const [query, setQuery] = useState('')

  const suggestions = [
    'Modernize our operations',
    'Build an enterprise AI roadmap',
    'Scale customer acquisition',
    'Design autonomous workflows',
  ]

  return (
    <div className="w-full max-w-[540px] mx-auto md:mx-0 select-none pointer-events-auto">
      {/* Capsule Container from Mentality spec */}
      <div className="bg-white rounded-[6px] border border-black/[0.05] p-1 pl-4 flex items-center shadow-sm w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask Vyoma anything..."
          className="w-full bg-transparent border-none outline-none font-sans text-body-base text-[#1a1a1a] placeholder-black/30 text-[14px] md:text-[15px]"
        />
        
        {/* Trailing action button */}
        <button 
          className="bg-[#1a1a1a] hover:bg-[#333] text-white w-9 h-9 rounded-full relative flex items-center justify-center transition-colors shrink-0 outline-none border-none cursor-pointer"
          aria-label="Submit search query"
        >
          <ArrowRight className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Suggestion list */}
      <div className="mt-4 flex flex-wrap gap-2 justify-start">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => setQuery(suggestion)}
            className="px-3 py-1.5 rounded-pill border border-black/[0.05] bg-white/40 hover:bg-white hover:border-black/10 text-small text-[#8e8e8e] hover:text-[#1a1a1a] transition-all duration-fast ease-gentle cursor-pointer text-[12px] font-sans"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchExperience
