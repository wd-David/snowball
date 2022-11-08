<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import type { SvelteToastOptions } from '@zerodevx/svelte-toast';

	const options: SvelteToastOptions = {
		duration: 3000,
		reversed: true,
		intro: { y: -192 }
	};
</script>

<div class="wrapper bg-base-100">
	<Header />
	<main class="mt-6">
		<slot />
	</main>
</div>
<SvelteToast {options} />

<style lang="scss">
	.wrapper {
		height: 100vh;
		width: 100vw;
		display: grid;
		grid-template-columns: var(--gap) 1fr var(--gap);
		grid-template-rows: min-content 1fr;
		grid-template-areas:
			'header header header'
			'. main .';
		:global(header) {
			grid-area: header;
			padding-inline: var(--gap);
		}
		main {
			grid-area: main;
		}
	}
</style>
