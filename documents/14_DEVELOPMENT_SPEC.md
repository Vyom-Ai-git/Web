# Vyom FRONTEND DEVELOPMENT SPECIFICATION (V1.0)
### Technical Architecture, Folder Schemas, and Development Guidelines
**Classification:** Engineering Architecture Standard  
**Single Source of Truth For:** Frontend Architects, DevOps Engineers, and Full-Stack Developers.  
**Design System Anchor:** Conforming strictly to [Vyom_DESIGN_BIBLE.md](file:///Users/vivek/Documents/Vyom/Vyom_DESIGN_BIBLE.md) and [08_RESPONSIVE_SYSTEM.md](file:///Users/vivek/Documents/Vyom/08_RESPONSIVE_SYSTEM.md).

---

## 1. Technical Stack Selection

The Vyom frontend platform is engineered on a modern, React-based server-and-client architecture to secure SEO indexability, high-performance static rendering, and smooth WebGL canvas overlays.

*   **Core Framework:** Next.js 15 (App Router, TypeScript).
*   **Styling Engine:** Vanilla CSS (CSS Modules) paired with global CSS Custom Properties. (Zero runtime CSS-in-JS overhead).
*   **3D Render Engine:** Three.js via React Three Fiber (R3F) and `@react-three/drei`.
*   **Animation Engines:**
    *   *Scroll & Timeline:* GSAP (GreenSock) + `ScrollTrigger`.
    *   *Layout & Micro-states:* Framer Motion (for declarative React state transitions).
*   **State Management:** Zustand (for lightweight, out-of-DOM scroll and WebGL telemetry states).

---

## 2. Directory Folder Structure

We enforce a strict Next.js App Router structure separating server-rendered layouts, client components, and 3D scenes.

```
/src
├── app/                        # Next.js App Router Pages
│   ├── layout.tsx              # Root server layout (HTML wrapper, preloads)
│   ├── page.tsx                # Homepage index
│   ├── capabilities/           # Capabilities routes
│   │   ├── page.tsx            # Capabilities directory
│   │   └── [discipline]/       # Dynamic capability routes (ai, cloud, etc.)
│   ├── engagements/            # Case studies routes
│   │   ├── page.tsx            # Engagements directory
│   │   └── [slug]/             # Individual case studies pages
│   ├── about/                  # About page route
│   │   └── page.tsx
│   └── connect/                # Contact page route
│       └── page.tsx
├── components/                 # Reusable Layout Components
│   ├── canvas/                 # React Three Fiber 3D Canvas scenes
│   │   ├── scene/              # Canvas wrapper & camera controls
│   │   └── models/             # Individual 3D models (Gyroid, NodeGrid)
│   ├── ui/                     # Reusable UI elements (from comp library)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── glass-panel.tsx
│   │   └── intake-form.tsx
│   └── layout/                 # Structural modules
│       ├── navigation.tsx      # Persistent Nav bar
│       └── footer.tsx          # Systems Footer
├── hooks/                      # Custom React hooks (useScroll, useMediaQuery)
├── store/                      # Zustand state containers (useStore.ts)
├── styles/                     # CSS Modules & Global Stylesheets
│   ├── globals.css             # Design tokens & base calibration properties
│   └── theme.module.css        # Theme modifier overrides
├── types/                      # Common TypeScript interfaces
└── utils/                      # Helper libraries (math, data formatters)
```

---

## 3. Component Hierarchy (`comp-hierarchy`)

Every viewport in the homepage story is rendered as an independent React section component, managed by a root-level page coordinator.

```
Root Layout (app/layout.tsx)
 └── Persistent Nav Bar (components/layout/navigation.tsx)
      ├── Page Wrapper (app/page.tsx)
      │    ├── Telemetry Sidebar Overlay (Zustand linked depth display)
      │    ├── 3D Canvas Viewport Container (components/canvas/scene)
      │    │    └── Active 3D Model (Three.js WebGL rendering layer)
      │    ├── Section 01: Hero (components/ui/hero)
      │    ├── Section 02: Challenge (components/ui/challenge)
      │    └── ... Section 10: Footer
      └── Bottom Navigation Dock (components/layout/bottom-dock.tsx)
```

---

## 4. Design Tokens CSS Mapping

All tokens defined in the Design Bible are compiled as CSS custom properties in `src/styles/globals.css`.

```css
:root {
  /* Color Tokens */
  --canvas-void: #08080c;
  --surface-graphite: #121318;
  --text-primary: #f8f9fa;
  --text-secondary: #8e929d;
  --border-default: #1e2026;
  --border-active: #323641;
  --accent-cyan: #00e5ff;
  --alert-amber: #ffb300;

  /* Spacing Tokens */
  --sp-cosmic: clamp(48px, 8vw, 128px);
  --sp-huge: clamp(24px, 4vw, 64px);
  --sp-large: 32px;
  --sp-medium: 24px;
  --sp-small: 16px;
  --sp-xs: 8px;

  /* Corner Radius */
  --radius-panel: 16px;
  --radius-card: 12px;
  --radius-control: 4px;
  --radius-badge: 2px;

  /* Easing */
  --ease-quint: cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 5. State Management & WebGL Bridges

We use **Zustand** to bind client scrolling metrics to WebGL shader properties without triggering React state re-renders.

```typescript
// Zustand Store Specification (src/store/useStore.ts)
interface WebGLState {
  scrollProgress: number;          // Range: 0.0 to 1.0
  activeSection: string;           // E.g., 'vp-01-arrival'
  cursorPos: { x: number; y: number };
  systemStatus: 'OK' | 'WARNING';
  setScrollProgress: (progress: number) => void;
  setActiveSection: (section: string) => void;
  setCursorPos: (x: number, y: number) => void;
}
```

*   **R3F Render Loop Integration:** The 3D models read variables directly from the Zustand store within the R3F `useFrame` render loop, updating uniforms in the fragment shaders directly on the GPU.

---

## 6. Three.js / R3F Integration Architecture

*   **Canvas Allocation:** A single, persistent `<Canvas>` wrapper overlay sits at fixed position, backgrounded behind the layout pages (`z-index: 1`).
*   **Camera Configuration:**
    *   `fov: 45` | `near: 0.1` | `far: 50`
    *   Position: `[0, 0, 10]` centered.
*   **Shader Compilation:** Vertex and fragment shaders are loaded as gltf/glb Draco meshes or authored directly using GLSL imports via Vite/Next.js glsl loading plug-ins.
*   **Performance Optimization:**
    *   Use `@react-three/drei`'s `<AdaptiveEvents />` to suspend complex calculations during rapid camera rotations.
    *   Use `<Preload all />` to load Draco meshes on system boot sequence.

---

## 7. Animation System Integration

### GSAP (GreenSock)
*   **Purpose:** Orchestrating scroll-linked page reveals and timeline snaps.
*   **Configuration:**
    *   Register `ScrollTrigger` plugin globally in a root-level client coordinator.
    *   Apply `gsap.context()` inside React `useLayoutEffect` hooks to clean up timelines and avoid layout memory leaks.

### Framer Motion
*   **Purpose:** Declarative layout modifications (tabs sliding indicators, input focus state transitions, loading popovers).
*   **Configuration:**
    *   Set `<motion.div layout />` to leverage GPU-accelerated layouts changes.
    *   Keep standard transitions bound to `Spring Calibration Beta` parameters.

---

## 8. Performance Targets & Audits (Core Web Vitals)

Every page iteration must pass Lighthouse pipeline verification:

*   **Lighthouse Performance Target:** `>= 98 / 100`
*   **Largest Contentful Paint (LCP):** `< 1.8s`
*   **Interaction to Next Paint (INP):** `< 100ms`
*   **Cumulative Layout Shift (CLS):** `0.00` (Strictly layout-locked)

---

## 9. Accessibility (WCAG 2.1 Compliance)

*   **Keyboard Navigation:** All interactive cards, timelines, and inputs are fully focusable via standard Tab navigation paths.
*   **Aria Announcements:** Success verify panels announce `aria-live="polite"` state modifications dynamically.
*   **Motion Reduction Override:** Global CSS rule resets all transition durations to `0.01ms` if the media parameter `(prefers-reduced-motion: reduce)` is registered from the client OS.

---

## 10. SEO Optimization Parameters

*   **Title/Meta:** Custom meta title maps per page, utilizing Next.js Metadata API. Titles must state company identity and specific page Taxonomy.
*   **Semantic Structure:** Maintain a single `<h1>` per page. Sub-sections must sequence logically (`<h2>` -> `<h3>`).
*   **Schema Markup:** Inject `Organization` and `Service` JSON-LD schema into layouts to optimize search index crawler classifications.

---

## 11. Testing & Deployment Strategy

### Testing Pipeline
*   **Unit Tests (Jest):** Verify state mutations in the Zustand store and validate form regex checks.
*   **End-to-End Tests (Playwright):** Run layout snap verification tests, keyboard navigation sequences, and form submission handshakes.

### Deployment & CDN Routing
*   **Platform Host:** Vercel (Edge network routing enabled).
*   **CDN Ingress:** Static assets (fonts, icons, models) preloaded and cached on global CDN boundaries using HTTP headers `Cache-Control: public, max-age=31536000, immutable`.

---
*Developed by Vyom Frontend Engineering Board.*  
*Development Specification Approved for Platform Construction.*
