// vite.config.js
import glsl from "vite-plugin-glsl"
import { defineConfig } from "vite"

export default defineConfig(() => ({
  plugins: [glsl()],
  base: process.env.VITE_BASE ?? (process.env.GITHUB_ACTIONS ? "/Balya94/" : "/"),
  server: {
    watch: {
      usePolling: true,
      interval: 300,
    },
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
      "Surrogate-Control": "no-store",
    },
  },
  preview: {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
      "Surrogate-Control": "no-store",
    },
  },
}))
