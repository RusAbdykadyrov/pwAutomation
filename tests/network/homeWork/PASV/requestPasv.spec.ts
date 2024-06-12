import { test } from '@playwright/test'

test('request PASV', async ({ page }) => {
    await page.route('**/*.{png,jpg,jpeg,svg}', (body) => {
        if (body.request().resourceType() === 'image') {
            body.abort();
        } else {
            body.continue();
        }
        // console.log(body,body)
    });
    page.on('requestfailed', (req)=> {
        console.log(`error: ${req.url()}`);
    })
    await page.goto('https://coding.pasv.us/')
})
// Этот скрипт демонстрирует, как можно использовать Playwright для перехвата 
// и блокировки загрузки изображений 
// при посещении веб-страницы. Также он логирует все URL, где запросы не удались. 
// Такой подход может быть полезен для ускорения тестов или минимизации 
// потребления трафика при проверке веб-страниц.
