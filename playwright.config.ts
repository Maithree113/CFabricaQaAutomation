import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
const getEnv = (key: string, defaultValue: string) => process.env[key] || defaultValue;

export default defineConfig({
  timeout: 300000,
  testDir: './tests',
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
  expect: {
    timeout: 120000,
    toMatchSnapshot: { maxDiffPixelRatio: 0.01 }
  },
  use: {
    actionTimeout: 100000,
    navigationTimeout: 70000,
    baseURL: getEnv('BASE_URL', 'https://www.creativefabrica.com'),
    headless: true,
    viewport: {
      width: Number(getEnv('VIEWPORT_WIDTH', '1920')),
      height: Number(getEnv('VIEWPORT_HEIGHT', '1080')),
    },
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'UI Tests',
      testDir: './tests/product', // Only product tests
      fullyParallel: true,
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'SEO Tests',
      testDir: './tests/seo', // Only SEO tests
      fullyParallel: false, // Run serially to avoid Lighthouse port conflict
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: ['--remote-debugging-port=9222'], // Required by Lighthouse
        },
      },
    },
  ],
});
