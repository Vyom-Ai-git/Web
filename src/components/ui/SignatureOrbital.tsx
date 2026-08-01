import React from 'react'
import { useExperienceMode } from '@/hooks/useExperienceMode'

export const SignatureOrbital: React.FC = () => {
  const { mode } = useExperienceMode()

  // Dynamic orbital attributes based on the current experience mode
  const getOrbitalConfig = () => {
    switch (mode) {
      case 'Enterprise':
        return {
          satelliteColor: '#1A1A1A',
          spinClass: 'animate-[spin_10s_linear_infinite]',
          satelliteCount: 1,
          pulse: false,
        }
      case 'Growth':
        return {
          satelliteColor: '#8FBF3C',
          spinClass: 'animate-[spin_2.5s_linear_infinite]',
          satelliteCount: 2,
          pulse: true,
        }
      case 'Intelligence':
      default:
        return {
          satelliteColor: '#8FBF3C',
          spinClass: 'animate-[spin_5s_linear_infinite]',
          satelliteCount: 1,
          pulse: true,
        }
    }
  }

  const config = getOrbitalConfig()

  return (
    <span
      className={`inline-flex items-center justify-center w-[28px] md:w-[42px] lg:w-[62px] h-[16px] md:h-[22px] lg:h-[26px] border-[2px] border-[#1a1a1a] rounded-full relative select-none mx-1 md:mx-2 overflow-hidden align-middle bg-white/20 transition-all duration-[var(--nav-transition)] ${config.pulse ? 'ring-1 ring-[#8FBF3C]/25' : ''
        }`}
      role="img"
      aria-label="Vyom Inline Signature Pill"
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

        {/* Spinning satellite element(s) */}
        <g
          className={config.spinClass}
          style={{ transformOrigin: '20px 10px' }}
        >
          <circle
            cx="31"
            cy="10"
            r="1.2"
            fill={config.satelliteColor}
            className="stroke-[#1a1a1a]/40"
            strokeWidth="0.5"
          />
          {config.satelliteCount === 2 && (
            <circle
              cx="9"
              cy="10"
              r="1.2"
              fill={config.satelliteColor}
              className="stroke-[#1a1a1a]/40"
              strokeWidth="0.5"
            />
          )}
        </g>
      </svg>

      {/* Central tiny solid black dot */}
      <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1a1a1a] relative z-10" />
    </span>
  )
}

export default SignatureOrbital
