import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The site is served from https://ZhangHuTony.github.io/Portfolio/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
});
