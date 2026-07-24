# VYOMA COMPONENT LIBRARY (V1.0)
### Reusable Design System Blueprint & Production Specifications
**Classification:** Engineering Component Standard  
**Single Source of Truth For:** Frontend Engineers, UI Developers, and Accessibility Auditors.  
**Design System Anchor:** Conforming strictly to [VYOMA_DESIGN_BIBLE.md](file:///Users/vivek/Documents/Vyoma/VYOMA_DESIGN_BIBLE.md) and [05_HOMEPAGE_UI.md](file:///Users/vivek/Documents/Vyoma/05_HOMEPAGE_UI.md).

---

## 1. Global Navigation Bar (`comp-navigation`)

*   **Purpose:** Persistent structural header directing traffic across capabilities, engagements, and protocols while maintaining a dashboard indicator of active system integrity.
*   **Variants:** 
    *   *Default Sticky:* Sits at top viewport, translucent glass background.
    *   *Scrolled State:* Height drops from 64px to 56px, glass blur density increases by 10%.
*   **Spacing:** Margins: `64px` (Desktop) | `32px` (Tablet) | `16px` (Mobile).
*   **Padding:** Vertical: `12px` (Default) | `8px` (Scrolled). Horizontal: `24px`.
*   **Radius:** `0px` (Strictly flat boundary lock).
*   **Animation:** 
    *   *Height Shift:* Transitions smoothly over 300ms using `cubic-bezier(0.16, 1, 0.3, 1)`.
*   **Hover:** Links shift from `#8E929D` (Helium Silver) to `#F8F9FA` (Titanium White); siblings dim to `45%` opacity.
*   **Accessibility:** Outer tag: `<nav aria-label="Main system navigation">`. Key navigation links require `tabindex="0"`.
*   **Responsive Behaviour:** 
    *   *Tablet:* Menu links drop details (icons hidden).
    *   *Mobile:* Links hidden; menu button reveals slide-up navigation tray.
*   **Usage Rules:** Must be pinned to the topmost z-index layer (`z-index: 1000`).
*   **Things Never to Do:**
    *   **NEVER** use standard drop-down hover folder menus; sub-paths must load via target pages.
    *   **NEVER** use hamburger icon button styles (use explicit `[ MENU ]` text button).

---

## 2. Buttons: Primary CTA (`comp-btn-primary`)

*   **Purpose:** Initiating high-intent executive operations (transmitting form intakes, requesting audits).
*   **Variants:**
    *   *Standard Outlined:* Default active click path.
    *   *Shorthand Outline:* Used in tight telemetry columns, smaller padding.
*   **Spacing:** `gap-sm` (16px) separation from sibling components.
*   **Padding:** Vertical: `14px` | Horizontal: `32px`.
*   **Radius:** `4px` Squircle maximum (Strict precision limit).
*   **Animation:** Fills with a white solid gradient sweep from left to right on active state (`duration: 300ms`).
*   **Hover:** Border transitions from `rgba(255, 255, 255, 0.15)` to `#323641` (Active Steel). Text color swaps from `#F8F9FA` to `#08080C`.
*   **Accessibility:** Must include explicit label description if text contents are symbolic (e.g. `aria-label="Secure system transmission"`). Focus ring offset: `2px` colored in Kelvin Cyan (`#00E5FF`).
*   **Responsive Behaviour:** Expands to full grid column width (`width: 100%`) on mobile screens to act as an ergonomic touch target.
*   **Usage Rules:** Use exclusively for primary conversion elements. Max one per viewport.
*   **Things Never to Do:**
    *   **NEVER** use pill-shaped, circular, or heavily rounded buttons (radius > 4px).
    *   **NEVER** use bright neon background colors as default states.

---

## 3. Buttons: Secondary CTA (`comp-btn-secondary`)

*   **Purpose:** Secondary navigation actions (deconstructing blueprints, checking stack directories).
*   **Variants:**
    *   *Text Outline Link:* Outlined border, inline layout.
    *   *Instrument Arrow:* Text followed by structural coordinate arrows `// ->`.
*   **Spacing:** `gap-xs` (8px) margin bounds.
*   **Padding:** Vertical: `8px` | Horizontal: `16px`.
*   **Radius:** `2px` or completely sharp `0px` (Telemetry alignment).
*   **Animation:** Text translates horizontally by `+4px` on hover before locking.
*   **Hover:** Text color shifts from Helium Silver (`#8E929D`) to Titanium White (`#F8F9FA`). Underline draws out dynamically from center.
*   **Accessibility:** Focus outline must enclose the text link boundaries.
*   **Responsive Behaviour:** Inline placement remains constant; scales text sizes dynamically.
*   **Usage Rules:** Used for secondary options next to a primary CTA, or inline article listings.
*   **Things Never to Do:**
    *   **NEVER** color secondary buttons in primary accent gradients.
    *   **NEVER** use icons inside secondary links that don't match the 1.5px monoline style.

---

## 4. Cards (`comp-card-panel`)

*   **Purpose:** Displaying structured product data, architectural solutions, or case study metrics.
*   **Variants:**
    *   *Solution Card:* Vertical layout, 4-column span, includes 1px vector schematic.
    *   *Telemetry Card:* Micro grid details, containing coordinate readouts.
*   **Spacing:** Gutters: `32px` (Desktop) | `24px` (Tablet).
*   **Padding:** Vertical: `32px` | Horizontal: `32px` (Internal safety limits).
*   **Radius:** `12px` (Continuous squircle curve).
*   **Animation:** Slow entry fade and lateral slide on page load.
*   **Hover:** Outer border turns to Active Steel (`#323641`). Local WebGL elements inside activate coordinate highlights.
*   **Accessibility:** Enclosing card tag must be `<article>` or section nodes.
*   **Responsive Behaviour:** Scales column widths dynamically down to tablet; collapses to a horizontal swipe slider on mobile.
*   **Usage Rules:** Keep content inside cards below 60 words to maintain high void balance.
*   **Things Never to Do:**
    *   **NEVER** stack cards directly without gutters.
    *   **NEVER** use shadows underneath cards (rely on light borders to elevate).

---

## 5. Glass Panels (`comp-glass-sheet`)

*   **Purpose:** Transparent overlay sheets serving as the structural backdrop for diagnostic panels and telemetry cockpits.
*   **Variants:**
    *   *Stellar Silica Default:* High blur density (`40px`), 60% fill.
    *   *Silica Light:* Low blur density (`10px`), 20% fill (used for nested controls).
*   **Spacing:** Vertical padding gap: `48px`.
*   **Padding:** Vertical: `32px` | Horizontal: `32px`.
*   **Radius:** `16px` (Outer boundary panel limit).
*   **Animation:** Background blur transition interpolates slowly on load.
*   **Hover:** Static background glass composition (no hover color shifts).
*   **Accessibility:** High contrast backdrop overlay rules apply.
*   **Responsive Behaviour:** Mobile panels collapse backdrop blurs to `15px` to reduce rendering GPU overhead on mobile processors.
*   **Usage Rules:** Only overlay panels directly on top of dark void canvases.
*   **Things Never to Do:**
    *   **NEVER** layer more than two glass panels atop each other.
    *   **NEVER** use glass panels with colored fills.

---

## 6. Chronological Timeline (`comp-timeline-protocol`)

*   **Purpose:** Visualizing the three-phase client protocol (Audit -> Architect -> Operate) chronologically.
*   **Variants:**
    *   *Horizontal Axis:* Default desktop implementation.
    *   *Vertical Ingress:* Responsive mobile structure.
*   **Spacing:** Spans Cols 2-11. Vertical gap: `64px` from headers.
*   **Padding:** Vertical: `48px` | Horizontal: `16px`.
*   **Radius:** Nodes: `8px` diameter circles. Progress line: `0px` radius.
*   **Animation:** Progress bar path fills from left to right as the viewport scrolls.
*   **Hover:** Hovering individual phase nodes highlights local data values, dims secondary nodes to `35%` opacity.
*   **Accessibility:** Focus states step through nodes sequentially using keyboard arrows; aria-valuetext reads active phase.
*   **Responsive Behaviour:** Timeline rotates 90 degrees on mobile, running vertically down Col 1.
*   **Usage Rules:** Must map exactly 3 phases.
*   **Things Never to Do:**
    *   **NEVER** add icons inside progress nodes (keep nodes as raw circles).
    *   **NEVER** use bouncy animations on timeline fills.

---

## 7. Comparison Table (`comp-comparison-divergence`)

*   **Purpose:** Differentiating Vyoma's senior-architect model against traditional software outsourcing models.
*   **Variants:**
    *   *Split columns:* Default side-by-side.
    *   *Accordion checklist:* Mobile layout.
*   **Spacing:** Vertical gap: `96px` below section header.
*   **Padding:** Vertical: `40px` | Horizontal: `32px`.
*   **Radius:** `0px` (Rigid tabular alignment).
*   **Animation:** Grid line divider sweeps downward on entry load.
*   **Hover:** Hovering a row highlights comparison metrics, dimming the opposite row.
*   **Accessibility:** Rendered using standard semantic HTML tables (`<table>`, `<th>`, `<td>`) to ensure screen reader structural navigation.
*   **Responsive Behaviour:** Mobile scales comparison to show Vyoma's columns only; agency metrics collapse to preserve layout density limits.
*   **Usage Rules:** Columns divided by a strict 1px hairline divider.
*   **Things Never to Do:**
    *   **NEVER** use checkmark/cross graphics (use raw mono text like `[ DEPLOYED ]` or `[ SILOED ]`).
    *   **NEVER** use colored cells (keep cell backgrounds absolute obsidian).

---

## 8. Case Study Block (`comp-case-block`)

*   **Purpose:** Deep-dive case deconstruction displaying metrics and WebGL system diagrams.
*   **Variants:**
    *   *Featured Left:* Narrative left, WebGL blueprint right.
    *   *Featured Right:* Narrative right, WebGL blueprint left (alternating layout).
*   **Spacing:** Vertical spacer gap: `128px` (Cosmic margin bounds).
*   **Padding:** Vertical: `64px` | Horizontal: `64px`.
*   **Radius:** Blueprint frame: `4px` radius.
*   **Animation:** Interactive nodes pulsate slightly (`opacity 0.6` to `1.0` in custom loop).
*   **Hover:** Hovering nodes highlights data queues and path flows.
*   **Accessibility:** Alt-text mapping details the structural components of the system blueprint.
*   **Responsive Behaviour:** Mobile stacks columns vertically, replacing active WebGL canvas with a static SVG diagram.
*   **Usage Rules:** Use actual metrics (latency, throughput) as focal points.
*   **Things Never to Do:**
    *   **NEVER** use generic screenshot images of software dashboards.
    *   **NEVER** animate data packet nodes at erratic speeds.

---

## 9. Technology Grid (`comp-tech-grid`)

*   **Purpose:** Showcasing integration capabilities across enterprise databases, cloud networks, and orchestrators.
*   **Variants:**
    *   *Constellation Grid:* Intersecting coordinate lines with nodes.
    *   *Logo Matrix:* Clean responsive grid blocks.
*   **Spacing:** Gap between logo intersections: `120px` (Desktop).
*   **Padding:** Vertical: `48px` | Horizontal: `48px`.
*   **Radius:** `0px` (Flat layout alignments).
*   **Animation:** Constellation paths trace themselves linearly on scroll.
*   **Hover:** Highlight intersecting axes, showing tooltip specifications of the targeted stack technology.
*   **Accessibility:** Hidden screen reader labels tag every tool.
*   **Responsive Behaviour:** Mobile omits intersecting coordinate lines to optimize processing load, displaying a simple 2x3 grid.
*   **Usage Rules:** Logos must be monochrome, 1.5px monoline vector icons.
*   **Things Never to Do:**
    *   **NEVER** use multi-color or high-contrast corporate logo branding files.
    *   **NEVER** cluster logos close together without grid space bounds.

---

## 10. Footer Section (`comp-footer`)

*   **Purpose:** Elegant visual ending providing sitemaps, system telemetry parameters, and encrypted contact PGP options.
*   **Variants:**
    *   *Full Matrix:* Desktop sitemap columns.
    *   *Linear Contact:* Minimal mobile layout.
*   **Spacing:** Vertical margin gap: `128px`.
*   **Padding:** Vertical: `64px` | Horizontal: `64px`.
*   **Radius:** `0px` (Grid finality).
*   **Animation:** Static layout elements with slow opacity fade-in on entry.
*   **Hover:** Links change color to `#F8F9FA` with 1px top border highlights.
*   **Accessibility:** Accessible sitemap links structured in nested list columns (`<nav>`).
*   **Responsive Behaviour:** Sitemap columns stack vertically on mobile.
*   **Usage Rules:** Must be the terminal layout block on the page.
*   **Things Never to Do:**
    *   **NEVER** use standard social media icon badges (use raw text links like `[ LINKEDIN ]`).
    *   **NEVER** clutter footer space with legal text blocks.

---

## 11. Forms & Inputs (`comp-form-input`)

*   **Purpose:** Secure intake form for target bottleneck parameters.
*   **Variants:**
    *   *Standard Text Field:* Monospace input.
    *   *Intake Dropdown:* Select list wrapper.
*   **Spacing:** Margin below input lines: `32px`.
*   **Padding:** Vertical: `16px` | Horizontal: `4px`.
*   **Radius:** `0px` (Bottom border lines only).
*   **Animation:** 1px border highlights sweep in Kelvin Cyan on active focus.
*   **Hover:** Border bottom transition from `rgba(255, 255, 255, 0.1)` to Active Steel (`#323641`).
*   **Accessibility:** Requires `<label>` linkage and dynamic error announcements via `aria-describedby`.
*   **Responsive Behaviour:** Form width expands to full screen boundary on mobile.
*   **Usage Rules:** Input backgrounds must remain absolute transparent.
*   **Things Never to Do:**
    *   **NEVER** use boxed input fields with background grey fills.
    *   **NEVER** use default browser auto-fill styles.

---

## 12. Dropdowns (`comp-dropdown`)

*   **Purpose:** Field selectors for project domains or project timelines.
*   **Variants:**
    *   *System Selector:* Custom toggle field with monoline arrow.
*   **Spacing:** Margin bottom: `32px`.
*   **Padding:** Vertical: `16px` | Horizontal: `16px` (Glass popup).
*   **Radius:** Input base: `0px` | Glass dropdown menu: `4px`.
*   **Animation:** Options menu expands downward over 200ms with a slight opacity fade.
*   **Hover:** Highlight active items using Active Steel background fill sweeps.
*   **Accessibility:** Select options navigable via standard keyboard arrow keys.
*   **Responsive Behaviour:** Mobile viewport scales dropdown menu to a native selection dialog.
*   **Usage Rules:** Position option overlays directly below the baseline.
*   **Things Never to Do:**
    *   **NEVER** let dropdown menus overflow viewport boundary lines.
    *   **NEVER** use standard unstyled HTML select overlays on desktop.

---

## 13. Badges & Status Labels (`comp-badge-status`)

*   **Purpose:** Displaying diagnostic parameters or verification tags (e.g. `[ SYS_OK ]`, `[ ONLINE ]`).
*   **Variants:**
    *   *Active Green:* 2px pulsing green dot beside label copy.
    *   *Calibrated Cyan:* Kelvin Cyan text brackets `[ ]`.
*   **Spacing:** Margin-left: `8px` from header logo or metadata title.
*   **Padding:** Vertical: `2px` | Horizontal: `6px`.
*   **Radius:** `2px` or sharp `0px` depending on card container.
*   **Animation:** Pulsing dot alternates opacity between `0.4` and `1.0` dynamically.
*   **Hover:** Static components (non-interactive).
*   **Accessibility:** Read to screen readers as diagnostic status tags.
*   **Responsive Behaviour:** Telemetry components compress on mobile; status labels remain.
*   **Usage Rules:** Keep label length under 10 characters in monospace font.
*   **Things Never to Do:**
    *   **NEVER** use multi-color gradients inside badges.
    *   **NEVER** use rounded status badges.

---

## 14. Tooltips (`comp-tooltip-telemetry`)

*   **Purpose:** Displaying detail parameters over active WebGL model nodes or tech ecosystem grid points.
*   **Variants:**
    *   *Instrument Info Box:* Absolute positioned micro panel.
*   **Spacing:** Offset: `8px` above targeted node.
*   **Padding:** Vertical: `8px` | Horizontal: `12px`.
*   **Radius:** `2px`.
*   **Animation:** Fades in instantly (`80ms`) to match computational speed feedback.
*   **Hover:** No secondary actions inside tooltips.
*   **Accessibility:** Linked to nodes via `aria-describedby`.
*   **Responsive Behaviour:** Tooltips disabled on mobile; data is displayed statically.
*   **Usage Rules:** Use JetBrains Mono font at `9px` or `10px` for technical specs.
*   **Things Never to Do:**
    *   **NEVER** overlap tooltips on top of interactive form input fields.
    *   **NEVER** use drop-shadows on tooltip containers.

---

## 15. Accordions (`comp-accordion-directory`)

*   **Purpose:** Displaying sub-capabilities lists on mobile and tablet screens to optimize vertical scroll footprint.
*   **Variants:**
    *   *Expandable Column List:* Click to toggle height.
*   **Spacing:** Vertical gap: `8px`.
*   **Padding:** Vertical: `16px` | Horizontal: `16px`.
*   **Radius:** `4px` on container borders.
*   **Animation:** Expand height using spring equations (`duration: 350ms`).
*   **Hover:** Hovering accordion header turns border to Active Steel.
*   **Accessibility:** Uses `aria-expanded` flag to communicate state to screen readers.
*   **Responsive Behaviour:** Accordion layouts replace the 2x2 capabilities matrix on screens under `768px`.
*   **Usage Rules:** One accordion card active at a time.
*   **Things Never to Do:**
    *   **NEVER** nest accordions inside other accordions.
    *   **NEVER** include form inputs inside accordion panels.

---

## 16. Tabs (`comp-tabs-indicator`)

*   **Purpose:** Alternating views of capabilities or case statistics.
*   **Variants:**
    *   *Index tab bar:* Outlined selectors with active marker lines.
*   **Spacing:** Margin below tabs: `24px`.
*   **Padding:** Vertical: `8px` | Horizontal: `16px`.
*   **Radius:** Tab track: `0px` | Active button: `2px`.
*   **Animation:** Active marker line slides laterally using Framer Motion layout transitions.
*   **Hover:** Text turns to `#F8F9FA`.
*   **Accessibility:** Focus states highlight individual tabs; navigable using keyboard arrows.
*   **Responsive Behaviour:** Stays constant; overflows horizontally with touch-swipe tracking.
*   **Usage Rules:** Only use for switching contextual lists, not for page routing.
*   **Things Never to Do:**
    *   **NEVER** use tab selectors with solid color fills.
    *   **NEVER** stack tabs in multiple vertical rows.

---

## 17. Metrics & Statistics (`comp-metrics-display`)

*   **Purpose:** Emphasizing system results (latency speedups, bandwidth improvements) with high-contrast weight.
*   **Variants:**
    *   *Hero Metric:* Big display number.
    *   *Telemetry Array:* Triple columns of numbers.
*   **Spacing:** Grid span: Col 1-3 within case study blocks.
*   **Padding:** Vertical: `16px`.
*   **Radius:** `0px`.
*   **Animation:** Numbers count up rapidly from zero on viewport entrance sequence.
*   **Hover:** Interactive cursor scrubbing over numeric fields.
*   **Accessibility:** Screen reader announces the static value directly (skips the counting loop calculation).
*   **Responsive Behaviour:** Scales down dynamically (`font-size` clamp values); stacks vertically on mobile.
*   **Usage Rules:** Use JetBrains Mono typeface exclusively for statistics.
*   **Things Never to Do:**
    *   **NEVER** color statistics in hot primary gradients (use pure white or light grey).
    *   **NEVER** display statistics without clear diagnostic units (e.g. `MS`, `GB/S`).

---

## 18. Section Header & Footer (`comp-section-header`)

*   **Purpose:** Visual anchors framing page transitions, stating section indices, and tracking system locations.
*   **Variants:**
    *   *Left Anchor:* Metric index left, title right.
    *   *Center Title:* Centered coordinate tracks.
*   **Spacing:** Vertical padding gap: `96px` above content.
*   **Padding:** Vertical: `24px` | Horizontal: `16px`.
*   **Radius:** `0px`.
*   **Animation:** Horizontal borders sweep outward on entry load.
*   **Hover:** No interaction (structural layout elements).
*   **Accessibility:** Uses semantic hierarchy elements (`<h2>`, `<h3>`).
*   **Responsive Behaviour:** Margins compress to `16px` on mobile.
*   **Usage Rules:** Every major homepage module must be anchored by a section header.
*   **Things Never to Do:**
    *   **NEVER** place buttons inside section headers.
    *   **NEVER** let title text wrap to more than 2 lines.

---

## 19. Loading Components (`comp-loader-spinner`)

*   **Purpose:** Micro state indicating processing status (e.g. when checking form transmission).
*   **Variants:**
    *   *Rotating Calibrator:* 1.5px monoline circle with a quadrant missing, rotating at a constant rate.
    *   *Coordinate Count:* Numeric hexadecimal ticking stream.
*   **Spacing:** Gap from text: `8px`.
*   **Padding:** None.
*   **Radius:** Circles: `16px` diameter.
*   **Animation:** CSS `spin` linear animation loops infinitely.
*   **Hover:** Static elements.
*   **Accessibility:** Requires `<div role="status" aria-live="polite">` tag overlays.
*   **Responsive Behaviour:** Constant across all resolution screens.
*   **Usage Rules:** Place loader directly inside the target button or validation container.
*   **Things Never to Do:**
    *   **NEVER** use large, colorful, fullscreen blocking spinner overlays.
    *   **NEVER** use typical hourglass, checkmark, or hourglass icons.

---

## 20. Empty States (`comp-empty-state`)

*   **Purpose:** Displaying default system diagnostics if no active case study or input parameter is selected.
*   **Variants:**
    *   *Diagnostic Void:* Centered coordinate crosshair with static notice text.
*   **Spacing:** Grid span: full parent boundary width.
*   **Padding:** Vertical: `64px` | Horizontal: `64px`.
*   **Radius:** Container frame: `4px` radius.
*   **Animation:** Faint opacity pulsing of the coordinate crosshair.
*   **Hover:** Static feedback.
*   **Accessibility:** Clear message indicating system state.
*   **Responsive Behaviour:** Outer panel margins compress on mobile.
*   **Usage Rules:** Use to prevent layout collapse when content is missing.
*   **Things Never to Do:**
    *   **NEVER** display warning empty states in loud red colors (use calm silver).
    *   **NEVER** use standard cartoon drawings inside empty states.

---

## 21. 404 Error State (`comp-error-404`)

*   **Purpose:** Visual exit interface when a requested system path or document is not located.
*   **Variants:**
    *   *System Lost Directory:* Centered error matrix with coordinate calibration failure telemetry.
*   **Spacing:** Viewport Height: `100vh` locked.
*   **Padding:** Vertical: `120px` | Horizontal: `64px`.
*   **Radius:** `0px`.
*   **Animation:** "404" numbers glitch or cycle hexadecimal parameters rapidly before settling.
*   **Hover:** Standard menu CTAs snap to cursor.
*   **Accessibility:** Explicit instructions on how to return to the core directory path.
*   **Responsive Behaviour:** Spacing adapts dynamically to mobile constraints.
*   **Usage Rules:** Root directory fallback.
*   **Things Never to Do:**
    *   **NEVER** use humorous or playful copy (keep the tone calm, structured, and engineering-like).
    *   **NEVER** use emojis or broken illustration graphics.

---

## 22. Success Validation State (`comp-validation-success`)

*   **Purpose:** Visual confirmation when consultative intake forms are securely transmitted.
*   **Variants:**
    *   *Handshake Verified Panel:* A clean, 1px bordered dashboard console confirming signal transmission.
*   **Spacing:** Container fits form dimensions.
*   **Padding:** Vertical: `48px` | Horizontal: `48px`.
*   **Radius:** `4px` Squircle.
*   **Animation:** Border sweeps in Kelvin Cyan, confirming the transmission verification.
*   **Hover:** Interactive exit links.
*   **Accessibility:** Announces "Transmission Verified" to screen readers immediately on render.
*   **Responsive Behaviour:** Scales content stack vertically.
*   **Usage Rules:** Replace form inputs immediately upon successful submission.
*   **Things Never to Do:**
    *   **NEVER** display checkmark check circles.
    *   **NEVER** use modal popup alerts (replace the parent form area inline).

---

## 23. State Modifiers (Hover, Focus, Disabled)

These modifiers define interactive mechanics across all component targets.

### Active Hover State (`state-hover`)
*   **Interaction:** Snap-cursor targets. Outer borders brighten to Active Steel (`#323641`). Accents sweeps (1px lines) draw in Kelvin Cyan (`#00E5FF`) on borders.
*   **Timing:** 200ms to 300ms transitions. Easing: `cubic-bezier(0.16, 1, 0.3, 1)`.

### System Focus State (`state-focus`)
*   **Interaction:** Focus ring outline encloses target boundaries.
*   **Spec:** `outline: 1px solid #00E5FF; outline-offset: 2px;` (Cyan focus boundaries).
*   **Rules:** Must trigger on keyboard Tab navigation cycles.

### Disabled State (`state-disabled`)
*   **Interaction:** Component contrast drops, cursor changes to `not-allowed`.
*   **Spec:** `opacity: 0.30; cursor: not-allowed; pointer-events: none;`
*   **Rules:** Outlined borders drop to flat grey lines, active gradients disabled.

---
*Developed by Vyoma Design System Board.*  
*Component Library Specification Approved for Production Scaffolding.*
