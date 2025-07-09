import { test, expect } from '@playwright/test';

test.skip('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('buy a backpack', {tag: ['@smoke']}, async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByRole('textbox', {name: 'password'}).fill('secret_sauce');
await page.locator('xpath = /html/body/div/div/div[2]/div[1]/div/div/form/input').click();
await page.waitForTimeout(1000);
await expect(page.locator('.app_logo', { hasText: 'Swag Labs' })).toBeVisible();
await page.waitForTimeout(1000);

await page.locator('xpath = //*[@id="item_4_title_link"]/div').click();
await page.waitForTimeout(1000)
await page.locator ('xpath = //*[@id="add-to-cart"]').click();
await page.waitForTimeout(1000);

await page.locator('xpath = //*[@id="shopping_cart_container"]/a').click();
await page.waitForTimeout(1000);

await page.locator('xpath = //*[@id="checkout"]').click();
await page.waitForTimeout(1000);

await page.getByPlaceholder('First Name').fill('Iulian');
await page.waitForTimeout(1000);
await page.getByPlaceholder('Last Name').fill('Pocotila');
await page.waitForTimeout(1000);
await page.getByPlaceholder('Zip/Postal Code').fill('1111');
await page.waitForTimeout(1000);

await page.locator('xpath = //*[@id="continue"]').click();
await page.waitForTimeout(1000);

await page.locator('xpath = //*[@id="finish"]').click();
await page.waitForTimeout(2000);

await expect(page.locator('xpath = //*[@id="checkout_complete_container"]/h2')).toBeVisible();


// use command  npx playwright test --headed to open the browser and see in real time the test execution
// use command  npx playwright test --ui to see  launches Playwright's UI mode, a graphical interface designed to enhance the experience of developing and running automated tests.
// It allows users to explore, run, and debug tests in a visual and interactive way.

})



