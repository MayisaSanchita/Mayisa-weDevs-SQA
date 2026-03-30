import { expect } from '@playwright/test';

export class RegisterPage {
  constructor(page) {
    this.page = page;

    // Replace these selectors based on actual site
    this.name = page.locator('input[name="name"]');
    this.email = page.locator('input[name="email"]');
    this.password = page.locator('input[name="password"]');
    this.confirmPassword = page.locator('input[name="confirm_password"]');
    this.registerBtn = page.locator('button[type="submit"]');
  }

  async goToRegisterPage() {
    await this.page.goto('https://your-staging-site/register');
  }

  async registerUser(name, email, password) {
    await this.name.fill(name);
    await this.email.fill(email);
    await this.password.fill(password);
    await this.confirmPassword.fill(password);
  }

  async submitForm() {
    await this.registerBtn.click();
  }

  async verifySuccess() {
    await expect(this.page).toHaveURL(/verify|dashboard/);
  }
}