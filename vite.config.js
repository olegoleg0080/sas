import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { extensions: [".jsx", ".json", ".css", ".js"] },
  plugins: [react()],
  base: "./", // Относительные пути
  build: {
    outDir: "dist/sas", // Оставляем билд в sas
    assetsDir: "assets" // Файлы будут в "sas/assets"
  }
});

