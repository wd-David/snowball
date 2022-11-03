// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		user: string
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

interface Categories {
	id: number
	mainCategory: string
	subCategory: string
}

interface ExpenseRecord {
	id: number
	title: string
	amount: string
	note: string
	createdAt: string
	updatedAt: string
	userId: number
	categoryId: number
}

