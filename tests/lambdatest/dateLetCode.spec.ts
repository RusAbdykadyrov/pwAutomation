import { test as it } from "@playwright/test";
import { dateLetCode } from "../../page_object/project/formLetCode";

it.describe('Drop Down Positive Page', () => {
  it('Interact with DropDown menu', async ({ page }) => {
    const dropDown = new dateLetCode(page);
    await page.goto("https://letcode.in/forms");
    await dropDown.formLetCodeInput();
  });
});
