import { test } from '@playwright/test'

test('pageBlockAplle', async ({ page }) => {
    await page.route('**/*.{png,jpg,jpeg,svg}', (body) => {
        if (body.request().resourceType() === 'image') {
            body.abort(); // Блокировка запросов на изображения
        } else {
            body.continue();
        }
        // console.log(body,body)
    });
    page.on('pageerror', block => {
        console.log(`error: ${block}`); // Логирование ошибки страницы в консоль
    })
    await page.pause()
    await page.goto('https://www.apple.com/')
    await page.pause()
})