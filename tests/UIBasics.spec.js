const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
    await page.goto('https://dash-qa-2.adjust.com/');
    const title = page.locator('div.form-container h1>span');
    await expect(title).toHaveText('Log In');
});