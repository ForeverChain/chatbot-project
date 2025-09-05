import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // This will allow us to use environment variables in the frontend
    __APP_ENV__: JSON.stringify(process.env.VITE_API_URL || 'http://localhost:3003')
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})