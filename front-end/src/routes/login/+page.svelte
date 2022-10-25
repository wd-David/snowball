<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	export let form: ActionData & {
		incorrect: boolean
		registered: boolean
	};

	$: if (form?.success) goto('/')

	/**
	 * TODO:
	 * 1. Add toast notification
	 * 2. Set cookies (user session)
	 * 3. Need back-end API status code for each scenario
	*/
</script>

<div class="hero h-full bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">Login now!</h1>
			<p class="py-6">Start your personal accounting right away.</p>
		</div>
		<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<form
				class="card-body"
				method="POST"
				use:enhance
			>
				<div class="form-control">
					<label for="email" class="label">
						<span class="label-text">Email</span>
					</label>
					<input
						name="email"
						type="email"
						required
						placeholder="email"
						class="input input-bordered"
						value={form?.email ?? ''}
					/>
				</div>
				<div class="form-control">
					<label for="password" class="label">
						<span class="label-text">Password</span>
					</label>
					<input
						name="password"
						type="text"
						required
						placeholder="password"
						class="input input-bordered"
						value={form?.password ?? ''}
					/>
				</div>
				<p class="text-error" class:hidden={!form?.missing}>The email field is required</p>
				<p class="text-error" class:hidden={!form?.incorrect}>Invalid credentials!</p>
				<p class="text-error" class:hidden={!form?.registered}>This email has been registered</p>
				<div class="grid grid-cols-2 gap-2 mt-6">
					<button type="submit" class="btn btn-primary" formaction="?/login">Login</button>
					<button type="submit" class="btn btn-primary" formaction="?/register">Register</button>
				</div>
			</form>
		</div>
	</div>
</div>
