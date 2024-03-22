import { test, expect } from '@playwright/test';
test('locator syntax rules', async ({ page }) => {
  await page.goto('https://doorknock-web-git-develop-doorknock-old.vercel.app/');
  await page.getByRole('link', { name: 'or explore the map' }).click();
  await page.getByRole('textbox',{name :'Start typing an address'}).click();
  await page.getByLabel('Map', { exact: true }).click({
    position: {
      x: 405,
      y: 317,
    }
  });
  const actual = page.getByText('57a Bay Street, Red Beach, Silverdale 0932, New Zealand');
  const given ='57a Bay Street, Red Beach, Silverdale 0932, New Zealand';
  await expect(actual).toHaveText(given);  
});
//<canvas class="mapboxgl-canvas" tabindex="0" aria-label="Map" role="region" width="400" height="733" style="width: 400px; height: 732.156px;"></canvas>