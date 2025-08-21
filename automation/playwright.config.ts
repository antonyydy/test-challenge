import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 1,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:3001',
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
    trace: 'off',
    video: 'off',
    screenshot: 'off',
    launchOptions: {
      slowMo: 300,
    },
  },
   workers: 1,
   outputDir: 'test-results',
});
