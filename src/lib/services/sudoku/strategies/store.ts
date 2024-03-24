import { writable } from 'svelte/store';
import type { StrategyResult } from './types';

export const strategiesResults = writable<StrategyResult[]>([]);

// strategiesResults.subscribe((value) => {
//     value
//         .sort((a, b) => {
//             const { row: arow, col: acol } = a.cause[0];
//             const { row: brow, col: bcol } = b.cause[0];
//             if (brow === arow) {
//                 return acol - bcol;
//             }
//             return arow - brow;
//         })
//         .map((v) => {
//             const { row, col, notes } = v.cause[0];
//             const { type } = v;
//             return { row, col, v: notes[0], type };
//         })
//         .forEach((v) => console.log(v));
// });
