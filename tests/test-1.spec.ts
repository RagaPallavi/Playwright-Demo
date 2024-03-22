// import { test, expect } from '@playwright/test';
// test.beforeAll(async ({ page }) => {
//     await page.goto('https://pw-practice-app.web.app/');
//     await page.getByRole('link', { name: 'Forms' }).click();
//     await page.getByRole('link', { name: 'Form Layouts' }).click();
//   });
// test('test', async ({ }) => {

//  });
import { test, expect } from '@playwright/test';
test.describe ('timeouts', () => {
   test.beforeEach(async({page})=>{
    await page.goto('http://uitestingplayground.com/ajax');
   });
  test('AjaxTest', async({page}) =>{
   await page
        .getByRole('button',{name : 'Button'})
        .click();
    // const successMessageBox = await page.locator('.bg-success').textContent();
    // expect(successMessageBox).toEqual('Data loaded with AJAX get request.');
    const successMessage = page.locator('.bg-success');
    await successMessage.waitFor({state: 'attached'});
    const expected= 'Data loaded with AJAX get request.'
    await expect(successMessage).toHaveText(expected);  
    // await expect(successMessage).toHaveText(expected,{timeout : 3000});
  });

});