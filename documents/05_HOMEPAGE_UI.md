# Vyom HOMEPAGE HIGH-FIDELITY DESIGN SPECIFICATION (V1.0)
### The Complete Visual and Interactive Design System Implementation Guide
**Classification:** Interface Design Standard  
**Theme:** *Apple designed NASA's operating system.*  
**Target Screen Resolutions:** Desktop (1440x900 baseline) | Tablet (1024x768) | Mobile (375x812)

---

## Global Design Tokens & Calibrations

These tokens apply universally across all sections of the homepage to maintain absolute aesthetic cohesion.

```
+--------------------------------------------------------------------------------+
|  Primary Canvas: Space Obsidian (#08080C)                                       |
|  Borders Default: Chamber Iron (#1E2026)    Borders Active: Active Steel (#323641) |
|  Text Primary: Titanium White (#F8F9FA)     Text Secondary: Helium Silver (#8E929D)|
|  Accent: Kelvin Cyan (#00E5FF)              Alert: Neutron Amber (#FFB300)         |
+--------------------------------------------------------------------------------+
```

### 1. Typography Tokens
*   **Font A (Sans-Serif):** *Outfit* (Geometric, balanced circles).
    *   `font-family: 'Outfit', -apple-system, sans-serif;`
*   **Font B (Monospace):** *JetBrains Mono* (Surgical, clean code readouts).
    *   `font-family: 'JetBrains Mono', monospace;`
*   **Typography Hierarchy Matrix:**
    *   `type-hero-display`: Size `96px` | Weight `300` | Line Height `1.1` | Tracking `-0.02em`
    *   `type-section-title`: Size `32px` | Weight `400` | Line Height `1.3` | Tracking `-0.01em`
    *   `type-body-copy`: Size `15px` | Weight `400` | Line Height `1.625` | Tracking `0`
    *   `type-telemetry-mono`: Size `10px` | Weight `500` | Line Height `1.0` | Tracking `0.15em` (Uppercase)
    *   `type-micro-mono`: Size `9px` | Weight `400` | Line Height `1.0` | Tracking `0.20em` (Uppercase)

### 2. Layout & Spacing Tokens
*   `gap-xl`: `128px` (Cosmic scale separator)
*   `gap-lg`: `64px` (Section container spacer)
*   `gap-md`: `32px` (Grid columns separator)
*   `gap-sm`: `16px` (Component inner spacing)
*   `gap-xs`: `8px` (Micro grouping spacer)

### 3. Glass & Occlusion Matrix
*   `glass-stellar-silica`:
    *   `backdrop-filter: blur(40px);`
    *   `background: rgba(8, 8, 12, 0.60);`
    *   `border: 1px solid rgba(255, 255, 255, 0.08);`
    *   `box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(0, 0, 0, 0.4), 0 24px 64px rgba(0, 0, 0, 0.3);`

---

## Loader & Bootup Sequence (First Ingress)

Before the homepage content renders, the website executes a structural diagnostic boot sequence.

```
[ SCREEN STATE: ABSOLUTE BLACK ]
 0ms - 300ms:   Single white pixel (1x1px) fades in center.
 300ms - 700ms: 1px grid line axes draw horizontally and vertically from center.
 700ms - 1100ms:Hexadecimal coordinates cycle rapidly in corners of screen.
 1100ms:        Grid line opacity settles to 3%. Main viewport content reveals.
```

*   **Telemetry Readout (Top-Left):** `SYS_BOOT: [ OK ] // TELEMETRY: ESTABLISHED` (JetBrains Mono, `#00E5FF`).
*   **Transition out:** The loading container scales up slightly (`1.02`), opacity fades to `0` over 600ms using a `cubic-bezier(0.16, 1, 0.3, 1)` easing curve.

---

## Navigation Bar (Sticky Persistent Header)

*   **Component ID:** `comp-header-nav`
*   **Vertical Height:** `64px`
*   **Z-Index Stack:** `1000` (Topmost overlay)

