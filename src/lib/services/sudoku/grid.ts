import type { Grid } from './types';

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
