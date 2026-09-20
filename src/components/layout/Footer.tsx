import React from 'react'
import { ArrowUp } from 'lucide-react'
import { OnnrevLogo } from '@/components/shared/OnnrevLogo'

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
      { label: 'Discover Phase', href: '#transformation' },
      { label: 'System Design', href: '#transformation' },
      { label: 'Engineering Build', href: '#transformation' },
      { label: 'Telemetry & Optimization', href: '#transformation' },
      { label: 'Enterprise Scale', href: '#transformation' },
    ],
  },
  {
    heading: 'Proof & Insights',
    links: [
      { label: 'Verified Case Studies', href: '#proof' },
      { label: 'Performance Telemetry', href: '#proof' },
      { label: 'Engineering Principles', href: '#proof' },
      { label: 'Research & Insights Hub', href: '#insights' },
      { label: 'Industry Sectors', href: '#industries' },
    ],
  },
  {
    heading: 'Engage',
    links: [
      { label: 'Executive Consultation', href: '#conversion' },
      { label: 'Diagnostic Intake Console', href: '#conversion' },
      { label: 'Legacy Modernization', href: '#conversion' },
      { label: 'contact@onnrev.com', href: 'mailto:contact@onnrev.com' },
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
      className="w-full bg-[#090B10] text-left relative overflow-hidden border-t border-white/[0.08]"
    >
      {/* Subtle telemetry glow line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/30 to-transparent absolute top-0 left-0" />

      {/* Main nav grid */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 pt-16 pb-10 grid grid-cols-12 gap-y-12 lg:gap-x-8">

        {/* Brand mark & Philosophy */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <a
            href="#"
            className="outline-none focus-visible:ring-2 focus-visible:ring-[#ef233c] focus-visible:ring-offset-2 rounded-sm inline-block w-fit"
            aria-label="ONNREV — back to home"
          >
            <OnnrevLogo variant="full" height={44} color="#FFFFFF" accentColor="#ef233c" />
          </a>

          <div className="flex flex-col gap-2.5">
            <span className="text-[10px] font-mono font-semibold tracking-[0.2em] text-[#ef233c] uppercase">
              // Systems Rigor & Quiet Confidence
            </span>
            <p className="font-sans text-[13px] leading-relaxed text-[#94A3B8] max-w-[320px]">
              Engineering systems, not just software. ONNREV designs resilient digital infrastructure, autonomous operations, and growth architecture to scale modern enterprise value.
            </p>
          </div>

          {/* Social & Contact links */}
          <div className="flex items-center gap-4 text-[12px] font-sans font-medium text-[#94A3B8]">
            <a
              href="https://linkedin.com/company/onnrev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors hover-link-underline"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href="mailto:contact@onnrev.com"
              className="hover:text-white transition-colors hover-link-underline"
            >
              contact@onnrev.com
            </a>
            <span>·</span>
            <span className="text-zinc-500 text-[11px] font-mono">SLA: 24H</span>
          </div>
        </div>

        {/* Nav columns */}
        <nav
          aria-label="Footer navigation"
          className="col-span-12 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {footerNav.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3.5">
              <span className="text-[10.5px] font-mono font-semibold tracking-wider text-white uppercase">
                {col.heading}
              </span>
              <ul className="flex flex-col gap-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-[13px] text-[#94A3B8] hover:text-[#ef233c] transition-colors outline-none focus-visible:underline"
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

      {/* Massive Architectural Wordmark Closing Frame with text stroke */}
      <div className="w-full select-none pointer-events-none overflow-hidden py-4 text-center opacity-40">
        <span className="font-display font-bold text-[15vw] tracking-tighter leading-none text-stroke-noir block uppercase">
          ONNREV
        </span>
      </div>

      {/* Legal row */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <span className="font-sans text-[12px] text-zinc-500">
            © {year} ONNREV. All rights reserved.
          </span>
          <span className="hidden sm:inline text-zinc-800">|</span>
          <span className="text-[11px] font-mono text-zinc-500">
            ENTERPRISE ARCHITECTURE // ZERO FABRICATION
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-5 text-[12px] font-sans text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Standard</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Delivery</a>
            <a href="#" className="hover:text-white transition-colors">Security Policy</a>
          </div>

          {/* Glass Back-to-Top trigger */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#ef233c]/60 hover:bg-white/10 shadow-soft hover:scale-110 active:scale-95 transition-all text-zinc-400 hover:text-white cursor-pointer outline-none flex items-center justify-center group"
            aria-label="Scroll Back to Top"
          >
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 text-[#ef233c]" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