### High-Fidelity Styling Specification
*   **Background Fill:** `rgba(8, 8, 12, 0.40)` with `backdrop-filter: blur(20px)`.
*   **Border Bottom:** `1px solid rgba(255, 255, 255, 0.03)` (Chamber Iron).
*   **Layout Structure:**
    *   **Cols 1-2 (Logo Group):**
        *   Text: `Vyom` (Outfit, `14px`, weight `500`, tracking `0.15em`, color `#F8F9FA`).
        *   Telemetry Badge: `[ SYS.OK ]` (JetBrains Mono, `9px`, color `#00E5FF`, padding-left `8px`).
    *   **Cols 4-8 (Nav Links Array):**
        *   Links: `[ 01 // CAPABILITIES ]` | `[ 02 // ENGAGEMENTS ]` | `[ 03 // THE PROTOCOL ]`.
        *   Typography: JetBrains Mono, `10px`, weight `500`, uppercase, color `#8E929D` (Helium Silver).
    *   **Cols 10-11 (Action CTA):**
        *   Button: `[ INITIATE CONNECTION ]` (Outfit, `11px`, weight `500`, tracking `0.05em`, color `#F8F9FA`).
        *   Button Border: `1px solid rgba(255, 255, 255, 0.1)`. Radius `4px`.
    *   **Col 12 (Active Status):**
        *   Text: `LATENCY: 24MS` (JetBrains Mono, `9px`, color `#8E929D`, align right).
*   **Hover State Behavior:**
    *   Hovering any link dims sibling links to `40%` opacity. The hovered link changes color to `#F8F9FA`.
    *   Hovering the CTA button triggers a horizontal light sweep across the top edge. The button background transitions to `rgba(255, 255, 255, 0.03)` over 200ms.

---

## Viewport 01: Arrival

*   **Component ID:** `vp-01-arrival`
*   **Height:** `100vh`
*   **Grid:** 12 Columns | Margins: `64px`

### High-Fidelity Styling Specification
```
+--------------------------------------------------------------------------------+
| [LOC: 40.7128 // 74.0060] Monospace 9px                        [ACTIVE STATUS] |
|                                                                                |
|                                                                                |
|                   ENGINEERING INTELLECTUAL CAPACITY                            |
|                            FOR THE ENTERPRISE.                                 |
|                                                                                |
|                                     + (Kelvin Cyan Crosshair)                  |
|                                                                                |
|              We construct custom intelligent software systems                  |
|          that bridge strategic vision with computational scale.                |
|                                                                                |
|                            [ SYSTEM CALIBRATION ]                              |
|                                                                                |
|                                 [ SCROLL ]                                     |
+--------------------------------------------------------------------------------+
```
*   **Typography:**
    *   **Headline:** `type-hero-display`, color `#F8F9FA`.
    *   **Supporting Copy:** `type-body-copy` (`15px`, line-height `1.625`), color `#8E929D`. Center aligned.
    *   **Local Coordinates (Top-Left):** `LOC: [40.7128 // 74.0060]` (JetBrains Mono, `9px`, color `#8E929D`).
*   **Focal Point (Center):**
    *   A 1px width, `12px` height vertical and horizontal coordinate crosshair (`+`) in Kelvin Cyan (`#00E5FF`).
*   **CTA Button:**
    *   Container: Spans Col 6-7. Height: `48px`. Outer Border: `1px solid rgba(255,255,255,0.08)`. Radius: `4px`.
    *   Hover transition: The border color changes to `#323641` (Active Steel). Inside the border, a thin gradient sweeps across.
*   **Empty Space:** `140px` vertical void above the headline, `120px` void below the CTA.
*   **Parallax / Scroll Transition:**
    *   Scrolling down scales down the center crosshair while dragging the background grid line intersections outward. The headline and supporting text slide upward behind an invisible clipping mask window.

---

## Viewport 02: Business Challenge

*   **Component ID:** `vp-02-challenge`
*   **Height:** `120vh`
*   **Grid:** 12 Columns | Margins: `128px` (Cosmic scale margin)

