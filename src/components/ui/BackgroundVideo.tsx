import React from 'react'

export const BackgroundVideo: React.FC = () => {
  return (
    <div className="absolute top-[15vh] sm:top-[20vh] left-0 w-full h-[95vh] sm:h-[120vh] z-0 pointer-events-none overflow-hidden select-none">
      {/* HTML5 Video element streaming the exact CloudFront URL */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="w-full h-full object-cover opacity-100"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_132049_036591b8-6e92-4760-b94c-a7ea6eef315c.mp4"
      />

      {/* Top linear gradient mask to smoothly blend the video into the base #EDEEF5 background */}
      <div className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-b from-bg-base to-transparent" />
      
      {/* Bottom overlay feathering */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-base to-transparent" />

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
