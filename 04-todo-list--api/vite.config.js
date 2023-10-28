import { defineConfig, splitVendorChunkPlugin } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import sassDts from 'vite-plugin-sass-dts';
// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    sassDts({
      enabledMode: ['development'],
    }),
  ],
  server: {
    port: 3000,
    //
    proxy: {
      '/api': 'https://milkmidi.vercel.app/',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    globals: true,
    environment: 'jsdom',
  },
});
