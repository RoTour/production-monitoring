import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const now = Date.now();
	for (let i = 0; i < 1e9; i++) {
		// Simulate heavy load by performing a large number of iterations
		if (i % 1e7 === 0) {
			console.log(`Processed ${i} iterations...`);
		}
	}
	const elapsed = Date.now() - now;
	return json({ message: `process completed in ${elapsed} ms` });
};
