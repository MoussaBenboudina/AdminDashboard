// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendors': ['react', 'react-dom', 'react-router-dom'],
          'mui-vendors': ['@mui/material', '@mui/icons-material'],
        },
      },
    },
    chunkSizeWarningLimit: 3000, 
    outDir: 'build',
  },
});
