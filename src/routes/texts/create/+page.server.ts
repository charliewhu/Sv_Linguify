import { dev } from '$app/environment';
import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const form = await request.formData();

		const reqData = {
			name: form.get('name'),
			body: form.get('body')
		};

		// if we're in development then send request to internal server
		// else send request to external API
		const url = dev ? '/texts/create' : 'www.apiaddress.com/api/texts/';

		// POST request to API
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(reqData)
		});

		// redirect to slug/id from response
		const resData = await response.json();
		throw redirect(303, `/texts/${resData.id}`);
	}
};
