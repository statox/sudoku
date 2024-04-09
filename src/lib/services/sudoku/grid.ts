import { getAllHints, type Hint } from './hints';
import { solveGridDFS } from './solve';
import type { Grid } from './types';
import { gridHasError, gridIsFilled, gridIsValid } from './validate';

export const deepCopyGrid = (g: Grid) => JSON.parse(JSON.stringify(g));

// TODO Put in common with removePossibleValue() from wfc-generate.ts
const removeNoteValue = (grid: Grid, row: number, col: number, value: number | undefined) => {
    if (!value) {
        return false;
    }
    if (grid[row][col].value) {
        return false;
    }

    const i = grid[row][col].notes.indexOf(value);
    if (i === -1) {
        return false;
    }

    grid[row][col].notes.splice(i, 1);
    return true;
};

export const removeAllNotes = (grid: Grid) => {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            grid[row][col].notes = [];
        }
    }
};

export const recomputeNotesForCell = (grid: Grid, pos: { row: number; col: number }) => {
    const { row, col } = pos;
    if (grid[row][col].value) {
        grid[row][col].notes = [];
        return;
    }
    grid[row][col].notes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const squareCol = Math.floor(col / 3);
    const squareRow = Math.floor(row / 3);

    for (let delta = 0; delta < 9; delta++) {
        const inColValue = grid[delta][col].value;
        removeNoteValue(grid, row, col, inColValue);
        const inRowValue = grid[row][delta].value;
        removeNoteValue(grid, row, col, inRowValue);

        const drow = Math.floor(delta / 3);
        const dcol = delta % 3;
        const inSquareValue = grid[3 * squareRow + drow][3 * squareCol + dcol].value;
        removeNoteValue(grid, row, col, inSquareValue);
    }

    return grid[row][col].notes;
};

export const recomputeAllNotes = (grid: Grid) => {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            recomputeNotesForCell(grid, { row, col });
        }
    }
};

/*
 * Remove all changes made to the grid to keep only the fixed cells
 */
export const resetGridToInitialFixedState = (grid: Grid) => {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (!grid[row][col].fixed) {
                grid[row][col].value = undefined;
                grid[row][col].notes = [];
            }
        }
    }
};

export const playOneHint = (grid: Grid) => {
    if (gridIsFilled(grid) || gridHasError(grid)) {
        return { grid, hint: null };
    }

    /*
     * First fix the cells played with an incorrect value
     */
    const originalGrid = deepCopyGrid(grid);
    resetGridToInitialFixedState(originalGrid);
    const solvedGrid = solveGridDFS(originalGrid);

    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            if (grid[y][x].value !== undefined && grid[y][x].value !== solvedGrid[y][x].value) {
                grid[y][x].value = solvedGrid[y][x].value;
                return {
                    grid,
                    hint: {
                        type: 'last_auto_hint',
                        effect: [],
                        cause: [{ row: y, col: x, notes: [solvedGrid[y][x].value] }]
                    } as Hint
                };
            }
        }
    }

    /*
     * Then search for lone single of hidden single hints and play one of them
     */
    const copyGrid = deepCopyGrid(grid);
    recomputeAllNotes(copyGrid);

    const hints = getAllHints(copyGrid);
    const hintToPlay = hints.find((h) =>
        ['lone_single', 'hidden_single_col', 'hidden_single_row', 'hidden_single_square'].includes(
            h.type
        )
    );

    if (hintToPlay && hintToPlay.cause.length) {
        const cause = hintToPlay.cause.pop();
        const { row, col } = cause!;
        grid[row][col].value = solvedGrid[row][col].value;

        return {
            grid,
            hint: {
                type: 'last_auto_hint',
                effect: [],
                cause: [{ row, col, notes: [grid[row][col].value] }]
            } as Hint
        };
    }

    /*
     * If no hint was found randomly get a cell from the solved grid and play it
     */
    const notSolvedCells = [];
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            if (grid[y][x].value === undefined) {
                notSolvedCells.push({ x, y });
            }
        }
    }

    if (!notSolvedCells.length) {
        return { grid, hint: null };
    }

    const randomIndex = Math.floor(Math.random() * notSolvedCells.length);
    const pos = notSolvedCells[randomIndex];
    const value = solvedGrid[pos.y][pos.x].value;

    grid[pos.y][pos.x].value = value;
    return {
        grid,
        hint: {
            type: 'last_auto_hint',
            effect: [],
            cause: [{ row: pos.y, col: pos.x, notes: [value] }]
        } as Hint
    };
};
