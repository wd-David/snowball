import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, locals }) => {
	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/login');
	}

	const categoriesUrl = 'http://localhost:3000/categories';
	const expensesUrl = 'http://localhost:3000/records/saving';
	const incomesUrl = 'http://localhost:3000/records/income';
	const savingsUrl = 'http://localhost:3000/records/saving';

	const resArray = await Promise.all([
		fetch(categoriesUrl),
		fetch(expensesUrl),
		fetch(incomesUrl),
		fetch(savingsUrl)
	]);
	const [categories, expenses, incomes, savings] = resArray.map(async (res) => await res.json());

	return { categories, expenses, incomes, savings, user: locals.user };
};
