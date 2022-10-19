<header>
	<div class="logo">Snowball</div>
	<nav>
		<ul>
			<li><a href="/">Overview</a></li>
			<li><a href="/">About</a></li>
		</ul>
	</nav>
	<div class="actions">
		<button class="icon-button" aria-label="search">
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
		<button class="icon-button" aria-label="notification">
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
		<button class="icon-button" aria-label="user">
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
		</button>
	</div>
</header>

<style lang="scss">
	header {
		min-height: var(--size-9);

		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;

		padding-inline: var(--gap);

		box-shadow: var(--shadow-1);
	}

	ul {
		list-style: none;

		li {
			display: inline-block;
			padding: 0 var(--size-2);

			a {
				transition: all 0.3s var(--ease-1);
				text-decoration: none;

				&:hover {
					color: var(--blue-7);
				}
			}
		}
	}

	.actions {
		display: flex;
		gap: var(--size-2);
	}

	.icon-button {
		display: inline-block;

		background: transparent;
		border: none;
		cursor: pointer;

		svg {
			display: block;

			width: 1em;
			height: 1em;
			min-width: 1.5rem;
			min-height: 1.5rem;

			transition: all 0.3s var(--ease-1);

			&:hover {
				color: var(--blue-7);
			}
		}
	}
</style>
