// src/routes/metrics/+server.js
import { register, collectDefaultMetrics } from 'prom-client';
import { error } from '@sveltejs/kit';

// Initialize default metrics collection (only once)
collectDefaultMetrics();

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	try {
		const metrics = await register.metrics();

		return new Response(metrics, {
			headers: {
				'Content-Type': register.contentType
			}
		});
	} catch (err) {
		throw error(500, 'Could not generate metrics');
	}
}
