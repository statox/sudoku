import { writable } from 'svelte/store';

export const selectedHighlight = writable<number | undefined>();
