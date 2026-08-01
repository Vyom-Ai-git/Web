import React from 'react'

export const BackgroundVideo: React.FC = () => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    // Defer loading video resources until initial page render finishes
    const timer = setTimeout(() => setMounted(true), 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="absolute top-[10vh] sm:top-[12vh] left-0 md:left-auto md:right-0 w-full md:w-[60%] h-[95vh] sm:h-[120vh] z-0 pointer-events-none overflow-hidden select-none bg-[#EDEEF5]">
      {/* HTML5 Video element streaming the exact CloudFront URL (lazy mounted) */}
      {mounted && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="w-full h-full object-cover opacity-70 transition-opacity duration-700"
        >
          <source 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_132049_036591b8-6e92-4760-b94c-a7ea6eef315c.mp4" 
            type="video/mp4" 
          />
        </video>
      )}

      {/* Top linear gradient mask to smoothly blend the video into the base #EDEEF5 background */}
      <div className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-b from-bg-base to-transparent" />
      
      {/* Bottom overlay feathering */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-base to-transparent" />

      {/* Left side feather gradient for desktop text readability */}
      <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-bg-base to-transparent hidden md:block" />

      {/* Atmospheric Micro Grain Overlay */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="micro-grain">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.75" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
          <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#micro-grain)" />
      </svg>
    </div>
  )
}

export default BackgroundVideo
