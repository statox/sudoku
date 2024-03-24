import type { Grid } from '../types';
import type { StrategyResult } from './types';

export const getLoneSingles = (grid: Grid): StrategyResult[] => {
    const result: StrategyResult[] = [];

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col].value !== undefined) {
                continue;
            }

            if (grid[row][col].notes.length !== 1) {
                continue;
            }
            result.push({
                type: 'lone_singles',
                cause: [{ row, col, notes: [grid[row][col].notes[0]] }]
            });
        }
    }

    return result;
};
