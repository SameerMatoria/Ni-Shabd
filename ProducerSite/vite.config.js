import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // host: '0.0.0.0',  // This will allow access from any device on the network
    port: 5173,        // You can change the port if needed
  },
})
