import type { Grid } from '../types';

export type GridError = {
    type: 'row' | 'column' | 'square';
    col: number;
    row: number;
    value: number;
};

export const getAllGridErrors = (grid: Grid): GridError[] => {
    const errors: GridError[] = [];
    const masks = new Array(27).fill(0); // 9 rows + 9 columns + 9 sub-grids

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (grid[i][j].value === undefined) {
                continue; // Ignore empty cells
            }
            const num = grid[i][j].value!;

            const bit = 1 << (num - 1); // Convert number to bit
            const rowMask = masks[i];
            const colMask = masks[9 + j];
            const subGridMask = masks[18 + Math.floor(i / 3) * 3 + Math.floor(j / 3)];

            if (rowMask & bit) {
                errors.push({ type: 'row', col: j, row: i, value: num });
            }
            if (colMask & bit) {
                errors.push({ type: 'column', col: j, row: i, value: num });
            }
            if (subGridMask & bit) {
                errors.push({ type: 'square', col: j, row: i, value: num });
            }

            masks[i] ^= bit; // Update row mask
            masks[9 + j] ^= bit; // Update column mask
            masks[18 + Math.floor(i / 3) * 3 + Math.floor(j / 3)] ^= bit; // Update sub-grid mask
        }
    }

    return errors;
};
