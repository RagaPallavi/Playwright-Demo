import { test, expect } from '@playwright/test';
test('locator syntax rules', async ({ page }) => {
  await page.goto('https://doorknock-web-git-develop-doorknock-old.vercel.app/');
  await page.getByRole('link', { name: 'or explore the map' }).click();
  await page.getByRole('textbox',{name :'Start typing an address'}).click();
  await page.getByRole('textbox',{name:'Start typing an address'}).fill('23a Cedar Grove, Matua, Tauranga 3110, New Zealand');
  await page.getByText('23a Cedar Grove, Matua, Tauranga 3110, New Zealand').click();
  const actual = page.getByText('23 Cedar Grove, Matua, Tauranga 3110, New Zealand').first();
  const given ='23 Cedar Grove, Matua, Tauranga 3110, New Zealand';
  await expect(actual).toHaveText(given);  
});