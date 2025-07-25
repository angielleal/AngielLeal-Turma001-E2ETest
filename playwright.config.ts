import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'src/scenarios',
  timeout: 120000,
  retries: 0,
  workers: 1,
  use: {
    trace: 'on',
    locale: 'pt-BR',
    headless: process.env.CI === 'true' ? true : false,  // <-- muda para true no CI
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'on',
    video: 'off'
  },
  expect: {
    timeout: 30000
  },
  reporter: [
    [
      'html',
      {
        outputFolder: 'artifacts/report',
        open: 'never'
      }
    ]
    
  ]
};

export default config;
