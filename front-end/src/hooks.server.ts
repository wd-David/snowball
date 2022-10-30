import { get } from 'svelte/store';
import type { HandleFetch } from '@sveltejs/kit';
import { Token } from '$lib/store';

export const handleFetch: HandleFetch = async ({ request, fetch }) => {
	if (get(Token) && request.url.startsWith('http://localhost:3000')) {
		request.headers.set('Authorization', `Bearer ${get(Token)}`);
	}

	return fetch(request);
};
