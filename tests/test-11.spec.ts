import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://doorknock-web-git-develop-doorknock-old.vercel.app/properties');
  await page.getByLabel('Map', { exact: true }).click({
    position: {
      x: 617,
      y: 346
    }
  });
});