# VYOMA MOTION SYSTEM (V1.0)
### Choreography, Physics Engines, and Interactive Transition Standards
**Classification:** Motion & Performance Engineering Standard  
**Single Source of Truth For:** Frontend Engineers, WebGL Developers, and Motion Animators.  
**Core Directive:** Animations must support structural logic, preserve spatial depth, and maintain high-inertia physical decay. No bouncy, decorative, or cartoonish physics.

---

## 1. Global Motion Curve & Physics Tokens

We use physical springs and mathematical decay curves to mimic physical weight and friction, establishing a sense of "expensive weight."

```
+-----------------------------------------------------------------------------------+
|  Core Transition Curve: Ease Out Quint                                            |
|  cubic-bezier(0.16, 1, 0.3, 1)                                                    |
|                                                                                   |
|  Spring Calibration Alpha (High Inertia):   Mass 1.0  | Tension 120 | Friction 26 |
|  Spring Calibration Beta (Tactile Click):   Mass 0.6  | Tension 180 | Friction 18 |
|  Spring Calibration Gamma (Particles):      Mass 0.2  | Tension 90  | Friction 30 |
+-----------------------------------------------------------------------------------+
```

### Time Token Definitions
*   `duration-instant`: `80ms` (Raw interface diagnostics)
*   `duration-tactile`: `200ms` (Interactive hover sweeps)
*   `duration-panel`: `400ms` (Glass sheet reveals, tab shifts)
*   `duration-cinematic`: `800ms` (Section load sequences, WebGL morphing)
*   `duration-ingress`: `1200ms` (Intro site boot sequences)

---

## 2. Ingress & Page Load Sequence

*   **Logic:** Replicates the physical initialization calibration of a technical instrument, guiding the user's focus from a single point outward to a structured grid.
*   **Choreography Stages:**
    1.  **Stage 01 (0ms - 300ms):** Absolute black screen (`#08080C`). A single centered point (`1x1px`, Titanium White) fades up to `100%` opacity using `duration-tactile`.
    2.  **Stage 02 (300ms - 800ms):** Centered grid line axes draw horizontally and vertically from the point to the screen margins. Path drawing animated via SVG `stroke-dashoffset`.
    3.  **Stage 03 (800ms - 1100ms):** Hexadecimal metrics in the corners of the viewport cycle through values rapidly. The grid opacity fades to its baseline `3%`.
    4.  **Stage 04 (1100ms - 1600ms):** Display typography and Primary CTA reveal using a clipping mask window transition (text shifts up `16px` vertically as opacity transitions to `1.0`).

---

## 3. Hero & Navigation Animations

### Sticky Navigation Transitions (`comp-navigation`)
*   **Default state to Scrolled state:** Triggers when vertical scroll offset exceeds `80px`.
*   **Transitions:**
    *   Container height transitions from `64px` to `56px` using CSS transitions (`duration: 300ms`, `cubic-bezier(0.16, 1, 0.3, 1)`).
    *   Glass background backdrop-blur shifts from `blur(20px)` to `blur(40px)`.
    *   Subtly dims navigation text labels to `80%` opacity to reduce reading friction.

### Hero Viewport Elements (`vp-01-arrival`)
*   **Initial State:** Pinned elements.
*   **Interaction:** Scrolling drags the center crosshair outward, scaling its dimension up to `2.5x` as it moves into the screen boundaries. Text container group translates upward at a `0.6x` parallax ratio.

---

## 4. Cursor Behaviors & Magnetic Snapping

The mouse cursor is an active instrument, interacting with structural boundaries.

```
       Cursor Target [ + ]
              |
       (Within 30px Radius)
              |
              v
[ Snaps Center ] ───> [ Element shifts +4px to meet cursor ]
```

*   **Crosshair Trail:** The cursor displays a custom coordinate tracker showing live viewport coordinates `[ X: 000 // Y: 000 ]` in `9px` monospace font. The tracker lags behind the physical cursor position using `Spring Calibration Alpha` (inertia drag).
*   **Magnetic Snapping:** When the cursor moves within a `30px` radius of an interactive CTA button or navigation element:
    *   The cursor snaps to the geometric center of the target.
    *   The target element shifts `4px` in the direction of the cursor angle to simulate a magnetic pull.
    *   Snapping physics uses `Spring Calibration Beta` (tactile snap).

---

## 5. Scrolling & Parallax Physics

Scrolling is a controlled spatial navigation. We use custom scroll container dampening to simulate high-mass movement.

*   **Viewport Scrolling Container:**
    *   Scroll speed is smooth-dampened with custom inertial momentum decay.
    *   *Scroll Easing:* `cubic-bezier(0.1, 0.9, 0.2, 1)`.
*   **Multi-Layer Parallax Speeds:**
    *   **Layer 1 (Background Nebula Clouds):** Moves at `0.10x` scroll speed.
    *   **Layer 2 (Orthogonal Layout Grid):** Moves at `0.20x` scroll speed.
    *   **Layer 3 (Glass Panels & Cards):** Moves at `1.00x` scroll speed.
    *   **Layer 4 (Telemetry Metrics & Coordinates):** Moves at `1.15x` scroll speed (elements float slightly higher).

---

## 6. Hover & State Modifier Animations

### Outline Boundary Sweeps (`state-hover`)
*   **Mechanic:** Hovering over cards, glass sheets, or inputs triggers a linear gradient highlight line running along the border edges.
*   **Styling:** A 1px wide white line sweep traces the boundary path starting at the top-left, moving clockwise, completing the loop in `300ms`. Easing curve: `cubic-bezier(0.16, 1, 0.3, 1)`.

