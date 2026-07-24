import React from 'react'

interface VyomaLogoProps {
  /** 'mark' = ∞ symbol only
   *  'full' = ∞ stacked above "VYOM AI" text
   *  'inline' = ∞ + "VYOM AI" side-by-side (default, used in Navbar) */
  variant?: 'mark' | 'full' | 'inline'
  height?: number
  color?: string
  className?: string
}

/**
 * The centre-line path of the infinity symbol.
 *
 * ViewBox: "0 0 100 50"
 * Crossing centre: (50, 25)
 *
 * Construction:
 *  - Each loop is nearly circular (width≈42 : height≈36 → 1.17:1)
 *  - Tangent at crossing is ≈±30° from horizontal, producing a clean
 *    diagonal X crossing matching the reference logo.
 *
 * Segment breakdown:
 *  1. Upper-left arc of left loop:  (50,25) → (8,25)   via cp(38,18),(14,7)
 *  2. Lower-left arc of left loop:  (8,25)  → (50,25)  via cp(14,43),(38,32)
 *  3. Upper-right arc of right loop:(50,25) → (92,25)  via cp(62,18),(86,7)
 *  4. Lower-right arc of right loop:(92,25) → (50,25)  via cp(86,43),(62,32)
 *
 * Tangent directions at (50,25):
 *  - Seg1 exits: toward (38,18) → upper-left  (-12,-7)
 *  - Seg2 arrives: from (38,32) → upper-right  (+12,-7)  ← smooth into Seg3
 *  - Seg3 exits: toward (62,18) → upper-right  (+12,-7)
 *  - Seg4 arrives: from (62,32) → upper-left  (-12,-7)   ← smooth into Seg1 via Z
 *
 * The two crossing strokes are ≈60° apart, exactly replicating the X crossing
 * seen in the reference mark.
 */
const INFINITY_PATH =
  'M 50,25 C 38,18 14,7 8,25 C 14,43 38,32 50,25 C 62,18 86,7 92,25 C 86,43 62,32 50,25 Z'

interface MarkProps {
  color: string
  strokeWidth: number
}

const InfinityMark: React.FC<MarkProps> = ({ color, strokeWidth }) => (
  <path
    d={INFINITY_PATH}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
)

export const VyomaLogo: React.FC<VyomaLogoProps> = ({
  variant = 'inline',
  height = 32,
  color = '#1a1a1a',
  className = '',
}) => {
  // ─── Mark only ─────────────────────────────────────────────────────────────
  if (variant === 'mark') {
    const w = height * 2 // viewBox 100:50 = 2:1
    return (
      <svg
        width={w}
        height={height}
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Vyom AI logo mark"
        className={className}
        role="img"
      >
        <InfinityMark color={color} strokeWidth={6} />
      </svg>
    )
  }

  // ─── Full stacked (∞ above "VYOM AI") ─────────────────────────────────────
  if (variant === 'full') {
    // viewBox 100 wide × 78 tall: mark in top 50 units, text baseline at 72
    const w = height * (100 / 78)
    return (
      <svg
        width={w}
        height={height}
        viewBox="0 0 100 78"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Vyom AI"
        className={className}
        role="img"
      >
        {/* Infinity mark centred horizontally in the 100-wide viewBox */}
        <InfinityMark color={color} strokeWidth={6} />

        {/* Wordmark — note x-offset to visually centre "VYOM AI" with tracking */}
        <text
          x="50"
          y="72"
          textAnchor="middle"
          fontFamily="'Outfit', 'Inter', sans-serif"
          fontSize="11"
          letterSpacing="4"
          fontWeight="400"
          fill={color}
        >
          VYOM AI
        </text>
      </svg>
    )
  }

  // ─── Inline: mark + wordmark side-by-side (default for Navbar) ─────────────
  const markH = height
  const markW = height * 2 // 2:1 aspect ratio

  return (
    <span
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label="Vyom AI"
    >
      {/* ∞ mark */}
      <svg
        width={markW}
        height={markH}
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <InfinityMark color={color} strokeWidth={6} />
      </svg>

      {/* Wordmark */}
      <span
        style={{
          color,
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 500,
          fontSize: `${Math.round(height * 0.58)}px`,
          letterSpacing: '0.2em',
          lineHeight: 1,
        }}
      >
        VYOM AI
      </span>
    </span>
  )
}

export default VyomaLogo
