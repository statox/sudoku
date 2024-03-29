import type { Grid } from '../../types';
import type { Hint } from '../types';

// https://www.learn-sudoku.com/lone-singles.html
// A Lone Single is when a cell has only one note left
export const getLoneSingles = (grid: Grid): Hint[] => {
    const result: Hint[] = [];

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col].value !== undefined) {
                continue;
            }

            if (grid[row][col].notes.length !== 1) {
                continue;
            }
            result.push({
                type: 'lone_single',
                cause: [{ row, col, notes: [grid[row][col].notes[0]] }],
                effect: []
            });
        }
    }

    return result;
};
