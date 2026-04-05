# Project Overview: "Instant QR" Web Application

You are an expert frontend developer building a blazing-fast, client-side React application using Vite. The app is a frictionless, premium-feeling QR code generator wrapped in a modern landing page.

**Core Concept:** The app relies on a "Visual Feedback on Pause" mechanic. Instead of a "Generate" button, the app listens to user input, waits for a 2-second pause (debounce), shows a loading ring during the wait, and then instantly renders the QR code.

## 🛠️ Tech Stack (Strict Requirements)
* **Framework:** React 18+ (using Vite)
* **Language:** JavaScript or TypeScript (TypeScript preferred)
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **QR Engine:** `qr-code-styling` (crucial for advanced design like frames, logos, and custom shapes)
* **Backend:** NONE. Everything must run 100% locally in the browser.

## 📁 Expected File Structure
Please organize the components logically:
/src
  /components
    /layout
      - Navbar.jsx
      - Footer.jsx
      - AdPlaceholder.jsx
    /sections
      - HeroGenerator.jsx
      - HowItWorks.jsx
      - FeaturesGrid.jsx
      - FAQ.jsx
    /generator
      - GeneratorWidget.jsx (handles the 2-column grid)
      - ContentTabs.jsx (dynamic inputs based on category)
      - DesignTabs.jsx (tabs for Frame, Logo, Colors)
      - PreviewPanel.jsx (sticky right column, handles loading state and rendering)
  /hooks
    - useDebounce.js (custom hook for the 2-second delay)
  /utils
    - qrGenerator.js (wrapper for qr-code-styling logic)
  App.jsx
  main.jsx

## 🎨 UI/UX Specifications
The core generator uses a modern, two-column layout. 
* **Background:** Deep navy/dark blue background for the main Hero section.
* **Generator Widget:** A large, floating white card (`bg-white`, `rounded-2xl`, `shadow-2xl`) inside the Hero section.
    * **Left Column (Controls):** Contains ContentTabs and DesignTabs.
    * **Right Column (Preview):** A sticky container holding a white square card for the QR code preview. Below the QR code is a "Download JPG/SVG" button with a dropdown icon.
* **Footer:** Add a subtle, clean footer with the text "Built by Hamza's Digital Studio".
* **Sections Below Hero:** Alternating clean white and very light gray (`bg-slate-50`) backgrounds.

## 🧠 State Management & Logic Rules
1. **Global State:** Create a central state object in `GeneratorWidget.jsx` to hold all configurations:
   `{ category: 'website', content: '', design: { fgColor: '#000', bgColor: '#fff', frame: 'none', pattern: 'squares' } }`
2. **The 2-Second Debounce Rule:**
   * **Single-Field Inputs (Website, Text):** Trigger a 2-second debounce timer on every keystroke. While typing, set `isGenerating(true)` to show a loading ring around the QR preview. When typing stops for 2000ms, generate the QR and set `isGenerating(false)`.
   * **Design Changes (Colors, Frames):** Same 2-second debounce rule. Apply the loading ring, then render.
   * **Multi-Field Inputs (WiFi, V-Card):** Do NOT auto-debounce on every keystroke if fields are empty. Only trigger the 2-second auto-generation if the *required* fields (e.g., both SSID and Password) have values.
3. **QR Generation (`qr-code-styling`):**
   * Use a ref to attach the generated canvas/SVG to the DOM in `PreviewPanel.jsx`.
   * Ensure the download button extracts directly from this instance.

## 💰 Monetization
Create a component called `<AdPlaceholder />`. For now, make it a `div` with a gray background, a dashed border, and text saying "Adsterra Placeholder - 728x90". Place one at the very top of the layout (under the navbar) and one at the bottom.

## 🚀 Execution Steps for the AI
1. Initialize the project structure and install dependencies (`tailwindcss`, `lucide-react`, `qr-code-styling`).
2. Build the `useDebounce` hook.
3. Build the core layout (Landing Page sections, Navbar, Footer).
4. Implement the State Management in `GeneratorWidget.jsx`.
5. Build the Left Column: Top category toggles, Content Tabs, and Design Tabs.
6. Build the Right Column: The conditional loading ring, the `qr-code-styling` renderer inside `PreviewPanel`, and the Download button.
7. Ensure the UI closely matches a modern SaaS dashboard (clean borders, ample padding, clear active states on tabs).