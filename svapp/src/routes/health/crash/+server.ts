import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	while (true) {
		// Infinite loop to simulate a crash
	}
	return json({ message: 'This will never be reached' });
};
