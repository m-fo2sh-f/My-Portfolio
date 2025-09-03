import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/My-Portfolio/", // 👈 ده المسار اللي هيخلي الصور وملفات js/css تشتغل صح
})
