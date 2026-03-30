import { test } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';

test('Customer Registration Flow', async ({ page }) => {
  const register = new RegisterPage(page);

  await register.goToRegisterPage();

  await register.registerUser(
    'Test User',
    `user${Date.now()}@mail.com`, // unique email
    'Password123!'
  );

  await register.submitForm();

  await register.verifySuccess();
});