# Vyom RESPONSIVE SYSTEM (V1.0)
### Grid Breakpoints, Fluid Typography, Component Stacking, and Device Performance Standards
**Classification:** Layout Engineering Standard  
**Single Source of Truth For:** Frontend Engineers, Layout QA, and Mobile Developers.  
**Design System Anchor:** Conforming strictly to [Vyom_DESIGN_BIBLE.md](file:///Users/vivek/Documents/Vyom/Vyom_DESIGN_BIBLE.md) and [06_COMPONENT_LIBRARY.md](file:///Users/vivek/Documents/Vyom/06_COMPONENT_LIBRARY.md).

---

## 1. Grid Breakpoint Matrix

The grid adapts to screen real estate by adjusting column count, gutter size, margins, and maximum container widths.

| Device Tier | Breakpoint (px) | Column Count | Gutter Width | Side Margins | Max Page Width |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Ultra-Wide** | `>= 1920px` | 12 | 48px | 128px to 256px | 1600px |
| **Desktop** | `1440px - 1919px` | 12 | 32px | 64px to 128px | 1280px |
| **Laptop** | `1024px - 1439px` | 12 | 24px | 48px | 960px |
| **Tablet** | `768px - 1023px` | 8 | 24px | 32px | 704px |
| **Mobile Landscape** | `480px - 767px` | 6 | 16px | 24px | 432px |
| **Mobile Portrait** | `< 480px` | 4 | 16px | 16px | 100% |

---

## 2. Fluid Typography Scaling

We utilize fluid typography to eliminate jagged transition jumps between breakpoints. All core sizes use CSS `clamp()` based on viewport width (vw).

```
Formula: clamp(min-size, fluid-factor * vw + offset, max-size)
```

*   **Display Title (`type-hero-display`):**
    *   *Fluid Spec:* `clamp(48px, 6vw + 16px, 96px)`
    *   *Scale:* Mobile: `48px` | Tablet: `72px` | Desktop: `96px`
*   **Section Title (`type-section-title`):**
    *   *Fluid Spec:* `clamp(24px, 2.5vw + 12px, 32px)`
    *   *Scale:* Mobile: `24px` | Tablet: `28px` | Desktop: `32px`
*   **Body Copy (`type-body-copy`):**
    *   *Fluid Spec:* `clamp(14px, 0.2vw + 13.5px, 15px)`
    *   *Scale:* Mobile: `14px` | Tablet: `14.5px` | Desktop: `15px`
*   **Telemetry Mono (`type-telemetry-mono`):**
    *   *Fluid Spec:* Constant `10px` (never scales, preserving instrument alignment).

---

## 3. Spacing System Adaptation

Vertical page voids (`sp-cosmic`, `sp-huge`) contract on smaller viewports to optimize layout density and prevent excessive scrolling.

| Spacing Token | Desktop / Ultra-Wide | Laptop | Tablet | Mobile |
| :--- | :--- | :--- | :--- | :--- |
| `sp-cosmic` | 128px | 96px | 64px | 48px |
| `sp-huge` | 64px | 48px | 32px | 24px |
| `sp-large` | 32px | 24px | 20px | 16px |
| `sp-medium` | 24px | 20px | 16px | 12px |

---

## 4. Persistent Navigation Behavior

### 1. Desktop & Ultra-Wide (>= 1024px)
*   Persistent header, `64px` height, spanning Cols 1-12.
*   Includes full sitemap link array and live telemetry active status (`SYS_OK`).

### 2. Tablet (768px - 1023px)
*   Container width contracts. Links array drops numeric prefixes (e.g. `[ 01 // CAP ]` becomes `[ CAP ]`).
*   Telemetry active status panel is hidden.

### 3. Mobile (< 768px)
*   Persistent top header menu disappears or displays ONLY the logo and a minimal `[ MENU ]` text button.
*   **Persistent Bottom Navigation Dock:** A sticky bottom navigation bar (height: `56px`, glass silica blurred) appears, pinning three action triggers within thumb reach:
    *   `[ CAP ]` (Link to Capabilities accordion)
    *   `[ ENG ]` (Link to Case Engagements list)
    *   `[ CON ]` (Link to Connection form intake)

---

## 5. Responsive Component Stacking

### 1. The Instrument Matrix (Capabilities Quadrants)
*   **Desktop/Laptop:** 2x2 Grid (Panel 01/03 in Cols 1-6, Panel 02/04 in Cols 7-12).
*   **Tablet:** Stacks vertically into a 1x4 layout. Gutters compress.
*   **Mobile:** Collapses into a clean Accordion List (`comp-accordion-directory`). Tapping a header expands sub-list metrics inline; other folders compress automatically to preserve viewport height.

### 2. Selected Architectures (Solutions Cards)
*   **Desktop/Laptop:** 3 Cards aligned horizontally (spans Col 1-4, 5-8, 9-12).
*   **Tablet/Mobile:** Horizontal swipe slider gallery. Card width scales to `3.5 columns` (spans `85%` screen width), allowing the edge of the next card to bleed in from the right viewport boundary to prompt swipe gestures.

### 3. Comparison Table (Divergence Columns)
*   **Desktop/Laptop/Tablet:** Side-by-side comparative grid. Vertical dividing 1px hairline sits in the center.
*   **Mobile:** Collapses to a single-column detailed view. The competitor column (Standard Outsourcing) is completely hidden or accessible only via a tab selector toggle to keep the focus on Vyom's metrics.

---

## 6. Touch Interactions vs. Mouse Tracking

On touch-enabled devices (Tablets, Mobile), mouse tracking and cursor coordinates are disabled, replacing hover triggers with touch-haptic states.

*   **Custom Cursor Crosshair:** Replaced by the native browser touch indicator. All grid intersection coordinates tracker lines are omitted.
*   **Magnetic Button Snapping:** Snapping physics are bypassed. Buttons respond to touch start with a clean opacity fade indicator (`opacity: 0.8`) and a light sweep across the border.
*   **Node Blueprint Inspection:** Tap events replace hover states. Tapping a node in the case blueprint details matrix opens the telemetry info tooltip box inline. Tapping outside closes it.

---

## 7. Animation & Particle Reductions

We scale down animations based on device tier to protect mobile rendering speed and battery life.

*   **Nebula Drift Gradients:** Disabled on mobile viewports. Replaced by a static background gradient of deep indigo (`#08080C` to `#0B0C10`).
*   **Quantum Noise Particles:**
    *   *Ultra-Wide/Desktop:* 150 active floating particles.
    *   *Laptop/Tablet:* 60 active particles.
    *   *Mobile:* 0 active particles (complete omission to protect mobile CPU thread processing).
*   **Three.js / WebGL Wireframe Meshes:**
    *   WebGL morph targets are active on Desktop and Laptop. On Tablet and Mobile, the interactive WebGL Canvas is bypassed and replaced with a high-resolution static vector SVG blueprint.

---

## 8. Viewport Tier Specifications

### 1. Ultra-Wide Monitors (>= 1920px)
*   **Layout Focus:** Preserve the "Vast Void." Content container maximum width is locked at `1600px`. Margins expand dynamically (up to `256px` on either side) to keep typography clusters readable without excessive eye-movement tracking.
*   **Visual Elements:** WebGL models scale up, taking full advantage of GPU capacity.

### 2. Laptops & Mid-Desktops (1024px - 1439px)
*   **Layout Focus:** Standard desktop grid behavior. Grid gutters drop from `32px` to `24px`. Text elements are clamped cleanly.

### 3. Tablets (768px - 1023px)
*   **Layout Focus:** Split columns collapse to single columns where column width falls below `280px`. Spacing values contract by `30%`. Touch interaction modifiers activate.

### 4. Mobile Landscape (480px - 767px)
*   **Layout Focus:** Vertical viewport height is extremely limited (`<480px`). Pinned screen snaps (100vh) are disabled, allowing layout panels to scroll naturally. Headers and footers compress.

### 5. Mobile Portrait (< 480px)
*   **Layout Focus:** Vertical scroll hierarchy. Columns lock to 4. Side margins: `16px`. Primary buttons expand to span the full width of the screen.

---

## 9. Device Performance Safeguards

To prevent frame drops on lower-performance mobile devices, the frontend layout engine monitors system frame rate parameters:

```
[ FRAME RATE DEPLETED: < 45FPS ]
              │
              ▼
 [ DISMISS: Background noise grain layer ]
 [ DISABLE: Dynamic cursor coordinate tracking ]
 [ SET: Three.js render scaling resolution to 0.75x ]
```

*   **Viewport snap behavior:** Snapping triggers drop dynamically on low-performance devices to allow browser-native touch velocity physics to handle page scrolls.

---

## 10. Responsive Accessibility Parameters

*   **Interactive Targets:** Mobile buttons and links maintain a minimum touch target size of `44x44px` to comply with WCAG 2.1 touch guidelines.
*   **Text Scaling Limits:** Fluid typography formulas are bound by a minimum size (e.g., body text clamp minimum is `14px`) to guarantee readability without manual zoom gestures.
*   **Orientation Changes:** Layout margins and grid columns adjust instantly on orientation transitions without losing active form input data.

---
*Developed by Vyom Design System Board.*  
*Responsive System Specification Approved for Platform Architecture.*
