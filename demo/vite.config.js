import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update the base URL to match your repository name
export default defineConfig({
  plugins: [react()],
  base: "react-counter", // Change "your-repo-name" to your actual repository name
})