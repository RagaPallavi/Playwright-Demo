import { test, expect } from '@playwright/test';
test.describe ('Form Layout Tests', () => {
test.beforeEach(async ({ page }) => {
    await page.goto('https://pw-practice-app.web.app/');
    await page.getByRole('link', { name: 'Forms' }).click();
    await page.getByRole('link', { name: 'Form Layouts' }).click();
  });

//   test('locator syntax rules', async ({ page }) => {
   
//   // find by tag name - input
//   //await page.locator('input').nth(3).click();

//   // find by id - inputEmail
//   //await page.locator('#inputEmail1').click();

//   // find by class name
// await page.locator('.input-full-width').nth(2).click();

//   // find by attribute
//   //await page.locator('[placeholder="Email"').nth(1).click();

//   // find by combination of locators
//   //await page.locator('input.input-full-width[placeholder="Email"]').nth(1).click();

//   // find by text
//   // find by partial text
//   //await page.locator(':text("using")').selectText();

//   // find by exact text
//   //await page.locator(':text-is("Using the Grid")').selectText();
// });
//    test('locate child elements', async ({page}) => {
//      //nb-card > nb-radio > text Option 1
//      await page
//      .locator('nb-card')
//      .locator('nb-radio')
//      .locator(':text-is("Option 2")')
//      .click();

//      await page
//      .locator('nb-card')
//      .getByRole('button',{name:'Sign In'})
//      .first()
//      .click();
//    await page.locator('nb-card').nth(1).getByRole('button').click();
//     });
//     test('filter from parent elements', async({page})=>{
//         await page
//         .locator('nb-card',{hasText:'Using the Grid'})
//         .getByRole('textbox',{name: 'Email'})
//         .click();
//     })

//     test(' from parent elements', async({page})=>{
//         //goog practice
//         await page
//         .locator('nb-card',{hasText:'Basic form'})
//         .getByRole('textbox',{name: 'Email'})
//         .click();
//         await page
//         .locator('nb-card')
//         .filter({hasText:'Basic form'})
//         .getByRole('textbox',{name: 'Email'})
//         .click();
//         await page
//         .locator('nb-card')
//         .filter({has: page.locator('nb-checkbox')})
//         .filter({hasText:'Sign In'})
//         .getByRole('textbox',{name:'Email'})
//         .click();
//         await page
//         .locator(':text-is("Using the Grid")')
//         .locator('..') // this will move to the parent which is not good practice
//         .getByRole('textbox',{name:'Email'})
//         .click();
        
//     });
//     test('filter from parent elements', async({page})=>{
//         await page
//         .locator('nb-card',{hasText:'Using the Grid'})
//         .getByRole('textbox',{name: 'Email'})
//         .fill('ragapallavi5@gmail.com');
//         await page
//         .locator('nb-card',{hasText:'Using the Grid'})
//         .getByRole('textbox',{name: 'Password'})
//         .fill('abc123');
//         await page
//         .locator('nb-card',{hasText:'Using the Grid'})
//         .getByRole('button')
//         .click();
//         await expect(page
//             .locator('nb-card',{hasText:'Using the Grid'})
//             .getByRole('textbox',{name: 'Email'})).toHaveValue('ragapallavi5@gmail.com');
// });
// test('Sign In - Using the Grid', async ({ page }) => {
//     const gridForm = page
//       .locator('nb-card')
//       .filter({ hasText: 'Using the Grid' });
//     const emailField = gridForm.getByRole('textbox', { name: 'Email' });
//     const pwdField = gridForm.getByRole('textbox', { name: 'Password' });
//     const signInBtn = gridForm.getByRole('button');
 
//     await emailField.fill('ram@magicturtlehq.com');
//     await pwdField.fill('abc123');
//     await signInBtn.click();
 
//     await expect(emailField).toHaveValue('ram@magicturtlehq.com');
//   });
  // extracting values
  // test('Extracting values', async ({ page }) => {
  //   const gridForm = page
  //     .locator('nb-card')
  //     .filter({ hasText: 'Using the Grid' });
  //   const signInBtn = gridForm.getByRole('button');
  //   const btnText = await signInBtn.textContent();
  //   expect(btnText?.toLowerCase()).toEqual('sign in');
  //   const emailField = gridForm.getByRole('textbox', { name: 'Email' });
  //   await emailField.fill('ram@magicturtlehq.com');
  //   const emailValue = await emailField.inputValue();
  //   expect(emailValue).toEqual('ram@magicturtlehq.com');
  //   const emailPlaceholderValue= await emailField.getAttribute('placeholder');
  //   expect(emailPlaceholderValue).toEqual('Email');
  //   //const radioBtns = await page.locator('nb-radio').allTextContents();
  //   const radioBtns = await gridForm.locator('nb-radio').allTextContents();
  //   const expectedRadioBtns =['Option 1', 'Option 2', 'Disabled Option'];
  //   expect(radioBtns).toEqual(expectedRadioBtns);
  // });
  test('different assertions', async({page})=>{
    const gridForm = page
      .locator('nb-card')
      .filter({ hasText: 'Using the Grid' });
    //generic assertions (constants)
    const expected =1000;
    expect(expected).toEqual(1000);
    //locator specific
    const signInBtn = gridForm.getByRole('button');
    //const btnText = await signInBtn.textContent();
    expect(signInBtn).toHaveText("Sign in");
  });
});
// test('user facing locators ', async ({}) => {
  
// });
//  test('locator syntax rules', async ({ page }) => {
//   await page.goto('https://pw-practice-app.web.app/');
//   await page.getByRole('link', { name: 'Forms' }).click();
//   await page.getByRole('link', { name: 'Form Layouts' }).click();
//   await page.getByRole('button', {name: 'Sign in' }).nth(0).click();
//   await page.getByLabel('Email').nth(0).click();
//   await page.getByPlaceholder('Email').nth(1).click();
//   await page.getByText('Using the Grid').selectText();
//   await page.getByTitle('IOT Dashboard').click();
// });
