import { defineConfig } from 'vitest/config';
import path from 'path';
export default defineConfig({
  envDir: '../',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'node',
    setupFiles: ['./src/api/__tests__/setup.ts'],
  },
});
