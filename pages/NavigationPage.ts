// To use this file as exporting and using it in another file

import { Page } from '@playwright/test';
 
export class NavigationPage {
  readonly page: Page;
 
  constructor(page: Page) {
    this.page = page;
  }
 // re-using these lines by importing them to test files
  async formLayoutsPage() {
    await this.page.getByText('Forms').click();
    await this.page.getByText('Form Layouts').click();
  }
}