import { deepCopyGrid } from '../grid';
import type { Grid } from '../types';
import { gridIsFilled, gridIsValid } from '../validate';
import { moveIsPossible } from './helpers';

export const countSolutions = (grid: Grid): 'none' | 'unique' | 'notUnique' => {
    if (gridIsFilled(grid)) {
        if (gridIsValid(grid)) {
            return 'unique';
        }
        return 'none';
    }
    const gridToSolve = deepCopyGrid(grid);
    let nonEmptyCells = 0;
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col].value !== undefined) {
                nonEmptyCells++;
            }
        }
    }
    const solutions: Grid[] = [];
    _countSolutions(gridToSolve, solutions, nonEmptyCells);

    if (solutions.length === 0) {
        return 'none';
    }
    if (solutions.length === 1) {
        return 'unique';
    }
    return 'notUnique';
};

const _countSolutions = (grid: Grid, solutions: Grid[], depth: number) => {
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
                if (_countSolutions(grid, solutions, depth + 1)) {
                    if (depth === 80) {
                        solutions.push(deepCopyGrid(grid));
                    }
                    // Stop counting solution when more than one was found
                    if (solutions.length >= 2) {
                        return true;
                    }
                }
                grid[row][col].value = undefined;
            }
            return false;
        }
    }

    return true;
};
