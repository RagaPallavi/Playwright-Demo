import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=amazon&oq=amazon&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDM3ODNqMGoyqAIAsAIA&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Shop online at Amazon India' }).click();
  await page.goto('https://www.google.com/search?q=amazon&oq=amazon&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDM3ODNqMGoyqAIAsAIA&sourceid=chrome&ie=UTF-8');
  await page.getByRole('combobox', { name: 'Search' }).click();
});