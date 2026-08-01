# Vyom HOMEPAGE WIREFRAMES (V1.0)
### Structural Grid, Column Spans, and Responsive Layout Blueprint
**Classification:** UX Design Standard  
**Single Source of Truth For:** Frontend Engineers, Layout Designers, and QA Evaluators.  
**Grids:**
*   **Desktop Grid:** 12 Columns | 32px Gutters | 64px to 128px Margins | Max-Width: 1440px
*   **Tablet Grid:** 8 Columns | 24px Gutters | 32px Margins | Max-Width: 1024px
*   **Mobile Grid:** 4 Columns | 16px Gutters | 16px Margins | Max-Width: 480px

---

## Navigation Bar (Persistent Header)

*   **Component ID:** `comp-header-nav`
*   **Section Height:** 64px (Desktop/Tablet) | 56px (Mobile)

### Desktop Wireframe (12-Column Grid)
```
[Margin 64px] [Col 1-2: Logo] [Col 3-9: Menu Links] [Col 10-11: CTA] [Col 12: Telemetry Status] [Margin 64px]
───────────────────────────────────────────────────────────────────────────────────────────────────────────
(1) Logo: "Vyom [SYS_OK]" - Left-aligned spanning Cols 1-2.
(2) Links: "[01 // CAP] [02 // ENG] [03 // PROTOCOL]" - Spanning Cols 4-8.
(3) CTA: "[ INITIATE CONNECTION ]" - Right-aligned spanning Cols 10-11.
(4) Telemetry: "[ LATENCY: 24MS ]" - Monospace, right-aligned spanning Col 12.
```

### Tablet Wireframe (8-Column Grid)
```
[Margin 32px] [Col 1-2: Logo] [Col 3-6: Menu Links] [Col 7-8: CTA] [Margin 32px]
────────────────────────────────────────────────────────────────────────────────
(1) Logo: "Vyom" - Left-aligned spanning Cols 1-2.
(2) Links: "[CAP] [ENG]" - Spanning Cols 3-5.
(3) CTA: "[CONNECT]" - Outlined button, spanning Cols 7-8. (Telemetry status hidden).
```

### Mobile Wireframe (4-Column Grid)
```
[Margin 16px] [Col 1-2: Logo] [Col 3-4: Dock Button] [Margin 16px]
─────────────────────────────────────────────────────────────────
(1) Logo: "Vyom" - Left-aligned spanning Cols 1-2.
(2) Dock Button: "[ MENU ]" - Spanning Cols 3-4.
(Persistent bottom dock overrides menu overlay if activated).
```

---

## Viewport 01: Arrival

*   **Component ID:** `vp-01-arrival`
*   **Viewport Height:** 100vh
*   **Focal Point:** Central coordinate crosshair (`+`) and center typography cluster.
*   **Eye Tracking:** Top-Left Metadata -> Center Title -> Bottom CTA -> Dynamic Scroll Indicator.
*   **Interaction Zones:** Center CTA, Top-Right Telemetry, Page calibrator settings panel.

### Desktop Wireframe (12-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      | [Loc Readout]                                                [Active Status]|  <- Margin 64px Top
      |                                                                             |
      |                                                                             |
      |                        Col 3-10: HEADLINE TEXT                              |  <- Align: Centered
      |                                                                             |
      |                                   +                                         |  <- Dynamic Crosshair
      |                                                                             |
      |                        Col 5-8: SUPPORTING COPY                             |  <- Align: Centered
      |                                                                             |
      |                        Col 6-7: Primary CTA                                 |  <- Radius: 4px
      |                                                                             |
      |                                                                             |
      |                                                                             |
      |                               [Scroll]                                      |  <- Bottom Anchor
100vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Desktop Specs:**
    *   *Grid Span:* Headline spans Col 3-10 (Row height: 120px). Supporting Copy spans Col 4-9 (Row height: 80px). Primary CTA spans Col 6-7 (Height: 48px).
    *   *Negative Space:* 75% void padding vertically.
    *   *Responsive Behaviour:* Text sizes scale dynamically using fluid `clamp()` layout values.

