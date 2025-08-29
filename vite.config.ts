import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dyadTagger from "@dyad-sh/react-vite-component-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    dyadTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
