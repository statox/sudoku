import type { Grid } from './types';
import { gridIsFilled, gridIsValid } from './validate';

// const printGrid = (g: Grid) => {
//     console.log(g.map((l) => l.map((c) => c.value ?? '.').join(' ')).join('\n'));
// };

export const solveGridRec = (grid: Grid) => {
    const gridToSolve = JSON.parse(JSON.stringify(grid));
    _solveGridRec(gridToSolve);
    return gridToSolve;
};

export const countSolutions = (grid: Grid): 'none' | 'unique' | 'notUnique' => {
    if (gridIsFilled(grid)) {
        if (gridIsValid(grid)) {
            return 'unique';
        }
        return 'none';
    }
    const gridToSolve = JSON.parse(JSON.stringify(grid));
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
                        solutions.push(JSON.parse(JSON.stringify(grid)));
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

const moveIsPossible = (grid: Grid, position: { col: number; row: number }, value: number) => {
    const { col, row } = position;

    if (grid[row][col].value !== undefined) {
        return false;
    }

    const squareCol = Math.floor(col / 3);
    const squareRow = Math.floor(row / 3);

    for (let delta = 0; delta < 9; delta++) {
        if (grid[row][delta].value === value) {
            return false;
        }
        if (grid[delta][col].value === value) {
            return false;
        }
        const drow = Math.floor(delta / 3);
        const dcol = delta % 3;
        if (grid[3 * squareRow + drow][3 * squareCol + dcol].value === value) {
            return false;
        }
    }

    return true;
};
