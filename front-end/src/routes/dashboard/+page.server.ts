import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async ({ fetch, locals }) => {
	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/login');
	}

	const categoriesUrl = `${env.SNOWBALL_BE_URL}/categories`;
	const expensesUrl = `${env.SNOWBALL_BE_URL}/records/saving`;
	const incomesUrl = `${env.SNOWBALL_BE_URL}/records/income`;
	const savingsUrl = `${env.SNOWBALL_BE_URL}/records/saving`;

	const resArray = await Promise.all([
		fetch(categoriesUrl),
		fetch(expensesUrl),
		fetch(incomesUrl),
		fetch(savingsUrl)
	]);
	const [categories, expenses, incomes, savings] = resArray.map(async (res) => await res.json());

	return { categories, expenses, incomes, savings, user: locals.user };
};
