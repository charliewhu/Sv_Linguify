import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
	// echo back request id
	// with generic name and body
	// and 200 OK status code
	const id = event.params.slug;
	const responseData = { id, name: 'name', body: 'body' };
	const response = json(responseData, { status: 200 });
	return response;
};
