<header>
	<div class="logo">Sayve</div>
	<nav>
		<a href="/overview">Overview</a>
		<a href="/accounts">Accounts</a>
		<a href="/activities">Activities</a>
		<a href="/spending">Spending</a>
		<a href="/saveandinvest">Save & Invest</a>
	</nav>
	<div class="actions">
		<button class="search icon-button">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
				/>
			</svg>
		</button>
		<button class="notification icon-button">
			<svg
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
					d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
				/>
			</svg>
		</button>
		<div class="user">
			<svg
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
					d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>

			<p>Adriene Cutipie </p>
		</div>
	</div>
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;

		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		min-height: 4rem;
		padding-inline: var(--gap);

		box-shadow: var(--shadow-1);
	}

	a {
		padding: var(--size-2) var(--size-2);
		text-decoration: none;
	}
	.actions {
		display: flex;
		gap: var(--size-2);
		.user {
			display: flex;
		}
	}

	.icon-button {
		display: inline-block;
		background: transparent;
		border: none;
		color: currentColor;
		padding: 0;
		cursor: pointer;
		font: inherit;
		appearance: none;
	}

	.icon-button svg {
		display: block;
		width: 1em;
		height: 1em;
		min-width: 1.5rem;
		min-height: 1.5rem;
	}
</style>
