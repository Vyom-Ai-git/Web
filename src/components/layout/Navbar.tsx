import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { OnnrevLogo } from '@/components/shared/OnnrevLogo'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

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
    const sections = ['work', 'services', 'about', 'contact', 'capabilities', 'projects', 'conversion']
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -35% 0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          if (id === 'projects') setActiveSection('work')
          else if (id === 'capabilities') setActiveSection('services')
          else if (id === 'conversion') setActiveSection('contact')
          else setActiveSection(id)
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

    let actualId = targetId
    if (targetId === 'work') actualId = 'projects'
    if (targetId === 'services') actualId = 'capabilities'
    if (targetId === 'contact' || targetId === 'connect' || targetId === 'begin') {
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
        className={`fixed top-0 left-0 w-full z-50 px-4 pointer-events-none select-none transition-all duration-300 ${
          isScrolled ? 'pt-3' : 'pt-5'
        }`}
      >
        <nav
          className={`max-w-6xl mx-auto flex items-center justify-between backdrop-blur-xl border rounded-full px-6 py-3 pointer-events-auto transition-all duration-300 ${
            isScrolled
              ? 'bg-black/90 border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.85)]'
              : 'bg-black/60 border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
          }`}
        >
          
          {/* LEFT: Brand Logo */}
          <div className="flex items-center">
            <a
              href="#"
              className="flex items-center outline-none group"
              aria-label="ONNREV — home"
            >
              <OnnrevLogo variant="inline" height={26} color="#FFFFFF" accentColor="#ef233c" />
            </a>
          </div>

          {/* CENTER: Navigation Links (Desktop Only) */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.label.toLowerCase()
              return (
                <div
                  key={link.label}
                  className="relative py-1.5 px-3.5 flex items-center justify-center cursor-pointer"
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`font-sans text-[13.5px] uppercase tracking-wider transition-colors relative z-10 ${
                      isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>

                  {/* Red Accent Active Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-dot"
                      className="absolute bottom-[-1px] left-3.5 right-3.5 h-[2px] bg-[#ef233c] z-20 shadow-[0_0_8px_#ef233c]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Translucent Hover Capsule */}
                  <AnimatePresence>
                    {hoveredLink === link.label && (
                      <motion.div
                        layoutId="navbar-hover-capsule"
                        className="absolute inset-0 bg-white/5 border border-white/10 rounded-full -z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* RIGHT: Primary CTA & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#ef233c] hover:bg-[#d90429] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(239,35,60,0.35)] hover:shadow-[0_0_30px_rgba(239,35,60,0.6)] active:scale-95 group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden text-zinc-300 hover:text-white transition-colors bg-transparent border-none outline-none cursor-pointer rounded-md"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#ef233c]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </nav>
      </header>

      {/* Mobile Drawer (Slides down) - Premium Dark Theme */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full bg-[#050507]/98 border-b border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-40 pt-24 pb-8 px-8 flex flex-col md:hidden select-none pointer-events-auto backdrop-blur-2xl"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.05,
                  },
                },
              }}
              className="flex flex-col gap-5 text-left"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.label.toLowerCase()
                return (
                  <motion.div
                    key={link.label}
                    variants={{
                      hidden: { opacity: 0, y: 6 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                    className="relative text-left"
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        handleScrollTo(e, link.href)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`font-display font-medium text-[22px] tracking-tight uppercase transition-colors block ${
                        isActive ? 'text-white font-bold' : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </a>

                    {/* Active Red Dot indicator for Mobile Drawer */}
                    {isActive && (
                      <motion.div
                        layoutId="mobile-active-dot"
                        className="absolute left-[-14px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#ef233c] shadow-[0_0_8px_#ef233c]"
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      />
                    )}
                  </motion.div>
                )
              })}

              <hr className="border-white/10 my-2" />

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 6 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-col gap-4 text-left"
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    handleScrollTo(e, '#contact')
                    setIsMobileMenuOpen(false)
                  }}
                  className="flex items-center justify-between w-full px-5 py-3.5 rounded-full bg-[#ef233c] hover:bg-[#d90429] text-white font-sans text-[13.5px] font-semibold uppercase tracking-wider active:scale-95 transition-all shadow-[0_0_20px_rgba(239,35,60,0.4)]"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 text-white" />
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
