import { test as it } from '@playwright/test'
it('Practice Broken Images', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/broken-images#google_vignette')
    await page.route('**/*', route => {
        route.continue().catch(() => {})    
    })
    const imageBrok = await page.evaluate(async () => {
        const brokenImage = Array.from(document.querySelectorAll('img'))
        const arrayImages = []
        for (const img of brokenImage) {
            const response = await fetch(img.src).catch(() => null) 
            if(img.naturalHeight === 0 || img.naturalWidth === 0)   
            arrayImages.push(img.src)
    }
    return arrayImages
})
console.log('Number of broken images:', imageBrok.length);     // Выводим каждый URL битого изображения в консоль

                                                        
    for (const src of imageBrok) {
        console.log(src, 'src');
    }
});