### Tablet Wireframe (8-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      | [Loc Readout]                                                               |
      |                                                                             |
      |                        Col 2-7: HEADLINE TEXT                               |
      |                                   +                                         |
      |                        Col 2-7: SUPPORTING COPY                             |
      |                        Col 4-5: Primary CTA                                 |
      |                                                                             |
      |                               [Scroll]                                      |
100vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Tablet Specs:**
    *   *Grid Span:* Headline spans Col 2-7. Supporting Copy spans Col 2-7. CTA spans Col 4-5.
    *   *Margins:* Top/Bottom padding drops to 12vh to pull elements together.

### Mobile Wireframe (4-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |                                                                             |
      |                        Col 1-4: HEADLINE TEXT                               |
      |                                                                             |
      |                        Col 1-4: SUPPORTING COPY                             |
      |                                                                             |
      |                        Col 2-3: Primary CTA                                 |
      |                                                                             |
      |                               [Scroll]                                      |
100vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Mobile Specs:**
    *   *Grid Span:* All text spans Col 1-4. CTA spans Col 2-3 (width: 100%).
    *   *Height:* Locked to 100vh using mobile-safe custom environment variables (`100dvh`).

---

## Viewport 02: Business Challenge

*   **Component ID:** `vp-02-challenge`
*   **Viewport Height:** 120vh
*   **Focal Point:** Tangled 3D wireframe mesh in the right column.
*   **Eye Tracking:** Left-side Headline -> Right-side 3D Mesh -> Left-side Copy -> CTA.
*   **Interaction Zones:** 3D model container, Primary CTA.

### Desktop Wireframe (12-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |                                                                             |
      |  [Col 1-5: Text Area]                       [Col 7-12: WebGL 3D Mesh]       |
      |                                                                             |
      |   (300px Spacer)                             (500px H x 500px W Canvas)     |
      |                                                                             |
      |   Headline: Cols 1-5                         Wireframe Sphere:              |
      |   Supporting Copy: Cols 1-5                  Spans Cols 7-12                |
      |                                              Centered Vertically            |
      |   Primary CTA: Cols 1-3                                                     |
      |                                                                             |
      |                                                                             |
120vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Desktop Specs:**
    *   *Grid Span:* Left text group (Headline, Copy, CTA) spans Cols 1-5. Right WebGL canvas spans Cols 7-12 (leaves Col 6 as a dead gutter space).
    *   *Alignment:* Text is left-aligned. WebGL canvas is centered vertically relative to the viewport height.

### Tablet Wireframe (8-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |                                                                             |
      |  [Col 1-4: Text Area]                       [Col 5-8: WebGL 3D Canvas]      |
      |                                                                             |
      |   Headline: Cols 1-4                         WebGL Mesh: Spans Cols 5-8     |
      |   Supporting Copy: Cols 1-4                  Height: 350px                  |
      |   CTA: Cols 1-2                                                             |
      |                                                                             |
120vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Tablet Specs:**
    *   *Grid Span:* Text spans Cols 1-4. WebGL canvas spans Cols 5-8.
    *   *Margins:* Gutters compress to 24px. Canvas width scales to fit Col 5-8 boundaries.

### Mobile Wireframe (4-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |                                                                             |
      |  [Col 1-4: WebGL 3D Canvas (Height: 280px)]                                 |
      |                                                                             |
      |  [Col 1-4: Text Area]                                                       |
      |   Headline: Cols 1-4                                                        |
      |   Supporting Copy: Cols 1-4                                                 |
      |   CTA: Cols 1-4 (Full-Width Button)                                         |
      |                                                                             |
120vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Mobile Specs:**
    *   *Grid Span:* Stacks vertically. WebGL canvas spans Col 1-4 at the top. Text and CTA sit below, spanning Col 1-4.
    *   *Interaction:* WebGL canvas auto-rotates; swipe interactions disabled.

---

## Viewport 03: Capabilities

*   **Component ID:** `vp-03-capabilities`
*   **Viewport Height:** 150vh
*   **Focal Point:** Highlighted quadrant under cursor hover.
*   **Eye Tracking:** Top section title -> Top-left panel -> Top-right panel -> Bottom-left panel -> Bottom-right panel.
*   **Interaction Zones:** Individual glass quadrants (01, 02, 03, 04), Primary CTA.

