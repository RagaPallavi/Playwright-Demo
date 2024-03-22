import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://doorknock-web-git-develop-doorknock-old.vercel.app/');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByLabel('Email address or username').click();
  await page.getByLabel('Email address or username').fill('sdkjfsdfsdfjd');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByText('Couldn\'t find your account.').click();
  const act = page.getByText(':text("Couldn\'t")');
 // const exp = 'Couldn\'t find your account.';
  await page.locator(':text("Couldn\'t")').selectText();
 // await expect(act).toHaveText(exp);
 console.log(`Error msg is ${act}`); 
 //await page.close();
});