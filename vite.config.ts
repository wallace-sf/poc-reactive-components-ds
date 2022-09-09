import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
        port: 3000,
        open: "http://localhost:3000/",
    },
    resolve: {
        alias: [{ find: "src", replacement: resolve(__dirname, "src") }],
    },
})
