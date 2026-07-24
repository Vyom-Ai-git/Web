import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { VyomaLogo } from '@/components/shared/VyomaLogo'

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'capabilities', href: '#capabilities' },
    { label: 'industries', href: '#industries' },
    { label: 'success stories', href: '#success-stories' },
    { label: 'insights', href: '#insights' },
  ]

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 h-[var(--nav-height-mobile)] md:h-[var(--nav-height)] flex items-center bg-gradient-to-b from-[#f1f1f1]/80 to-transparent backdrop-blur-[var(--nav-blur)] shadow-[var(--nav-shadow)] transition-all duration-[var(--nav-transition)] ease-editorial select-none"
      >
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 max-w-7xl w-full mx-auto px-8 md:px-16 lg:px-20 items-center">
          
          {/* LEFT (Cols 1-3): Brand Logo */}
          <div className="col-span-6 md:col-span-3 flex items-center">
            <a href="#" className="flex items-center outline-none group pointer-events-auto" aria-label="Vyom AI — home">
              <VyomaLogo variant="inline" height={26} />
            </a>
          </div>

          {/* CENTER (Cols 4-9): Navigation Links (Desktop Only) */}
          <nav className="col-span-6 hidden md:flex items-center justify-center gap-8 pointer-events-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover-link-underline font-sans text-[13.5px] text-[#8e8e8e] hover:text-[#1a1a1a] hover:opacity-[var(--nav-hover-opacity)] transition-all lowercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT (Cols 10-12): CTAs and Mobile Trigger */}
          <div className="col-span-6 md:col-span-3 flex items-center justify-end gap-6 pointer-events-auto">
            <a 
              href="#connect" 
              className="hidden md:inline font-sans text-[13.5px] text-[#8e8e8e] hover:text-[#1a1a1a] hover:opacity-[var(--nav-hover-opacity)] transition-all lowercase"
            >
              connect
            </a>
            
            <a
              href="#begin"
              style={{
                paddingLeft: 'var(--nav-cta-px)',
                paddingRight: 'var(--nav-cta-px)',
                paddingTop: 'var(--nav-cta-py)',
                paddingBottom: 'var(--nav-cta-py)',
              }}
              className="hidden md:flex hover-btn-animation items-center gap-1.5 rounded-pill bg-[#1A1A1A] text-white font-sans text-[13px] font-medium transition-all"
            >
              <span>Begin Transformation</span>
              <ArrowRight className="w-3.5 h-3.5 animate-[translate_var(--nav-transition)_var(--ease-gentle)]" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 md:hidden text-[#1a1a1a] hover:text-[#8e8e8e] hover:opacity-[var(--nav-hover-opacity)] transition-all bg-transparent border-none outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer (Slides down) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full bg-[#EDEEF5]/98 border-b border-black/[0.05] shadow-medium z-40 pt-28 pb-10 px-8 flex flex-col md:hidden select-none pointer-events-auto backdrop-blur-md"
          >
            <motion.nav 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.05
                  }
                }
              }}
              className="flex flex-col gap-5"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display font-medium text-[22px] text-[#1a1a1a] hover:text-[#8e8e8e] transition-colors block lowercase"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}

              <hr className="border-black/[0.05] my-2" />

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex flex-col gap-4"
              >
                <a
                  href="#connect"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans text-[14px] text-[#8e8e8e] hover:text-[#1a1a1a] lowercase"
                >
                  connect
                </a>
                
                <a
                  href="#begin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between w-full px-5 py-3 rounded-pill bg-[#1A1A1A] text-white font-sans text-[13.5px] font-medium active:scale-95 transition-transform"
                >
                  <span>Begin Transformation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
