import React from 'react'

export const SignatureOrbital: React.FC = () => {
  return (
    <span 
      className="inline-flex items-center justify-center w-[28px] md:w-[42px] lg:w-[62px] h-[16px] md:h-[22px] lg:h-[26px] border-[2px] border-[#1a1a1a] rounded-full relative select-none mx-1 md:mx-2 overflow-hidden align-middle bg-white/20"
      role="img"
      aria-label="Vyoma Inline Signature Pill"
    >
      <svg
        viewBox="0 0 40 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute inset-0"
      >
        {/* Orbit track */}
        <ellipse 
          cx="20" 
          cy="10" 
          rx="11" 
          ry="5" 
          className="stroke-[#1a1a1a]/15" 
          strokeWidth="0.75" 
        />
        
        {/* Spinning satellite element */}
        <g 
          className="animate-[spin_5s_linear_infinite]" 
          style={{ transformOrigin: '20px 10px' }}
        >
          <circle 
            cx="31" 
            cy="10" 
            r="1.2" 
            className="fill-[#9fff00] stroke-[#1a1a1a]/40" 
            strokeWidth="0.5" 
          />
        </g>
      </svg>
      
      {/* Central tiny solid black dot */}
      <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1a1a1a] relative z-10" />
    </span>
  )
}

export default SignatureOrbital
