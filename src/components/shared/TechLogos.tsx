import React from 'react'

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

// 1. React Logo (Official brand blue)
export const ReactLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" {...props}>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
)

// 2. Next.js Logo (Clean black circle & white path)
export const NextjsLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 180 180" fill="none" {...props}>
    <circle cx="90" cy="90" r="90" fill="#000000" />
    <path d="M149.508 157.52L69.142 54H54v72h14.4V78.212l71.206 91.802a89.57 89.57 0 009.902-12.494z" fill="#FFFFFF" />
    <rect x="115.2" y="54" width="14.4" height="72" fill="#FFFFFF" />
  </svg>
)

// 3. TypeScript Logo (Official TypeScript blue square with white lettering)
export const TypescriptLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" {...props}>
    <rect width="100" height="100" rx="8" fill="#3178C6" />
    <path d="M42.5 73.7h-7.8V35h30.1v6.7H42.5v10.5H59v6.7H42.5v14.8zM80.2 41.7H71v32h-7.8V41.7h-9.2v-6.7h26.2v6.7z" fill="#FFFFFF" />
  </svg>
)

// 4. Python Logo (Blue and Yellow branding snakes)
export const PythonLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 110 110" fill="none" {...props}>
    <path d="M55 2C32.1 2 24.3 8.9 24.3 27.2v11h31.2v4.4H11c-9.1 0-9 16.5-9 22.1 0 5.6-.2 20.9 9 20.9h13.3V67.8c0-18.3 11-26.6 30.7-26.6H86v-14c0-18.3-7.8-25.2-31-25.2zm-12.8 11a5.5 5.5 0 110 11 5.5 5.5 0 010-11z" fill="#3776AB" />
    <path d="M55 108c22.9 0 30.7-6.9 30.7-25.2v-11H54.5v-4.4h44.5c9.1 0 9-16.5 9-22.1 0-5.6.2-20.9-9-20.9H85.7v17.8c0 18.3-11 26.6-30.7 26.6H24v14c0 18.3 7.8 25.2 31 25.2zm12.8-11a5.5 5.5 0 110-11 5.5 5.5 0 010 11z" fill="#FFD343" />
  </svg>
)

// 5. OpenAI Logo (Official Green / Emerald)
export const Openailogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10A37F" strokeWidth="1.5" {...props}>
    <path d="M21.73 10.3A5 5 0 0018 5.5a5 5 0 00-6.36-2.5A5 5 0 006 4.73 5 5 0 002.27 9.5a5 5 0 002.5 6.36A5 5 0 006 18.5a5 5 0 006.36 2.5 5 5 0 005.64-1.73 5 5 0 003.73-4.77 5 5 0 00-2.5-6.36zM12 9.5a2.5 2.5 0 11-2.5 2.5A2.5 2.5 0 0112 9.5zm-5 5.5l5-3 5 3m-5-8.5v5.5" />
  </svg>
)

// 6. Anthropic Logo (Official Terracotta / Coral)
export const AnthropicLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#CC5F40" {...props}>
    <path d="M16.9 2.5L21.5 21h-3.9l-1-4.2H8.3L7.3 21H3.5L8.1 2.5h8.8zm-1.8 11.2l-2.6-10.2L9.9 13.7h5.2z" />
  </svg>
)

// 7. Google AI Logo (Google Colorful Sparkle)
export const GoogleaiLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <g>
      <path d="M12 2L14.7 9.3L22 12L14.7 14.7L12 22L9.3 14.7L2 12L9.3 9.3L12 2Z" fill="url(#google-ai-gradient)" />
    </g>
    <defs>
      <linearGradient id="google-ai-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4285F4" />
        <stop offset="30%" stopColor="#EA4335" />
        <stop offset="70%" stopColor="#FBBC05" />
        <stop offset="100%" stopColor="#34A853" />
      </linearGradient>
    </defs>
  </svg>
)

// 8. Meta AI Logo (Meta Infinity Loop Gradient)
export const MetaaiLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M16.36 7.64c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm-8.72 0C5.16 7.64 3.14 9.66 3.14 12.14s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z" stroke="url(#meta-ai-gradient)" strokeWidth="1.8" />
    <path d="M7.64 16.64c2.83 0 5.14-2.31 5.14-5.14S10.47 6.36 7.64 6.36s-5.14 2.31-5.14 5.14 2.31 5.14 5.14 5.14zm8.72 0c2.83 0 5.14-2.31 5.14-5.14s-2.31-5.14-5.14-5.14-5.14 2.31-5.14 5.14 2.31 5.14 5.14 5.14z" stroke="url(#meta-ai-gradient)" strokeWidth="1.8" />
    <defs>
      <linearGradient id="meta-ai-gradient" x1="3" y1="6" x2="21" y2="17" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0081FB" />
        <stop offset="50%" stopColor="#8c3ff3" />
        <stop offset="100%" stopColor="#ea2c82" />
      </linearGradient>
    </defs>
  </svg>
)

