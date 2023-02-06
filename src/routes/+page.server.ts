import { dev } from '$app/environment';
import type { PageServerLoad } from './texts/[slug]/$types';

export const load: PageServerLoad = async ({ fetch }) => {
	// only call real API if not in development
	const url = dev ? `/texts/` : 'www.apiaddress.com/api/texts/';

	const response = await fetch(url);
	const data = await response.json();

	return data;
};
