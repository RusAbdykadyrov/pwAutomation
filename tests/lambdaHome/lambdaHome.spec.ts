
import { test, expect } from '@playwright/test';

test.describe('LAMBDAHOME', () => {
  test('lambdaHome test', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

    const header = await page.$('h1');
    const headerText = await header.innerText();
    expect(headerText).toBe('Javascript Alert Box Demo');

    const javaScriptAlertsButton = page.locator('button:has-text("Click Me")').nth(0);
    await expect(javaScriptAlertsButton).toBeVisible();
    const buttonText = await javaScriptAlertsButton.textContent();
    console.log(buttonText, 'JavaScript Alerts:');
    await javaScriptAlertsButton.click();

    const confirmBoxButton = page.locator('button:has-text("Click Me")').nth(1);
    await expect(confirmBoxButton).toBeVisible();
    const buttonTextConfirm = await confirmBoxButton.textContent();
    console.log(buttonTextConfirm, 'Confirm Box:');
    await confirmBoxButton.click();

    const promptBoxButton = page.locator('button:has-text("Click Me")').nth(2);
    await expect(promptBoxButton).toBeVisible();
    const buttonTextPrompt = await promptBoxButton.textContent();
    console.log(buttonTextPrompt, 'Prompt box:');
    await promptBoxButton.click();
    
    const loginButton = await page.locator('button:has-text("Login")').first();
    await page.goto('https://accounts.lambdatest.com/login?_gl=1*7h3bqk*_gcl_au*ODg3NTI1MjI1LjE3MTUzOTc0NzU.');
    expect(page.url()).toContain('https://accounts.lambdatest.com/login?_gl=1*7h3bqk*_gcl_au*ODg3NTI1MjI1LjE3MTUzOTc0NzU.');
    
  });
});




