import type { Grid } from '../types';

export const gridHasError = (grid: Grid) => {
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

            if (rowMask & bit || colMask & bit || subGridMask & bit) {
                return true; // Duplicate found
            }

            masks[i] ^= bit; // Update row mask
            masks[9 + j] ^= bit; // Update column mask
            masks[18 + Math.floor(i / 3) * 3 + Math.floor(j / 3)] ^= bit; // Update sub-grid mask
        }
    }

    return false; // No errors found
};
