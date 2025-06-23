import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA({ registerType: "autoUpdate" })],
  build: {
    outDir: "dist",
  },
  base: "/",
  server: {
    host: "0.0.0.0",
    fs: {
      strict: false,
    },
  },
});
