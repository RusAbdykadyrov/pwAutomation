import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://coding.pasv.us/profile/64e7d93e0141f763dc22df73');
});

test('authenticationPASV without UI', async ({ page, browserName }) => {
    const name = page.locator('.d-flex align-items-center mb-3');
    await expect(page.locator('h1')).toHaveText('Ruslan Abdykadyrov');

    await page.goto('https://coding.pasv.us/flash')
    await page.screenshot({ path: `screenShotPASV/${browserName}.png` });
    
});