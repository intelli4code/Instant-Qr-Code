# Project Name: Instant QR
# Role: Expert React & Tailwind Developer

## 🎯 Project Overview
You are building "Instant QR", a blazing-fast, client-side QR code generator wrapped in a modern, conversion-optimized landing page. 
The core hook of the app is "Visual Feedback on Pause." Instead of a "Generate" button, the app listens to user input, waits for a 2-second pause (debounce), shows a loading ring during the wait, and then instantly renders the QR code.

## 🛠️ Tech Stack & Dependencies
* **Framework:** React 18+ (Vite)
* **Styling:** Tailwind CSS
* **Icons:** `lucide-react`
* **QR Engine:** `qr-code-styling` (CRITICAL: Must be used for advanced design features like frames, logos, and dot patterns. Standard qrcode libraries are not sufficient).
* **Backend:** NONE. 100% client-side execution.

## 📁 Required File Structure
Please initialize the project and structure the `/src` directory exactly like this:

/src
  /components
    /layout
      - Navbar.jsx (Logo, simple links)
      - Footer.jsx (Copyright, text "Built by Hamza's Digital Studio")
      - AdPlaceholder.jsx (Reusable responsive banner block)
    /sections
      - HeroGenerator.jsx (Deep navy background, holds the Generator widget)
      - HowItWorks.jsx (3-step instructional grid)
      - FeaturesGrid.jsx (Simple grid of use cases)
      - FAQ.jsx (Accordion style FAQ)
    /generator
      - GeneratorWidget.jsx (The main floating card UI)
      - ContentTabs.jsx (Input fields for Link, Text, WiFi)
      - DesignTabs.jsx (Options for Colors, Shapes, Frames)
      - PreviewPanel.jsx (Sticky right side: loading ring, QR canvas, Download button)
  /hooks
    - useDebounce.js (Handles the 2-second delay logic)
  /utils
    - qrGenerator.js (wrapper for qr-code-styling logic)
  App.jsx
  main.jsx

## 🎨 UI & Design System
* **Hero/Header Background:** Deep Navy (`bg-slate-900`).
* **Brand Color:** Vibrant Blue (`bg-blue-500`, `text-blue-500`).
* **Generator Widget:** A large, floating white card (`bg-white`, `rounded-2xl`, `shadow-2xl`) centered inside the Hero section. It uses a 2-column grid (Left: Controls, Right: Preview).
* **Sections Below Hero:** Alternating clean white and very light gray (`bg-slate-50`) backgrounds.

## 🧠 Core Logic Requirements (CRITICAL)

### 1. The 2-Second Debounce Logic
* Create a custom `useDebounce` hook.
* **Single-Field Categories (Link, Text):** Trigger the 2-second debounce timer on every keystroke. While typing, set `isGenerating` to true to show a spinner/ring. When typing stops for 2000ms, update the QR canvas and set `isGenerating` to false.
* **Multi-Field Categories (WiFi):** Do NOT auto-debounce on every keystroke if fields are empty. Only trigger the 2-second auto-generation if the *required* fields (SSID and Password) have values.
* **Design Changes (Colors, Shapes):** Applying a new color or shape should also trigger the same 2-second loading state for visual consistency.
* **State Management:** Keep the generator state isolated within `GeneratorWidget.jsx` to prevent the whole landing page from re-rendering on keystrokes.

### 2. QR Code Rendering (`qr-code-styling`)
* In `PreviewPanel.jsx`, use a React `useRef` to attach the `qr-code-styling` instance to a DOM element.
* Do not re-instantiate the library on every render. Update the existing instance using `.update(newData)` when the debounced state changes.
* Ensure the "Download" button calls the library's native download method (e.g., `qrCode.download({ extension: "png" })`).

## 🚀 Execution Steps for the Agent

1. **Initialize & Install:** Set up Vite + React, configure Tailwind CSS, and run `npm install qr-code-styling lucide-react`.
2. **Hook Creation:** Write the `useDebounce` hook first.
3. **App Shell:** Build `App.jsx`, pulling in the `Navbar`, `HeroGenerator`, `HowItWorks`, `FeaturesGrid`, `FAQ`, and `Footer`. Apply the deep navy styling to the top half.
4. **Build the Generator UI:** Inside `HeroGenerator`, build the `GeneratorWidget`. Split it into a left column (ContentTabs + DesignTabs) and a right column (PreviewPanel).
5. **Implement Logic:** Wire up the state in `GeneratorWidget` so that typing in `ContentTabs` triggers the `useDebounce` hook, which then passes the data to `PreviewPanel` to render via `qr-code-styling`. Add `AdPlaceholder` banners where appropriate as well.
6. **Polish:** Ensure the active states on tabs look crisp, the loading ring animates smoothly over the QR code area, and the layout is responsive (stacking the 2-column generator into 1 column on mobile).

Execute these steps sequentially. Ensure the code is clean, well-commented, and ready for deployment.