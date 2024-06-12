import { test } from '@playwright/test'

test('PASV intercept', async ({ page }) => {
    await page.route('**/*.{png,jpg,jpeg,svg}', (body) => {
        if (body.request().resourceType() === 'image') {
            body.abort();
        } else {
            body.continue();
        }
        console.log(body,body)
    });
    await page.pause()
    await page.goto('https://coding.pasv.us/');
    // await page.pause()
});