import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async (event) => {
	// echo back request data
	// with id
	// and 201 created status code
	const data = await event.request.json();
	const responseData = await { id: 1, ...data };
	const response = json(responseData, { status: 201 });
	return response;
};