### Desktop Wireframe (12-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-12: Section Header & Narrative Copy                                  |
      |                                                                             |
      |  +───────────────────────────────+───────────────────────────────────────+  |
      |  | [Col 1-6: GLASS PANEL 01]     | [Col 7-12: GLASS PANEL 02]            |  |
      |  | ID: panel-ai                  | ID: panel-cloud                       |  |
      |  | Title: AI & Intel Systems     | Title: Platform Engineering           |  |
      |  | Sub-lists: Custom LLMs, etc.  | Sub-lists: Kubernetes, IaC            |  |
      |  +───────────────────────────────+───────────────────────────────────────+  |
      |  | [Col 1-6: GLASS PANEL 03]     | [Col 7-12: GLASS PANEL 04]            |  |
      |  | ID: panel-data                | ID: panel-strategy                    |  |
      |  | Title: Data Engineering       | Title: Digital Strategy               |  |
      |  | Sub-lists: Streaming pipelines| Sub-lists: Feasibility blueprints     |  |
      |  +───────────────────────────────+───────────────────────────────────────+  |
      |                                                                             |
      |  Col 5-8: Primary CTA: [ EXPLORE DIRECTORY ]                                |
150vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Desktop Specs:**
    *   *Grid Span:* Horizontal grid dividing line splits the matrix at 50% section height. Panels 01 and 03 span Cols 1-6. Panels 02 and 04 span Cols 7-12.
    *   *Glass Layer:* 1px border separator running vertically down Col 6-7 gutter.

### Tablet Wireframe (8-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-8: Section Header                                                    |
      |                                                                             |
      |  +───────────────────────────────+───────────────────────────────────────+  |
      |  | [Col 1-4: PANEL 01]           | [Col 5-8: PANEL 02]                   |  |
      |  +───────────────────────────────+───────────────────────────────────────+  |
      |  | [Col 1-4: PANEL 03]           | [Col 5-8: PANEL 04]                   |  |
      |  +───────────────────────────────+───────────────────────────────────────+  |
      |                                                                             |
      |  Col 3-6: CTA Button                                                        |
150vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Tablet Specs:**
    *   *Grid Span:* Panel grid spans split at Col 4/5. Panels 01/03 span Cols 1-4. Panels 02/04 span Cols 5-8.

### Mobile Wireframe (4-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-4: Section Header                                                    |
      |                                                                             |
      |  [Col 1-4: Accordion Unit 01 - Click to Expand]                             |
      |  [Col 1-4: Accordion Unit 02]                                               |
      |  [Col 1-4: Accordion Unit 03]                                               |
      |  [Col 1-4: Accordion Unit 04]                                               |
      |                                                                             |
      |  Col 1-4: Primary CTA (Full-Width Button)                                   |
150vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Mobile Specs:**
    *   *Layout:* 2x2 grid collapses to a 1x4 vertical layout. Interactive panels act as drop-down accordion nodes to optimize layout viewport usage.

---

## Viewport 04: Selected Solutions

*   **Component ID:** `vp-04-solutions`
*   **Viewport Height:** 120vh
*   **Focal Point:** The currently highlighted horizontal card detail.
*   **Eye Tracking:** Section Header -> Left Card -> Middle Card -> Right Card.
*   **Interaction Zones:** Card 01, Card 02, Card 03, Primary CTA.

### Desktop Wireframe (12-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-12: Section Title & Diagnostic Subtitle                              |
      |                                                                             |
      |  [Col 1-4: Card A]           [Col 5-8: Card B]           [Col 9-12: Card C] |
      |  ID: card-telemetry          ID: card-cognitive          ID: card-sovereign |
      |                                                                             |
      |  Content:                    Content:                    Content:           |
      |  - Title: Telemetry Engine   - Title: Cognitive Core     - Title: SVR Cloud |
      |  - Metric: 1.2 GB/S          - Metric: 94% Efficacy      - Metric: Zero-Trst|
      |  - Schematic Line            - Schematic Line            - Schematic Line   |
      |                                                                             |
      |  Col 5-8: Primary CTA                                                       |
120vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Desktop Specs:**
    *   *Grid Span:* Three panels are aligned horizontally. Card A spans Cols 1-4. Card B spans Cols 5-8. Card C spans Cols 9-12.
    *   *Card Height:* 480px.

