<script lang="ts">
	let spent = 2567;
	let earned = 5878;
</script>

<div class="overview-container">
	<div class="overview">
		<div class="overview-header">
			<div>
				<h2>Overview</h2>
				<span
					>You've spend&nbsp;
					<p class="spent">-${spent}</p>
					&nbsp;and earned&nbsp;
					<p class="earned">+${earned}</p>
					&nbsp; this month</span
				>
			</div>
			<button>Contact Help</button>
		</div>
		<div class="overview-cards">
			<div class="card" >Incomes</div>
			<div class="card" >Expenses</div>
			<div class="card" >Investments</div>
			<div class="card" >Loadns</div>
		</div>
	</div>
	<div class="breakdown">
		<div class="breakdown-header">
			<h2>Breakdown</h2>
			<div class="button-group">
				<button>add filter</button>
				<button>Jan -> Present</button>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	button {
		background: transparent;
		border-radius: var(--radius-conditional-3);
		border: var(--border-size-1) solid var(--gray-3);
		cursor: pointer;
		height: var(--size-6);
		padding-inline: var(--size-2);
	}
	.overview-container {
		display: grid;
		grid-template-rows: min-content 1fr;
		grid-template-areas:
			'overview'
			'breakdown';
		row-gap: var(--size-4);

		.overview {
			grid-area: overview;
			display: flex;
			flex-direction: column;
      gap: var(--size-7);

			.overview-header {
				display: flex;
				flex-direction: row;
				align-items: center;

				h2 {
					margin-bottom: var(--size-3);
				}

				span {
					display: flex;
				}

				button {
					margin-left: auto;
				}
			}

			.overview-cards {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
				column-gap: var(--size-4);

				.card {
          height: 15vh;
					border-radius: var(--radius-conditional-3);
					border: var(--border-size-1) solid var(--gray-3);
          box-shadow: var(--shadow-1);
				}
			}
		}

		.breakdown {
			grid-area: breakdown;
			display: flex;
			flex-direction: column;

			.breakdown-header {
				display: flex;

				.button-group {
					margin-left: auto;
				}
			}
		}
	}

	.spent {
		color: var(--red-6);
		font-weight: var(--font-weight-5);
	}

	.earned {
		color: var(--green-6);
		font-weight: var(--font-weight-5);
	}
</style>
