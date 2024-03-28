import type { Grid } from '../types';

export const gridIsFilled = (grid: Grid) => {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (!grid[row][col].value) {
                return false;
            }
        }
    }

    return true;
};
