# Vyom EXECUTIVE INTAKE & SYSTEM DIAGNOSTICS (V1.0)
### The Consultation Protocol, Calibration Console, and Data Security Standards
**Classification:** Client Onboarding & Security Standard  
**Single Source of Truth For:** Frontend Engineers, System Architects, and Compliance Officers.  
**Design System Anchor:** Conforming strictly to [Vyom_DESIGN_BIBLE.md](file:///Users/vivek/Documents/Vyom/Vyom_DESIGN_BIBLE.md) and [06_COMPONENT_LIBRARY.md](file:///Users/vivek/Documents/Vyom/06_COMPONENT_LIBRARY.md).

---

## The Concept: "The Diagnostic Intake Console"

Vyom does not deploy general-purpose contact forms. We host a high-trust, structured calibration console designed for technical founders, CTOs, and enterprise decision-makers. The interface resembles a secure diagnostic utility (like calibrating an optical sensor on a satellite) rather than a sales form.

---

## 1. The Interaction & Intake Flow

The consultation onboarding is structured in three logical chronological stages, designed to isolate the prospect's system bottleneck before calendar access is granted.

```
[ STAGE 01: System Calibration ] ───> [ STAGE 02: Verification ] ───> [ STAGE 03: Calendar Reservation ]
```

1.  **Stage 01: Diagnostic Calibration:** User inputs organizational metrics, select bottleneck domains, and outlines their technical limits.
2.  **Stage 02: Verification & Handshake:** The system runs validation diagnostics on the inputs, showing a simulated cryptographic handshake load sequence.
3.  **Stage 03: Telemetry Reservation (Calendar):** A custom, minimal calendar booking grid reveals, allowing the user to lock a direct consultative node call with a system architect.

---

## 2. Console Input Fields & Parameters

The input forms are rendered in clean monospace typography (`JetBrains Mono`) with bottom-border lines only. All labels are bracketed in uppercase coordinates `[ ]`.

*   **Field 01: `[ IDENT_SENDER ]` (Text Input)**
    *   *Placeholder:* `NAME // ORGANIZATION`
    *   *Validation:* Minimum 4 characters. Required.
*   **Field 02: `[ SYSTEM_DOMAIN ]` (Dropdown Selector)**
    *   *Options:* `01 // ARTIFICIAL_INTELLIGENCE` | `02 // CLOUD_GRIDS` | `03 // DISTRIBUTED_DATA` | `04 // AUTOMATION_PIPELINES` | `05 // STRATEGIC_AUDIT`
    *   *Validation:* Selection required.
*   **Field 03: `[ CRITICAL_BOTTLENECK ]` (Text Area)**
    *   *Placeholder:* `DESCRIBE LATENCY, COMPILATION, OR STRUCTURAL LIMITS...`
    *   *Validation:* Minimum 20 characters. Max 600 characters. Required.
*   **Field 04: `[ TARGET_TIMELINE ]` (Dropdown Selector)**
    *   *Options:* `IMMEDIATE (30 DAYS)` | `STRATEGIC (90 DAYS)` | `R&D LABS (FEASIBILITY RESEARCH)`
*   **Field 05: `[ SECURE_INBOUND_COORDINATES ]` (Text Input)**
    *   *Placeholder:* `SECURE EMAIL ADDRESS`
    *   *Validation:* Email regex match verified. Required.

---

## 3. Form Validation Mechanics

*   **Real-time Inline Validation:** Verification does not occur on input blur (which disrupts visual focus), but rather dynamically on typing offset delays (`400ms` pause).
*   **Visual Indicators:**
    *   *Valid:* The bottom border transitions to Active Steel (`#323641`). A micro status indicator `[ READY ]` ticks in Font B (Monospace) at the right edge of the input.
    *   *Invalid:* The bottom border glows in a calm, non-loud red (`#EF4444`) at `40%` opacity. A micro indicator `[ CALIBRATION_ERROR // FIELD_INCOMPLETE ]` ticks silently. No popup warnings or emojis.

---

## 4. Loader, Success & Error Sequences

### 1. The Secure Transmission Load (`comp-loader-spinner`)
*   Clicking `[ TRANSMIT SYSTEM INTAKE ]` disables all console input fields (`opacity: 0.3`, disabled cursor state).
*   The CTA text translates down `8px` and fades, replaced by rapid, random hexadecimal value cycles in the corner of the form.
*   A 1px circular progress loop traces its border clockwise over `1500ms`.

### 2. Success Handshake (`comp-validation-success`)
*   The input fields slide down and collapse vertically into a single hairline.
*   A verification confirmation reveals: `TRANSMISSION SECURED // HANDSHAKE ESTABLISHED`.
*   The next section, **Section 03: Telemetry Reservation (Calendar)**, automatically slides up behind a masking reveal clipping container.

### 3. Connection Error Glitch (`comp-error-404`)
*   If network latency or server handshake parameters fail:
    *   The border bottom lines glitch slightly, shifting offset by `+/- 2px` on the horizontal axis for `120ms`.
    *   The text indicator reads `[ PIPELINE_FAILURE // RETRY_TRANSMISSION ]`.

---

## 5. Reusable Calendar Booking Grid (`comp-calendar-booking`)

Once the intake is successfully validated, a minimal diagnostic calendar is unlocked.

*   **Layout:** 12-Column Glass Sheet Panel. Left: timezone picker and meeting metrics (30 min duration, architect allocation). Right: grid calendar displaying coordinate days.
*   **Visual Assets:** Available timeslots are framed in clean `1px solid rgba(255,255,255,0.06)` boxes. Focus targets snap the cursor to their center.
*   **Hover:** Hovering a slot sweeps its fill with a white gradient; text transitions to black (`#08080C`).

---

## 6. Structural FAQ Matrix (`comp-faq`)

A simple diagnostic matrix addressing technical and onboarding questions.

*   **Design:** Accordion layout spanning Cols 3-10.
*   **FAQ Items:**
    1.  *Q: What are the terms of the initial diagnostic audit?*  
        *A: The initial audit is a direct architecture consultation with a senior systems architect, analyzing current bottlenecks and mapping target system schematics.*
    2.  *Q: How does Vyom process proprietary infrastructure data?*  
        *A: All data parameters submitted via the console are locally encrypted and accessible only to the systems squad assigned to the project.*

---

## 7. Data Security & Privacy Protocols

As an enterprise partner, Vyom treats customer data with absolute security.

*   **End-to-End Encryption:** Form payloads are encrypted in transit using TLS 1.3 and stored in localized vaults.
*   **PGP Key Option:** The intake sidebar includes a direct download link to Vyom's public PGP key: `PGP_KEY: [ DOWNLOAD PGP ]`. This allows prospects to encrypt their technical bottlenecks manually before sending.
*   **Zero-Knowledge Compliance:** We collect no marketing tracking cookies, analytics variables, or third-party pixels. The platform operates on a zero-tracking privacy policy.

---
*Developed by Vyom Security & Compliance Board.*  
*Intake & Diagnostic Protocol Approved for Immediate Construction.*
