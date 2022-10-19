<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
</script>

<div class="wrapper">
	<Header />
	<main>
		<slot />
	</main>
</div>

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
		}
		main {
			grid-area: main;
			margin-block-start: var(--size-fluid-4);
		}
	}
</style>