### High-Fidelity Styling Specification
```
+--------------------------------------------------------------------------------+
|  THE FRICTION OF                                                               |
|  ISOLATED INTELLIGENCE.               [ WebGL 3D Canvas - Tangled Wireframe ]  |
|                                                                                |
|  Modern enterprises do not lack                                                |
|  data or software. They lack                                                   |
|  structural cohesion...                                                        |
|                                                                                |
|  [ READ VALUE PRINCIPLES ]                                                     |
+--------------------------------------------------------------------------------+
```
*   **Typography:**
    *   **Headline:** `type-section-title` (Size `48px`, weight `300`, tracking `-0.01em`, color `#F8F9FA`, spans Col 1-5).
    *   **Supporting Copy:** `type-body-copy` (Size `16px`, line-height `1.7`, color `#8E929D`, spans Col 1-5).
    *   **CTA Link:** Outfit, `13px`, weight `500`, uppercase, tracking `0.10em`, color `#00E5FF` (Kelvin Cyan).
*   **3D Object Placement (WebGL Three.js Canvas):**
    *   Position: Spans Cols 7-12. Height: `560px`. Centered vertically.
    *   The Object: A mathematical wireframe sphere, constructed using 1px white lines (`rgba(255,255,255,0.15)`). The vertices are tangled, creating irregular star-like geometry.
*   **Lighting:**
    *   An ambient dark indigo spotlight (`rgba(20, 24, 45, 0.12)`) illuminates the WebGL mesh. The cursor acts as a soft white radial highlight light (radius: `240px`, opacity: `4%`) that follows mouse movement over the wireframe.
*   **Hover States:**
    *   Hovering the 3D model increases the rotation speed lag slightly.
    *   Hovering the CTA link reveals a 1px solid cyan underline drawing from left to right.

---

## Viewport 03: Capabilities

*   **Component ID:** `vp-03-capabilities`
*   **Height:** `150vh`
*   **Grid:** 12 Columns | Margins: `64px`

### High-Fidelity Styling Specification
```
+--------------------------------------------------------------------------------+
| THE INSTRUMENT MATRIX.                                                         |
| We operate at the convergence of four core engineering disciplines...          |
|                                                                                |
| +─────────────────────────────────────+──────────────────────────────────────+ |
| | [01 // AI & INTEL SYSTEMS]          | [02 // PLATFORM ENGINEERING]         | |
| | - Custom LLM Orchestration          | - Kubernetes Grid Deployment         | |
| | - Predictive Telemetry              | - Automated Infrastructure           | |
| +─────────────────────────────────────+──────────────────────────────────────+ |
| | [03 // DISTRIBUTED DATA]            | [04 // ENTERPRISE STRATEGY]          | |
| | - High-Throughput Streams           | - Feasibility Architecture           | |
| | - Scientific Vector Databases       | - Cloud Optimization blueprints      | |
| +─────────────────────────────────────+──────────────────────────────────────+ |
|                                                                                |
|                            [ EXPLORE DIRECTORY ]                               |
+--------------------------------------------------------------------------------+
```
*   **Typography:**
    *   **Section Title:** `type-section-title` (Size `32px`, color `#F8F9FA`, left-aligned).
    *   **Panel Headers:** Monospace, `12px`, weight `500`, color `#F8F9FA`.
    *   **Sub-lists Copy:** Outfit, `14px`, color `#8E929D`.
*   **Glass Panel Execution:**
    *   Four quadrants separated by a thin grid border line (`1px solid rgba(255,255,255,0.06)`).
    *   Glass composite: `backdrop-filter: blur(40px); background: rgba(8, 8, 12, 0.40);`
*   **Interactive Spotlights:**
    *   Hovering a quadrant scales up its inner padding by `4px` and increases border opacity to `rgba(255, 255, 255, 0.15)` (Active Steel). Inside the panel, list elements fade in sequentially.
    *   Monospace numeric indicators in the corner tick rapidly from randomized parameters (e.g., `[ 48% // FF ]` to `[ 100% // 00 ]`).
*   **Section Divider:**
    *   A clean horizontal separator line `1px solid rgba(255,255,255,0.05)` bounds the bottom of this matrix.

---

## Viewport 04: Selected Solutions

