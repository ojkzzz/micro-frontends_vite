import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "ui.js",
      exposes: {
        "./Button": "./src/components/ui/button/Button",
      },

      shared: ["react", "react-dom"],
    }),
  ],
  preview: {
    port: 5001,
    strictPort: true,
  },
  build: {
    target: "esnext",
  },
});
