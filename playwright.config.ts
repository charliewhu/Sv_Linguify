import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'yarn dev',
		port: 5173
	},
	testDir: 'tests'
};

export default config;
