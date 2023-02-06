import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async (event) => {
	// echo back request data with 201 created status code
	const data = await event.request.json();
	const response = json(data, { status: 201 });
	return response;
};
