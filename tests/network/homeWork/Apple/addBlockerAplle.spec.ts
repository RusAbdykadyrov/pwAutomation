// import { test } from '@playwright/test'

// test('add blocker Apple', async ({ page }) => {
//     const addBlockerApple = [
//         "chrome-extension://abcdefghijklmnoabcdefabcdefabcdef",
//         "https://securemetrics.apple.com",
//     ];

//     await page.route('**/*', (route) => {
//         const url = route.request().url();
//         if (addBlockerApple.some(appBlock => url.startsWith(appBlock))) route.abort()
//         else route.continue()

//     });

//     await page.pause()
//     await page.goto('https://www.apple.com/');
//     await page.pause()
// });

import { test } from '@playwright/test'

test('add blocker Apple', async ({ page }) => {
    const addBlockerApple = [
        "chrome-extension://abcdefghijklmnoabcdefabcdefabcdef",
        "https://securemetrics.apple.com",
    ];

    await page.route('**/*', (route) => {
        const url = route.request().url();
        if (addBlockerApple.some(appBlock => url.startsWith(appBlock))) {
           
            if (url.startsWith("chrome-extension://abcdefghijklmnoabcdefabcdefabcdef")) {
                route.continue();
            } else {
                
                route.abort();
            }
        } else {
            
            route.continue();
        }
    });

    await page.pause()
    await page.goto('https://www.apple.com/');
    await page.pause()
});







