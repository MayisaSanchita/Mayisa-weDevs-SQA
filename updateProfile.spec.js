import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AccountPage } from '../pages/AccountPage';

test('Task 3: Update Profile Information', async ({ page }) => {
  const login = new LoginPage(page);
  const account = new AccountPage(page);

  // Step 1: Login
  await login.goto();
  await login.login('testuser@mail.com', 'Password123!');
  await login.submit();

  // Step 2: Navigate to Account Details
  await account.goToAccountDetails();

  // Step 3: Update profile
  await account.updateProfile(
    'Updated User',
    '01700000000'
  );

  // Step 4: Save
  await account.saveChanges();

  // Step 5: Verify
  await account.verifyUpdateSuccess();
});