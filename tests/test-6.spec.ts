import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //Arrange
const expected = 'Buy a home';

  //Act
  await page.goto('https://www.doorknock.co.nz/');
  const actual = page.getByText('Buy a home').first();

  //Assert
  await expect(actual).toHaveText(expected);
});
