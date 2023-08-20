import type { UserConfig } from 'vitest/config';
import { defineConfig } from 'vitest/config';

export const vitestConfig: UserConfig = {
  test: {
    globals: true,
    environment: 'jsdom',
  },
  plugins: [],
};

export default defineConfig(vitestConfig);
