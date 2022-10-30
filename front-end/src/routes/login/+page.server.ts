import { invalid } from '@sveltejs/kit';
import type { Actions } from './$types';
import { Token } from '$lib/store';

export const actions: Actions = {
	login: async ({ request }) => {
		const data = await request.formData();

		const email = data.get('email') as string;
		const password = data.get('password') as string;

		if (!email) {
			return invalid(400, { email, missing: true });
		}
		if (!password) {
			return invalid(400, { password, missing: true });
		}

		try {
			const res = await fetch(`http://localhost:3000/users/logIn`, {
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			});

			const response = await res.json();

			if (response === 'incorrect email or unregistered email')
				return invalid(400, { email, incorrect: true });

			Token.set(response.token);

			return { success: true, user: email, type: 'login' };
		} catch (e) {
			throw Error('something went wrong');
		}
	},
	register: async ({ request }) => {
		const data = await request.formData();

		const email = data.get('email') as string;
		const password = data.get('password') as string;

		if (!email) {
			return invalid(400, { email, missing: true });
		}
		if (!password) {
			return invalid(400, { password, missing: true });
		}

		try {
			const res = await fetch(`http://localhost:3000/users/register`, {
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			});

			const data = await res.json();

			if (data === 'this email has been registered')
				return invalid(400, { email, registered: true });

			return { success: true, user: email, type: 'register' };
		} catch (e) {
			throw Error('something went wrong');
		}
	}
};
