import { defineConfig } from 'vitest/config';

export default defineConfig({
  envDir: '../',
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
