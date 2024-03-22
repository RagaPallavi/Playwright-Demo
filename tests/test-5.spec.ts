import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pw-practice-app.web.app/');
  await page.goto('https://pw-practice-app.web.app/pages/iot-dashboard');
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('link', { name: 'Form Layouts' }).click();
  await page.locator('#inputEmail1').click();
  await page.locator('#inputEmail1').fill('ragapallavi5@gmail.com');
  await page.locator('nb-card').filter({ hasText: 'Using the' }).getByRole('button').click();
});
//getByRole('link', { name: 'IoT Dashboard' })