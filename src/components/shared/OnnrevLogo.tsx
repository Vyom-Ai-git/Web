import React from 'react'

interface OnnrevLogoProps {
  /**
   * 'mark' = Official chrome-red emblem mark only (no text)
   * 'inline' = Mark + "ONNREV" wordmark side-by-side (default for Navbar)
   * 'full' = Stacked mark above "ONNREV" and descriptor (Footer and hero)
   */
  variant?: 'mark' | 'full' | 'inline'
  height?: number
  color?: string
  className?: string
  accentColor?: string
}

/**
 * Official ONNREV Emblem Mark without text.
 * Uses high-resolution transparent asset /onnrev-symbol.png with styling.
 */
export const OnnrevSymbolMark: React.FC<{ size?: number; className?: string }> = ({
  size = 32,
  className = '',
}) => (
  <img
    src="/onnrev-symbol.png"
    alt="ONNREV Emblem"
    width={size}
    height={Math.round(size * (322 / 355))}
    className={`inline-block object-contain transition-transform duration-300 group-hover:scale-105 select-none ${className}`}
    style={{
      height: `${size}px`,
      width: 'auto',
      filter: 'drop-shadow(0 0 12px rgba(239, 35, 60, 0.35))',
    }}
    loading="eager"
  />
)

export const OnnrevLogo: React.FC<OnnrevLogoProps> = ({
  variant = 'inline',
  height = 32,
  color = '#FFFFFF',
  className = '',
}) => {
  // ─── Mark Only: Logo without text ─────────────────────────────────────────
  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center ${className}`} aria-label="ONNREV Brand Mark">
        <OnnrevSymbolMark size={height} />
      </div>
    )
  }

  // ─── Full Stacked: Mark above "ONNREV" + Descriptor ───────────────────────
  if (variant === 'full') {
    return (
      <div
        className={`inline-flex flex-col items-center gap-2.5 ${className}`}
        aria-label="ONNREV Enterprise Systems"
      >
        <OnnrevSymbolMark size={Math.round(height * 1.1)} />
        <div className="flex flex-col items-center">
          <span
            style={{
              color,
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: `${Math.round(height * 0.42)}px`,
              letterSpacing: '0.22em',
              lineHeight: 1.1,
            }}
          >
            ONNREV
          </span>
          <span
            className="text-[9px] font-sans font-semibold tracking-[0.25em] uppercase opacity-60 mt-0.5"
            style={{ color }}
          >
            Systems Architecture
          </span>
        </div>
      </div>
    )
  }

  // ─── Inline: Mark + Wordmark side-by-side (Navbar default) ─────────────────
  return (
    <span
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label="ONNREV"
    >
      <OnnrevSymbolMark size={height} />
      <span className="flex flex-col text-left">
        <span
          style={{
            color,
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: `${Math.round(height * 0.54)}px`,
            letterSpacing: '0.18em',
            lineHeight: 1,
          }}
        >
          ONNREV
        </span>
      </span>
    </span>
  )
}

export default OnnrevLogo
