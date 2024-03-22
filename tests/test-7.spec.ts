// import { test, expect } from '@playwright/test';
// test('locator syntax rules', async ({ page }) => {
//   await page.goto('https://doorknock-web-git-develop-doorknock-old.vercel.app/');
//   await page.getByRole('link', { name: 'or explore the map' }).click();
//   await page.getByRole('textbox',{name :'Start typing an address'}).click();
//   await page.getByRole('textbox',{name:'Start typing an address'}).fill('23a Cedar Heights');
//   const pp = page.getByText('listitem').nth(2);
//   await pp.waitFor({state: 'attached'});
//   const actu = await pp.textContent();
//   console.log(actu);
//   await page.getByRole('listitem').nth(0).click();
//   await page.locator(':text("23 cedar")').selectText();
//    const expec =page.getByText(':text ("23 cedar")').nth(2);
//   expect(actu).toBe(expec);
//   // const actual = page.getByText('23 Cedar Grove, Matua, Tauranga 3110, New Zealand');
//   // const given ='23 Cedar Grove, Matua, Tauranga 3110, New Zealand';
//   // await expect(actual).toHaveText(given);  
// });
import { test, expect } from '@playwright/test';
test.describe('search/compare address', () => {
  test.beforeEach('search for nth address', async({page})=>{
  await page.goto('https://doorknock-web-git-dev-doorknock-old.vercel.app ');
});
test('search', async({page})=>{
  await page.getByRole('link',{name :'or explore the map'}).click();
  const pp = page.locator('.flex w-full border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-base rounded-full pl-10 h-12');
  //await pp.waitFor({state: 'attached'});
  await pp.fill('23 Cedar Heights');
  await pp.click();
});
});