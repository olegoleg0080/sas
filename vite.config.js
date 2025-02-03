import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base: "/sas/", // Указываем базовый путь
  resolve: { extensions: [".jsx", ".json", ".css", ".js"] },
  plugins: [react()],
  build: {
    outDir: "dist/sas",
    assetsDir: "assets",
  },
});

=======
  resolve: {extensions: [".jsx", ".json", ".css", ".js"]},
  plugins: [react()],
  base: "/sas/",


  
})
>>>>>>> parent of 30a5c86 (AWS)
