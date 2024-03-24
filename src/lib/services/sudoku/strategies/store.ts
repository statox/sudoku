import { writable } from 'svelte/store';
import type { StrategyResult } from './types';

export const strategiesResults = writable<StrategyResult[]>([]);
