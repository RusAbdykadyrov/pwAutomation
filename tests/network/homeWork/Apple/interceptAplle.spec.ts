import { test } from '@playwright/test'

test(' Apple intercept', async ({ page }) => {
    await page.route('**/*.{png,jpg,jpeg,svg}', (body) => {
        if (body.request().resourceType() === 'image') {
            body.abort();
        } else {
            body.continue();
        }
        console.log(body,body)
    });
    await page.pause()
    await page.goto('https://www.apple.com/');
    // await page.pause()
});