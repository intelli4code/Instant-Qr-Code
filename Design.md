# Project: "Instant QR" Full Landing Page & Generator

You are an expert frontend developer building a React application (Vite + Tailwind CSS). We are upgrading our QR generator from a single-component view into a full landing page.

## 🎨 Visual Design System (Based on Reference)
* **Hero/Header Background:** Deep Navy/Slate (e.g., `bg-[#0f172a]` or `bg-slate-900`).
* **Primary Brand Color:** Vibrant Light Blue (e.g., `text-blue-500`, `bg-blue-500` for buttons).
* **Page Background:** Clean white and very light gray alternating sections.
* **Typography:** Clean, modern sans-serif (Inter or Roboto).
* **Component Styling:** The core generator tool must sit inside the deep navy hero section as a floating, elevated white card with rounded corners (`rounded-2xl`, `shadow-2xl`).

## 📁 Updated File Structure
Please organize the components logically:
/src
  /components
    /layout
      - Navbar.jsx (Logo left, simple transparent background over navy)
      - Footer.jsx (Dark background, simple links, branding)
      - AdPlaceholder.jsx (Reusable responsive banner block)
    /sections
      - HeroGenerator.jsx (The deep navy section holding the main tool)
      - HowItWorks.jsx (3-step instructional section)
      - FeaturesGrid.jsx (Simple grid of use cases)
      - FAQ.jsx (Standard FAQ section for SEO)
    /generator (Core Tool - Must maintain previous logic)
      - GeneratorWidget.jsx (The left/right split for inputs vs preview)
      - ContentTabs.jsx
      - DesignTabs.jsx
      - PreviewPanel.jsx
  /hooks
    - useDebounce.js
  /utils
    - qrGenerator.js
  App.jsx
  main.jsx

## 🧠 Core Generator Logic (CRITICAL)
Do not lose the established logic for the `GeneratorWidget`:
* **The 2-Second Hook:** We use a `useDebounce` hook. 
* **Single Fields (Website, Text):** Trigger a 2-second loading ring on typing, then auto-generate.
* **Multi-Fields (WiFi):** Only auto-generate when required fields are filled.
* **Engine:** Assume we are using `qr-code-styling` for the actual rendering to allow for frame/color customization.

## 🏗️ Landing Page Layout (Top to Bottom)

**1. Navbar (`<Navbar />`)**
* Sits at the very top of the navy section. White text logo on the left.

**2. HeroGenerator (`<HeroGenerator />`)**
* Contains the main `GeneratorWidget`.

**3. Remaining Sections**
* Alternating backgrounds for `HowItWorks`, `FeaturesGrid`, and `FAQ`.