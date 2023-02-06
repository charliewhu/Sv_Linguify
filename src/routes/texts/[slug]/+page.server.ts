import { dev } from '$app/environment';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	// only call real API if not in development
	const url = dev ? `/texts/${params.slug}` : 'www.apiaddress.com/api/texts/';

	const response = await fetch(url);
	const data = await response.json();

	return data;
};
