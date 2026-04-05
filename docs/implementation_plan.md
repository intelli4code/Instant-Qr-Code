# Instant QR Application - Implementation Plan

The goal is to build the "Instant QR" web application using React + Vite + Tailwind CSS directly in `g:\MY KARNAMEY APPS\Dynamic Qr Code Generater`. We will build this in isolated phases (using Git branches) to ensure a solid and trackable history, as requested.

## User Review Required

Does this branching and commit strategy align with your expectations? I will run `git checkout -b <branch>`, make the changes, `git commit -m "<conventional commit message>"`, `git checkout main`, and `git merge <branch>` for each feature.

## Proposed Changes

### Phase 1: Project Initialization & Core Setup
- **Branch:** `feat/vite-setup`
- **Actions:**
  - Run Vite setup to initialize React in the current directory.
  - Install dependencies: `tailwindcss`, `postcss`, `autoprefixer`, `lucide-react`, `qr-code-styling`.
  - Configure `tailwind.config.js` and `index.css`.
- **Commit:** `feat: initialize vite project with tailwind and core dependencies`

### Phase 2: Building the App Shell & Sections
- **Branch:** `feat/app-shell`
- **Actions:**
  - Create `/src/components/layout/Navbar.jsx`, `Footer.jsx`, `AdPlaceholder.jsx`.
  - Create `/src/components/sections/HeroGenerator.jsx`, `HowItWorks.jsx`, `FeaturesGrid.jsx`, `FAQ.jsx`.
  - Wire them into `App.jsx`.
- **Commit:** `feat: create app layout and informational sections`

### Phase 3: State Management & Debounce Logic
- **Branch:** `feat/debounce-logic`
- **Actions:**
  - Create the custom hook `/src/hooks/useDebounce.js`.
  - Create the skeleton for `/src/components/generator/GeneratorWidget.jsx` with the global state (category, content, design).
- **Commit:** `feat: add useDebounce hook and base generator state`

### Phase 4: Generator Inputs (Controls)
- **Branch:** `feat/generator-inputs`
- **Actions:**
  - Create `/src/components/generator/ContentTabs.jsx` to handle Link, Text, and WiFi inputs.
  - Create `/src/components/generator/DesignTabs.jsx` for Colors, Shapes, and Frames (with placeholders for logic).
  - Integrate these to the left side of `GeneratorWidget`.
- **Commit:** `feat: build generator content and design control tabs`

### Phase 5: QR Code Rendering & Preview Hub
- **Branch:** `feat/qr-rendering`
- **Actions:**
  - Create `/src/utils/qrGenerator.js` or directly embed logic in `/src/components/generator/PreviewPanel.jsx`.
  - Attach `qr-code-styling` up to a React ref, driven by the debounced values.
  - Add the 2-second loading ring effect.
  - Implement actual Download button.
- **Commit:** `feat: integrate live qr code canvas rendering and download functionality`

## Open Questions
1. Should I push the main branch to `origin/main` automatically after each merge, or keep all commits local until the end?
2. Are you ok with me creating the Vite app using `npx -y create-vite@latest ./ --template react`?

## Verification Plan
1. Ensure the app builds (`npm run build`).
2. I'll test the debounce logic locally by simulating typing changes.
3. Checking git log to ensure linear history or merge commits match conventional commits standards.
