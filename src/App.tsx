import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/sections/Hero'
import Philosophy from '@/sections/Philosophy'
import Capabilities from '@/sections/Capabilities'
import Transformation from '@/sections/Transformation'
import Trust from '@/sections/Trust'
import Insights from '@/sections/Insights'
import Conversion from '@/sections/Conversion'
import NotFound from '@/sections/NotFound'
import { ExperienceModeProvider } from '@/hooks/useExperienceMode'

// Minimal path-based 404 guard — no router dependency needed for a single-page site
const is404 = window.location.pathname !== '/' && window.location.pathname !== ''

function App() {
  if (is404) {
    return <NotFound />
  }

  return (
    <ExperienceModeProvider>
      <div className="min-h-screen bg-bg-base flex flex-col">
        {/* Persistent Glass Navigation bar */}
        <Navbar />

        {/* Main content viewports */}
        <main className="flex-grow" id="main-content">
          {/* Viewport 01: Hero Arrival */}
          <Hero />

          {/* Viewport 02: Systems Philosophy */}
          <Philosophy />

          {/* Viewport 03: Editorial Capabilities Narrative */}
          <Capabilities />

          {/* Viewport 04: Scroll-spy Transformation Journey */}
          <Transformation />

          {/* Viewport 05: Trust & Evidence Layer */}
          <Trust />

          {/* Viewport 06: Insights & Intelligence Hub */}
          <Insights />

          {/* Viewport 07: Conversion Experience */}
          <Conversion />
        </main>

        {/* Site-wide Footer */}
        <Footer />
      </div>
    </ExperienceModeProvider>
  )
}

export default App
