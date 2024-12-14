import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Esto permite que Vite acepte conexiones externas
    port: 5173, // Asegúrate de que este puerto coincide con el que usas
  },
})
