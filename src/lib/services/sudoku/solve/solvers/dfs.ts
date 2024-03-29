import { deepCopyGrid } from '../../grid';
import type { Grid } from '../../types';
import { moveIsPossible } from '../helpers';

export const solveGridDFS = (grid: Grid) => {
    const gridToSolve = deepCopyGrid(grid);
    _solveGridDFS(gridToSolve);
    return gridToSolve;
};

const _solveGridDFS = (grid: Grid) => {
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
                if (_solveGridDFS(grid)) {
                    return true;
                }
                grid[row][col].value = undefined;
            }
            return false;
        }
    }

    return true;
};
