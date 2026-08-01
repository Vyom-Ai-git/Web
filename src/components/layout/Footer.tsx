import React from 'react'
import { ArrowUp } from 'lucide-react'
import { VyomLogo } from '@/components/shared/VyomaLogo'

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
      { label: 'contact@vyom.ai', href: 'mailto:contact@vyom.ai' },
    ],
  },
]

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer
      id="footer"
      role="contentinfo"
      className="w-full bg-[#0D1117] text-left relative overflow-hidden"
    >
      {/* Thin gradient divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent absolute top-0 left-0" />

      {/* Main nav grid */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 pt-12 pb-6 grid grid-cols-12 gap-y-12 lg:gap-x-8">

        {/* Brand mark & Philosophy */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-5">
          <a
            href="#"
            className="outline-none focus-visible:ring-2 focus-visible:ring-[#8FBF3C] focus-visible:ring-offset-2 rounded-sm inline-block w-fit filter invert brightness-[2]"
            aria-label="Vyom AI — back to home"
          >
            <VyomLogo variant="full" height={48} />
          </a>

          <div className="flex flex-col gap-2">
            <span className="text-[9px] font-sans font-bold tracking-widest text-white uppercase">
              Philosophy
            </span>
            <p className="font-sans text-[12.5px] leading-relaxed text-white/50 max-w-[240px]">
              Engineering systems, not just software. We design for intelligence, scale, and measurable value to help organizations build operations that last.
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-4 mt-2 text-[12px] font-sans font-bold text-white/40">
            <a
              href="https://linkedin.com/company/vyom-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors hover-link-underline"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href="mailto:contact@vyom.ai"
              className="hover:text-white transition-colors hover-link-underline"
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
              <span className="text-[10px] font-sans font-bold tracking-widest text-white uppercase">
                {col.heading}
              </span>
              <ul className="flex flex-col gap-2" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-[12.5px] text-white/50 hover:text-white transition-colors outline-none focus-visible:underline"
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
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-5 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <span className="font-sans text-[11px] text-white/40">
          © {year} Vyom. All rights reserved.
        </span>

        <div className="flex items-center gap-6">
          <div className="flex gap-5 text-[11px] font-sans text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          {/* Glass Back-to-Top trigger */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 border border-white/[0.08] hover:border-[#8FBF3C]/60 hover:bg-white/10 shadow-soft hover:scale-110 active:scale-95 transition-all text-white/60 hover:text-white cursor-pointer outline-none flex items-center justify-center group"
            aria-label="Scroll Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
