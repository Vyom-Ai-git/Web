import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import VisualHero from '@/sections/VisualHero'
import VisualIntro from '@/sections/VisualIntro'
import VisualStatement from '@/sections/VisualStatement'
import Capabilities from '@/sections/Capabilities'
import VisualShowcase from '@/sections/VisualShowcase'
import ProductsCatalogue from '@/sections/ProductsCatalogue'
import Industries from '@/sections/Industries'
import Trust from '@/sections/Trust'
import CaseStudiesShowcase from '@/sections/CaseStudiesShowcase'
import VisualProcess from '@/sections/VisualProcess'
import VisualAboutTeaser from '@/sections/VisualAboutTeaser'
import Conversion from '@/sections/Conversion'
import NotFound from '@/sections/NotFound'
import { ExperienceModeProvider } from '@/hooks/useExperienceMode'

// Path-based 404 guard
const is404 = window.location.pathname !== '/' && window.location.pathname !== ''

function App() {
  if (is404) {
    return <NotFound />
  }

  return (
    <ExperienceModeProvider>
      <div className="min-h-screen bg-black flex flex-col selection:bg-[#ef233c] selection:text-white">
        {/* Minimal Floating Navigation Bar */}
        <Navbar />

        {/* Visual-First Storytelling Progression (Show → Explain → Prove → Convert) */}
        <main className="flex-grow" id="main-content">
          {/* 01 // Hero (Impact - Passes 5-Second Test) */}
          <VisualHero />

          {/* 02 // Introduction (1 Crisp Statement) */}
          <VisualIntro />

          {/* 03 // Visual Statement (The Pause) */}
          <VisualStatement />

          {/* 04 // Capabilities (Interactive Visual List) */}
          <Capabilities />

          {/* 05 // Signature Visual Showcase (Live Architecture Schematic) */}
          <VisualShowcase />

          {/* 06 // Products & Solutions (Engineered Platforms) */}
          <ProductsCatalogue />

          {/* 07 // Industries We Serve (Interactive Sector Dossiers) */}
          <Industries />

          {/* 08 // Verified Proof (Factual Numbers & Technology Stack) */}
          <Trust />

          {/* 09 // Case Studies & Production Outcomes (What We've Done) */}
          <CaseStudiesShowcase />

          {/* 10 // The Simple Process (4 Phases, 1 Sentence Each) */}
          <VisualProcess />

          {/* 11 // About Teaser (Under 40 Words) */}
          <VisualAboutTeaser />

          {/* 12 // Final Conversation (Let's Talk) */}
          <Conversion />
        </main>

        {/* Closing Brand Frame Footer */}
        <Footer />
      </div>
    </ExperienceModeProvider>
  )
}

export default App
