import { expect, test } from '@playwright/test'
test.describe('IFRAME', () => {
    test('iframe test ', async ({ page }) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/nested-fram')
        const frameBottom = page.frameLocator('[name="frame-bottom"]')
        const leftFrame = await frameBottom
            .frameLocator('[name="frame-left"]')
            .locator("body")
            .textContent();

        const midlleFrame = await frameBottom
            .frameLocator('[name="frame-middle"]')
            .locator("body")
            .textContent();
        const rightFrame = await frameBottom
            .frameLocator('[name="frame-rigth"]')
            .locator("body")
            .textContent();
        expect(leftFrame).toContain("left")
        expect(midlleFrame).toContain("middle")
        expect(rightFrame).toContain("right")
        console.log(leftFrame, 'leftFrame')
        console.log(midlleFrame, 'middleFrame')
        console.log(rightFrame, 'rightFrame')
    })
})

