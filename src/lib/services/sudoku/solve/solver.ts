import { deepCopyGrid } from '../grid';
import type { Grid } from '../types';
import { moveIsPossible } from './helpers';

export const solveGridRec = (grid: Grid) => {
    const gridToSolve = deepCopyGrid(grid);
    _solveGridRec(gridToSolve);
    return gridToSolve;
};

const _solveGridRec = (grid: Grid) => {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col].value !== undefined) {
                continue;
            }

            for (let value = 1; value <= 9; value++) {
                if (!moveIsPossible(grid, { row, col }, value)) {
                    continue;
                }

                grid[row][col].value = value;
                if (_solveGridRec(grid)) {
                    return true;
                }
                grid[row][col].value = undefined;
            }
            return false;
        }
    }

    return true;
};
