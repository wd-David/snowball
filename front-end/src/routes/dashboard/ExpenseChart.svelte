<script lang="ts">
	import { Bar } from 'svelte-chartjs';
	import 'chart.js/auto';

	export let expenses: RecordsByMonth = {};
	export let incomes: RecordsByMonth = {};
	export let savings: RecordsByMonth = {};

	const expensesAmount = new Array(12).fill(0);
	const incomesAmount = new Array(12).fill(0);
	const savingsAmount = new Array(12).fill(0);

	for (const month in expenses) {
		expensesAmount[Number(month) - 1] = expenses[month].amount;
	}
	for (const month in incomes) {
		incomesAmount[Number(month) - 1] = incomes[month].amount;
	}
	for (const month in savings) {
		savingsAmount[Number(month) - 1] = savings[month].amount;
	}

	const data = {
		labels: [
			'Jan.',
			'Feb.',
			'Mar.',
			'Apr.',
			'May.',
			'Jun',
			'Jul.',
			'Aug',
			'Sep.',
			'Oct.',
			'Nov.',
			'Dec.'
		],
		datasets: [
			{
				label: 'Expenses',
				data: expensesAmount,
				backgroundColor: 'rgba(98,  182, 239,0.4)',
				borderWidth: 2,
				borderColor: 'rgba(98,  182, 239, 1)'
			},
			{
				label: 'Incomes',
				data: incomesAmount,
				backgroundColor: 'rgba(113, 205, 205, 0.4)',
				borderWidth: 2,
				borderColor: 'rgba(113, 205, 205, 1)'
			},
			{
				label: 'Savings',
				data: savingsAmount,
				backgroundColor: 'rgba(255, 218, 128, 0.4)',
				borderWidth: 2,
				borderColor: 'rgba(255, 218, 128, 1)'
			}
		]
	};

	const options = {
		responsive: true,
		scales: {
			x: {
				stacked: true
			},
			y: {
				stacked: true
			}
		}
	};
</script>

<Bar {data} height={'100%'} {options} />
