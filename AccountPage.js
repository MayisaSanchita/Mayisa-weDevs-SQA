import { expect } from '@playwright/test';

export class AccountPage {
  constructor(page) {
    this.page = page;

    // Navigation
    this.accountMenu = page.locator('text=My Account');
    this.profileOption = page.locator('text=Account Details');

    // Form fields
    this.nameInput = page.locator('input[name="name"]');
    this.phoneInput = page.locator('input[name="phone"]');

    this.saveBtn = page.locator('button:has-text("Save")');

    // Success message
    this.successMsg = page.locator('text=updated');
  }

  async goToAccountDetails() {
    await this.accountMenu.click();
    await this.profileOption.click();
  }

  async updateProfile(name, phone) {
    await this.nameInput.fill(name);
    await this.phoneInput.fill(phone);
  }

  async saveChanges() {
    await this.saveBtn.click();
  }

  async verifyUpdateSuccess() {
    await expect(this.successMsg).toBeVisible();
  }
}