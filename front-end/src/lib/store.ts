import { writable } from 'svelte/store';

export const Session = writable<'Invalid' | 'Active'>(undefined);

export const Token = writable<string>(undefined);