// 9. AWS Logo (Orange Smile and Dark Charcoal Text)
export const AwsLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6.3 15.3c-.6 0-1 .2-1.3.5-.3.2-.4.6-.4 1s.1.8.4 1c.2.2.6.3 1 .3c.5 0 .9-.1 1.2-.4.3-.3.5-.6.6-1.1v-.3c-.2-.1-.7-.1-1.5-.1zm6.7-5.5h-1.5l-2.4 8.7h1.4l.6-2.2h2.8l.6 2.2h1.4l-2.9-8.7zm-2.8 5.3l.9-3.2l1 3.2h-1.9zm11 1.5c0-.6-.1-1-.3-1.4-.2-.3-.6-.6-1-.8-.4-.2-1-.3-1.6-.4-.7-.1-1.3-.2-1.8-.2-.5-.1-.8-.2-1-.4-.1-.1-.2-.3-.2-.5 0-.4.3-.7.8-.7.4 0 .7.1.9.4.1.2.2.5.2.9h1.3c0-.7-.2-1.3-.6-1.7s-1-.6-1.8-.6c-.8 0-1.4.2-1.8.6s-.6 1-.6 1.7c0 .5.1.9.3 1.2.2.3.5.5.9.7.4.2 1 .3 1.7.4.7.1 1.2.2 1.5.3.3.1.5.2.6.4.1.1.2.3.2.5 0 .4-.3.7-.9.7s-.9-.2-1.1-.5c-.2-.3-.2-.7-.2-1.2h-1.3c0 .8.2 1.4.7 1.8s1.1.6 2 .6c.8 0 1.5-.2 1.9-.6s.6-1 .6-1.8z" fill="#232F3E" />
    <path d="M2 19.8c3.9 2.5 8.9 2.8 13.8 1.1 1.1-.4 2.2-.9 3.2-1.6l.8.9c-1.1.8-2.3 1.4-3.6 1.9-5.4 1.9-10.9 1.5-15.1-1.3l.9-1z" fill="#FF9900" />
    <path d="M19.9 17.5c.1.3-.1.6-.4.7-.7.2-1.5.4-2.2.5-.2 0-.4-.2-.3-.4l.7-2.6c.1-.3.4-.3.5-.1l1.7 1.9z" fill="#FF9900" />
  </svg>
)

// 10. Azure Logo (Official Blue Trapezoids)
export const AzureLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M5.23 20.3h7.24l-3.32-6.52H1.91l3.32 6.52z" fill="#1172B8" />
    <path d="M16.43 7.52L9.19 19.3h7.24l7.24-11.78h-7.24z" fill="#00BCF2" />
    <path d="M10.29 7.52L1.91 19.3h7.24l4.31-11.78H10.29z" fill="#0078D4" />
  </svg>
)

// 11. Google Cloud Logo (Colored Hexagon)
export const GooglecloudLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M19.35 10.04c-.38-2.6-2.6-4.54-5.35-4.54c-1.4 0-2.65.55-3.6 1.45L12 8.5L16 11.5l3.35-1.46z" fill="#4285F4" />
    <path d="M12 4c-4.4 0-8 3.6-8 8c0 .35.03.7.08 1.04L8 10.5l4-2l0-4.5z" fill="#EA4335" />
    <path d="M6 20h13c2.76 0 5-2.24 5-5c0-1.85-1-3.46-2.5-4.3L17.5 13L12 15.5l-6 4.5z" fill="#34A853" />
    <path d="M4.08 13.04C4.03 12.7 4 12.35 4 12c0-2.2 1.1-4.14 2.8-5.3L6 10.5l-1.92 2.54z" fill="#FBBC05" />
  </svg>
)

