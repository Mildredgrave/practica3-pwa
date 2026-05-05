import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    tailwindcss(), 
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "icons.svg", "pwa3-icon.png"],
      manifest: {
        name: "Asignación de tareas",
        short_name: "todo list",
        description: "Asignacion de tareas",
        theme_color: "#C0C0C0",
        background_color: "#C0C0C0",
        display: "standalone",
        start_url: "/",
        scope: "/",
        orientation: "portrait",
        icons: [
          {
            src: "pwa3-icon.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa3-icon.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,ico}"]
      }
    })
  ],
});