### Tablet Wireframe (8-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-8: Section Title                                                     |
      |                                                                             |
      |  [Col 1-8: Horizontal Swipe Container]                                      |
      |  ├── [Card A: Spans Col 1-5]                                                |
      |  ├── [Card B: Spans Col 6-10 (Scrolls in)]                                  |
      |  └── [Card C: Scrolls in]                                                   |
      |                                                                             |
      |  Col 3-6: Primary CTA                                                       |
120vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Tablet Specs:**
    *   *Layout:* Horizontal cards exceed grid width, forming a swipe deck container. Each card scales to span 5 columns of the tablet grid.

### Mobile Wireframe (4-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-4: Section Title                                                     |
      |                                                                             |
      |  [Col 1-4: Swipe Deck Container]                                            |
      |  ├── [Card A: Spans Col 1-3.5]                                              |
      |  └── [Card B / C: Hidden off-screen right]                                  |
      |                                                                             |
      |  Col 1-4: Primary CTA                                                       |
120vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Mobile Specs:**
    *   *Layout:* Swipe deck format. Card A spans 3.5 columns, revealing the edge of Card B to prompt a horizontal swiping gesture.

---

## Viewport 05: Proof (Case Study)

*   **Component ID:** `vp-05-proof`
*   **Viewport Height:** 130vh
*   **Focal Point:** Ingest node path flow on the blueprint diagram.
*   **Eye Tracking:** Metric Highlight -> Case Narrative -> Right Blueprint Diagram -> Quote.
*   **Interaction Zones:** Blueprint node triggers, CTA button.

### Desktop Wireframe (12-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-12: Section Header (Telemetry Tag & Metadata)                        |
      |                                                                             |
      |  [Col 1-5: Project Context]                 [Col 7-12: Blueprint Console]   |
      |  - Headline: Case 01                         ID: canvas-blueprint           |
      |  - Copy: Real-Time Ingest                   - Grid lines background         |
      |  - Stats: Ingestion Rate                    - Flowchart nodes:              |
      |    - Ingress: 2.4 GB/S                        [In] -> [Q] -> [Proc] -> [Db] |
      |    - Target Latency: 40MS                                                   |
      |  - Quote: Founder verification                                              |
      |                                                                             |
      |  [Col 1-3: Primary CTA]                                                     |
130vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Desktop Specs:**
    *   *Grid Span:* Text area spans Cols 1-5. Canvas console spans Cols 7-12. Vertical separator lines boundary sits in Col 6.
    *   *Canvas Height:* 520px.

### Tablet Wireframe (8-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-8: Section Header                                                    |
      |                                                                             |
      |  [Col 1-4: Project Context]                 [Col 5-8: Blueprint Console]    |
      |  - Headline, Copy, Stats                     - Scaled down schematic        |
      |  - CTA spans Col 1-3                         - Height: 350px                |
      |                                                                             |
130vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Tablet Specs:**
    *   *Grid Span:* Text spans Cols 1-4. Canvas console spans Cols 5-8.
    *   *Margins:* Spacing padding falls back to 48px to prevent overlap boundaries.

### Mobile Wireframe (4-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-4: Section Header                                                    |
      |                                                                             |
      |  [Col 1-4: Project Context]                                                 |
      |  - Headline, Copy, Stats                                                    |
      |                                                                             |
      |  [Col 1-4: Blueprint Console (Static Schematic Node Image)]                 |
      |  - Height: 240px                                                            |
      |                                                                             |
      |  [Col 1-4: Primary CTA]                                                     |
130vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Mobile Specs:**
    *   *Layout:* Stacks vertically. Text context first, static system vector blueprint graphic second, CTA button anchored at bottom.

---

## Viewport 06: How We Work (Methodology)

*   **Component ID:** `vp-06-methodology`
*   **Viewport Height:** 120vh
*   **Focal Point:** The horizontal timeline progress line and nodes.
*   **Eye Tracking:** Headline -> Timeline Node 01 -> Node 02 -> Node 03 -> Metric Box.
*   **Interaction Zones:** Timeline nodes, CTA.

