import { test as setup, expect } from '@playwright/test';

const authFile = './.authPASV/user.json';

setup('authenticatePASV', async ({ page }) => {
 
  await page.goto('https://coding.pasv.us/user/login');
  await page.getByPlaceholder('Email').fill('abdykadyrov.ruslan@outlook.com');
  await page.getByPlaceholder('password').fill('Ruslan1234');
  await page.getByRole('button', { name: 'Login' }).click();
 
  await page.waitForURL('https://coding.pasv.us/profile/64e7d93e0141f763dc22df73');
  
  await expect(page.locator('.ms-2.me-2' )).toHaveText('Ruslan Abdykadyrov');

  const imag= await page.locator('img').count();
  expect(imag).toBeGreaterThan(0);

  await page.context().storageState({ path: authFile });
});