*   **Component ID:** `vp-04-solutions`
*   **Height:** `120vh`
*   **Grid:** 12 Columns | Margins: `64px`

### High-Fidelity Styling Specification
```
+--------------------------------------------------------------------------------+
| SELECTED ARCHITECTURES.                                                        |
|                                                                                |
| +──────────────────────+  +──────────────────────+  +──────────────────────+   |
| | TELEMETRY INGESTION  |  | COGNITIVE CORE       |  | SOVEREIGN PLATFORM   |   |
| | [ 1.2 GB/S ]         |  | [ 94.2% EFFICACY ]   |  | [ ZERO-TRUST ]       |   |
| |                      |  |                      |  |                      |   |
| | 1px Ingest Path      |  | 1px Node Graph       |  | 1px Shield Schematic |   |
| +──────────────────────+  +──────────────────────+  +──────────────────────+   |
|                                                                                |
|                            [ SYSTEM CALIBRATION INDEX ]                        |
+--------------------------------------------------------------------------------+
```
*   **Panel Sizes:**
    *   Width: `410px` per card (Spans 4 columns). Height: `460px`.
*   **Glass & Borders:**
    *   Card Container: `backdrop-filter: blur(20px); background: rgba(18, 19, 24, 0.50);`
    *   Border: `1px solid rgba(255,255,255,0.05)`. Radius: `4px` (Precise instrument style).
*   **Visual Content (Inside Cards):**
    *   **Telemetry Ingestion:** A static 1px white vector line chart representing throughput spikes.
    *   **Cognitive Core:** A tiny node-connector graph containing three highlighted nodes.
    *   **Sovereign Platform:** An isometric schematic outline of a server processor chip.
*   **Hover State Behavior:**
    *   Hovering a card causes its background fill to brighten to `rgba(255, 255, 255, 0.02)` and highlights its specific vector chart using a clean Kelvin Cyan accent sweep.

---

## Viewport 05: Proof (Case Study)

*   **Component ID:** `vp-05-proof`
*   **Height:** `130vh`
*   **Grid:** 12 Columns | Margins: `128px`

### High-Fidelity Styling Specification
```
+--------------------------------------------------------------------------------+
| CASE SYSTEM DECONSTRUCTION // LOGISTICS INGEST                                 |
|                                                                                |
| [Col 1-5: Case Details]                       [Col 7-12: Interactive Blueprint]|
|                                                                                |
| - Headline: Ingest System                     - Static Coordinate Grid Base    |
| - Metric: 2.4 GB/S Ingress                    - Flow nodes:                    |
| - Stat: Ingestion Latency: 40ms                 [Ingress] ──> [Queue] ──> [DB] |
| - Quote: "The system runs without             - Dynamic data packets           |
|   latency at global scale."                     (1px white dots traversing)    |
|                                                                                |
| [ DECONSTRUCT BLUEPRINT ]                                                      |
+--------------------------------------------------------------------------------+
```
*   **Typography:**
    *   **Metrics numbers:** Monospace, `48px`, weight `300`, color `#F8F9FA`.
    *   **Quote:** Outfit, `18px`, italic, weight `300`, color `#8E929D`.
*   **Interactive Blueprint Specification:**
    *   WebGL / HTML5 Canvas container spanning Col 7-12. Height: `480px`.
    *   Borders: Framed with structural corner brackets `[ ]` at the boundaries.
    *   Node representation: Tiny 1px outline circles with centered status markers.
*   **Data Motion:**
    *   Microscopic white dot coordinates (`rgba(255, 255, 255, 0.4)`) slide horizontally along the vector paths from node to node, mimicking real-time packet ingestion.
*   **Hover Interaction:**
    *   Hovering the "Queue" node pauses the packet flow in the diagram and displays a tooltip popup containing simulated memory usage logs (`RAM_USE: 22%`).

---

## Viewport 06: How We Work (Methodology)

*   **Component ID:** `vp-06-methodology`
*   **Height:** `120vh`
*   **Grid:** 12 Columns | Margins: `64px`

