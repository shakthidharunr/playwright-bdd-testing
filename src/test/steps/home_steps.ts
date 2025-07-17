import { createBdd } from 'playwright-bdd';
const { Given } = createBdd();

Given('I launch the application', async ({ page }) => {
  await page.goto('https://www.buildasign.com/');
});
