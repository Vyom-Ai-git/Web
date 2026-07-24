# VYOMA ABOUT PAGE ARCHITECTURE (V1.0)
### Corporate Identity, Strategic Vision, and Engineering Principles Blueprint
**Classification:** Brand Identity & Platform Standard  
**Single Source of Truth For:** Visual Designers, Frontend Engineers, and Content Leads.  
**Design System Anchor:** Conforming strictly to [VYOMA_DESIGN_BIBLE.md](file:///Users/vivek/Documents/Vyoma/VYOMA_DESIGN_BIBLE.md) and [06_COMPONENT_LIBRARY.md](file:///Users/vivek/Documents/Vyoma/06_COMPONENT_LIBRARY.md).

---

## Page Grid & Vertical Section Schema

The About page is structured as a cinematic journey detailing the intellectual capacity of the company, moving from high-level positioning to engineering rigor and recruitment.

```
+-----------------------------------------------------------------------------------+
|  00vh - 100vh:  Section 01 // The System Identity (Hero & Mission Statement)      |
|  100vh - 160vh: Section 02 // Strategic Vision & Core Cultural Pillars             |
|  160vh - 240vh: Section 03 // The Engineering Philosophy Matrix                    |
|  240vh - 320vh: Section 04 // Leadership Directory (Systems Architects)           |
|  320vh - 380vh: Section 05 // Chronological Corporate Milestone Timeline          |
|  380vh - 440vh: Section 06 // The Future Calibration (Strategic Goals)            |
|  440vh - 500vh: Section 07 // The Hiring Pipeline (Talent Acquisition Console)      |
|  500vh - 560vh: Section 08 // Final Intake CTA & Site Footer Convergence          |
+-----------------------------------------------------------------------------------+
```

---

## 1. Hero & Mission (`about-hero`)

*   **Purpose:** Declare Vyoma's core purpose with absolute authority and zero marketing fluff.
*   **Grid Layout:** Split 12-Column Grid.
    *   *Left Columns (Col 1-8):* Mission Headline, telemetry labels, and narrative copy.
    *   *Right Columns (Col 9-12):* An active GMT timezone clock and coordinate readout tracing NYC, SF, and London engineering hubs.
*   **Typography Specs:**
    *   Category Tag: `[ IDENTITY ARCHITECTURE // EST. 2026 ]` (JetBrains Mono, `10px`, color `#00E5FF`).
    *   Headline: `type-hero-display` (`clamp(48px, 6vw + 16px, 96px)`), color `#F8F9FA`.
    *   Narrative Copy: `type-body-copy` (`16px`, line-height `1.7`), color `#8E929D`.
*   **Visual Assets:** Faint background orthogonal grid lines. Custom cursor coordinates trail active.
*   **Interactions:** Hovering the timezone logs displays active network ping speeds to our target hosting clusters.
*   **Animation:** Text reveals via a vertical clip mask over 1200ms. Grid lines draw out from the center on viewport initialization.

---

## 2. Vision & Culture Pillars (`about-culture`)

*   **Purpose:** Define our perspective on digital transformation and document the internal engineering culture of Vyoma.
*   **Grid Layout:** 3 columns (each 4 columns wide) representing the Core Cultural Pillars:
    1.  `[ INTELLECTUAL HONESTY ]`
    2.  `[ ARCHITECTURAL RIGOR ]`
    3.  `[ HUMILITY IN SYSTEMS ]`
*   **Typography Specs:**
    *   Pillar Header: JetBrains Mono, `12px`, weight `500`, color `#F8F9FA`.
    *   Pillar Narrative: Outfit, `14px`, line-height `1.6`, color `#8E929D`.
*   **Visual Assets:** Cards are styled as Glass Sheets (`glass-stellar-silica`) with thin 1px Chamber Iron borders. Corner coordinate markers `[ ]` anchor the cards to the grid.
*   **Interactions:** Hovering a card triggers a subtle white highlight gradient sweep along the card's top edge.

---

## 3. Engineering Philosophy (`about-philosophy`)

*   **Purpose:** Articulate our core software design rules, highlighting compilation accuracy over runtime guesses.
*   **Grid Layout:** Split 12-Column layout.
    *   *Left (Col 1-5):* Section Title (`ENGINEERING PHILOSOPHY`) and core narrative copy.
    *   *Right (Col 7-12):* High-fidelity schematic CPU illustration tracing compiler execution layers in sequence.
*   **Photography / Graphic Direction:** Monochrome vector illustration showing architectural CPU trace lines. No colorful stock graphics.

---

## 4. Leadership Directory (`about-leadership`)

*   **Purpose:** Present the senior system architects driving Vyoma's project delivery.
*   **Grid Layout:** 4-Column Card Grid (each 3 columns wide).
*   **Visual Assets:**
    *   **Leadership Portraits:** High-contrast, monochromatic (black and white) studio headshots with low exposure, deep blacks, and fine-grain noise.
*   **Interactions:** Hovering a headshot dims other team portraits to `30%` opacity and reveals the architect's PGP key code and specialized technical domain next to their name.

---

## 5. Milestone Timeline (`about-timeline`)

*   **Purpose:** Visualizing the chronology of Vyoma's corporate growth and system deployments.
*   **Grid Layout:** Vertical timeline bar running down Col 1. Chronological event cards stack sequentially on the right side spanning Cols 3-12.
*   **Interactions:** As the page scrolls, the timeline progress bar draws downward, illuminating the target node and card in Kelvin Cyan as it passes the screen center.

---

## 6. The Future Calibration (`about-future`)

*   **Purpose:** Outline our next strategic technological horizons (e.g. quantum computing integration, secure edge computation networks).
*   **Grid Layout:** 2 Columns separated by a central vertical hairline. Left: The Horizon Goals. Right: A WebGL canvas showing an active morphing geometric solid (gyroid) representing computational possibilities.

---

## 7. The Hiring Pipeline (`about-hiring`)

*   **Purpose:** Attract top engineering talent to join our custom systems squads.
*   **Grid Layout:** Split 12-Column Grid.
    *   *Left Columns (Col 1-5):* Call to Action copy detailing our interview principles (no algorithms puzzles; direct architecture stress tests).
    *   *Right Columns (Col 7-12):* Active listings console displaying available engineering nodes (e.g. `[ NODE_ROLE // BACKEND_RUST_ARCHITECT ]`).
*   **Interactions:** Hovering a role snaps the cursor and reveals target pipeline inputs (qualifications needed). Clicking a listing opens a minimal glass email intake form.

---

## 8. Mobile & Responsive Calibrations

*   **Mobile Grid:** Spans 4 Columns. Side margins compress to `16px`.
*   **Leadership Portraits:** Stacks vertically into a 1x4 layout.
*   **Timeline Rotation:** Main timeline remains vertical. Cards stack below their respective year node indicators.
*   **Hiring Console:** Available roles display as an accordion list with simple dropdown expanders.
*   **Haptic Modifiers:** Touch events replace mouse tracking hover states; PGP keys and technical domains are visible statically.

---
*Developed by Vyoma Design System Board.*  
*About Page Architecture Approved for Platform Construction.*