### Desktop Wireframe (12-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-12: Section Title & Protocol Subtitle                                |
      |                                                                             |
      |  Col 2-11: TIMELINE INSTRUMENT                                              |
      |  o===================================o===================================o  |
      |  [Node 01 // AUDIT]               [Node 02 // ARCHITECT]             [Node 03]  |
      |                                                                             |
      |  [Col 2-4: Audit Box]             [Col 5-7: Architect Box]           [Col 8-10]|
      |  - Inputs: Data schemas           - Inputs: Architectural plan       - Inputs: |
      |  - Deliverable: Audit log         - Deliverable: System blueprint    - Deliv:  |
      |  - Timeframe: 10 Days             - Timeframe: 20 Days               - Time:   |
      |                                                                             |
      |  Col 5-8: Primary CTA: [ AUDIT SYSTEM ]                                     |
120vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Desktop Specs:**
    *   *Grid Span:* Timeline runs horizontally across Cols 2-11. Node 01 center: Col 2. Node 02 center: Col 6.5. Node 03 center: Col 11.
    *   *Phase Boxes:* Audit Box spans Cols 2-4. Architect Box spans Cols 5-7. Operations Box spans Cols 8-10.

### Tablet Wireframe (8-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-8: Section Title                                                     |
      |                                                                             |
      |  Col 1-8: TIMELINE INSTRUMENT                                               |
      |  o=================================o=================================o      |
      |  [Node 01]                      [Node 02]                      [Node 03]    |
      |                                                                             |
      |  [Col 1-8: Active Details Box]                                              |
      |  - Details of the hovered/active node only                                  |
      |  - Height: 180px                                                            |
      |                                                                             |
      |  Col 3-6: Primary CTA                                                       |
120vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Tablet Specs:**
    *   *Layout:* Desktop's triple detail boxes are replaced with a single active details box that dynamically changes based on node hover/click selection.

### Mobile Wireframe (4-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-4: Section Title                                                     |
      |                                                                             |
      |  Col 1: Vertical Timeline Bar                                               |
      |  |                                                                          |
      |  o--- [Col 2-4: Phase 01: Audit Details Box]                                |
      |  |                                                                          |
      |  o--- [Col 2-4: Phase 02: Architect Details Box]                            |
      |  |                                                                          |
      |  o--- [Col 2-4: Phase 03: Operate Details Box]                              |
      |                                                                             |
      |  Col 1-4: Primary CTA                                                       |
120vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Mobile Specs:**
    *   *Layout:* Horizontal timeline rotates 90 degrees. Timeline bar runs down Col 1. Phase details boxes stack vertically spanning Cols 2-4.

---

## Viewport 07: Technology Ecosystem

*   **Component ID:** `vp-07-ecosystem`
*   **Viewport Height:** 110vh
*   **Focal Point:** Grid intersection logos and active tracking axes.
*   **Eye Tracking:** Headline -> Center Grid Logo -> Border coordinate metrics.
*   **Interaction Zones:** Grid intersection zones, CTA button.

### Desktop Wireframe (12-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-12: Section Header & Integration Narrative                           |
      |                                                                             |
      |               Col 3             Col 6             Col 9                     |
      |  Row 1: -------o------------------o------------------o--------              |
      |                |                  |                  |                      |
      |                | (K8s Logo)       | (Terraform Logo) | (Rust Logo)          |
      |  Row 2: -------o------------------o------------------o--------              |
      |                |                  |                  |                      |
      |                | (AWS Logo)       | (Kafka Logo)     | (Go Logo)            |
      |  Row 3: -------o------------------o------------------o--------              |
      |                                                                             |
      |  Col 5-8: Primary CTA: [ VIEW INTEGRATION DIRECTORY ]                       |
110vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Desktop Specs:**
    *   *Grid Span:* Constellation grid is constructed by intersecting Cols 3, 6, 9 with horizontal Rows 1, 2, 3 spaced 120px apart.
    *   *Alignment:* Icons are centered exactly on coordinate intersection points.

### Tablet Wireframe (8-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-8: Section Header                                                    |
      |                                                                             |
      |               Col 2             Col 4.5           Col 7                     |
      |  Row 1: -------o------------------o------------------o--------              |
      |                |                  |                  |                      |
      |  Row 2: -------o------------------o------------------o--------              |
      |                                                                             |
      |  Col 3-6: Primary CTA                                                       |
110vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Tablet Specs:**
    *   *Grid Span:* Constellation intersects Cols 2, 4.5, 7.
    *   *Height:* Vertical row spacing decreases to 90px.

### Mobile Wireframe (4-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-4: Section Header                                                    |
      |                                                                             |
      |  [Col 1-2: Icon 01]                       [Col 3-4: Icon 02]                |
      |  [Col 1-2: Icon 03]                       [Col 3-4: Icon 04]                |
      |  [Col 1-2: Icon 05]                       [Col 3-4: Icon 06]                |
      |                                                                             |
      |  Col 1-4: Primary CTA                                                       |
110vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Mobile Specs:**
    *   *Layout:* Matrix grids and coordinate tracks are removed. Icons are displayed as a clean static 2x3 block grid layout.

---

## Viewport 08: Why Vyom

*   **Component ID:** `vp-08-why-Vyom`
*   **Viewport Height:** 120vh
*   **Focal Point:** Central hairline vertical divider and right column alignment values.
*   **Eye Tracking:** Headline -> Right Column (Vyom) -> Left Column (Agencies) -> CTA.
*   **Interaction Zones:** Left Column panel, Right Column panel, CTA.

### Desktop Wireframe (12-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-12: Headline & Core Philosophy Statement                             |
      |                                                                             |
      |  [Col 1-5: Standard Agency Model]    |    [Col 7-12: Vyom Architecture]    |
      |  - Account Manager layers           |    - Direct Architect access          |
      |  - Focus: Block developer hours     |    - Focus: Working software systems  |
      |  - Churn: High team rotation        |    - Core team: Locked senior squads  |
      |  - Overhead: Inefficient loops      |    - Zero communication layers        |
      |                                      |                                       |
      |  Col 7-9: Primary CTA                |                                       |
120vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Desktop Specs:**
    *   *Grid Span:* Left Column spans Cols 1-5. Central divider line sits at the exact center of Col 6 (Col 6 acts as a boundary). Right Column spans Cols 7-12.
    *   *Alignment:* Left column text is right-aligned to the divider. Right column text is left-aligned.

### Tablet Wireframe (8-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-8: Headline                                                          |
      |                                                                             |
      |  [Col 1-3.5: Standard Agency]        |    [Col 5.5-8: Vyom Architecture]   |
      |  - Account Managers                  |    - Direct Architects               |
      |  - Billable hours focus              |    - System delivery focus           |
      |                                      |                                       |
      |  Col 5.5-7.5: Primary CTA            |                                       |
120vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Tablet Specs:**
    *   *Grid Span:* Left column spans Cols 1-3.5. Divider line sits at Col 4.5. Right column spans Cols 5.5-8.

### Mobile Wireframe (4-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-4: Headline                                                          |
      |                                                                             |
      |  [Col 1-4: Vyom Architecture Panel]                                        |
      |  - Direct system architect alignment                                        |
      |  - Delivery of completed functional software systems                        |
      |                                                                             |
      |  (Optional: Standard Agency columns are hidden to save mobile screen height)|
      |                                                                             |
      |  Col 1-4: Primary CTA                                                       |
120vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Mobile Specs:**
    *   *Layout:* Stacks vertically. The comparison is removed; only Vyom's value points are displayed to focus mobile reading attention.

---

## Viewport 09: Final Conversation (Intake)

*   **Component ID:** `vp-09-intake`
*   **Viewport Height:** 120vh
*   **Focal Point:** Intake form text inputs and submission button.
*   **Eye Tracking:** Headline -> Intake Fields -> Secure Transmission CTA -> Right Metadata log.
*   **Interaction Zones:** Input text boxes, PGP Key link, CTA button.

### Desktop Wireframe (12-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-12: Header (Intake Protocol & Diagnostic Indicators)                 |
      |                                                                             |
      |  [Col 1-6: Console Intake Form]             [Col 8-12: System Metadata]     |
      |  - Input 01: [ SENDER NAME / CO ]           - Active Time: GMT 14:40:45     |
      |  - Input 02: [ TARGET DOMAIN ]              - Loc: Lat/Long readouts        |
      |  - Input 03: [ CRITICAL BOTTLENECK ]        - Server Ping: 24ms             |
      |  - Input 04: [ EMAIL ADDRESS ]              - Secure Key: [ PGP LINK ]      |
      |                                                                             |
      |  [Col 1-3: Primary CTA]                                                     |
120vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Desktop Specs:**
    *   *Grid Span:* Intake form spans Cols 1-6. Metadata console spans Cols 8-12. Divider sits in Col 7.
    *   *Input Height:* 56px each.

### Tablet Wireframe (8-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-8: Header                                                            |
      |                                                                             |
      |  [Col 1-5: Console Intake Form]             [Col 6-8: System Metadata]      |
      |  - Input fields span Col 1-5                - Mini layout stats             |
      |  - CTA spans Col 1-3                        - PGP Link visible              |
      |                                                                             |
120vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Tablet Specs:**
    *   *Grid Span:* Form spans Cols 1-5. Metadata spans Cols 6-8.

### Mobile Wireframe (4-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-4: Header                                                            |
      |                                                                             |
      |  [Col 1-4: Console Intake Form]                                             |
      |  - Input fields span Col 1-4                                                |
      |                                                                             |
      |  [Col 1-4: System Metadata Panel]                                           |
      |  - Mini clocks and PGP key link                                             |
      |                                                                             |
      |  [Col 1-4: Primary CTA]                                                     |
120vh +─────────────────────────────────────────────────────────────────────────────+
```
*   **Mobile Specs:**
    *   *Layout:* Stacks vertically. Form fields span full width of Col 1-4. System metadata is grouped at the bottom, directly above the CTA button.

---

## Viewport 10: Footer

*   **Component ID:** `vp-10-footer`
*   **Viewport Height:** 80vh
*   **Focal Point:** Sitemap directory columns.
*   **Eye Tracking:** Logo tagline -> Directory Col 1 -> Col 2 -> Col 3 -> Col 4.
*   **Interaction Zones:** Navigation links, PGP download trigger.

### Desktop Wireframe (12-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-12: Hairline separator boundary                                      |
      |                                                                             |
      |  [Col 1-3: Sitemap]   [Col 4-6: System]    [Col 7-9: HQ]    [Col 10-12: Leg]|
      |  - Capabilities       - Protocol Specs     - Lat/Long       - Security      |
      |  - Case Studies       - Ingress CDN        - GMT Clock      - Operations    |
      |  - Manifesto          - Lock Frame Rate    - Address        - Privacy Matrix|
      |                                                                             |
      |  Col 1-3: Vyom Logo Tagline                 Col 10-12: PGP Key Link        |
80vh  +─────────────────────────────────────────────────────────────────────────────+
```
*   **Desktop Specs:**
    *   *Grid Span:* Matrix is split into 4 equal columns. Column 1 spans Cols 1-3. Column 2 spans Cols 4-6. Column 3 spans Cols 7-9. Column 4 spans Cols 10-12.

### Tablet Wireframe (8-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-8: Divider Line                                                      |
      |                                                                             |
      |  [Col 1-4: Navigation & Sitemap]            [Col 5-8: Technical Details]    |
      |  - Links, manifesto, cases                  - HQ, timezone, PGP download    |
      |                                                                             |
      |  Col 1-4: Vyom Logo                         Col 5-8: Copyright             |
80vh  +─────────────────────────────────────────────────────────────────────────────+
```
*   **Tablet Specs:**
    *   *Grid Span:* Footer columns merge into two panels. Left panel spans Cols 1-4. Right panel spans Cols 5-8.

### Mobile Wireframe (4-Column Grid)
```
0vh   +─────────────────────────────────────────────────────────────────────────────+
      |  Col 1-4: Divider Line                                                      |
      |                                                                             |
      |  [Col 1-4: Sitemap Directory Links]                                         |
      |  - Vertical stacked list                                                    |
      |                                                                             |
      |  [Col 1-4: Contact & Coordinates]                                           |
      |  - HQ and email                              - Copyright                    |
      |                                                                             |
80vh  +─────────────────────────────────────────────────────────────────────────────+
```
*   **Mobile Specs:**
    *   *Layout:* 4 columns collapse to a single stack. Sitemap link blocks stack first, followed by contact details, PGP links, and copyright text at the bottom.

---
*Developed by Vyom Design System Board.*  
*Homepage Wireframe Blueprint Approved for Front-End Layout Engineering.*