### Tab & Selector Transitions (`comp-tabs-indicator`)
*   When alternating active tabs, the highlighted selector indicator block does not fade out. It slides horizontally on the X-axis from the previous tab to the newly focused tab using Framer Motion layout transitions (`duration: 350ms`, `Spring Beta`).

---

## 7. Glass Sheets & Layer Depth Transitions

*   **Activation:** Glass overlays transition into view by fading opacity from `0` to `1.0` while backdrop blur interpolates from `blur(0px)` to `blur(40px)`.
*   **Depth Separation:** Hovering a glass panel pushes its vertical elevation layer coordinate forward:
    *   Container scales up slightly to `1.015`.
    *   z-index stack value elevates.
    *   Shadow density shifts: outer drop shadow blur radius increases from `16px` to `32px` to simulate distance elevation.

---

## 8. Background Atmospheres & Particles

*   **Nebula Drift:** Large background radial color spots (`rgba(20, 24, 45, 0.15)`) move on continuous, low-speed Lissajous patterns (`duration: 60000ms` loop) to ensure backgrounds never feel static.
*   **Quantum Noise Particles:**
    *   Behavior: 1px particles (coordinates) drift vertically.
    *   Scrolling acceleration increases the particle velocity dynamically by `0.05x` per scroll pixel.
    *   Particles decelerate to a calm drift speed (`0.2px` per frame) once scrolling stops, utilizing a friction coefficient of `0.98`.

---

## 9. Section & Route Transitions

### Viewport Section Transitions
*   All homepage viewports snap into position. As the target section snaps, the incoming section header horizontal divider line sweeps in from the center outward (`duration: 800ms`, `Ease Out Quint`).

### Route Transitions (Page to Page)
```
[ PAGE A ] ───> [ 1px Grid Lines Lock & Brighten ] ───> [ Center Glitch Wipe ] ───> [ PAGE B ]
```
*   **Transition Sequence:**
    1.  User clicks a menu link. Route change is intercepted.
    2.  Page A content fades to `0` opacity in `300ms`. The structural 1px grid lines remain visible, locking to full scale.
    3.  A 1px vertical sweep bar (Kelvin Cyan) sweeps horizontally from left to right across the screen, carrying the layout elements of Page B behind it.
    4.  Page B content fades in. Grid lines return to baseline opacity.

---

## 10. Modals & Telemetry Overlays

*   **Ingress:** Modals scale down from `1.04` to `1.00` while fading in. This simulates looking into an optical chamber that is dropping into place.
*   **Egress:** Modal scales down to `0.96` and fades out in `250ms` using `cubic-bezier(0.25, 1, 0.5, 1)`.
*   **Background Overlay:** Backdrop elements dim to `50%` opacity and blur to `20px` in `400ms`.

---

## 11. Numeric Telemetry counters

*   **Mechanic:** Metrics and stats count up dynamically upon entering the viewport.
*   **Algorithm:** Rather than a simple linear count (e.g. 1, 2, 3... 100), the target number updates via a hexadecimal cycle sequence:
    ```
    Raw: 0.00 -> Ingress: Random HEX [8E, 4F, CC, F1] -> Lock: 40ms Target
    ```
*   **Update Cadence:** Number transitions update in rapid `40ms` increments, completing the full verification sequence in `1200ms`.

---

## 12. Component Validation (Success, Loading, Error)

### Loading Verification Sequence (`comp-loader-spinner`)
*   Clicking a submit button initiates the spinner. The target button border sweeps continuously in Kelvin Cyan (`#00E5FF`). The text translates down `8px` and fades, replaced by a missing-quadrant circle rotating infinitely (`transform: rotate(360deg)` loop).

### Success Verified State (`comp-validation-success`)
*   Once validated, the button border and sweep flash pure white for `150ms`. The form container shrinks horizontally, its input fields collapsing vertically as the Success Verification block fades up from behind.

### Telemetry Error State (`comp-error-404`)
*   If calibration fails or directory path is not located, numbers cycle rapidly with minor X-axis translation glitches (`+/- 2px` shifts lasting `40ms` each) to simulate diagnostic signal disruption.

---

## 13. Reduced Motion Calibrations

To maintain accessibility compliance, users with OS-level reduced motion preferences receive a simplified presentation:

*   **Parallax Systems:** All parallax offsets are set to `0` (elements scroll linearly).
*   **Spring Scaling:** Scale animations are disabled. Hover interactions default to instant flat opacity color shifts (`#8E929D` to `#F8F9FA`).
*   **Path Drawing:** Stroke-dashoffset transitions are skipped; lines render statically at full width.
*   **Route / Viewport Snap:** Slide-in animations are replaced with a simple, standard `300ms` fade transition.

---

## 14. Performance & Hardware Acceleration Guidelines

To guarantee a locked `60fps` experience across devices:

### WebGL / Three.js Canvas
*   Use custom vertex and fragment shaders for complex 3D meshes (e.g. tangled wireframe spheres). Keep polygon count under `5000` vertices.
*   Disable depth testing if rendering wireframes over absolute black backgrounds to save GPU computation.

### GSAP (GreenSock Animation Platform)
*   GSAP must be used for scroll-linked parameters (ScrollTrigger) and complex timelines (such as form collapse sequences).
*   Ensure all animated elements use CSS variables accelerated by the GPU:
    *   Use `transform: translate3d(x, y, 0)` instead of `top`/`left`.
    *   Use `opacity` instead of color fade loops where possible.

### CSS transitions
*   Use standard CSS transitions exclusively for micro-interactions (button hovers, navigation state drops) to minimize JavaScript main thread processing.

---
*Developed by Vyoma Motion System Board.*  
*Motion System Specification Approved for Platform Architecture.*