### High-Fidelity Styling Specification
```
+--------------------------------------------------------------------------------+
| THE METHODOLOGY PROTOCOL.                                                      |
|                                                                                |
| Col 2-11: TIMELINE INTERACTION BAR                                             |
| o====================================o====================================o     |
| [Node 01: AUDIT]                 [Node 02: ARCHITECT]            [Node 03: OPERATE] |
|                                                                                |
| +───────────────────────+        +───────────────────────+        +───────────+ |
| | [Col 2-4: Audit Box]  |        | [Col 5-7: Arch Box]   |        | [Col 8-10]| |
| | Deliverable: Log      |        | Deliverable: Blueprint|        | Deliv: Sys| |
| | Timeframe: 10 Days    |        | Timeframe: 20 Days    |        | Time: Lock| |
| +───────────────────────+        +───────────────────────+        +───────────+ |
|                                                                                |
|                            [ INITIATE AUDIT ]                                  |
+--------------------------------------------------------------------------------+
```
*   **Timeline Element Spec:**
    *   A continuous central horizontal line spanning Col 2-11. Height: `1px`. Color: `rgba(255, 255, 255, 0.1)`.
    *   Nodes: Three `8px` diameter circles centered on the timeline at Cols 2, 6.5, and 11.
*   **Box Layout Specification:**
    *   Containers: Glass panels spanning Cols 2-4, 5-7, and 8-10. Height: `220px`.
    *   Border: `1px solid rgba(255, 255, 255, 0.05)`. Radius: `2px`.
*   **Scrubbing Interaction:**
    *   Moving the cursor horizontally along the timeline illuminates the track in Kelvin Cyan (`#00E5FF`) up to the cursor position. The phase box directly underneath the active node brightens to 100% opacity; non-active phase boxes dim to 30% opacity.

---

## Viewport 07: Technology Ecosystem

*   **Component ID:** `vp-07-ecosystem`
*   **Height:** `110vh`
*   **Grid:** 12 Columns | Margins: `64px`

### High-Fidelity Styling Specification
```
+--------------------------------------------------------------------------------+
| INTEGRATION COHESION.                                                          |
| We engineer system layers native to leading enterprise technology frameworks...|
|                                                                                |
|               Col 3             Col 6             Col 9                        |
|  Row 1: ───────o──────────────────o──────────────────o────────                 |
|                |                  |                  |                         |
|                | (K8s Logo)       | (Terraform Logo) | (Rust Logo)             |
|  Row 2: ───────o──────────────────o──────────────────o────────                 |
|                |                  |                  |                         |
|                | (AWS Logo)       | (Kafka Logo)     | (Go Logo)               |
|                                                                                |
|                            [ STACK MATRIX DIRECTORY ]                          |
+--------------------------------------------------------------------------------+
```
*   **Grid Structure:**
    *   Horizontal rows and vertical columns draw thin, 1px lines (`rgba(255, 255, 255, 0.02)`) intersecting to construct a coordinate constellation layout.
*   **Technology Icons:**
    *   Vector outlines (1.5px weight), centered exactly at coordinate intersections. Color: `#8E929D` (Helium Silver).
*   **Interaction:**
    *   Hovering an icon changes its outline color to `#F8F9FA` and displays its local coordinate index (e.g., `SYS.LOC [03//01]`) alongside a small, monospace tooltip listing our integration credentials.

---

## Viewport 08: Why Vyom

*   **Component ID:** `vp-08-why-Vyom`
*   **Height:** `120vh`
*   **Grid:** 12 Columns | Margins: `128px`

### High-Fidelity Styling Specification
```
+--------------------------------------------------------------------------------+
| THE DIVERGENCE.                                                                |
|                                                                                |
| [Col 1-5: Standard Outsourcing]         |    [Col 7-12: Vyom Architecture]    |
| - Focused on billing developer blocks   |    - Focus: Working software systems |
| - High employee churn & handoffs        |    - Core team: Locked senior squads |
| - Overhead: Inefficient account layers  |    - Zero intermediate management    |
|                                         |                                      |
|                                         |    [ REQUEST SYSTEM INTAKE ]         |
+--------------------------------------------------------------------------------+
```
*   **Central Divider Line:**
    *   Width: `1px`. Height: `540px` (Centered vertically). Color: `rgba(255, 255, 255, 0.06)`.
