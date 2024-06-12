import { test } from '@playwright/test'

test('pageErrorPasv', async ({ page }) => {
    await page.route('**/*.{png,jpg,jpeg,svg}', (body) => {
        if (body.request().resourceType() === 'image') {
            body.abort(); // Блокировка запросов на изображения
        } else {
            body.continue();
        }
        // console.log(body,body)
    });
    page.on('pageerror', error => {
        console.log(`error: ${error}`); // Логирование ошибки страницы в консоль
    })
   //await page.goto('data:text/html,<script>throw new Error("Test")</script>');
    await page.pause()
    await page.goto('https://coding.pasv.us/')
    await page.pause()
})
