import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { VyomLogo } from '@/components/shared/VyomaLogo'
import { useExperienceMode } from '@/hooks/useExperienceMode'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { mode } = useExperienceMode()

  const navLinks = [
    { label: 'capabilities', href: '#capabilities' },
    { label: 'industries', href: '#industries' },
    { label: 'success stories', href: '#success-stories' },
    { label: 'insights', href: '#insights' },
  ]

  // Map modes to CTA text
  const ctaTextMap = {
    Enterprise: 'Begin Transformation',
    Intelligence: 'Deploy Intelligence',
    Growth: 'Accelerate Growth',
  }

  // Scroll handler for adaptive blur and shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll Spy logic
  useEffect(() => {
    const sections = ['capabilities', 'industries', 'success-stories', 'insights']
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when section is in active view area
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Smooth scroll handler
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')

    // Map alternate tags to their sections
    let actualId = targetId
    if (targetId === 'connect' || targetId === 'begin') {
      actualId = 'conversion'
    }

    const targetElement = document.getElementById(actualId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      window.history.pushState(null, '', href)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 h-[var(--nav-height-mobile)] md:h-[var(--nav-height)] flex items-center transition-all duration-[var(--nav-transition)] ease-editorial select-none border-b ${isScrolled
            ? 'bg-white/40 border-black/[0.04] backdrop-blur-[16px] shadow-[0_8px_32px_0_rgba(0,0,0,0.04)]'
            : 'bg-transparent border-transparent backdrop-blur-none shadow-none'
          }`}
      >
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 max-w-7xl w-full mx-auto px-8 md:px-16 lg:px-20 items-center">

          {/* LEFT (Cols 1-3): Brand Logo */}
          <div className="col-span-6 md:col-span-3 flex items-center">
            <a href="#" className="flex items-center outline-none group pointer-events-auto" aria-label="Vyom AI — home">
              <VyomLogo variant="inline" height={26} />
            </a>
          </div>

          {/* CENTER (Cols 4-9): Navigation Links (Desktop Only) */}
          <nav className="col-span-6 hidden md:flex items-center justify-center gap-2 pointer-events-auto">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <div
                  key={link.label}
                  className="relative py-1.5 px-3.5 flex items-center justify-center cursor-pointer transition-transform duration-300"
                  style={{
                    transform: hoveredLink === link.label ? 'scale(1.02)' : 'scale(1)',
                  }}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`font-sans text-[13.5px] transition-colors relative z-10 lowercase ${isActive ? 'text-[#1a1a1a] font-medium' : 'text-[#8e8e8e] hover:text-[#1a1a1a]'
                      }`}
                  >
                    {link.label}
                  </a>

                  {/* Liquid Glass Hover Capsule */}
                  <AnimatePresence>
                    {hoveredLink === link.label && (
                      <motion.div
                        layoutId="navbar-hover-capsule"
                        className="absolute inset-0 bg-white/50 border border-white/60 rounded-pill -z-0 backdrop-blur-[8px] shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Smooth Active Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-underline"
                      className="absolute bottom-[-2px] left-3.5 right-3.5 h-[1.5px] bg-[#8FBF3C] z-20"
                      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                    />
                  )}
                </div>
              )
            })}
          </nav>

          {/* RIGHT (Cols 10-12): CTAs and Mobile Trigger */}
          <div className="col-span-6 md:col-span-3 flex items-center justify-end gap-6 pointer-events-auto">
            <a
              href="#connect"
              onClick={(e) => handleScrollTo(e, '#connect')}
              className="hidden md:inline-block font-sans text-[13.5px] text-[#8e8e8e] hover:text-[#1a1a1a] transition-all relative group lowercase"
            >
              <span>connect</span>
              <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#begin"
              onClick={(e) => handleScrollTo(e, '#begin')}
              style={{
                paddingLeft: 'var(--nav-cta-px)',
                paddingRight: 'var(--nav-cta-px)',
                paddingTop: 'var(--nav-cta-py)',
                paddingBottom: 'var(--nav-cta-py)',
              }}
              className="hidden md:flex hover-btn-animation items-center gap-1.5 rounded-pill bg-[#1A1A1A] text-white font-sans text-[13px] font-medium transition-all group"
            >
              <span>{ctaTextMap[mode]}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-[var(--nav-transition)] group-hover:translate-x-1" />
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
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <motion.div
                    key={link.label}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative text-left"
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        handleScrollTo(e, link.href)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`font-display font-medium text-[22px] transition-colors block lowercase relative z-10 ${isActive ? 'text-[#1a1a1a] font-semibold' : 'text-[#8e8e8e] hover:text-[#1a1a1a]'
                        }`}
                    >
                      {link.label}
                    </a>

                    {/* Active Dot indicator for Mobile Drawer */}
                    {isActive && (
                      <motion.div
                        layoutId="mobile-active-dot"
                        className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#8FBF3C]"
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      />
                    )}
                  </motion.div>
                )
              })}

              <hr className="border-black/[0.05] my-2" />

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex flex-col gap-4 text-left"
              >
                <a
                  href="#connect"
                  onClick={(e) => {
                    handleScrollTo(e, '#connect')
                    setIsMobileMenuOpen(false)
                  }}
                  className="font-sans text-[14px] text-[#8e8e8e] hover:text-[#1a1a1a] lowercase"
                >
                  connect
                </a>

                <a
                  href="#begin"
                  onClick={(e) => {
                    handleScrollTo(e, '#begin')
                    setIsMobileMenuOpen(false)
                  }}
                  className="flex items-center justify-between w-full px-5 py-3 rounded-pill bg-[#1A1A1A] text-white font-sans text-[13.5px] font-medium active:scale-95 transition-transform"
                >
                  <span>{ctaTextMap[mode]}</span>
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
