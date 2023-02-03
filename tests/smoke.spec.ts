import { test, expect } from '@playwright/test';

test('smoke test', async () => {
    await expect(1).toEqual(1)
  });