// 12. Docker Logo (Official Docker Blue Whale)
export const DockerLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M1.9 12.1c0 3.2 2.6 5.8 5.8 5.8h11c1.9 0 3.5-1.6 3.5-3.5c0-2.3-1-3.6-2.5-4.2c-.4-.2-.8-.3-1.5-.3H5.8c-.6 0-1 .4-1 1v1.1h1.5v-1.1h1.1v1.1h1.5v-1.1h1.1v1.1h1.5v-1.1h1.1v1.1h1.5v-1.1h1.1v1.1H18c.9 0 1.6-.7 1.6-1.6v-.7c0-.2.2-.4.4-.4h.4c.7 0 1.2.5 1.2 1.2c0 .9-.7 1.6-1.6 1.6H1.9v.7z" fill="#2496ED" />
    <rect x="5.8" y="7.5" width="2" height="2" rx="0.3" fill="#2496ED" />
    <rect x="8.3" y="7.5" width="2" height="2" rx="0.3" fill="#2496ED" />
    <rect x="10.8" y="7.5" width="2" height="2" rx="0.3" fill="#2496ED" />
    <rect x="8.3" y="5" width="2" height="2" rx="0.3" fill="#2496ED" />
  </svg>
)

// 13. Kubernetes Logo (Official blue heptagon)
export const KubernetesLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2L3.5 5.5v9.5L12 22l8.5-7V5.5L12 2z" fill="#326CE5" />
    <path d="M12 5v13.5M6.5 8.5l11 7M17.5 8.5l-11 7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="11.75" r="2.5" fill="#FFFFFF" />
  </svg>
)

// 14. PostgreSQL Logo (Blue Elephant)
export const PostgresqlLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.14 2.5 7.68 6.13 9.2l-.1-1.3c.7.2 1.5.3 2.3.3c3.8 0 7.2-2.3 8.3-5.8c.8-2.6.2-5.4-1.6-7.3C15.8 5.6 13.9 5 12 5c-1.1 0-2.2.2-3.2.6C8 4.2 9.1 3 11 2.3l1-.3z" fill="#336791" />
    <path d="M12.5 9.5c0-.8-.7-1.5-1.5-1.5H9v4h2c.8 0 1.5-.7 1.5-1.5v-1z" fill="#FFFFFF" />
  </svg>
)

// 15. MongoDB Logo (Green Leaf)
export const MongodbLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 1.5C10.7 4 9.4 8 9.4 12c0 4 1.3 8 2.6 10.5c1.3-2.5 2.6-6.5 2.6-10.5c0-4-1.3-8-2.6-10.5z" fill="#47A248" />
    <path d="M12 1.5c-.2.5-.5 1.5-.7 2.8c1.3 1.3 1.5 4.5.3 7.7c-.5 1.3-1.1 2.5-1.6 3.5C10.7 18 11.5 20.5 12 22v-20.5z" fill="#3F2A1D" />
    <path d="M12 5.5c.5 1.5.7 3.5.3 5.5c-.3 1.5-1 3-1.8 4.5c.3.5.7 1 1 1.5V5.5z" fill="#589636" />
  </svg>
)

// 16. Redis Logo (Red Stacked Hexagons)
export const RedisLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2L2 6.5L12 11l10-4.5L12 2z" fill="#D82C20" />
    <path d="M2 11.5l10 4.5l10-4.5v3l-10 4.5l-10-4.5v-3z" fill="#A81C10" />
    <path d="M2 16.5l10 4.5l10-4.5v3l-10 4.5l-10-4.5v-3z" fill="#780C00" />
  </svg>
)

// 17. Supabase Logo (Lightning Bolts Green)
export const SupabaseLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#3ECF8E" {...props}>
    <path d="M21.36 11.23l-8.54 9.15a1.1 1.1 0 01-1.85-.8V13.8H5.64a1.1 1.1 0 01-.81-1.84l8.54-9.15a1.1 1.1 0 011.85.8V10.2h5.33a1.1 1.1 0 01.81 1.84v-.81z" />
  </svg>
)

// 18. LangChain Logo (Green Bird / Parrot stylized)
export const LangchainLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="#38BDF8" />
    <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6s6-2.7 6-6s-2.7-6-6-6zm0 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5s-2 4.5-4.5 4.5z" fill="#0284C7" />
    <circle cx="10" cy="11.5" r="1.5" fill="#FFFFFF" />
    <circle cx="14" cy="11.5" r="1.5" fill="#FFFFFF" />
    <path d="M8 14.5c2 1 6 1 8 0" stroke="#FFFFFF" strokeWidth="1.25" strokeLinecap="round" />
  </svg>
)

// 19. Pinecone Logo (Three dimensional Triangles)
export const PineconeLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2L3 9h6l3-7z" fill="#00F5B2" />
    <path d="M12 22l9-7h-6l-3 7z" fill="#0F8B68" />
    <path d="M3 9l9 13v-6L3 9z" fill="#09B78A" />
    <path d="M21 15l-9-13v6l9 7z" fill="#1BE0A7" />
  </svg>
)

