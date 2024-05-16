import { test as it } from "@playwright/test";

it("Fill all fields", async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.locator("#firstName").fill("Rus")
    await page.locator("#lastName").fill("DonaldDack")

    await page.getByPlaceholder('name@example.com').fill('rus@gmail.com');
    // await page.locator("#gender-radio-1").check();
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill('1234567890')
   
    await page.locator("#dateOfBirthInput").fill("01 June 1990")

   await page.locator("#subjectsInput").fill("Commit");
   
    // await page.locator("#hobbies-checkbox-1").check();
    await page.locator('[placeholder="Current Address"]').fill('123 Main Street')
    await page.fill('#react-select-3-input', 'NCR');
   
   //await page.selectOption('select[name="city"]', { label: 'Gurgaon' });


});

