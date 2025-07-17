// playwright.config.ts
import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import * as dotenv from 'dotenv';
dotenv.config(); // Loads from .env

// Convert .feature files into Playwright Test files
const testDir = defineBddConfig({
  paths: ['src/test/features/**/*.feature'],
  require: ['src/test/steps/**/*.ts']
});

export default defineConfig({
  testDir, // BDD-generated tests
  timeout: 60000,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html']],
  use: {
    trace: 'on-first-retry'
  },
  projects: [
    {
      name: 'BrowserStack Chrome',
      use: {
        connectOptions: {
          wsEndpoint:
            'wss://cdp.browserstack.com/playwright?caps=' +
            encodeURIComponent(
              JSON.stringify({
                browser: 'chrome',
                os: 'Windows',
                os_version: '11',
                name: 'Playwright BDD Test',
                build: 'Playwright-BDD-BS-Build',
                'browserstack.username': process.env.BROWSERSTACK_USERNAME,
                'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
                'browserstack.debug': true,
                'browserstack.video': true
              })
            )
        }
      }
    }
  ]
});
