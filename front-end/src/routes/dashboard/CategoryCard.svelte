<script lang="ts">
	export let category: string;
	export let totalAmount: number = 0;
	export let diffRatio: number = 0;
</script>

<div class="card border-2 shadow-lg">
	<div class="card-body">
		<div class="flex justify-between gap-4 pb-2">
			<slot name="svg" />
			<p class="flex-grow-0 whitespace-nowrap">
				{#if diffRatio > 0}
					<span class="text-green-600">+{diffRatio}%</span>
				{:else}
					<span class="text-red-600">-{diffRatio}%</span>
				{/if}
				vs last 30 days
			</p>
		</div>
		<div class="card-actions mt-auto flex-col">
			<h2 class="card-title">+${totalAmount}</h2>
			<p class="text-base text-gray-500">{category} -></p>
		</div>
	</div>
</div>
