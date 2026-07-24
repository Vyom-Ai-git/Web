import React from 'react'
import { VyomaLogo } from '@/components/shared/VyomaLogo'

const footerNav = [
  {
    heading: 'Capabilities',
    links: [
      { label: 'Enterprise Intelligence', href: '#capabilities' },
      { label: 'Autonomous Operations', href: '#capabilities' },
      { label: 'Growth Infrastructure', href: '#capabilities' },
      { label: 'Revenue Acceleration', href: '#capabilities' },
      { label: 'Business Transformation', href: '#capabilities' },
    ],
  },
  {
    heading: 'Transformation',
    links: [
      { label: 'Discover', href: '#transformation' },
      { label: 'Design', href: '#transformation' },
      { label: 'Build', href: '#transformation' },
      { label: 'Optimize', href: '#transformation' },
      { label: 'Scale', href: '#transformation' },
    ],
  },
  {
    heading: 'Intelligence',
    links: [
      { label: 'Insights Hub', href: '#insights' },
      { label: 'Transformation Playbooks', href: '#insights' },
      { label: 'Research', href: '#insights' },
      { label: 'Newsletter', href: '#insights' },
    ],
  },
  {
    heading: 'Engage',
    links: [
      { label: 'Executive Consultation', href: '#conversion' },
      { label: 'Enterprise AI', href: '#conversion' },
      { label: 'Modernize Operations', href: '#conversion' },
      { label: 'contact@vyoma.ai', href: 'mailto:contact@vyoma.ai' },
    ],
  },
]

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer
      id="footer"
      role="contentinfo"
      className="w-full bg-[#EDEEF5] border-t border-black/[0.05] text-left"
    >
      {/* Main nav grid */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 pt-16 pb-10 grid grid-cols-12 gap-y-12 lg:gap-x-8">

        {/* Brand mark */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-4">
          <a
            href="#"
            className="outline-none focus-visible:ring-2 focus-visible:ring-[#9fff00] focus-visible:ring-offset-2 rounded-sm inline-block w-fit"
            aria-label="Vyom AI — back to top"
          >
            <VyomaLogo variant="full" height={72} />
          </a>
          <p className="font-sans text-[12.5px] leading-relaxed text-[#8e8e8e] max-w-[240px]">
            Enterprise AI & Business Transformation Studio. Designing intelligent systems for modern organizations.
          </p>

          {/* Social links */}
          <div className="flex gap-4 mt-2 text-[12px] font-sans font-bold text-[#8e8e8e]">
            <a
              href="https://linkedin.com/company/vyomai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1a1a1a] transition-colors hover-link-underline"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href="mailto:contact@vyoma.ai"
              className="hover:text-[#1a1a1a] transition-colors hover-link-underline"
            >
              Email
            </a>
          </div>
        </div>

        {/* Nav columns */}
        <nav
          aria-label="Footer navigation"
          className="col-span-12 lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {footerNav.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <span className="text-[10px] font-sans font-bold tracking-widest text-[#1a1a1a] uppercase">
                {col.heading}
              </span>
              <ul className="flex flex-col gap-2" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-[12.5px] text-[#8e8e8e] hover:text-[#1a1a1a] transition-colors outline-none focus-visible:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Legal row */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-5 border-t border-black/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <span className="font-sans text-[11px] text-[#8e8e8e]">
          © {year} Vyoma. All rights reserved.
        </span>
        <div className="flex gap-5 text-[11px] font-sans text-[#8e8e8e]">
          <a href="#" className="hover:text-[#1a1a1a] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#1a1a1a] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