// 20. Qdrant Logo (Orange and Blue Q shape)
export const QdrantLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6z" fill="#0052CC" />
    <path d="M19 12a7 7 0 0 1-7 7v-4a3 3 0 0 0 3-3h4z" fill="#FF5630" />
    <rect x="13.5" y="13.5" width="6" height="6" rx="3" fill="#FF5630" />
  </svg>
)

// 21. n8n Logo (Official Brand Orange/Coral)
export const N8nLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="6" cy="12" r="3" fill="#EA4C34" />
    <circle cx="18" cy="12" r="3" fill="#EA4C34" />
    <line x1="9" y1="12" x2="15" y2="12" stroke="#EA4C34" strokeWidth="2.5" />
    <circle cx="12" cy="12" r="1.2" fill="#FFFFFF" />
  </svg>
)

// 22. Vercel Logo (Clean solid black triangle)
export const VercelLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#000000" {...props}>
    <path d="M24 22.525H0L12 1.475l12 21.05z" />
  </svg>
)

// 23. GitHub Logo (Clean solid black octocat silhouette)
export const GithubLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#181717" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
  </svg>
)

// 24. Node.js Logo (Green Hexagonal Node shape)
export const NodejsLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2L4.5 6.3v9.4L12 22l7.5-4.3v-9.4L12 2z" fill="#339933" />
    <path d="M12 2v20c1.8-1 3.5-2.1 4.5-3.5c1.4-1.9 2-3.8 2-6.5c0-1.8-.4-3.5-1.2-5c-1-1.8-2.6-2.6-5.3-3z" fill="#68A063" />
    <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
  </svg>
)

// 25. Gemini Logo (Google Gemini colorful sparkle)
export const GeminiLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2C12 2 12.5 8.5 15.5 11.5C18.5 14.5 22 12 22 12C22 12 18.5 13.5 15.5 16.5C12.5 19.5 12 22 12 22C12 22 11.5 19.5 8.5 16.5C5.5 13.5 2 12 2 12C2 12 5.5 14.5 8.5 11.5C11.5 8.5 12 2 12 2Z" fill="url(#gemini-grad)" />
    <defs>
      <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22">
        <stop offset="0%" stopColor="#4A88E3" />
        <stop offset="50%" stopColor="#9B72F8" />
        <stop offset="100%" stopColor="#F5B2F9" />
      </linearGradient>
    </defs>
  </svg>
)

// 26. Tailwind CSS Logo (Cyan Wave logo)
export const TailwindLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" fill="#38BDF8" />
  </svg>
)

// 27. Vite Logo (Purple shield with lightning bolt)
export const ViteLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M19.78 3H4.22L12 18.52 19.78 3z" fill="url(#vite-bg-grad)" />
    <path d="M13.5 1.5L9 11h4l-1.5 7.5L20 8h-5l1.5-6.5h-3z" fill="#FFC517" />
    <defs>
      <linearGradient id="vite-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#BD34FE" />
        <stop offset="100%" stopColor="#47CFFF" />
      </linearGradient>
    </defs>
  </svg>
)

// 28. FastAPI Logo (Teal square with lightning bolt)
export const FastapiLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <rect width="24" height="24" rx="4" fill="#009485" />
    <path d="M13 3L6 13h5v8l7-10h-5V3z" fill="#FFFFFF" />
  </svg>
)

// 29. Express Logo (Charcoal node showing EX)
export const ExpressLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <rect width="24" height="24" rx="4" fill="#353535" />
    <text x="12" y="16" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">ex</text>
  </svg>
)

// 30. LangGraph Logo (Dynamic circular chart graph node)
export const LanggraphLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" fill="#0284C7" />
    <path d="M7 12h10M12 7v10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <circle cx="7" cy="12" r="2" fill="#FFFFFF" />
    <circle cx="17" cy="12" r="2" fill="#FFFFFF" />
    <circle cx="12" cy="7" r="2" fill="#FFFFFF" />
    <circle cx="12" cy="17" r="2" fill="#FFFFFF" />
  </svg>
)

// 31. Temporal Logo (Circular step loop in dark outline)
export const TemporalLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm-1 15v-6H8V9h6v8h-3z" fill="#111111" />
  </svg>
)

// 32. Cloudflare Logo (Orange Cloud with waves)
export const CloudflareLogo: React.FC<LogoProps> = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#F38020" />
    <path d="M12 18h7c1.65 0 3-1.35 3-3s-1.35-3-3-3h-.7c-.45-2.24-2.42-3.9-4.8-3.9-1.92 0-3.6 1.1-4.4 2.76L6.5 10.2C4 10.5 2 12.56 2 15c0 1.65 1.35 3 3 3h7z" fill="#FAAD3F" />
  </svg>
)
