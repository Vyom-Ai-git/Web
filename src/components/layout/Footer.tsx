import React from 'react'
import { ArrowUp } from 'lucide-react'
import { OnnrevLogo } from '@/components/shared/OnnrevLogo'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', href)
    }
  }

  return (
    <footer
      id="footer"
      role="contentinfo"
      className="w-full bg-[#050507] text-left relative overflow-hidden border-t border-white/[0.08]"
    >
      {/* Subtle telemetry red glow hairline */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ef233c]/40 to-transparent absolute top-0 left-0" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-16 pb-12">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-12 items-start">
          
          {/* Column 1: ONNREV & Ideas. Solutions. Impact. (Section 24) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col gap-4">
            <a
              href="#"
              onClick={scrollToTop}
              className="outline-none inline-block w-fit"
              aria-label="ONNREV — back to top"
            >
              <OnnrevLogo variant="full" height={38} color="#FFFFFF" accentColor="#ef233c" />
            </a>

            <p className="font-display font-medium text-[20px] text-zinc-300 tracking-tight">
              Ideas. Solutions. Impact.
            </p>

            <p className="font-sans text-[13.5px] leading-relaxed text-zinc-400 max-w-[340px]">
              Technology, design and solutions built for businesses ready for what's next.
            </p>
          </div>

          {/* Column 2: Navigation Links (WORK, SERVICES, ABOUT, CONTACT) */}
          <div className="col-span-6 md:col-span-3 lg:col-span-3 flex flex-col gap-4">
            <span className="text-[10.5px] font-mono font-semibold tracking-widest text-[#ef233c] uppercase">
              // NAVIGATION
            </span>
            <ul className="flex flex-col gap-2.5 list-none pl-0">
              <li>
                <a
                  href="#work"
                  onClick={(e) => handleNavClick(e, '#work')}
                  className="font-sans text-[14px] text-zinc-300 hover:text-white transition-colors"
                >
                  WORK
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="font-sans text-[14px] text-zinc-300 hover:text-white transition-colors"
                >
                  SERVICES
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="font-sans text-[14px] text-zinc-300 hover:text-white transition-colors"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="font-sans text-[14px] text-zinc-300 hover:text-white transition-colors"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: SOCIAL & INBOUND (Section 24) */}
          <div className="col-span-6 md:col-span-3 lg:col-span-4 flex flex-col gap-4">
            <span className="text-[10.5px] font-mono font-semibold tracking-widest text-[#ef233c] uppercase">
              // SOCIAL & INBOUND
            </span>
            <ul className="flex flex-col gap-2.5 list-none pl-0 font-sans text-[14px] text-zinc-300">
              <li>
                <a
                  href="https://linkedin.com/company/onnrev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn →
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@onnrev.com"
                  className="hover:text-white transition-colors"
                >
                  contact@onnrev.com →
                </a>
              </li>
              <li className="pt-2">
                <span className="text-[11px] font-mono text-zinc-500 uppercase">
                  ENTERPRISE RESPONSE SLA: 24 HOURS
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Back to Top Row */}
        <div className="pt-12 mt-12 border-t border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-4 text-[12px] font-mono text-zinc-500">
            <span>© 2026 ONNREV</span>
            <span>//</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#ef233c]/60 text-zinc-400 hover:text-white transition-all cursor-pointer outline-none flex items-center gap-2 group text-[11px] font-mono"
            aria-label="Back to top"
          >
            <span className="hidden sm:inline">TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#ef233c] transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
