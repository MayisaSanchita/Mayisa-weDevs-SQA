import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;

    this.email = page.locator('input[name="email"]');
    this.password = page.locator('input[name="password"]');
    this.loginBtn = page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto('https://your-staging-site/login');
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
  }

  async submit() {
    await this.loginBtn.click();
  }

  async verifyLoginSuccess() {
    await expect(this.page).toHaveURL(/dashboard/);
  }
}