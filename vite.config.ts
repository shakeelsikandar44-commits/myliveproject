import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // The site is deployed on Vercel at the domain root, so asset paths must be
  // absolute ("/assets/..."). A relative base ("./assets/...") breaks every
  // nested route (e.g. /articles/3, /categories/basics) when loaded directly
  // or refreshed, because the browser resolves "./" against the current URL
  // path instead of the site root — causing 404s on the JS/CSS bundles and a
  // blank page. This was left over from an earlier GitHub Pages deployment.
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));