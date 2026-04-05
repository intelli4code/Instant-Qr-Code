Move-Item -Path "temp-app\*" -Destination ".\" -Force
Move-Item -Path "temp-app\.gitignore" -Destination ".\" -Force
Remove-Item -Path "temp-app" -Recurse -Force
Remove-Item -Path "setup-vite.ps1", "phase0.ps1" -Force -ErrorAction SilentlyContinue
git add .
git commit -m "feat: initialize vite react project in root directory"

npm install -D tailwindcss postcss autoprefixer
npm install lucide-react qr-code-styling
git add package.json package-lock.json node_modules
git commit -m "feat: install tailwind and core components"

npx tailwindcss init -p