*   **Visual Hierarchy:**
    *   **Left Column (Standard):** Color: `#8E929D`. Text is styled in standard weights.
    *   **Right Column (Vyom):** Color: `#F8F9FA`. Highlight points are marked with tiny coordinate dots (`+`).
*   **Background Detail:**
    *   Microscopic, helium-silver dust particles (1px diameter, 10% opacity) float slowly in vertical paths behind the right column, representing system organization and order.

---

## Viewport 09: Final Conversation (Intake)

*   **Component ID:** `vp-09-intake`
*   **Height:** `120vh`
*   **Grid:** 12 Columns | Margins: `128px`

### High-Fidelity Styling Specification
```
+--------------------------------------------------------------------------------+
| INITIATE SYSTEM DIAGNOSTIC PROTOCOL                                            |
|                                                                                |
| [Col 1-6: Form Console]                       [Col 8-12: Telemetry Metadata]   |
|                                                                                |
| [ SENDER NAME / CO ]                          - SYS_TIME: GMT 14:44:59         |
| ────────────────────────────────────          - LATITUDE: 40.7128° N           |
| [ TARGET SCALE BOTTLENECK ]                   - SECURE TRANS: TLS 1.3          |
| ────────────────────────────────────          - PGP: [ DOWNLOAD KEY ]          |
| [ SECURE INTAKE EMAIL ]                                                        |
| ────────────────────────────────────                                           |
|                                                                                |
| [ SECURE TRANSMISSION ]                                                        |
+--------------------------------------------------------------------------------+
```
*   **Input Fields Styling:**
    *   Height: `56px`. Border-Bottom: `1px solid rgba(255, 255, 255, 0.1)`. No side or top borders. Background: Transparent.
    *   Typography inside inputs: JetBrains Mono, `13px`, color `#F8F9FA`.
*   **Interactive Validation:**
    *   Hovering an input changes the bottom border color to `#323641` (Active Steel). On focus, the bottom border line sweeps in Kelvin Cyan (`#00E5FF`).
*   **Primary CTA Button:**
    *   Container: Spans Col 1-3. Height: `52px`. Outer Border: `1px solid rgba(255, 255, 255, 0.15)`. Radius: `4px`.
    *   Hover Action: Fills with a white solid gradient sweeping from left to right; text transitions to black (`#08080C`).

---

## Viewport 10: Footer

*   **Component ID:** `vp-10-footer`
*   **Height:** `80vh`
*   **Grid:** 12 Columns | Margins: `64px`

### High-Fidelity Styling Specification
```
+--------------------------------------------------------------------------------+
| ────────────────────────────────────────────────────────────────────────────── |
|                                                                                |
| [Col 1-3: Sitemap Links] [Col 4-6: Tech Specs] [Col 7-9: HQ] [Col 10-12: Legal]|
| - Capabilities           - Secure Protocol     - NY Coordinates - Terms        |
| - Case Engagements       - Ingress Node        - GMT Clock      - Security     |
| - Manifesto              - Frame Rate          - HQ Address     - Privacy Matrix|
|                                                                                |
| Vyom // INTEGRATED.                           PGP KEY: [ DOWNLOAD PGP ]       |
+--------------------------------------------------------------------------------+
```
*   **Typography:**
    *   Sitemap headings: JetBrains Mono, `10px`, weight `500`, color `#F8F9FA`.
    *   Link list items: Outfit, `14px`, weight `400`, color `#8E929D`.
*   **Separators:**
    *   A persistent, top horizontal hairline separator spans Cols 1-12. Height: `1px`. Color: `rgba(255, 255, 255, 0.05)`.
*   **Exit details:**
    *   Bottom copyright line: `Vyom // ALL SYSTEMS CONVERGED.` (Monospace, `9px`, color `#8E929D`, bottom-left position).

---
*Developed by Vyom Design System Board.*  
*High-Fidelity UI Blueprint Approved for Platform Construction.*
