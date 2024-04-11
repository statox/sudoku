import { deepCopyGrid } from '../grid';
import type { Grid } from '../types';
import { gridIsFilled, gridIsValid } from '../validate';
import { moveIsPossible } from './helpers';

let callGuard = 0;
const MAX_CALLS = 10000;
export const countSolutions = (grid: Grid): 'none' | 'unique' | 'notUnique' | 'unreachable' => {
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
    // Resetting callGuard is super important to avoid infinite loop in _countSolutions
    callGuard = 0;
    _countSolutions(gridToSolve, solutions, nonEmptyCells);

    if (callGuard >= MAX_CALLS) {
        return 'unreachable';
    }
    if (solutions.length === 0) {
        return 'none';
    }
    if (solutions.length === 1) {
        return 'unique';
    }
    return 'notUnique';
};

const _countSolutions = (grid: Grid, solutions: Grid[], depth: number) => {
    if (callGuard++ >= MAX_CALLS) {
        // In some context (which I need to define) we call this function in an infinite
        // or at least very very long loop.
        // The callGuard is here to prevent that
        // This should be fixable by using a proper WFC as the solve algorithm
        // instead of the DFS currently used
        //
        // Another possible approach is to try to fix some random values and see if
        // several of them give an answer, or if some of them give a 'not unique' answer
        return;
    }

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
