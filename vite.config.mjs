import path from 'node:path';
import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    shopify({
      entrypointsDir: 'src',
      sourceCodeDir: 'src',
      snippetFile: 'vite.liquid',
      additionalEntrypoints: ['src/main.ts', 'src/assets/styles/base.css'],
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
