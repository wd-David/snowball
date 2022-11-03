<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let categories: Categories[];
	let expenses: ExpenseRecord[];
	let incomes: ExpenseRecord[];
	let savings: ExpenseRecord[];

	$: ({ categories, expenses, incomes, savings } = data);

	const currentMonth = new Date().getMonth() + 1;
	const currentYear = new Date().getFullYear();

	/**
	 * Filter current month expense records
	 * @param records
	 */
	function getCurrentMonthRecord(records: ExpenseRecord[]): ExpenseRecord[] {
		return records.filter(({ createdAt }) => {
			const expenseMonth = new Date(createdAt).getMonth() + 1;
			const expenseYear = new Date(createdAt).getFullYear();
			return expenseMonth === currentMonth && expenseYear === currentYear;
		});
	}

	$: thisMonthExpenses = getCurrentMonthRecord(expenses);
	$: thisMonthIncomes = getCurrentMonthRecord(incomes);
	$: thisMonthSavings = getCurrentMonthRecord(savings);

	let spent = 2567;
	let earned = 5878;
</script>

<div class="overview-container p-4">
	<div class="flex flex-col gap-y-6">
		<div class="flex">
			<div class="flex flex-col gap-y-2">
				<h2 class="text-2xl font-bold">Overview</h2>
				<span class="flex"
					>You've spend&nbsp;
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
			<div class="card border-2 shadow-lg">
				<div class="card-body">
					<h2 class="card-title">Card title!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div class="card-actions justify-end">
						<button class="btn-primary btn">Buy Now</button>
					</div>
				</div>
			</div>
			<div class="card border-2 shadow-lg">
				<div class="card-body">
					<h2 class="card-title">Card title!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div class="card-actions justify-end">
						<button class="btn-primary btn">Buy Now</button>
					</div>
				</div>
			</div>
			<div class="card border-2 shadow-lg">
				<div class="card-body">
					<h2 class="card-title">Card title!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div class="card-actions justify-end">
						<button class="btn-primary btn">Buy Now</button>
					</div>
				</div>
			</div>
			<div class="card border-2 shadow-lg">
				<div class="card-body">
					<h2 class="card-title">Card title!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div class="card-actions justify-end">
						<button class="btn-primary btn">Buy Now</button>
					</div>
				</div>
			</div>
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
