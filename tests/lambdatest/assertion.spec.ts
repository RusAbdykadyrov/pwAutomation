import { test, expect } from '@playwright/test'
test.describe('ASSERTION', () => {
    test.use({viewport: { width:500,height:500}})
    test('assertion', async ({ page }) => {

        await page.goto('https://www.lambdatest.com/')
        //test.use({
 // viewport: { width: 1280, height: 720 },//});
        const title = await page.title()
        console.log(title)
        expect.soft(title).toContain('LambdaTest')
        const header = page.locator('h1')
        expect(await header.textContent()).toBe('Next-Generation Mobile Apps and Cross Browser Testing Cloud')
       // expect(page.locator('img[scr$="Vimeo.svg"]')).toHaveAttribute('alt', 'vimeo', {timeout: 1000})

    })

})