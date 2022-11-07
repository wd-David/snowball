<script lang="ts">
	import type { PageData } from './$types';
	import CategoryCard from './CategoryCard.svelte';

	export let data: PageData;

	let categories: Categories[];
	let expenses: ExpenseRecord[];
	let incomes: ExpenseRecord[];
	let savings: ExpenseRecord[];

	$: ({ categories, expenses, incomes, savings, user } = data);

	const currentMonth = new Date().getMonth() + 1;

	/**
	 * Generate records by month
	 * @param records
	 */
	function getRecordsByMonth(records: ExpenseRecord[]): RecordsByMonth {
		const recordsByMonth = {} as RecordsByMonth;

		records.forEach((record) => {
			const expenseMonth = new Date(record.createdAt).getMonth() + 1;

			if (expenseMonth in recordsByMonth) {
				recordsByMonth[expenseMonth].records.push(record);
				recordsByMonth[expenseMonth].amount += record.amount;
			} else
				recordsByMonth[expenseMonth] = {
					records: [record],
					amount: record.amount
				};
		});

		return recordsByMonth;
	}

	/**
	 * Get diff ratio of last & current month
	 * @param recordsByMonth
	 * @param currentMonth
	 */
	function getDiffRatio(recordsByMonth: RecordsByMonth, currentMonth: number): number {
		const lastMonth = currentMonth - 1;

		let currentMonthAmount = 0;
		let lastMonthAmount = 0;

		if (currentMonth in recordsByMonth) currentMonthAmount = recordsByMonth[currentMonth]?.amount;
		if (lastMonth in recordsByMonth) lastMonthAmount = recordsByMonth[lastMonth]?.amount;

		console.log(currentMonthAmount);
		console.log(lastMonthAmount);

		const diff = currentMonthAmount - lastMonthAmount;
		const ratio = lastMonthAmount !== 0 ? diff / lastMonthAmount : 1;

		return Math.round(ratio * 10000) / 100;
	}

	$: expensesThisMonth = getRecordsByMonth(expenses)[currentMonth]?.amount;
	$: incomesThisMonth = getRecordsByMonth(incomes)[currentMonth]?.amount;
	$: savingsThisMonth = getRecordsByMonth(savings)[currentMonth]?.amount;

	$: spent = expensesThisMonth;
	$: earned = incomesThisMonth + savingsThisMonth;
</script>

<div class="overview-container p-4">
	<div class="flex flex-col gap-y-6">
		<div class="flex">
			<div class="flex flex-col gap-y-2">
				<h2 class="text-2xl font-bold">Overview</h2>
				<span class="flex"
					>You've spent&nbsp;
					<p class="font-semibold text-green-600">-${spent}</p>
					&nbsp;and earned&nbsp;
					<p class="font-semibold text-red-600">+${earned}</p>
					&nbsp; this month<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="ml-2 h-6 w-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
						/>
					</svg>
				</span>
			</div>
			<button class="btn-outline btn-ghost btn-sm btn ml-auto gap-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
					/>
				</svg>
				Contact Help</button
			>
		</div>
		<div class="grid grid-cols-4 gap-4">
			<CategoryCard
				category={'Incomes'}
				totalAmount={incomesThisMonth}
				diffRatio={getDiffRatio(getRecordsByMonth(incomes), currentMonth)}
				><svg
					slot="svg"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</CategoryCard>
			<CategoryCard
				category={'Expenses'}
				totalAmount={expensesThisMonth}
				diffRatio={getDiffRatio(getRecordsByMonth(expenses), currentMonth)}
				><svg
					slot="svg"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
					/>
				</svg>
			</CategoryCard>
			<CategoryCard category={'Savings'} totalAmount={savingsThisMonth} diffRatio={getDiffRatio(getRecordsByMonth(savings), currentMonth)}
				><svg
					slot="svg"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
					/>
				</svg>
			</CategoryCard>
		</div>
	</div>
	<!-- <div class="breakdown">
  <div class="breakdown-header">
    <h2>Breakdown</h2>
    <div class="button-group">
      <button>add filter</button>
      <button>Jan -> Present</button>
    </div>
  </div>
</div> -->
</div>

<style lang="scss">
	.overview-container {
		display: grid;
		grid-template-rows: min-content 1fr;
		grid-template-areas:
			'overview'
			'breakdown';
		row-gap: var(--size-4);
	}
</style>
