import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Use '/' for custom domains (important!)
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
