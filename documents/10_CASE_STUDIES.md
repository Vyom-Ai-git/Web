# Vyom REUSABLE CASE STUDY TEMPLATE (V1.0)
### High-Fidelity Layout, Data Visualizations, and Interactive Architecture Specifications
**Classification:** Content Design & Engineering Standard  
**Single Source of Truth For:** Frontend Engineers, Technical Copywriters, and Visual Designers.  
**Design System Anchor:** Conforming strictly to [Vyom_DESIGN_BIBLE.md](file:///Users/vivek/Documents/Vyom/Vyom_DESIGN_BIBLE.md) and [06_COMPONENT_LIBRARY.md](file:///Users/vivek/Documents/Vyom/06_COMPONENT_LIBRARY.md).

---

## Master Page Grid & Vertical Section Schema

Every Case Study page uses a clean, unified viewport layout grid, structuring technical post-mortems into a chronological, readable system diagram and outcome timeline.

```
+-----------------------------------------------------------------------------------+
|  00vh - 100vh:  Section 01 // The Horizon Ingress (Hero, Metadata & Big Metrics)  |
|  100vh - 160vh: Section 02 // Executive Context & Core Business Challenge          |
|  160vh - 240vh: Section 03 // Interactive System Blueprint Diagram (WebGL)         |
|  240vh - 300vh: Section 04 // Technical Constraints & Stack Calibration Matrix     |
|  300vh - 380vh: Section 05 // Implementation Timeline & Deployment Milestones      |
|  380vh - 440vh: Section 06 // Before vs. After Diagnostic Metrics                  |
|  440vh - 500vh: Section 07 // Strategic Engineering Lessons & Key Outcomes        |
|  500vh - 560vh: Section 08 // Intake Convergence CTA & Intangible Verified Quote   |
+-----------------------------------------------------------------------------------+
```

---

## 1. Hero Block (`case-hero`)

*   **Purpose:** Introduce the client sector, core engineering delivery, and present high-contrast, verified primary performance metrics immediately.
*   **Grid Layout:** Split 12-Column Grid.
    *   *Left Columns (Col 1-7):* Headline, Category Tags (`type-telemetry-mono`), and client name.
    *   *Right Columns (Col 9-12):* High-contrast metrics cluster displaying the primary outcome statistic.
*   **Typography Specs:**
    *   Category Tag: `[ CASE ENGAGEMENT // SYSTEM INGESTION ]` (JetBrains Mono, `10px`, color `#00E5FF`).
    *   Headline: `type-hero-display` (`clamp(48px, 6vw + 16px, 96px)`), color `#F8F9FA`.
    *   Big Metric: JetBrains Mono, `80px`, weight `300`, color `#F8F9FA`.
*   **Visual Assets:** A subtle coordinate grid lines overlay. Centered crosshair trails tracking mouse coordinates.
*   **Animation:** Headline reveals via vertical clip mask (`duration: 1000ms`, Easing: `cubic-bezier(0.16, 1, 0.3, 1)`). Metrics count up dynamically via hexadecimal cycling.

---

## 2. Challenge & Business Context (`case-context`)

*   **Purpose:** Outline the operational scale, target customer bottleneck, and the financial impact of legacy system inefficiencies.
*   **Grid Layout:** Split 12-Column Grid.
    *   *Left Columns (Col 1-5):* Section Title (`THE CHALLENGE`) and detailed case context narrative.
    *   *Right Columns (Col 7-12):* 1px monoline diagram detailing the legacy data fragmentation or architectural bottleneck.
*   **Typography Specs:**
    *   Section Title: `type-section-title` (`32px`, Outfit, color `#F8F9FA`).
    *   Narrative Copy: `type-body-copy` (`15px`, line-height `1.625`, color `#8E929D`).
*   **Visual Assets:** Static vector diagram representing data bottlenecks or cloud overhead blockages (1px Chamber Iron lines).
*   **Animation:** Content fades in on snap scroll entry. Line drawings trace their pathways clock-wise.

---

## 3. Technical Constraints (`case-constraints`)

*   **Purpose:** Documenting absolute engineering limits (e.g. cloud latency bounds, concurrent transaction rates, security parameters).
*   **Grid Layout:** 3-Column Column Matrix (each 4 columns wide).
    *   *Col 1-4:* Infrastructure Limits (e.g. AWS bandwidth thresholds).
    *   *Col 5-8:* Concurrency Limits (e.g. database write locks).
    *   *Col 9-12:* Compliance Limits (e.g. Zero-Knowledge data processing).
*   **Typography Specs:**
    *   Constraint Header: JetBrains Mono, `12px`, weight `500`, color `#F8F9FA`.
    *   Constraint Details: Outfit, `14px`, line-height `1.5`, color `#8E929D`.
*   **Visual Assets:** Small corner coordinate brackets `[ ]` bounding each constraint container block to emulate diagnostic telemetry frames.

---

## 4. Interactive System Diagram (`case-diagram`)

*   **Purpose:** A visual, interactive deconstruction of the custom architecture Vyom engineered.
*   **Grid Layout:** Full-bleed 12-Column layout.
    *   *Canvas Container:* Spans Cols 1-12. Height: `600px`. Glass Silica panel.
*   **Component Structure:**
    *   Interactive flowchart nodes representing the data pipeline (e.g. Ingress -> Message Queue -> Workers -> Storage).
    *   Active paths between nodes tracing dynamic data packet flows (microscopic floating coordinates).
*   **Interactions:**
    *   Hovering any system node highlights its input/output variables, flashes local diagnostics in Kelvin Cyan (`#00E5FF`), and displays latency telemetry via tooltips.
*   **Animation & Performance:** Rendered on a 2D HTML5 Canvas or WebGL context. Path tracing animated dynamically based on query loads.

---

## 5. Implementation & Timeline (`case-timeline`)

*   **Purpose:** Illustrate chronological deployment milestones and sprint delivery execution.
*   **Grid Layout:** Horizontal Axis timeline spanning Cols 2-11.
    *   *Timeline Track:* 1px horizontal hairline.
    *   *Milestone Nodes:* Circles at coordinates representing weeks (e.g., Week 02: Audit, Week 06: Architecture, Week 10: Launch).
*   **Interactions:** Scrubbing the cursor horizontally along the track fills the line in Kelvin Cyan and highlights the corresponding phase deliverables block underneath.
*   **Animation:** Smooth spring physics tracking cursor progress (`damping: 30`, `stiffness: 150`).

---

## 6. Technology Stack (`case-stack`)

*   **Purpose:** Cataloging the engineering tools, orchestrators, and databases deployed for the solution.
*   **Grid Layout:** Orthogonal constellation grid.
    *   Platform vector logos (monochrome, 1.5px monoline outlines) sit at grid intersection nodes spaced `120px` apart.
*   **Interactions:** Hovering a platform logo highlights intersecting grid coordinates and displays an integration overview tooltip.

---

## 7. Before vs. After Metric Comparison (`case-metrics`)

*   **Purpose:** Direct numerical proof of engineering success, contrasting standard metrics with Vyom's optimized outcomes.

### Desktop Wireframe Grid (Cols 1-12)
```
+───────────────────────────────────────────────────────────────────────────────────+
| [ BEFORE CALIBRATION ]              |          [ AFTER Vyom PROTOCOL ]           |
|                                     |                                             |
| Latency: 420ms                      |          Latency: 8ms                       |
| CPU Load: 84%                       |          CPU Load: 12%                      |
| Cloud Cost: $140K/Mo                |          Cloud Cost: $72K/Mo                |
+───────────────────────────────────────────────────────────────────────────────────+
```

*   **Grid Layout:** 2 Columns separated by a central 1px vertical hairline (left spans Cols 1-5, right spans Cols 7-12).
*   **Typography Specs:**
    *   Before Statistics: Monospace, `24px`, color `#8E929D` (Helium Silver).
    *   After Statistics: Monospace, `48px`, weight `500`, color `#00E5FF` (Kelvin Cyan).
*   **Interactions:** Hovering a comparison row dims the "Before" metrics and increases the visual contrast of "After" outcomes.

---

## 8. Outcome & Lessons (`case-outcomes`)

*   **Purpose:** Summarize strategic engineering takeaways and final project hand-off parameters.
*   **Grid Layout:** Split 12-Column Grid.
    *   *Left Columns (Col 1-5):* Section Title (`ENGINEERING INSIGHTS`) and list of lessons.
    *   *Right Columns (Col 7-12):* An isometric wireframe solid ( obsidian material render) reacting to scroll parallax.

---

## 9. Client Quote (`case-quote`)

*   **Purpose:** Verified executive confirmation of Vyom's business and technical delivery.
*   **Grid Layout:** Centered 12-Column container.
    *   *Text Area:* Spans Cols 3-10.
*   **Typography Specs:**
    *   Quote Text: Outfit, `24px`, weight `300`, italic, line-height `1.5`, color `#F8F9FA` (Titanium White).
    *   Attribution: JetBrains Mono, `10px`, weight `500`, tracking `0.15em`, color `#8E929D` (e.g. `[ CTO // GLOBAL LOGISTICS PARTNER ]`).

---

## 10. Navigation & CTA (`case-cta`)

*   **Purpose:** Seamless navigation flow to the next case study, or direct consultation intake.
*   **Grid Layout:** Split 12-Column Grid.
    *   *Left (Col 1-5):* `[ NEXT ENGAGEMENT // 02 ]` (Secondary CTA text link).
    *   *Right (Col 7-12):* Primary Intake form console with `[ SECURE TRANSMISSION ]` conversion button.

---
*Developed by Vyom Design System Board.*  
*Case Study Template Approved for Platform Construction.*
