import { test } from '@playwright/test'


test('add blocker PASV', async ({ page }) => {
    const addBlockerPasv = [
       
        "https://fonts.googleapis.com",
        "hhtts://www.googletagmanager.com",
        "chrome-extension://ipdccpcgblmedcjohoepdciegpffpiod",
        "https://fonts.gstatic.com",
        "hhttps://www.google-analytics.com",
        "https://www.google.com",
        "https://www.googletagservices.com",
        "https://www.googletagmanager.com",
        "https://server-prod.pasv.us",
        "https://gw.alipayobjects.com",
        "https://mc.yandex.ru",
        "https://mc.yandex.com",
        "https://code.jivosite.com",
        "https://node-sber1-az3-20.jivosite.com",
        "https://code.jivo.ru",
        "https://ww.youtube.com",
        "https://course-qa-basics.s3.us-west-1.amazonaws.com"
    ];

    await page.route('**/*', (route) => {
        const url = route.request().url();
        if (addBlockerPasv.some(pasvBlock => url.startsWith(pasvBlock))) route.abort()
        else route.continue()

    });
    await page.pause()
    await page.goto('https://coding.pasv.us/');
    await page.pause()
});
//Этот тест предназначен для проверки того, как веб-приложение реагирует,
// если определенные ресурсы не загружаются, что может быть полезно для 
//тестирования функциональности без сторонних скриптов, таких как аналитические и трекеры.

