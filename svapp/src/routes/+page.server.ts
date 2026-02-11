import os from 'node:os';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        hostname: os.hostname()
    };
}
