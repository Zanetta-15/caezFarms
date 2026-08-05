// Vite configuration for CAEZ Farms website
// This file configures how Vite builds and serves the React application
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Plugin to enable React JSX support
  plugins: [react()],
  
  // Server configuration for development
  server: {
    port: 3000,
    // Enable CORS for API calls to backend (running on port 5000)
    cors: true,
  },
  
  // Build configuration
  build: {
    // Output directory for production build
    outDir: 'dist',
    // Minify the output
    minify: 'terser',
  },
})
