import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import VisualHero from '@/sections/VisualHero'
import Capabilities from '@/sections/Capabilities'
import CaseStudiesShowcase from '@/sections/CaseStudiesShowcase'
import VisionAim from '@/sections/VisionAim'
import VisualProcess from '@/sections/VisualProcess'
import Industries from '@/sections/Industries'
import Conversion from '@/sections/Conversion'
import NotFound from '@/sections/NotFound'

// Path-based 404 guard
const is404 = window.location.pathname !== '/' && window.location.pathname !== ''

export function App() {
  if (is404) {
    return <NotFound />
  }

  return (
    <div className="min-h-screen bg-black flex flex-col selection:bg-[#ef233c] selection:text-white">
      {/* 00 // Minimal Floating Navigation Bar (Section 07 & 14) */}
      <Navbar />

      {/* Strict 8-Part Production Hierarchy (Section 08 & 46) */}
      <main className="flex-grow" id="main-content">
        {/* 01 // HERO: "BUILDING WHAT MOVES TOMORROW." + Kinetic Vector Mesh */}
        <VisualHero />

        {/* 02 // CAPABILITIES: 4 Editorial Rows with Topology Visualizations */}
        <Capabilities />

        {/* 03 // SELECTED WORK: Verified Production Systems & Case Study Modal */}
        <CaseStudiesShowcase />

        {/* 04 // OUR AIM & ABOUT: "INNOVATION • INTELLIGENCE • IMPACT" & Company Profile */}
        <VisionAim />

        {/* 05 // HOW WE BUILD: 4-Stage Protocol (Understand, Design, Build, Evolve) */}
        <VisualProcess />

        {/* 06 // INDUSTRIES: Clean Typographic Sector Showcase */}
        <Industries />

        {/* 07 // CONTACT CTA: "HAVE AN IDEA? LET'S BUILD WHAT'S NEXT." Diagnostic Console */}
        <Conversion />
      </main>

      {/* 08 // FOOTER: Simplified Corporate Brand Closing Frame */}
      <Footer />
    </div>
  )
}

export default App
