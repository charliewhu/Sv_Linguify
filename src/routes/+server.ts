import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	// echo back request id
	// with generic name and body
	// and 200 OK status code
	const responseData = [
		{ id: 1, name: 'name', body: 'body' },
		{ id: 2, name: 'name', body: 'body' },
		{ id: 3, name: 'name', body: 'body' }
	];
	const response = json(responseData, { status: 200 });
	return response;
};
