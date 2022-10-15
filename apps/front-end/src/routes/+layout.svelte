<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
</script>

<Header />
<main class="wrapper">
  <slot />
</main>

<style lang="scss">
  .wrapper {
    padding-inline: var(--gap)
  }
</style>
