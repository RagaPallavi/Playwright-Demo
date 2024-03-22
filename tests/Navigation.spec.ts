
import { test, expect } from '@playwright/test';
// importing the user defined function Navigation Page
import { NavigationPage } from '../pages/NavigationPage';
 
test.describe('Form layout tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://pw-practice-app.web.app/');
  });
 
  test('Navigate to Form Page', async ({ page }) => {
    const navigationPage = new NavigationPage(page);
    await navigationPage.formLayoutsPage();
  });
});