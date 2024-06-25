import { expect, test as it } from '@playwright/test'

it('upload single file', async ({ page }) => {
    page.goto('https://the-internet.herokuapp.com/upload')
    await page.setInputFiles('input[type="file"]', 'upload/1.jpg')
    await page.click('#file-submit')
    await expect(page.locator('#uploaded-files')).toContainText('1.jpg')

})
// it('upload mulpiple file', async ({ page }) => {
//     page.goto('https://blueimp.github.io/jQuery-File-Upload/')
//     await page.setInputFiles('input[type="file"]', ['upload/1.jpg', 'upload/2.jpg'])

//     await expect(page.locator('p.name')).toContainText('1.jpg')
//     await expect(page.locator('p.name')).toContainText('2.jpg')
// })
