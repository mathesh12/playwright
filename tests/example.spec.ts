import { test } from '@playwright/test';

test('new test case - 1', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.locator('//*[@id="dateOfBirthInput"]').fill('05 july 2023');

    
   

    
});