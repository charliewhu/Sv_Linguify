import { test, expect } from '@playwright/test';

test('viewing the list of Texts', async ({ page }) => {
	// Given the User is on the Home page
	await page.goto('/');

	// Then they should see Texts listed
	page.getByTestId('textList');
	const listItems = await page.getByTestId('textListItem').count();
	await expect(listItems).toBeGreaterThan(1);
});
