<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
</script>

<div class="wrapper bg-base-100">
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
			padding-inline: var(--gap);
		}
		main {
			grid-area: main;
			margin-block-start: clamp(2rem, 4vw, 3rem);
		}
	}
</style>
