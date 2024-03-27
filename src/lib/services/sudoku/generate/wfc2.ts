import type { Grid } from '../types';
import { gridHasError, gridIsFilled, gridIsValid } from '../validate';
import { deepCopyGrid, recomputeAllNotes } from '../grid';

/*
 * @params {Grid} [initialGrid] To generate a new random grid initialGrid
 *                              should be generated with getEmptyGridWithAllPossibles();
 *                              A partially filled grid can also be passed
 * @params {Grid[]} [buildHistory] An array filled with the different generation steps
 *                                 This params should become optional soon
 */
export const generateNewGridWFC2 = (initialGrid: Grid, buildHistory: Grid[]): Grid => {
    if (gridHasError(initialGrid) || gridIsFilled(initialGrid)) {
        return initialGrid;
    }

    const grid = deepCopyGrid(initialGrid);
    recomputeAllNotes(grid);
    const stack = [grid];

    while (stack.length) {
        const grid = stack.pop()!;
        buildHistory.push(deepCopyGrid(grid));

        if (gridHasError(grid)) {
            // Grid has error, backtracking
            continue;
        }

        if (gridIsFilled(grid)) {
            if (gridIsValid(grid)) {
                return grid;
            }
            // Invalid complete grid backtracking (should probably not happen
            // because of the gridHasError check done before
            continue;
        }

        const moves = getMovesToChooseFrom(grid);

        if (!moves.length) {
            // No available moves, backtracking can happen because of collapsing
            continue;
        }
        const posRandMove = Math.floor(Math.random() * moves.length);
        const move = moves[posRandMove];

        // If we need to backtrack to the current grid it means the current
        // move leads to a dead end so we remove it from the possibles in the backtracking grid
        const backtrackingGrid: Grid = deepCopyGrid(grid);
        backtrackingGrid[move.row][move.col].notes = backtrackingGrid[move.row][
            move.col
        ].notes.filter((n) => n !== move.value);
        stack.push(backtrackingGrid);

        // Making the move, collapsing as many times as needed and enqueuing the
        applyMove(grid, move);
        wfcCollapse(grid);
        stack.push(grid);
    }

    return grid;
};

const removePossibleValue = (grid: Grid, row: number, col: number, value: number) => {
    if (grid[row][col].value) {
        return false;
    }

    const i = grid[row][col].notes.indexOf(value);
    if (i === -1) {
        return false;
    }

    grid[row][col].notes.splice(i, 1);

    if (grid[row][col].notes.length === 1) {
        grid[row][col].value = grid[row][col].notes.pop();
        return true;
    }

    return false;
};

const wfcCollapse = (grid: Grid) => {
    if (gridIsFilled(grid)) {
        return;
    }
    if (gridHasError(grid)) {
        // throw new Error('Cant collapse a grid with errors');
        return;
    }

    let didChange = false;
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const { value } = grid[row][col];
            if (!value) {
                continue;
            }

            for (let delta = 0; delta < 9; delta++) {
                didChange = didChange || removePossibleValue(grid, delta, col, value);
                didChange = didChange || removePossibleValue(grid, row, delta, value);
            }

            const squareCol = Math.floor(col / 3);
            const squareRow = Math.floor(row / 3);

            for (let drow = 0; drow < 3; drow++) {
                for (let dcol = 0; dcol < 3; dcol++) {
                    didChange =
                        didChange ||
                        removePossibleValue(
                            grid,
                            3 * squareRow + drow,
                            3 * squareCol + dcol,
                            value
                        );
                }
            }
        }
    }

    if (didChange) {
        wfcCollapse(grid);
    }
};

const isValidMove = (grid: Grid, move: { row: number; col: number; value: number }) => {
    const { row, col, value } = move;
    if (grid[row][col].value) {
        return false;
    }
    if (!grid[row][col].notes.includes(value)) {
        return false;
    }
    return true;
};
const applyMove = (grid: Grid, move: { row: number; col: number; value: number }) => {
    if (!isValidMove(grid, move)) {
        return;
    }
    const { row, col, value } = move;
    grid[row][col].value = value;
    grid[row][col].notes = [];
};

// Return the cells with the lowest number of notes
// and the value playable on these cells
const getMovesToChooseFrom = (grid: Grid) => {
    let openPositions = [];
    let minNbNotes = 9;

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col].value !== undefined) {
                continue;
            }

            const { notes } = grid[row][col];
            if (notes.length < minNbNotes) {
                minNbNotes = notes.length;
                openPositions = [];
            }
            if (notes.length === minNbNotes) {
                for (const note of grid[row][col].notes) {
                    openPositions.push({ row, col, value: note });
                }
            }
        }
    }

    return openPositions;
};
