import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sas/", // Указываем базовый путь
  resolve: { extensions: [".jsx", ".json", ".css", ".js"] },
  plugins: [react()],
  build: {
    outDir: "dist/sas",
    assetsDir: "assets",
  },
});

