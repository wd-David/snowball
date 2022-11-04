import type { HandleFetch, Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const handleFetch: HandleFetch = async ({ request, fetch, event }) => {
	// get cookies from browser
	const session = event.cookies.get('session');

	if (session && request.url.startsWith(env.SNOWBALL_BE_URL)) {
		request.headers.set('Authorization', `Bearer ${session}`);
	}

	return fetch(request);
};

export const handle: Handle = async ({ event, resolve }) => {
	const user = event.cookies.get('user');

	if (user) event.locals.user = user;

	// load page as normal
	return await resolve(event);
};
