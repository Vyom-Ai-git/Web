# VYOMA ASSET PRODUCTION INDEX (V1.0)
### Format, Resolution, Compression, and Folder Structure Specifications
**Classification:** Media & Asset Engineering Standard  
**Single Source of Truth For:** Visual Designers, 3D Artists, Sound Engineers, and Frontend Developers.  
**Design System Anchor:** Conforming strictly to [VYOMA_DESIGN_BIBLE.md](file:///Users/vivek/Documents/Vyoma/VYOMA_DESIGN_BIBLE.md) and [06_COMPONENT_LIBRARY.md](file:///Users/vivek/Documents/Vyoma/06_COMPONENT_LIBRARY.md).

---

## 1. Asset Folder Directory Tree

All media, models, sound, and font assets are stored in the `/public/assets` directory, organized by data type.

```
/public
└── assets
    ├── audio/          # UI feedback system audio files
    ├── fonts/          # Licensed WOFF2 font files
    ├── icons/          # SVGs of 1.5px monoline vector icons
    ├── illustrations/  # Architectural system diagram vector SVGs
    ├── models/         # 3D models (glTF/GLB) for WebGL canvas
    ├── photography/    # Monochrome, low-exposure JPG/WebP headshots
    ├── shaders/        # GLSL fragment & vertex shaders (.vert, .frag)
    └── textures/       # Raw film-grain noise and silica patterns
```

---

## 2. Naming Conventions

All assets must use a lowercase, hyphenated, hierarchical naming schema specifying the target page and element.

```
Format: [asset-type]-[location/page]-[element-name].[extension]
```

*   *Icons:* `icon-nav-capabilities.svg`
*   *WebGL Models:* `model-hero-gyroid.glb`
*   *Photography:* `photo-leadership-architect-doe.webp`
*   *Shaders:* `shader-data-stream.frag`
*   *Audio:* `audio-click-calibration.mp3`

---

## 3. Detailed Asset Specifications Catalog

### 1. Typography Fonts (`/assets/fonts`)
*   **Asset 01: `font-outfit-light.woff2`**
    *   *Weight:* `300` | *Format:* WOFF2 (Preloaded)
*   **Asset 02: `font-outfit-regular.woff2`**
    *   *Weight:* `400` | *Format:* WOFF2 (Preloaded)
*   **Asset 03: `font-outfit-medium.woff2`**
    *   *Weight:* `500` | *Format:* WOFF2
*   **Asset 04: `font-jetbrains-mono-regular.woff2`**
    *   *Weight:* `400` | *Format:* WOFF2 (Preloaded)
*   **Asset 05: `font-jetbrains-mono-medium.woff2`**
    *   *Weight:* `500` | *Format:* WOFF2

### 2. Branding Logos & Icons (`/assets/icons`)
*   **Asset 06: `logo-vyoma-mono.svg`**
    *   *Resolution:* Vector scale | *Format:* SVG | *Stroke:* `1.5px`
    *   *Description:* Primary wordmark. Absolutely no fill colors.
*   **Asset 07: `icon-arrow-coordinate.svg`**
    *   *Resolution:* `24x24px` | *Format:* SVG | *Stroke:* `1.5px` monoline
*   **Asset 08: `icon-nav-[capabilities/engagements/protocol].svg`**
    *   *Resolution:* `24x24px` | *Format:* SVG | *Stroke:* `1.5px` monoline
*   **Asset 09: `icon-tech-[k8s/aws/rust/terraform/kafka/go].svg`**
    *   *Resolution:* `32x32px` | *Format:* SVG | *Stroke:* `1.5px` monoline

### 3. System Illustrations (`/assets/illustrations`)
*   **Asset 10: `ill-architecture-logistics-pipeline.svg`**
    *   *Resolution:* Vector | *Format:* SVG | *Compression:* SVGO optimized
    *   *Description:* 1px Chamber Iron (`#1E2026`) lines depicting the Ingestion Queue blueprint.
*   **Asset 11: `ill-strategy-margin-matrix.svg`**
    *   *Resolution:* Vector | *Format:* SVG
    *   *Description:* Blueprint mapping company cost routing structures.

### 4. 3D WebGL Objects (`/assets/models`)
*   **Asset 12: `model-hero-gyroid.glb`**
    *   *Format:* Binary glTF (`.glb` compressed using Draco encoder)
    *   *Vertex Count:* Under `5000` vertices.
    *   *Description:* Tangled mathematical weights gyroid for Viewport 01 WebGL canvas.
*   **Asset 13: `model-about-future-solid.glb`**
    *   *Format:* GLB (Draco) | *Vertex Count:* Under `4000` vertices
    *   *Description:* Platonic solid mesh.

### 5. GLSL Custom Shaders (`/assets/shaders`)
*   **Asset 14: `shader-particle-stream.[vert/frag]`**
    *   *Format:* Raw GLSL text file.
    *   *Description:* Calculates coordinates velocity drift for the dynamic ingestion particle stream in Viewport 05.
*   **Asset 15: `shader-grid-glow.[vert/frag]`**
    *   *Format:* Raw GLSL.
    *   *Description:* Renders the dynamic spotlight glow overlay following the cursor.

### 6. Photography & Portraits (`/assets/photography`)
*   **Asset 16: `photo-leadership-[name].webp`**
    *   *Resolution:* `800x1000px` (Aspect ratio: `4:5`) | *Format:* WebP (lossless)
    *   *Color Space:* Grayscale. High contrast, low exposure.
    *   *Post-processing:* Applied fine-grain noise overlay inside the WebP compile.
*   **Asset 17: `photo-office-cleanroom.webp`**
    *   *Resolution:* `1920x1080px` | *Format:* WebP | *Compression:* Quality `82` target (under `200KB`).

### 7. Background Textures & Noise (`/assets/textures`)
*   **Asset 18: `texture-digital-noise.png`**
    *   *Resolution:* `256x256px` | *Format:* PNG (seamless repeating tile)
    *   *Description:* Fine-grain sensor noise at `2%` opacity overlaying the primary canvas.
*   **Asset 19: `texture-silica-diffract.jpg`**
    *   *Resolution:* `512x512px` | *Format:* JPG | *Description:* High-contrast displacement map.

### 8. Audio System Tones (`/assets/audio`)
*   **Asset 20: `audio-click-calibration.mp3`**
    *   *Resolution:* `16-bit / 44.1kHz` mono | *Format:* MP3 | *Compression:* 128kbps (under `20KB`)
    *   *Description:* A 40ms high-frequency click used for button hover calibrations.
*   **Asset 21: `audio-handshake-verified.mp3`**
    *   *Resolution:* `16-bit` mono | *Format:* MP3 | *Compression:* 128kbps (under `40KB`)
    *   *Description:* A short, low-frequency hum verifying successful form transmissions.

---

## 4. Media Compression Targets

All production assets must pass compression checks before deploy verification.

| Asset Type | Primary Format | Compression Tool | Max Target File Size |
| :--- | :--- | :--- | :--- |
| **Fonts** | WOFF2 | Google `woff2_compress` | `< 40 KB` per file |
| **Icons & Logos**| SVG | `svgo` | `< 5 KB` per file |
| **Illustrations**| SVG | `svgo` | `< 25 KB` per file |
| **3D Models** | GLB (glTF) | `gltf-pipeline` (Draco) | `< 450 KB` per file |
| **Photography** | WebP | `cwebp` (Quality `82`) | `< 120 KB` per portrait |
| **Textures** | PNG | `pngquant` | `< 15 KB` per tile |
| **Audio Tones** | MP3 | `ffmpeg` | `< 25 KB` per file |

---

## 5. Absolute Asset Exclusions

To protect Vyoma visual integrity, the following asset types are strictly prohibited in the assets directory:

1.  **NO** `.gif` files (animations must be CSS, SVG, or Canvas).
2.  **NO** `.mp4` video assets (interactive WebGL and Canvas animations replace all video files).
3.  **NO** colorful icons or corporate branding graphics.
4.  **NO** generic vector stock graphics or illustrations.
5.  **NO** Lottie JSON animation files (bypassed to protect JavaScript main thread runtime performance).
6.  **NO** `.otf` or `.ttf` raw font files (precompiled WOFF2 preloads only).

---
*Developed by Vyoma Media Production Board.*  
*Asset Production Index Approved for Immediate Acquisition.*
