import {test, expect} from '@playwright/test'

const name = "name"
const body = "body"

test('Creating a new Text', async ({ page }) => {
  // Given the User is on the NewText page
  await page.goto('/texts/create/');
  await expect(page).toHaveTitle(/New Text/);
  
  // When they fill Name content
  // And they fill Body content
  // And they click Submit button
  await page.getByPlaceholder("name").fill(name);
  await page.getByPlaceholder("body").fill(body);
  await page.locator('button[type="submit"]').click();
  
  // Then they are redirected to the Text detail page
  // And they see the new text name
  // And they see the new text body
  await expect(page).toHaveURL(/texts\/1/);
  expect(page.getByText(name)).toHaveText(name);
  expect(page.getByText(body)).toHaveText(body);
});