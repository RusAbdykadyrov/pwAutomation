import { test as setup, expect } from '@playwright/test';

const authFile = './.authPASV/user.json';

setup('authenticatePASV', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://coding.pasv.us/user/login');
  await page.getByPlaceholder('Email').fill('abdykadyrov.ruslan@outlook.com');
  await page.getByPlaceholder('password').fill('Ruslan1234');
  await page.getByRole('button', { name: 'Login' }).click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://coding.pasv.us/profile/64e7d93e0141f763dc22df73');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page.locator('.ms-2.me-2' )).toHaveText('Ruslan Abdykadyrov');

  // End of authentication steps.

  const imag= await page.locator('img').count();
  expect(imag).toBeGreaterThan(0);

  await page.context().storageState({ path: authFile });
});