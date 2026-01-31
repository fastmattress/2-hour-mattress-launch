import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Plugin to copy index.html to 404.html for SPA support on GitHub Pages
const copy404Plugin = () => ({
  name: 'copy-404',
  closeBundle: () => {
    const distPath = path.resolve(__dirname, 'dist');
    const indexPath = path.resolve(distPath, 'index.html');
    const notFoundPath = path.resolve(distPath, '404.html');
    if (fs.existsSync(indexPath)) {
      fs.copyFileSync(indexPath, notFoundPath);
      console.log('✓ Created 404.html for SPA routing support');
    }
  }
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyDirBeforeWrite: true,
  },
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    copy404Plugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
