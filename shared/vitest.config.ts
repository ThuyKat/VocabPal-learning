import { defineConfig } from 'vitest/config';

export default defineConfig({
  envDir: '../',
  test: {
    globals: true,
    environment: 'node',
    setupFiles: ['./src/services/__tests__/setup.ts'],
  },
});
