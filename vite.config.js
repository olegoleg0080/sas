import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { extensions: [".jsx", ".json", ".css", ".js"] },
  plugins: [react()],
  base: "/sas/",
  build: {
    outDir: "dist/sas" // Кладем билд в папку sas
  }
});
