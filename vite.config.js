import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // relative so the build works from a subpath or a static host root alike
  base: './',
  plugins: [react()],
  build: { assetsInlineLimit: 0 },
});
